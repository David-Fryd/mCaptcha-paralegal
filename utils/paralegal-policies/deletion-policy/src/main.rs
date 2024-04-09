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
        cmd.run(dir)?.with_context(deletion_policy)?;
        // cmd.run(dir)?.with_context(dummy_policy)?;
        println!("Policy successful");
    } else {
        println!("Directory not found: {}", dir);
    }
    Ok(())
}

#[allow(dead_code)]
fn deletion_policy(ctx: Arc<Context>) -> Result<()> {
    let user_data_types = ctx.marked_type(Marker::new_intern("user_data"));

    let found = ctx.all_controllers().any(|(deleter_id, _ignored)| {
        let delete_sinks = ctx
            .all_nodes_for_ctrl(deleter_id)
            .filter(|n| ctx.has_marker(Marker::new_intern("deletes"), *n))
            .collect::<Vec<_>>();
        user_data_types.iter().all(|&t| {
            let sources = ctx.srcs_with_type(deleter_id, t).collect::<Vec<_>>();
            ctx.any_flows(&sources, &delete_sinks, EdgeSelection::Data)
                .is_some()
        })
    });
    assert_error!(ctx, found, "Could not find a controller deleting all types");
    Ok(())
}
