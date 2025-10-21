// Basic TypeScript demo: compile with 
type Out = { ts: string; hash: string; }
export function demo(): Out {
  const ts = new Date().toISOString();
  const hash = ts.split('').reduce((s,c)=>s + c.charCodeAt(0),0).toString(16);
  return { ts, hash };
}
if (require.main === module) {
  console.log(demo());
}
