function setup() {
    createCanvas(640, 480);
}

function draw() {
    background('#FFFAED');
    var x = mouseX;
    var y = mouseY;
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
}