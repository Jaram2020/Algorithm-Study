// 2020. 10. 17 알아두면 좋은 배열을 위한 10가지 꿀팁!

// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(' ');
    console.log(result);
}
  

  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(",", /*limit*/);
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5); // slice 메소드는 원하는 부분만 return, index 2 부터 5 전까지
    console.log(result);
    console.log(array);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
      const result = students.find(function(student){
          return student.score === 90;
      })
      console.log(result);
  }
  
  // Q6. make an array of enrolled students
  {
    const result = students.filter(function(student){
      return student.enrolled === true;
    })
    console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    const result = students.map(function(student){
      return student.score;
    })
    console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    const result = students.some(function(student){
      return student.score < 50;
    })
    console.log(result);
    // some 은 return 의 값이 하나라도 만족되면 true를 반환
    // every 는 모든 값이 만족되어야 true
  }
  
  // Q9. compute students' average score
  {
    const result = students.reduce(function(prev, curr){
      return prev + curr.score;
    }, 0) // 인자의 0은 prev의 시작을 0으로 설정한 것임
    console.log(result / students.length);

    // reduce 메소드는 우리가 원하는 시작점부터 모든 배열을 돌면서 어떤 값을 누적할때 쓰는것
    // 추가적으로 reduceRight 이라는 메소드는 배열의 제일 뒤에서부터 시작
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    const result = students
    .map(function(student){
      return student.score;
    })
    .join();
    console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const result = students
    .map(function(student){
      return student.score;
    })
    .sort(function(a, b){
      return a - b;
    })
    console.log(result);
  }
