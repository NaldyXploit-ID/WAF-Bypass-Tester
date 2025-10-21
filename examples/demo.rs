use std::time::{SystemTime, UNIX_EPOCH};
fn main(){
  let start = SystemTime::now();
  let since = start.duration_since(UNIX_EPOCH).unwrap();
  println!("Project: ${REPO_NAME}");
  println!("Epoch secs: {}", since.as_secs());
  println!("Rust demo: small CLI output");
}
