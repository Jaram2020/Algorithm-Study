function solution(n){
    let two = [];
    let three = [];
    let N = n;
    while(N !== 1){
        two.unshift(N % 2);
        N = Math.floor(N / 2);
    }
    two.unshift(1);
    let count = two.filter(function(one){
        return one === 1;
    })
    .length;

    // countsms n을 이진수로 변환했을때 1의 개수

    while(true){
        let i = n;
        while(i !== 1){
            three.unshift(i % 2);
            i = Math.floor(i / 2);
        }
        three.unshift(1);
        let count2 = three.filter(function(one){
            return one === 1;
        })
        .length;

        if(count === count2){
            return i;
        }
        else{
            three = [];
            count2 = 0;
        }

        i = n++;
    }
}

