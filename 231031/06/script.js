let scores = [90, 35, 64, 88, 45, 92];
// score라는 배열안에 있는 아이템들 중 85이상값만 따로 필터링해서 별도의 변수에 담아놓고 싶다!

let hightScores = scores.filter((score) => score >= 85);
console.log(hightScores);
