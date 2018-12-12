var sq;
var feed = [];
var numFood = 10;
var wingsOut = rotate(-Math.PI / 4);


var a = [1, 2, 3];

function setup() {
    createCanvas(740, 480);
    sq = new Penguin();
    
    for(var i = 0; i < numFood; i++) {
        feed.push(new Food(random(width), random(height)));
    }
}

function draw() {
    background(0, 255, 0);
    sq.display();
    
    for(var i = 0; i < feed.length; i++) {
        feed[i].display();
    }
}

function mousePressed() {
    sq.eat();
}

function Food(x, y) {
    this.x = x;
    this.y = y;
    this.color = color(255, 0, 0);
    this.foodSize = 50;
    
    this.display = function() {
        fill(this.color);
        ellipse(this.x, this.y, this.foodSize, this.foodSize);
    }
}

// Penguin Functionality
function Penguin() {
    var x = mouseX;
    var y = mouseY;
    var diameter = 200;
    var wingsOut = false;
    
    this.getDistance = function(other) {
        var dist = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
        return dist;
    }
    
    this.flap = function() {
        wingsOut = !wingsOut;
    }
    
    // Eat Function
    this.eat = function() {
        for(var i = 0; i < feed.length; i++) {
            var food = feed[i];
            var d = this.getDistance(food);
            var r1 = food.foodSize / 2;
            var r2 = diameter / 2;
            if(r1 + r2 > d) {
                feed.splice(i, 1);
                feed.push(new Food(random(width), random (height)));
            }
        }
    };
    
    // Drawing of the Penguin
    this.display = function() {
        x = mouseX;
        y = mouseY;
        
        background('#FFFAED');
        // face
        noStroke();
        fill('#000000');
        ellipse(x, y, 200, 200);
        // body
        noStroke();
        fill('#000000');
        rect(x - 100, y, 200, 200);
        fill('#FFFFFF');
        rect(x - 90, y, 180, 200);
        // nose
        fill('#FFFF00');
        triangle(x, y, x + 30, y - 25, x - 30, y - 25);
        // pupilLeft;
        fill('#FFFFFF');
        ellipse(x + 30, y - 50, 40, 30);
        fill('#000000');
        ellipse(x + 30, y - 50, 20, 20);
        // pupilRight
        fill('#FFFFFF');
        ellipse(x - 30, y - 50, 40, 30);
        fill('#000000');
        ellipse(x - 30, y - 50, 20, 20);
        // Wings Flap Out
        if(mouseIsPressed) {
            wingsOut = true;
            // leftArm;
            fill('#000000');
            push();
            translate(x - 50, y + 80);
            rotate(Math.PI / 4);
            ellipse(0, 0, 52, 92);
            pop();
            // rightArm;
            fill('#000000');
            push();
            translate(x + 50, y + 80);
            rotate(-Math.PI / 4);
            ellipse(0, 0, 52, 92);
            pop();
        // Wings Flap In
        } else {
            // leftArm;
            fill('#000000');
            push();
            translate(x - 50, y + 80);
            rotate(-Math.PI / 4);
            ellipse(0, 0, 52, 92);
            pop();
            // rightArm;
            fill('#000000');
            push();
            translate(x + 50, y + 80);
            rotate(Math.PI / 4);
            ellipse(0, 0, 52, 92);
            pop();
        }
            // leftFoot
            fill('#FFFF00');
            push();
            translate(x - 80, y + 200);            
            rotate(Math.PI / 4);
            ellipse(0, 0, 52, 92);
            pop();
            // rightFoot
            fill('#FFFF00');
            push();
            translate(x + 80, y + 200);
            rotate(-Math.PI / 4);
            ellipse(0, 0, 52, 92);
            pop();
    };
}