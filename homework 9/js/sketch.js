function setup()
{
    createCanvas(500,600);
}
function draw()
{
    background('gray');
    fill('pink');
    circle(250,100,250); // Horizontal, Vertical, Size
    strokeWeight(20);
    line(250,230,410,450);
    line(230,230,150,450);
    line(230,420,230,800);
    line(270,420,270,800);
    strokeWeight(1);
    fill('blue');
    rect(215,220,70,200);
    fill('black');
    circle(210,50,20);
    circle(320,50,20);
    textSize(30);
    text('James Reynolds',3,580);
    text('Hi!',30,30);
}