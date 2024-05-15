var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

var mouse = {
  x: undefined,
  y: undefined,
};

var maxradius = 30;
var minradius = 2;

var colorarray = [
  // '#ffaa33',
  // '#99ffaa',
  // '#00ff00',
  // '#4411aa',
  '#ffffff',
  // '#ff1100',
  "#028fba",
  "#043F88",
  "#1885a6",
  "blue",
  // 'red',
  // 'purple',
  // 'white',
];

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});


class Circle {
  constructor(x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.minradius = radius;
    // this.maxradius = radius;
    this.color = colorarray[Math.floor(Math.random() * colorarray.length)];

    this.draw = function () {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, 270, false);
      c.fillStyle = this.color;
      c.fill();
    };
    this.update = function () {
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
        this.dx = -this.dx;
      } else if (
        this.y + this.radius > innerHeight ||
        this.y - this.radius < 0
      ) {
        this.dy = -this.dy;
      }
      this.x += this.dx;
      this.y += this.dy;


      if (
        mouse.x - this.x < 50 &&
        mouse.x - this.x > -50 &&
        mouse.y - this.y < 50 &&
        mouse.y - this.y > -50
      ) {
        if (this.radius < maxradius) {
          this.radius += 1.5;
        }
      } else if (this.radius > this.minradius) {
        this.radius -= 1;
      }
      this.draw();
    };
  }
}

var circlearray = [];

for (var i = 0; i < 200; i++) {
  var x = Math.random() * innerWidth;
  var y = Math.random() * innerHeight;
  var dx = Math.random();
  var dy = Math.random();
  var radius = Math.random() * 6 + 1;
  circlearray.push(new Circle(x,y,radius,dx,dy));
}


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circlearray.length; i++) {
    circlearray[i].update();
  }
}

animate();

setTimeout(() => {
  window.addEventListener("resize", function () {
    canvas.width = this.innerWidth;
    canvas.height = this.innerHeight;
  });
}, 100);
