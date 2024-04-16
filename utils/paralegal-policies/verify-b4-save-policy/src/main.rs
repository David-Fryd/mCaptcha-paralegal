use anyhow::{Result, Ok};
use paralegal_policy::{
    assert_error, paralegal_spdg::traverse::EdgeSelection, Context, Marker, Diagnostics, NodeExt,
};
use std::sync::Arc;

#[allow(dead_code)]
fn dummy_policy(_ctx: Arc<Context>) -> Result<()> {
    println!("Graph loaded.");
    Ok(())
}

fn main() -> Result<()> {
    let dir = "../../../../mCaptcha-paralegal";
    if std::path::Path::new(dir).exists() {
        let mut cmd = paralegal_policy::SPDGGenCommand::global();
        cmd.external_annotations("external-annotations.toml")
            .abort_after_analysis()
            .get_command()
            .args(["--target", "mcaptcha", "--", "--features", "buggy"]);
        cmd.run(dir)?
            .with_context(verify_opt_in_before_save_policy)?;
        println!("Buggy policy finished: should have failed");

        let mut cmd = paralegal_policy::SPDGGenCommand::global();
        cmd.external_annotations("external-annotations.toml")
            .abort_after_analysis()
            .get_command()
            .args(["--target", "mcaptcha"]);
        cmd.run(dir)?
            .with_context(verify_opt_in_before_save_policy)?;
        // cmd.run(dir)?.with_context(dummy_policy)?;
        println!("Non-buggy policy finished: should have passed");
    } else {
        println!("Directory not founadsd: {}", dir);
    }
    Ok(())
}

fn verify_opt_in_before_save_policy(ctx: Arc<Context>) -> Result<()> {
    ctx.all_controllers().all(|(c_id, _)| {
        let mut save_stats_to_db_nodes = ctx.all_nodes_for_ctrl(c_id).filter(|n| n.has_marker(&ctx, Marker::new_intern("save_stats_to_db")));
        let mut verify_opt_in_nodes = ctx.all_nodes_for_ctrl(c_id).filter(|n| n.has_marker(&ctx, Marker::new_intern("verify_opt_in")));
        let mut sources = ctx.all_nodes_for_ctrl(c_id).filter(|n| n.has_marker(&ctx, Marker::new_intern("site_key")));

        sources.all(|site_key|  {
            ctx.node_help(site_key, "this is a site key");
            save_stats_to_db_nodes.all(|sink|  {
                ctx.node_help(sink, "this is a sink");
                if ctx.influencers(sink, EdgeSelection::Both).any(|n| n == site_key) {
                    let verified = verify_opt_in_nodes.any(|verify_node| {
                        ctx.node_help(verify_node, "This is a verification");
                        ctx.influencers(verify_node, EdgeSelection::Data).any(|n| n == site_key)
                            && ctx.has_ctrl_influence(verify_node, sink)
                    });
                    if !verified {
                        let mut msg = ctx.struct_error("Save operation to DB for site_key must be preceded by its verification through verify_opt_in");
                        msg.with_node_note(site_key, "This is the site key");
                        msg.with_node_note(sink, "which gets saved here");
                        msg.emit();
                    }
                    verified
                } else {
                    true
                }
            })
        })
    });

    Ok(())
}
