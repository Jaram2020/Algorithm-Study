/* 2020. 10. 11     Level_2 최댓값과 최솟값 [연습문제]
문제 설명
문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 (최소값) (최대값)형태의 문자열을 반환하는 함수, solution을 완성하세요.
예를들어 s가 1 2 3 4라면 1 4를 리턴하고, -1 -2 -3 -4라면 -4 -1을 리턴하면 됩니다.

제한 조건
s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.

입출력 예)
s -> "1 2 3 4"
return -> "1 4"

s -> "-1 -2 -3 -4"
return -> "-4 -1"

s -> "-1 -1"
return -> "-1 -1"
*/

/* My code
    1. s 를 배열로 만든다.
    2. sort를 이용하여 오름차순 정렬
    3. filter 를 이용하여 ss의 index가 첫번째와 마지막인 것으로 필터링
    4. join을 이용하여 String으로 바꾸기
*/
function solution(s){
    var ss = s.split(' ');
    ss.sort((a, b) => a - b);

    let answer = ss.filter(function(value, index){return index === 0 || index === ss.length - 1});
    
    return answer.join(' ');
}