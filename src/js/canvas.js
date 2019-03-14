// Store HTML elements as variables
var canvas = document.querySelector('canvas');
var container = document.getElementById('container')

// Set canvas to fit the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d');

// Tracks mouse movement on screen
var mouse = {
    x: undefined,
    y: undefined
}
container.addEventListener('mousemove', function (event) {
    mouse.x = event.pageX;
    mouse.y = event.pageY;
})

// Set max expand radius for circles
var maxRadius = 40;
var minRadius = 2;


// Control number of circles depending on canvas width
var reponsiveHelper = function() {
    if (canvas.width < 700) {return 30}
    else {return 60}
};



// Randomize and set different colors for circles
var color = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255}, ${Math.random()})`;
var colorArray = [
    `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 10) / 10}`,
    `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 10) / 10}`,
    `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 10) / 10}`,
    `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 10) / 10}`,
    `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 10) / 10}`

];

// Call init() on screen resizing
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

        // Moving behavior
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
    var numOfCircles = reponsiveHelper();
    // Creates the circles and pushes them into circleArray
    for (let i = 0; i < numOfCircles; i++) {
        var radius = 2;
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