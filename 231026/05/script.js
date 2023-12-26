class pet {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  run() {
    alert(`${this.name}is running!`);
  }
}

class Cat extends pet {
  constructor(name, color, breed) {
    super(name, color);
    this.breed = breed;
  }

  viewInfo() {
    alert(`이름 ${this.name},색상 ${this.color}, 품종 ${this.breed}`);
  }
}

const cheez = new pet("치즈", "노란색");
cheez.run();

const bori = new Cat("야옹이", "흰색", "코숏");
bori.viewInfo();
