
//Variables
var CharacterX = 100;
var CharacterY = 100;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var ShapeX = 30;
var ShapeY = 50;
var ShapeXSpeed;
var ShapeYSpeed;

var MouseShapeX;
var MouseShapeY;

//functions
function setup()
{
    createCanvas(500,600);
    ShapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    ShapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

}

function draw()
{
    background(120,45,120);
    stroke(0);
    fill(0);
    rect(0,0,width,10);
    rect(0,0,10,height);
    rect(0,height-10,width,10);
    rect(width-10,0,10,height-50);

    textSize(16);
    text("EXIT",width-50,height-50)

    fill(23,40,123);
    circle(CharacterX,CharacterY,25);

    if (keyIsDown(w))
    {
        CharacterY -= 10;
    }
    if (keyIsDown(s))
    {
        CharacterY += 10;
    }
    if (keyIsDown(a))
    {
        CharacterX -= 10;
    }
    if (keyIsDown(d))
    {
        CharacterX += 10;
    }
    fill(12,145,14);
    circle(ShapeX,ShapeY,10);
    ShapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    ShapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    
    ShapeX += ShapeXSpeed;
    ShapeY += ShapeYSpeed;

    if (ShapeX > width)
    {
        ShapeX = 0;
    }
    if (ShapeX < 0)
    {
        ShapeX = width;
    }
    if (ShapeY > height)
    {
        ShapeY = 0;
    }
    if (ShapeY < 0)
    {
        ShapeY = height;
    }

    if (CharacterX > width && CharacterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }

    fill(120,120,140);
    circle(MouseShapeX,MouseShapeY,25);

    function MouseClicked()
    {
        MouseShapeX = mouseX;
        MouseShapeY = mouseY;
    }
}