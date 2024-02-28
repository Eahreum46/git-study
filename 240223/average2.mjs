let arr = [87, 70, 100];

let average = 0;

for (let i = 0; i < arr.length; i++) {
  average += arr[i];
}

const result = (average /= arr.length);

console.log(average);

// 변수 방식보다 배열 방식이 빠르고 간편하게 결과값 도출!
