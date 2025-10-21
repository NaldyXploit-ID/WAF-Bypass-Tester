/* Demo JS — minimal, dependency-free */
(function(){
  const btn = document.getElementById('run'), out = document.getElementById('out');
  function demo(){
    const ts = new Date().toISOString();
    const b64 = btoa(unescape(encodeURIComponent("demo:"+ts)));
    out.textContent = `ts: ${ts}\nb64: ${b64}\n`;
  }
  if(btn) btn.addEventListener('click', demo);
})();
