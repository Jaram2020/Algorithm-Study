/* 2020. 10. 10     Programmers Level_1 체육복 [탐욕법]

    문제 설명
    점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다.
    다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다.
    학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
    예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다.
    체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.
    전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

    제한사항
    전체 학생의 수는 2명 이상 30명 이하입니다.
    체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
    여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
    여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
    여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다.
    이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.

    입출력 예)
    n -> 5
    lost -> [2, 4]
    reserve -> [1, 3, 5]
    return -> 5
    
    n -> 5
    lost -> [2, 4]
    reserve -> [3]
    return -> 4
    
    n -> 3
    lost -> [3]
    reserve -> [1]
    return -> 2
*/


/* My first code 풀이 순서
    체육복을 도난당했지만, 여벌의 체육복이 있는 학생들을 제거해주기 위해, filter 메소드를 사용하여 lost 와 reserve 의 교집합을 제거해준다.
    for문을 사용하여 reserve의 값 -1 or reserve의 값 +1 이 filteredLost에 있다면, filteredLost에서 찾아서 제거해준다
    이렇게하면 filteredLost에는 체육복을 빌리지 못한 학생의 번호만 남게된다
    체육복을 입은 전체 학생 수 = n(전체학생수) - filteredLost.length(체육복을 빌리지 못한 학생 수)
*/
function solution(n, lost, reserve){
    let filteredLost = lost.filter(function(x){return !reserve.includes(x)});
    let filteredReserve = reserve.filter(function(x){return !lost.includes(x)});

    for(let i = 0; i < filteredReserve.length; i++){
        if(filteredLost.indexOf(filteredReserve[i] - 1) !== -1){
            filteredLost.splice(filteredLost.indexOf(filteredReserve[i] - 1), 1)
        }
        else if(filteredLost.indexOf(filteredReserve[i] + 1) !== -1){
            filteredLost.splice(filteredLost.indexOf(filteredReserve[i] + 1), 1)
        }
    }
    console.log(filteredLost);
    return n - filteredLost.length;
}

console.log(solution(30, [1, 6, 14, 30], [2, 4, 15]));


// second code
function solution(n, lost, reserve) {      
    return n - lost.filter(a => {
        const b = reserve.find(r => Math.abs(r-a) <= 1)
        if(!b) return true
        reserve = reserve.filter(r => r !== b)
    }).length
}



/* Reference
    filter 메소드를 통해 두 배열의 교집합, 차집합, 배타적논리합을 구하는 방법
    https://88240.tistory.com/519

    filter 더 자세한 설명
    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    https://aljjabaegi.tistory.com/312
    https://www.youtube.com/watch?v=ZjH2yrA64TI
*/
