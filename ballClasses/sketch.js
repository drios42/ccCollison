var tennisBalls = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255);

    for (var i = 0; i < tennisBalls.length; i++) {
        tennisBalls[i].move();
        tennisBalls[i].bounce();
        tennisBalls[i].drawBall();

        for (var j = 0; j < tennisBalls.length; j++) {
            if (i != j) {
                tennisBalls[i].collision(tennisBalls[j]);
            }
        }

    }
}

function mousePressed() {
    tennisBalls.push(new Ball(mouseX, mouseY, random(60, 100), color(0, 255, 0), random(-9, 9), random(-9, 9)));

}

function keyPressed() {
    tennisBalls.splice(0, 1);
}


class Ball {

    constructor(x, y, rad, c, xs, ys) {
        this.x = x;
        this.y = y;
        this.dog = rad;
        this.c = c;
        this.xspeed = xs;
        this.yspeed = ys;
    }

    drawBall() {
        fill(this.c);
        ellipse(this.x, this.y, this.dog, this.dog);
    }

    move() {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    }

    bounce() {
        if (this.x >= width || this.x <= 0) {
            this.xspeed = this.xspeed * -1;
        }
        if (this.y >= height || this.y <= 0) {
            this.yspeed = this.yspeed * -1;
        }
    }

    collision(otherStuff) {

        if (dist(this.x, this.y, otherStuff.x, otherStuff.y) < this.dog/2 + otherStuff.dog/2) {
            this.xspeed = this.xspeed * -1;
        }

    }


}
