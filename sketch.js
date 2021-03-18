var r = 25;
var x = 320;
var y = 180;
var xspeed = 5;
var yspeed = 2;

function setup() {
  createCanvas(640, 360);
}

function myFunction() {
  ax = document.getElementById("mynumberX").value;
  document.getElementById("demo").innerHTML = ax;
   ay = document.getElementById("mynumberY").value;
  document.getElementById("demo1").innerHTML = ay;
   axspeed = document.getElementById("mynumberXspeed").value;
  document.getElementById("demo2").innerHTML = axspeed;
   ayspeed = document.getElementById("mynumberYspeed").value;
  document.getElementById("demo3").innerHTML = ayspeed;
   x = parseFloat(ax);
   y = parseFloat(ay);
   console.log("x = ",ax);
   console.log("y = ",ay);
   aspeed = parseFloat(xspeed);
   sspeed = parseFloat(yspeed);
   console.log("aspeed = ",aspeed);
   console.log("sspeed = ",sspeed);
   console.log("xspeed = ",xspeed);
   console.log("yspeed = ",yspeed);
}
function draw() {
  background(0);
  ellipse(x, y, r*2, r*2);
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }
  console.log("xspeed = ",xspeed);
  console.log("yspeed = ",yspeed);
  console.log("x = ",x);
  console.log("y = ",y);
}
