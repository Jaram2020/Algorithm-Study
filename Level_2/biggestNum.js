/* 2020. 10. 12     Level_2 가장 큰 수 [정렬]
    문제 설명
    0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

    예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고,
    이중 가장 큰 수는 6210입니다.

    0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때,
    순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

    제한 사항
    numbers의 길이는 1 이상 100,000 이하입니다.
    numbers의 원소는 0 이상 1,000 이하입니다.
    정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.

    입출력 예)
    numbers -> [6, 10, 2]
    return -> "6210"

    numbers -> [3, 30, 34, 5, 9]
    return -> "9534330"
*/

/* My first code
    순서
    sort 메소드를 이용
    sort 메소드 안에 인자를 str 로 바꾸고 (아스키코드값으로 비교하기 위해), str로 AB, BA로 만든다
     
    <비교>
    일반코드: [3, 30, 35, 5, 9].sort() -> [9, 5, 35, 30, 3]
    나의코드: [3, 30, 35, 5, 9].sort() -> [9, 5, 35, 3, 30]

    join 메소드를 활용하여 배열을 Str로 바꾼다음 answer 변수에 넣기

    만약 answer == 0 (숫자로 구성되어 있는 string 과 number 을 '==' 로 비교 가능, '==='는 안됨)
    return 0;
*/
function solution(numbers){
    numbers.sort(function(a, b){
        let A = String(a);
        let B = String(b);
        let AB = A + B;
        let BA = B + A;

        if(Number(AB) < Number(BA)){
            return 1;
        }
        else if(Number(AB) > Number(BA)){
            return -1;
        }
    });
    answer = numbers.join('');

    if(answer == 0){
        return '0';
    }
    else{
        return numbers.join('');
    }
}


/* Best Code
    1. map 메소드를 이용하여 number 의 각 요소들을 numberToString
    2. sort 메소드의 return 의 각 요소들에 *1을 해주면서 type 을 Number 로 바꿔준다
    ※ 숫자로 구성되어 있는 String 에 Number 타입을 곱해주면 String 이 Number로 변한다
    ex) '1'*1 === 1 // true (신기하네;;)
    3. 정렬된 배열을 join 메소드를 활용하여 String으로 변환
    4. '0000' 일 경우를 대비하여 조건문사용
*/
function solution(numbers){
    let mappedNumbers = numbers.map(function(a){
        return a + '';
    })

    let answer = mappedNumbers.sort(function(a, b){
        return (b + a) * 1 - (a + b) * 1;
    })
    .join('');

    if(answer[0] == '0'){
        return '0';
    }
    else{
        return answer;
    }
}
