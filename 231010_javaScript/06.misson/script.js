let Fahrenheit = parseFloat(prompt("변환할 화씨온도를 알려주세요"));

let Celsius = ((Fahrenheit - 32) / 1.8).toFixed(1);

alert(`화씨 ${Fahrenheit}도는 섭씨 ${Celsius}도 입니다!`);
