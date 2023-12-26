let theDate = new Date(nowYear, 8, 22);
let diffDate = today.theDate() + 100;

let result = Math.ceil(diffDate / (60 * 60 * 24 * 1000));
document.write(`개강일 기준 100일째가 되는 날은 ${result}일 입니다.`);
