const fs=require('node:fs');
let source=fs.readFileSync('verify.cjs','utf8').split('let total=0;')[0];
source=source.replace("getContext(){return {setTransform(){}}}","getContext(){return new Proxy({createRadialGradient(){return {addColorStop(){}}},createLinearGradient(){return {addColorStop(){}}}},{get(t,k){return t[k]||function(...args){for(const arg of args)if(typeof arg==='number'&&!Number.isFinite(arg))throw Error('Nonfinite drawing coordinate '+k)}}})}");
eval(source+`
for(const grade of [3,4,5,6])for(const level of [0,1,2]){
 const b=boot({'wordways-save':JSON.stringify({grade:String(grade),level,solved:[]})});
 b.context.render(16);b.context.render(160);
}
console.log('PASS: all 12 grade/world combinations render without runtime errors or nonfinite coordinates.');
`);
