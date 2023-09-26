let trunkHeight = 50;
let uniWidth = 5;
let minBranchHeight = 15;

function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);
  background(220);
  stroke(0);
  translate(width / 2, height);
  branch(trunkHeight, uniWidth, 10);
}

function draw() {
}

function branch(branchHeight, branchWidth, angle){
  if (branchHeight < minBranchHeight){
    return;
  }
  strokeWeight(branchWidth);
  line(0, 0, 0, - branchHeight);
  translate(0, -branchHeight);
  angle += Math.floor(Math.random() * 30);
  
  rotate(angle);
  branchHeight = branchHeight * 0.9;
  branch(branchHeight, uniWidth, angle);
}