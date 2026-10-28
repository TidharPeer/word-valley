let base=require('node:fs').readFileSync('verify.cjs','utf8').split('let total=0;')[0];
const gameLoad="vm.runInContext(fs.readFileSync('dist/game.js','utf8'),context);";
base=base.replace(gameLoad,"vm.runInContext(fs.readFileSync('dist/endless.js','utf8'),context);"+gameLoad);
eval(base+`
const maps=new Set(),routes=new Set();let checked=0;
function storeFor(grade,seed,round){return {'wordways-save':JSON.stringify({grade:String(grade),mode:'endless',grades:{[grade]:{campaign:{level:1,solved:[],assisted:[]},endless:{seed,round,solved:[],assisted:[]}}}})}}
function canExit(s,blocked){const q=[[1,1]],seen=new Set(['1,1']);while(q.length){const [x,y]=q.shift();if(x===9&&y===9)return true;for(const [dx,dy]of [[1,0],[-1,0],[0,1],[0,-1]]){const a=x+dx,b=y+dy,k=a+','+b;if(s.grid[b]?.[a]===1&&k!==blocked&&!seen.has(k)){seen.add(k);q.push([a,b])}}}return false}
for(const grade of [3,4,5,6]){
 const sample=boot(storeFor(grade,12345,1)),api=sample.context.WORDWAYS_ENDLESS,signatures=new Set();
 for(let round=1;round<=200;round++){
  const a=api.makeRound(grade,12345,round),again=api.makeRound(grade,12345,round);assert.equal(JSON.stringify(a),JSON.stringify(again),'seeded content must reproduce');
  assert.equal(a.level.challenges.length,4);assert.equal(new Set(a.level.challenges.map(c=>c.id)).size,4);
  assert.ok(new Set(a.level.challenges.map(c=>c.type)).size>=3);
  for(const c of a.level.challenges){assert.equal(c.options.length,4);assert.equal(new Set(c.options).size,4);assert.ok(c.answer>=0&&c.answer<4);assert.ok(c.promptHe&&c.explanationHe&&c.translationHe);assert.equal(c.optionsHe.length,4);if(c.type==='listening')assert.ok(c.speak&&c.speakTranslationHe);signatures.add(c.prompt+'|'+c.options[c.answer]);checked++}
 }
 assert.ok(signatures.size>=24,'generated content must exceed a small repeated set');
 for(let round=1;round<=32;round++){
  const b=boot(storeFor(grade,round*97,round)),s=b.context.wordways.getState();assert.equal(s.mode,'endless');assert.equal(s.round,round);assert.ok(canExit(s,null));assert.equal(new Set(s.gates.map(g=>g.x+','+g.y)).size,4);
  for(const g of s.gates)assert.equal(canExit(s,g.x+','+g.y),false,'endless gate cannot be bypassed');
  maps.add(JSON.stringify(s.grid));routes.add(JSON.stringify(b.context.wordways.pathTo(9,9)));
  const reload=boot(b.store);assert.equal(JSON.stringify(reload.context.wordways.getState().grid),JSON.stringify(s.grid));
 }
 const b=boot(storeFor(grade,4567,1000)),c=b.context,level=c.WORDWAYS_ENDLESS.makeRound(grade,4567,1000).level;
 function walk(path){for(const next of path){const now=c.wordways.getState().player;b.handlers.keydown({key:next.x>now.x?'ArrowRight':next.x<now.x?'ArrowLeft':next.y>now.y?'ArrowDown':'ArrowUp',preventDefault(){}})}}
 for(const question of level.challenges){const gate=c.wordways.getState().gates.find(g=>g.id===question.id);walk(c.wordways.pathTo(gate.x,gate.y));assert.equal(b.node('modal').hidden,false);const right=b.node('answers').children.find(x=>x.textContent.slice(3)===question.options[question.answer]);assert.ok(right);right.onclick();b.node('continue').onclick()}
 walk(c.wordways.pathTo(9,9));assert.ok(c.wordways.getState().won);b.node('continue').onclick();assert.equal(c.wordways.getState().round,1001,'round counter must continue beyond chapter count');assert.equal(c.wordways.getState().seed,4567);assert.equal(c.wordways.getState().solved.length,0);
 const reloaded=boot(b.store);assert.equal(reloaded.context.wordways.getState().round,1001);
 reloaded.node('mode').value='campaign';reloaded.node('mode').onchange();assert.equal(reloaded.context.wordways.getState().level,1,'campaign position must survive endless mode');reloaded.node('mode').value='endless';reloaded.node('mode').onchange();assert.equal(reloaded.context.wordways.getState().round,1001);
}
const consecutive=[];for(let round=1;round<=30;round++)consecutive.push(boot(storeFor(4,12345,round)).context.wordways.getState().grid.flat().join(''));
assert.equal(new Set(consecutive).size,30,'consecutive endless rounds must have distinct full maps');
for(let i=1;i<consecutive.length;i++)assert.ok([...consecutive[i]].filter((cell,j)=>cell!==consecutive[i-1][j]).length>=12,'adjacent rounds must differ across many tiles');
assert.ok(maps.size>3,'maze grids must actually vary');assert.ok(routes.size>1,'main routes must actually vary');
console.log('PASS: '+checked+' generated questions; 128 reachable unbypassable mazes; '+maps.size+' distinct layouts; persistent round1001; campaign saves preserved.');
`);
