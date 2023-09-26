let trunkHeight = 75;
let uniWidth = 5;
let minBranchHeight = 20;

function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);
  background(220);
  stroke(0);
  translate(width / 2, height);
  branch(trunkHeight, uniWidth, 20);
}

function branch(branchHeight, branchWidth, angle){
  if (branchHeight < minBranchHeight){
    return;
  }

  strokeWeight(branchWidth);
  line(0, 0, 0, - branchHeight);
  translate(0, -branchHeight);
  angle += Math.floor(Math.random() * 10);
  
  branchHeight = branchHeight * 0.9;
  branchWidth = branchWidth * 0.9;

  push();
  rotate(angle);
  branch(branchHeight, branchWidth, angle);
  pop();
  
  push();
  rotate(-angle);
  branch(branchHeight, branchWidth, angle);
  pop();
}