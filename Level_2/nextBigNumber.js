/* 2020. 10. 18     Level_2 다음 큰 숫자 [연습문제]
    문제 설명
    자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.

    조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
    조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
    조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
    예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.

    자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.

    제한 사항
    n은 1,000,000 이하의 자연수 입니다.

    입출력 예)
    n -> 78
    return -> 83

    n -> 15
    return -> 23
*/

// My code
function solution(n){
    let arrayForOne1 = [];
    let N1 = n;
    while(N1 !== 1){
        arrayForOne1.unshift(N1 % 2);
        N1 = Math.floor(N1 / 2);
    }
    arrayForOne1.unshift(1);
    let count1 = arrayForOne1.filter(function(one){return one === 1;}).length;

    // 위 과정은 N1을 이진수로 변환했을때 1의 개수 == count1

    let count2;
    let countt = n + 1;
    while(count1 != count2){
        let arrayForOne2 = [];
        let N2 = countt;
        while(N2 != 1){
            arrayForOne2.unshift(N2 % 2);
            N2 = Math.floor(N2 / 2);
        }
        arrayForOne2.unshift(1);
        count2 = arrayForOne2.filter(function(one){return one === 1;}).length;
        // 위 과정은 N2를 이진수로 변환했을때 1의 개수 == count2
        if(count1 === count2){
            return countt;
            // 만약 count1 === count2 라면 n 다음으로 이진수의 1의 갯수가 같은 수는 countt
        }
        // 아니면 count++ 해서 다시 찾아보기
        countt++;
    }
}

/*  Best Code
    toString() 메소드를 사용하면 한번에 이진수를 바꿀 수 있다!!
    replace() 정규표현식을 사용하여 이진수에 있는 0을 모두 제거!
*/
function solution(n){
    let count1 = n.toString(2).replace(/0/g,'').length;
    let count2;
    for(let i = n + 1; count1 !== count2; i++){
        count2 = i.toString(2).replace(/0/g,'').length;
        if(count1 === count2){
            return i;
        }
    }
}

// for문 대신에 while 문을 쓴 코드
function solution(n){
    let count1 = n.toString(2).replace(/0/g,'').length;
    let count2;
    while(n++){
        count2 = n.toString(2).replace(/0/g,'').length;
        if(count1 === count2){
            return n;
        }
    }
}


/*
    -진수를 바꾸는 방법-
    numObj.toString([radix])
    매개변수
    radix: 수의 값을 나타내기 위해 사용되기 위한 기준을 정하는 2와 36사이의 정수. (진수를 나타내는 기수의 값.)
    매개변수를 지정하지 않으면 자동으로 10진수로 가정함

    반환 값
    Number 객체를 명시하는 문자열

    예외
    RangeError: 만약 2와 36 사잇 값이 아니면 RangeError 가 발생함
    
    -String의 특정 문자 제거 (정규표현식)-
    .replace(/text/g,'');

    text -> 제거하고 싶은 문자
    g -> 검색범위를 전역으로 확장
    i -> 대소문자를 구분하지 않음
    ex) .replace(/text/gi,'') -> text의 대소문자를 구별하지 않고 모두 지움
*/

/*  Reference
    toString(): https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
    replace(): https://cityattack.tistory.com/64
*/
