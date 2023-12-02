
//Variables

//var w = 87;
//var s = 83;
//var a = 65;
//var d = 68;

//var ShapeX = 30;
//var ShapeY = 50;

var WSAD = [87,83,65,68];
var ShapeXY = [30,50];
var CharacterXY = [100,100];

var ShapeXSpeed;
var ShapeYSpeed;

var MouseShapeX;
var MouseShapeY;

//functions

function CreateExit()
{
    textSize(16);
    text("EXIT",width-50,height-50)
}

function CreateMap()
{
    createCanvas(500,600);
    background(120,45,120);
    stroke(0);
    fill(0);
    rect(0,0,width,10);
    rect(0,0,10,height);
    rect(0,height-10,width,10);
    rect(width-10,0,10,height-50);
    CreateExit()
}

function YouWinned()
{
    if (CharacterXY[0] > width && CharacterXY[1] > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }
}
function CreateCharacter()
{
    fill(23,40,123);
    circle(CharacterXY[0],CharacterXY[1],25);
}
function Controls()
{
    if (keyIsDown(WSAD[0]))
    {
        CharacterXY[1] -= 10;
    }
    if (keyIsDown(WSAD[1]))
    {
        CharacterXY[1] += 10;
    }
    if (keyIsDown(WSAD[2]))
    {
        CharacterXY[0] -= 10;
    }
    if (keyIsDown(WSAD[3]))
    {
        CharacterXY[0] += 10;
    }
}


function Enemy()
{
    fill(12,145,14);
    circle(ShapeXY[0],ShapeXY[1],10);
    ShapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    ShapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    ShapeXY[0] += ShapeXSpeed;
    ShapeXY[1] += ShapeYSpeed;
    if (ShapeXY[0] > width)
    {
        ShapeXY[0] = 0;
    }
    if (ShapeXY[0] < 0)
    {
        ShapeXY[0] = width;
    }
    if (ShapeXY[1] > height)
    {
        ShapeXY[1] = 0;
    }
    if (ShapeXY[1] < 0)
    {
        ShapeXY[1] = height;
    }
}

function draw()
{
    CreateMap()
    CreateCharacter()
    Controls()
    Enemy()


    YouWinned()
}