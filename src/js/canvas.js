
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d');


// c.fillStyle = 'rgba(255,0,0,0.5';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0,255,0,0.5';
// c.fillRect(400, 400, 200, 100);
// c.fillStyle = 'rgba(0,0,255,0.5';
// c.fillRect(700, 500, 300, 100);

// Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = 'green';
// c.stroke();

// c.beginPath();
// c.moveTo(400, 300)
// c.lineTo(600, 300);
// c.strokeStyle = 'blue';
// c.stroke();

// Arc / Circle

// x: Int, y: Int, r: Int, startAngle: Float, endAngle: Float
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();

// for (var i = 0; i < 2400; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     var randomColor = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255}, ${Math.random()})`;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = `${randomColor}`;
//     c.stroke();
// }

// Tracks mouse movement on screen
var mouse = {
    x: undefined,
    y: undefined
}
var maxRadius = 40;
var minRadius = 2;

var color = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255}, ${Math.random()})`;

var helper = function() {
    if (canvas.width < 700) {return 100}
    else {return 200}
};




var colorArray = [
    `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 10) / 10}`,
    `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 10) / 10}`,
    `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 10) / 10}`,
    `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 10) / 10}`,
    `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 10) / 10}`

];
window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})

// Defines circles and their behavior
function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)]

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }
    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        // Interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < maxRadius) {
                this.radius += 1;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    }
}

// Holds the circles
var circleArray = [];

function init() {
    circleArray = [];
    var numOfCircles = helper();
    // Creates the circles and pushes them into circleArray
    for (let i = 0; i < numOfCircles; i++) {
        var radius = Math.random() * 3 + 1;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5);
        var dy = (Math.random() - 0.5);

        circleArray.push(new Circle(x, y, dx, dy, radius, color))
    }
}

// Activates the behavior of circles inside circleArray
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

// Executes animation defined above
init();
animate();