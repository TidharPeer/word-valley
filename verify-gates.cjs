const source=require('node:fs').readFileSync('verify.cjs','utf8').split('let total=0;')[0];
eval(source+`
for(const grade of [3,4,5,6])for(const level of [0,1,2]){
 const b=boot({'wordways-save':JSON.stringify({grade:String(grade),level,solved:[]})});
 const s=b.context.wordways.getState();
 function reachable(blocked){
  const q=[[1,1]],seen=new Set(['1,1']);
  while(q.length){const [x,y]=q.shift();if(x===9&&y===9)return true;
   for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){
    const a=x+dx,z=y+dy,k=a+','+z;
    if(s.grid[z]?.[a]===1&&k!==blocked&&!seen.has(k)){seen.add(k);q.push([a,z])}
   }
  }return false;
 }
 assert.ok(reachable(null),'chapter exit must be reachable');
 for(const gate of s.gates)assert.equal(reachable(gate.x+','+gate.y),false,'a learning gate can be bypassed');
}
console.log('PASS: every exit is reachable and no learning gate can be bypassed in any grade/world.');
`);
