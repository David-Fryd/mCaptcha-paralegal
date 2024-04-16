use anyhow::Result;
use paralegal_policy::{
    assert_error, paralegal_spdg::traverse::EdgeSelection, Context, Marker,
};
use std::sync::Arc;

#[allow(dead_code)]
fn dummy_policy(_ctx: Arc<Context>) -> Result<()> {
    println!("Graph loaded.");
    Ok(())
}

fn main() -> Result<()> {
    let dir = "../../../../mCaptcha-paralegal/";
    if std::path::Path::new(dir).exists() {
        let mut cmd = paralegal_policy::SPDGGenCommand::global(); //.abort_after_analysis();
        cmd.external_annotations("external-annotations.toml")
            .get_command()
            .args(["--target", "mcaptcha"]);
        cmd.run(dir)?
            .with_context(verify_opt_in_before_save_policy)?;
        // cmd.run(dir)?.with_context(dummy_policy)?;
        println!("Policy successful");
    } else {
        println!("Directory not founadsd: {}", dir);
    }
    Ok(())
}

fn verify_opt_in_before_save_policy(ctx: Arc<Context>) -> Result<()> {
    // let ctx = &self.cx;
    let site_keys = ctx
        .marked_nodes(Marker::new_intern("site_key"))
        .collect::<Vec<_>>();
    let save_stats_to_db_nodes = ctx
        .marked_nodes(Marker::new_intern("save_stats_to_db"))
        .collect::<Vec<_>>();
    let verify_opt_in_nodes = ctx
        .marked_nodes(Marker::new_intern("verify_opt_in"))
        .collect::<Vec<_>>();

    for save_node in save_stats_to_db_nodes {
        for &site_key in &site_keys {
            // Check if the site_key has a data flow to this save_stats_to_db_node
            if ctx.flows_to(site_key, save_node, EdgeSelection::Data) {
                // If there is a key that flows to this node,
                //    check if there's a verify_opt_in node that both:
                // 1. Has a data flow from the same site_key, AND
                // 2. Has a control flow influence over the save_stats_to_db_node.
                let verified_before_save =
                    verify_opt_in_nodes.iter().any(|&verify_node| {
                        ctx.flows_to(site_key, verify_node, EdgeSelection::Data)
                            && ctx.has_ctrl_influence(verify_node, save_node)
                    });

                assert_error!(
                    ctx,
                    verified_before_save,
                    format!("Save operation to DB for site_key must be preceded by its verification through verify_opt_in.")
                );
            }
        }
    }

    Ok(())
}
