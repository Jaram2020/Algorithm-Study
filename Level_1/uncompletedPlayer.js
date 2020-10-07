/*
    문제
    완주하지 못한 선수 Level_1 [Hash]

    문제 설명
    수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

    마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

    제한사항
    마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
    completion의 길이는 participant의 길이보다 1 작습니다.
    참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
    참가자 중에는 동명이인이 있을 수 있습니다.

    입출력 예)
    participant -> ["leo", "kiki", "eden"]
    completion -> [eden, kiki]
    return -> leo

    participant -> ["marina", "josipa", "nikola", "vinko", "filipa"]
    completion -> ["josipa", "filipa", "marina", "nikola"]
    return -> "vinko"

    participant -> ["mislav", "stanko", "mislav", "ana"]
    completion -> ["stanko", "ana", "mislav"]
    return -> "mislav"

*/

// My code
function solution(participant, completion){

    for(var i = 0; i < completion.length; i++){
        participant.splice(participant.indexOf(completion[i]), 1)
    }
    
    return participant[0];
    
} // 답은 맞는데 효율성이 안좋음.

function solution(participant, completion){
    participant.sort();
    completion.sort();

    for(var i = 0; i < participant.length; i++){
        if(participant[i] !== completion[i]){
            return participant[i];
        }
    }
    
    return participant[participant.length - 1];
        
}
/*
    이렇게 만들면 for문 안에서 복잡한 메소드가 실행되지 않아 효율성이 좋아진다.
    https://velog.io/@noyo0123/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-javascript-%EC%99%84%EC%A3%BC%ED%95%98%EC%A7%80-%EB%AA%BB%ED%95%9C-%EC%84%A0%EC%88%98-otk2fxojro
    블로그 글을 참고해서 map, hash table 에 대해 자세히 알아봐야겠다.
*/
