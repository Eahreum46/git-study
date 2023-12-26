// const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 10) {
//     document.write(`${arr[i]} <br/>`);
//   }
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 5 == 0 && i % 7 != 0) {
//     document.write(`<p class='red'>${i}</p>`);
//   } else if (i % 7 == 0 && i % 5 != 0) {
//     document.write(`<p class='green'>${i}</p>`);
//   } else if (i % 7 == 0 && i % 5 == 0) {
//     document.write(`<p class='blue'>${i}</p>`);
//   }
// }

// for (let i = 1; i <= 3; i++) {
//   for (let k = 1; k <= 2; k++) {
//     document.write(`${i}행 ${k}열 <br/>`);
//   }
//   document.write("<br/>");
// }

// for (let i = 1; i <= 5; i++) {
//   document.write(`<h2>[${i}단]</h2>`);
//   for (let k = 1; k <= 9; k++) {
//     document.write(`${i} x ${k}= ${i * k}<br/>`);
//   }
//   document.write(`<br/>`);
// }

let num = 1;
let t = `<table border=1>`;
for (let i = 1; i <= 5; i++) {
  t += `<tr>`;
  for (let k = 1; k <= 5; k++) {
    t += `<td>${num}</td>`;
    num++;
  }
  t += `</tr>`;
}
t += `</table>`;

document.write(t);
