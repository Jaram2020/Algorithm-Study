/*
    2020. 10. 08    Level_1 [월간 코드 챌린지 시즌 1]
    문제
    두 개 뽑아서 더하기

    문제 설명
    정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

    제한사항
    numbers의 길이는 2 이상 100 이하입니다.
    numbers의 모든 수는 0 이상 100 이하입니다.

    입출력 예)
    numbers -> [2,1,3,4,1]
    result -> [2,3,4,5,6,7]
    
    numbers -> [5,0,2,7]
    result -> [2,5,7,9,12]

*/

/*  My fisrt code
    순서
    1. numbers 의 서로 다른 인덱스 두개의 합을 모조리 구해서 result 배열에 넣는다.
    2. sort 오름차순 정렬
    3. 옆에 있는 index 값을 비교해서 중복을 제거한다.
    4. return
*/
function solution(numbers){
    var result = [];
    for(var j = 0; j < numbers.length; j++){
        for(var k = j + 1; numbers[k] != undefined; k++){
            result.push(numbers[j] + numbers[k])
        }
    }

    result.sort(function(a, b){return a - b});
    
    for(var i = 0; i < result.length; i++){
        while(result[i] === result[i + 1]){
            result.splice(i, 1);
        }
    }
    
    return result;
    
}
// 나의 코드는 (3.79ms, 31.9MB) 로서 효율성이 낮다.


/*  improved code
    순서
    1. numbers 의 서로 다른 인덱스 두개의 합을 모조리 구해서 temp 배열에 넣는다.
    2. Set 메소드를 사용해서 중복값 제거
    3. sort 오름차순 정렬
    4. return
*/
function solution(numbers){
    const array = [];
    for(var i = 0; i < numbers.length; i++){
        for(var j = i + 1; j < numbers.length; j++){
            array.push(numbers[i] + numbers[j]);
        }
    }
    
    const answer = [...new Set(array)];
    answer.sort(function(a, b){return a - b})
    return answer;
}

/*  Reference
    https://ko.javascript.info/map-set -> map 과 set 설명
    https://gist.github.com/LeoHeo/7c2a2a6dbcf80becaaa1e61e90091e5d -> var, let, const 차이점 설명
*/
