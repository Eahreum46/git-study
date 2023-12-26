setInterval(() => {
  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const degH = h * (360 / 12) + m * (360 / 12 / 60);
  const degM = m * (360 / 60);
  const degS = s * (360 / 60);

  const elementH = document.querySelector(".lineHour");
  const elementM = document.querySelector(".lineMin");
  const elementS = document.querySelector(".lineSec");

  elementH.computedStyleMap.transform = `rotate(${degH}deg)`;
  elementM.computedStyleMap.transform = `rotate(${degM}deg)`;
  elementS.computedStyleMap.transform = `rotate(${degS}deg)`;
}, 1000);
