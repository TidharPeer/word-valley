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
eval(source.replace('width:700,height:640','width:390,height:500')+`
for(const round of [1,4,7,8,9]){
 const b=boot({'wordways-save':JSON.stringify({grade:'4',mode:'endless',grades:{'4':{endless:{round,seed:12345,solved:[]}}}})}),s=b.context.wordways.getState();
 b.context.render(160);
 for(let y=0;y<s.mazeSize;y++)for(let x=0;x<s.mazeSize;x++)if(s.grid[y][x]){
  const p=b.context.project(x,y);assert.ok(p.x>=15&&p.x<=375,'mobile maze tile is horizontally visible');assert.ok(p.y>=100&&p.y<=415,'mobile maze tile is vertically visible');
 }
 const book=b.context.project(s.exitTile.x,s.exitTile.y);assert.ok(book.x>=15&&book.x<=375&&book.y>=100&&book.y<=415,'book is visible on its reachable tile');
}
console.log('PASS: 11, 13 and 15 tile maps, including the finish book, fit a 390×500 mobile game view.');
`);
