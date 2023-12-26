let students = ["kim", "lee", "park"];
localStorage.setItem("students", JSON.stringify(students));

let localData;
if (localStorage.getItem("students") === null) {
  localData = [];
} else {
  localData = JSON.parse(localStorage.getItem("students"));
}

localData.push("Choi");
console.log(`추가 후 students: ${localData}`);
localStorage.setItem("students", JSON.stringify(localData));

const indexOfValue = localData.indexOf("lee");
localData.splice(indexOfValue, 1);
console.log(`삭제 후 student : ${localData}`);
localStorage.setItem("stdents", JSON.stringify(localData));

localStorage.removeItem("students");
