function setup()
{
    createCanvas(500,600);
}

var headX1 = 250;
var headY1 = 100;
var headX2 = 210;
var headY2 = 50;
var headX3 = 210;
var headY3 = 50;

var headDirection = 1;


var size = 30;
var count = 0;
var sizeDirection = 2;

function draw()
{
    background('gray');
    fill('pink');
    circle(headX1,headY1,250); // Horizontal, Vertical, Size
    headX1 += headDirection;
    if (headX1 >= 418 || headX1 <=82)
    {
        headDirection *= -1;
    }
    strokeWeight(20);
    line(250,230,410,450);
    line(230,230,150,450);
    line(230,420,230,800);
    line(270,420,270,800);
    strokeWeight(1);
    fill('blue');
    rect(215,220,70,200);
    fill('black');
    circle(headX2,headY2,20);
    headX2 -= headDirection;
    if (headX2 >= 418 || headX2 <=82)
    {
        headDirection += 1;
    }
    circle(headX3,headY3,20);
    headY3 -= headDirection;
    if (headY3 >= 300 || headY3 <=30)
    {
        headDirection += 1;
    }
    textSize(size);
    size += sizeDirection;
    count++;
    if (count >= 5)
    {
        count++;
        count = 0;
    }
    text('James Reynolds',3,580);
    text('Hi!',30,30);
}