const source=require('node:fs').readFileSync('verify.cjs','utf8').split('let total=0;')[0];
eval(source+`
const first=boot();const ids=first.context.LESSONS[0].challenges.map(c=>c.id);
const b=boot({'wordways-save':JSON.stringify({grade:'3',level:0,solved:ids})});
for(const next of b.context.wordways.pathTo(9,9)){
 const now=b.context.wordways.getState().player;
 b.handlers.keydown({key:next.x>now.x?'ArrowRight':next.x<now.x?'ArrowLeft':next.y>now.y?'ArrowDown':'ArrowUp',preventDefault(){}});
}
assert.ok(b.context.wordways.getState().won);
assert.equal(b.node('close').hidden,true);
b.handlers.keydown({key:'Escape',preventDefault(){}});
assert.equal(b.node('modal').hidden,false,'Escape must not strand a completed chapter');
b.node('continue').onclick();
assert.equal(b.context.wordways.getState().level,1);
assert.equal(b.node('modal').hidden,true);
console.log('PASS: completion cannot be dismissed into a dead end; next chapter remains reachable.');
`);
