function setup() {
  createCanvas(800, 800);
  background(230);
}

function draw() {
  stroke("blue");
  fill("red");
 

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 2, 3);
  }
}