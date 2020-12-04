/* 2020. 12. 04     Level_2 큰 수 만들기 [탐욕법(Greedy)]
    문제 설명
    문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다.
    str에 나타나는 숫자 중 최소값과 최대값을 찾아,
    이를 (최소값) (최대값)형태의 문자열을 반환하는 함수, solution을 완성하세요.
    예를들어 s가 1 2 3 4라면 1 4를 리턴하고, -1 -2 -3 -4라면 -4 -1을 리턴하면 됩니다.

    제한 조건
    s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.

    입출력 예)
    number -> "1924"
    k -> 2
    return -> "94"

    number -> "1231234"
    k -> 3
    return -> "3234"

    number -> "4177252841"
    k -> 4
    return -> "775841"

*/

function solution(number, k) {
    let stack = [];
    for (let i = 0; i < number.length; i++) {
        let now = number[i];

        while (k > 0 && stack[stack.length - 1] < now) {
            stack.pop();
            k--;
        }
        stack.push(now);
    }

    stack.splice(stack.length - k, k);
    let answer = stack.join('');
    
    return answer;
}
