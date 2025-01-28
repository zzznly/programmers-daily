function solution(dartResult) {
  let score=0,arr=[]
  for(let i=0;i<dartResult.length;i++){
      if(!isNaN(dartResult[i]))
        score= Number(dartResult[i-1])===1?10:Number(dartResult[i])
      else if(dartResult[i]=='S') arr.push(score)
      else if(dartResult[i]=='D') arr.push(score**2)
      else if(dartResult[i]=='T') arr.push(score**3)
      else if(dartResult[i]=='*'){
        arr[arr.length-2]*=2
        arr[arr.length-1]*=2
       }
      else if(dartResult[i]=='#'){
        arr[arr.length-1]*=-1
       }
  }
 return arr.reduce((a,b)=>a+b,0)
}