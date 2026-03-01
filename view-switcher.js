(function(){
var dock=document.createElement('div');
dock.id='vs-dock';
dock.innerHTML='<a class="vs-tab" href="index.html" data-vs="index"><svg viewBox="0 0 24 24"><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg><span>Classic</span></a>'
+'<a class="vs-tab" href="concept-terminal.html" data-vs="terminal"><svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 14H4V8h16v10zm-8-2h6v-2h-6v2zM7.5 17l1.41-1.41L6.33 13l2.58-2.59L7.5 9l-4 4 4 4z"/></svg><span>Terminal</span></a>'
+'<a class="vs-tab" href="concept-neural.html" data-vs="neural"><svg viewBox="0 0 24 24"><path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73v1.52a5 5 0 013.54 1.46l1.07-.62A2 2 0 0120 6a2 2 0 010 4 2 2 0 01-1.73-1l-1.07.62A5 5 0 0117 12a5 5 0 01-.76 2.62l1.07.62A2 2 0 0120 14a2 2 0 010 4 2 2 0 01-2.39-3.22l-1.07-.62A5 5 0 0113 15.74v1.52A2 2 0 0114 19a2 2 0 11-4 0c0-.74.4-1.39 1-1.73v-1.52a5 5 0 01-3.54-1.46l-1.07.62A2 2 0 014 18a2 2 0 010-4c.74 0 1.39.4 1.73 1l1.07-.62A5 5 0 017 12c0-.93.26-1.8.76-2.62l-1.07-.62A2 2 0 014 10a2 2 0 010-4 2 2 0 012.39 3.22l1.07.62A5 5 0 0111 8.26V6.73A2 2 0 0110 5a2 2 0 012-3z"/></svg><span>Neural</span></a>'
+'<a class="vs-tab" href="concept-dashboard.html" data-vs="dashboard"><svg viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg><span>Dashboard</span></a>'
+'<a class="vs-tab" href="games.html" data-vs="games"><svg viewBox="0 0 24 24"><path d="M21 6H3a2 2 0 00-2 2v8a2 2 0 002 2h18a2 2 0 002-2V8a2 2 0 00-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm4-3a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/></svg><span>Games</span></a>';
document.body.appendChild(dock);

var p=location.pathname.split('/').pop()||'index.html';
var fileMap={
'index.html':'index',
'concept-terminal.html':'terminal',
'concept-neural.html':'neural',
'concept-dashboard.html':'dashboard',
'games.html':'games',
'game-codebreaker.html':'games',
'game-pipeline.html':'games',
'game-stack.html':'games',
'game-typing.html':'games',
'blog-alfred.html':'index',
'blog-openclaw.html':'index',
'blog-clawdbot.html':'index',
'blog-rag.html':'index',
'blog-mcp.html':'index',
'blog-multiagent.html':'index',
'blog-localllms.html':'index',
'blog-llmcouncil.html':'index',
'blog-supplychain.html':'index'
};
var cur=fileMap[p]||'index';
document.querySelectorAll('.vs-tab').forEach(function(a){
if(a.dataset.vs===cur)a.classList.add('vs-active');
a.addEventListener('click',function(e){
if(a.classList.contains('vs-active')){e.preventDefault();return}
e.preventDefault();
document.body.style.transition='opacity .3s';document.body.style.opacity='0';
setTimeout(function(){window.location.href=a.href},300);
});
});
})();
