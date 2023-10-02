let trunkHeight = 75;
let uniWidth = 5;
let minBranchHeight = 20;
let petalWidth;
let petalHeight

function setup() {
  createCanvas(800, 800);
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
  angle += Math.floor(Math.random() * 15) - 5;
  
  branchHeight = branchHeight * 0.85;
  branchWidth = branchWidth * 0.75;
  angle = angle * 1.05;
  petalWidth = branchWidth * 5;
  petalHeight = branchHeight * (1/3);

  push();
  rotate(angle);
  branch(branchHeight, branchWidth, angle);
  pop();
  
  push();
  rotate(-angle);
  for (let i = 0; i < 10; i++){
    petalRNDX = (branchHeight * 0.25) + Math.floor(Math.random() * 40 - 20);
    petalPNDY = (branchHeight * 0.25) + Math.floor(Math.random() * 40 - 20);
    ellipse(petalRNDX, petalRNDY, petalWidth, petalHeight);
  }
  branch(branchHeight, branchWidth, angle);
  pop();
}

function petals(petalX, petalY, petalHeight, petalWidth){
  let petalRNDX;
  let petalRNDY;
  for (let i = 0; i < 10; i++){
    petalRNDX = petalX + Math.floor(Math.random() * 40 - 20);
    petalPNDY = petalY + Math.floor(Math.random() * 40 - 20);
    ellipse(petalRNDX, petalRNDY, petalWidth, petalHeight);
  }
}