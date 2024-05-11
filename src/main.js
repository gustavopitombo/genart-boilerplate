let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let width = 0;
let height = 0;
let radius = 0;
let color = "";

function setup() {
  radius = R.random_int(30, 100);
  color = R.random_choice(["blue", "red", "green"]);
}

function draw() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  width = canvas.width;
  height = canvas.height;

  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#222";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(width / 2, height / 2, radius, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}

window.addEventListener("resize", () => {
  draw();
}, false);

window.addEventListener("updateUrl", () => {
  setup();
  draw();
});

setup();
draw();
