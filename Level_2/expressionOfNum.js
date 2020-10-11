/* 2020. 10. 11     Programmers Level_2 숫자의 표현 [연습문제]
    문제 설명
    수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다.
    예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.

    1 + 2 + 3 + 4 + 5 = 15
    4 + 5 + 6 = 15
    7 + 8 = 15
    15 = 15
    자연수 n이 매개변수로 주어질 때,
    연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.

    제한사항
    n은 10,000 이하의 자연수 입니다.

    입출력 예)
    n -> 15
    result -> 4
*/

/* My first code
    1. 연속된 자연수의 첫번째 출발값을 i로 넣은 for문
    2. 매번 시작마다 sum 을 0으로 초기화
    3. j 를 i 로 시작하여 첫번째 출발값부터 1씩 증가된 수를 sum에 넣는다.
    4. 만약 sum === n 이면 count에 1씩 증가!
*/
function solution(n){
    let count = 0;
    for(let i = 1; i <= n; i++){
        let sum = 0;
        for(let j = i; sum < n; j++){
            sum+= j;
            if(sum === n){
                count++;
            }
        }
    }
    
    return count;
}

// Best code
function expressions(num) {
    var answer = 0;

  for(var i=1; i<=num; i++) {
    if (num%i == 0 && i%2 == 1)
      answer++
  }
    return answer;
}
