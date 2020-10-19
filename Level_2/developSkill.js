function solution(progresses, speeds){
  let days = [];
  let count = 0;
  let answer = [];
  for(let i = 0; i < progresses.length; i++){
    let sum = 0;
    while(true){
      sum+= speeds[i];
      count++;
      if(progresses[i] + sum >= 100){
        days.push(count);
        count = 0;
        break;
      }
    }
  }
  console.log(days);
  let x = 1;
  let count2= 1;
  while(true){
    if(days[0] >= days[x]){
      count2++;
      x++;
    }
    else if(days[x] === undefined){
      answer.push(count2);
      break;
    }
    else{
      answer.push(count2);
      days = days.slice(count2);
      count2 = 1;
      x = 1;
    }
  }
  return answer;
}
