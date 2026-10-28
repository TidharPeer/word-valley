const source=require('node:fs').readFileSync('verify.cjs','utf8').split('let total=0;')[0];
eval(source+`
const b=boot();
b.node('grade').value='4';b.node('grade').onchange();
const first=b.context.LESSON_GRADES[4][0].challenges[0];
let data=JSON.parse(b.store['wordways-save']);
data.grades['4'].campaign.solved=[first.id];
b.store['wordways-save']=JSON.stringify(data);
const restored=boot(b.store);
assert.ok(restored.context.wordways.getState().solved.includes(first.id));
restored.node('grade').value='6';restored.node('grade').onchange();
assert.equal(restored.context.wordways.getState().solved.length,0);
restored.node('grade').value='4';restored.node('grade').onchange();
assert.ok(restored.context.wordways.getState().solved.includes(first.id));
console.log('PASS: grade progress survives reload and switches; grades retain independent progress.');
`);
