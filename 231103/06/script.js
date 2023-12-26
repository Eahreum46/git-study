fetch("student.json")
  .then((response) => response.json())
  .then((json) => {
    let output;
    json.forEach((student) => {
      output += `
      <h2>${student.name}</h2>
      <ul>
      <li>${student.major}</li>
      <li>${student.grade}</li>
      </ul>
      <hr/>
      `;
    });
    document.querySelector("#result").innerHTML = output;
  });
  .catch((err) => console.log(err));
