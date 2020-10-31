/* 2020. 10. 31     Level_2 영어 끝말잇기
    문제 설명
    1부터 n까지 번호가 붙어있는 n명의 사람이 영어 끝말잇기를 하고 있습니다.
    영어 끝말잇기는 다음과 같은 규칙으로 진행됩니다.

    1번부터 번호 순서대로 한 사람씩 차례대로 단어를 말합니다.
    마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작합니다.
    앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 합니다.
    이전에 등장했던 단어는 사용할 수 없습니다.
    한 글자인 단어는 인정되지 않습니다.
    다음은 3명이 끝말잇기를 하는 상황을 나타냅니다.

    tank → kick → know → wheel → land → dream → mother → robot → tank

    위 끝말잇기는 다음과 같이 진행됩니다.

    1번 사람이 자신의 첫 번째 차례에 tank를 말합니다.
    2번 사람이 자신의 첫 번째 차례에 kick을 말합니다.
    3번 사람이 자신의 첫 번째 차례에 know를 말합니다.
    1번 사람이 자신의 두 번째 차례에 wheel을 말합니다.
    (계속 진행)
    끝말잇기를 계속 진행해 나가다 보면,
    3번 사람이 자신의 세 번째 차례에 말한 tank 라는 단어는 이전에 등장했던 단어이므로 탈락하게 됩니다.

    사람의 수 n과 사람들이 순서대로 말한 단어 words 가 매개변수로 주어질 때,
    가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇 번째 차례에 탈락하는지를 구해서 return 하도록 solution 함수를 완성해주세요.

    제한 사항
    끝말잇기에 참여하는 사람의 수 n은 2 이상 10 이하의 자연수입니다.
    words는 끝말잇기에 사용한 단어들이 순서대로 들어있는 배열이며, 길이는 n 이상 100 이하입니다.
    단어의 길이는 2 이상 50 이하입니다.
    모든 단어는 알파벳 소문자로만 이루어져 있습니다.
    끝말잇기에 사용되는 단어의 뜻(의미)은 신경 쓰지 않으셔도 됩니다.
    정답은 [ 번호, 차례 ] 형태로 return 해주세요.
    만약 주어진 단어들로 탈락자가 생기지 않는다면, [0, 0]을 return 해주세요.
*/

// My fisrt code
function solution(n, words){
    let count = 1;
    let j = 0;
    let num;
    let turn;
    for(let i = 1; i < words.length; i++){
        count++; // count는 확인 단어 위치 (참고로 2번째 단어부터 확인시작)
        if(words[i - 1][words[i - 1].length - 1] === words[i][0]){ // 뒷 단어의 끝부분과 현재단어의 첫부분이 같다면
            while(true){ // 현재단어가 이전에 나왔는지 중복검사
                if(words[j]===words[i]){ // 만약 현재단어가 이전에 나왔다면
                    if(count%n === 0){
                        num = n;
                        turn = Math.floor(count/n);
                        return [num, turn];
                    }
                    else{
                        num = count%n;
                        turn = Math.floor(count/n) + 1;
                        return [num, turn];
                    }
                }
                j++;
                if(j === i){ // 현재단어가 이전에 안나왔다면
                    j = 0; // j 를 0으로 초기화 시켜주고 while문 종료
                    break;
                }
            }
        }
        else{ // 뒷 단어의 끝부분과 현재단어의 첫부분이 다르다면
            if(count%n === 0){
                num = n;
                turn = count/n;
                return [num, turn];
            }
            else{
                num = count%n;
                turn = Math.floor(count/n + 1);
                return [num, turn];
            }
        }
    }
    return [0, 0]; // 아무 이상이 없으면 [0 ,0]으로 종료
}



// My second code
function solution(n, words){
    let failedWords = -1;

    for(let i = 1; i < words.length; i++){
        // 전단계의 끝말 != 현단계의 끝말
        if(words[i - 1][words[i - 1].length - 1] !== words[i][0]){
            failedWords = i;
            break;
        }
        // indexOf 함수는 첫번째로 값이 맞는 인덱스만 반환하므로
        // 현재 인덱스와 맞지 않을 경우 중복된 값
        if(words.indexOf(words[i]) !== i){
            failedWords = i;
            break;
        }
    }

    if(failedWords == -1){
        return [0, 0];
    }
    // 만약 9번째 단어가 오류일 경우 failedWord = 8 인 상태이다.
    let num = (failedWords % n) + 1;
    let turn = Math.floor(failedWords / n) + 1;
    return [num, turn];
}



// More concisely
function solution(n, words){
    let failedWords = -1;

    for(let i = 1; i < words.length; i++){
        if(words[i - 1][words[i - 1].length - 1] !== words[i][0] || words.indexOf(words[i]) !== i){
            failedWords = i;
            let num = (failedWords % n) + 1;
            let turn = Math.floor(failedWords / n) + 1;
            return [num, turn];
        }
    }

    return [0, 0];
}
