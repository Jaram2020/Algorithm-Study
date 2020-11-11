/* 2020. 11. 11     Level_2 올바른 괄호 [연습문제]
    문제 설명
    괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

    ()() 또는 (())() 는 올바른 괄호입니다.
    )()( 또는 (()( 는 올바르지 않은 괄호입니다.
    '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

    제한사항
    문자열 s의 길이 : 100,000 이하의 자연수
    문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

    입출력 예)
    s -> '()()'
    return -> true

    s -> '(())()'
    return -> true

    s -> ')()('
    return -> false
*/

/* My first code
    순서
    1. s[0] 이 ')' 거나 s의 마지막 값이 '(' 면 false 바로 리턴
    2. temp라는 빈 배열을 만든 후 for문을 돌려 괄호가 쌍으로 이루어졌는지 비교
    3. 만약 temp가 빈 배열이면 쌍으로 이루어졌으니 true 리턴
    4. 0 이상이라면 쌍이 아니라는 의미므로 false 리턴
*/

// My code
function solution(s) {
    const temp = [];
    if(s[0] === ')' || s[s.length-1] === '(') {
        return false;
    }

    for(let i = 0; i < s.length; i++) {
        if(s[i] === '('){
            temp.push('(');
        } else {
            if(temp[temp.length - 1] === '('){
                temp.pop();
            } else {
                temp.push(s[i]);
            }
            
        }
    }

    if(temp.length === 0){
        return true;
    } else {
        return false;
    }
}
