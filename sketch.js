let trunkHeight = 105;
let uniWidth = 5;
let minBranchHeight = 15;
let petalWidth;
let petalHeight

function setup(){
  frameRate(1);
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
  if (branchHeight < 15){
    for (let k =0; k < 12; k++){
      fill(214, 140, 43);
      noStroke();
      let RNDW = Math.floor(Math.random() * 10 + 5);
      let RNDH = Math.floor(Math.random() * 10 + 5);
      ellipse(branchHeight, branchWidth, RNDH, RNDW);
    }
  }
  branch(branchHeight, branchWidth, angle);
  pop();
  
  push();
  rotate(-angle);
  if (branchHeight < 15){
    for (let k =0; k < 12; k++){
      fill(214, 140, 43);
      noStroke();
      let RNDW = Math.floor(Math.random() * 10 + 5);
      let RNDH = Math.floor(Math.random() * 10 + 5);
      ellipse(branchHeight, branchWidth, RNDH, RNDW);
    }
  }
  branch(branchHeight, branchWidth, angle);
  pop();
}