const fs=require('node:fs');
let source=fs.readFileSync('verify.cjs','utf8').split('let total=0;')[0];
source=source.replace("getContext(){return {setTransform(){}}}","getContext(){return new Proxy({createRadialGradient(){return {addColorStop(){}}},createLinearGradient(){return {addColorStop(){}}}},{get(t,k){return t[k]||function(...args){for(const arg of args)if(typeof arg==='number'&&!Number.isFinite(arg))throw Error('Nonfinite drawing coordinate '+k)}}})}");
source=source.replace("vm.runInContext(fs.readFileSync('dist/game.js','utf8'),context);","vm.runInContext(fs.readFileSync('dist/endless.js','utf8'),context);vm.runInContext(fs.readFileSync('dist/story.js','utf8'),context);vm.runInContext(fs.readFileSync('dist/game.js','utf8'),context);");
eval(source+`
for(const grade of [3,4,5,6])for(const level of [0,1,2]){
 const b=boot({'wordways-save':JSON.stringify({grade:String(grade),level,solved:[]})});
 b.context.render(16);b.context.render(160);
}
for(let round=1;round<=12;round++){
 const b=boot({'wordways-save':JSON.stringify({grade:'4',mode:'endless',grades:{'4':{endless:{round,seed:12345,solved:[]}}}})});
 b.context.render(16);b.context.render(160);
}
console.log('PASS: all 12 grade/world combinations and 12 generated endless maps render without runtime errors or nonfinite coordinates.');
`);
