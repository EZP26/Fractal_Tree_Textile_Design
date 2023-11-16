let trunkHeight = 105;
let uniWidth = 10;
let minBranchHeight = 20;
let petalWidth;
let petalHeight

function setup(){
  frameRate(1);
  createCanvas(800, 800);
  angleMode(DEGREES);
  background(220);
  stroke(92, 40, 6);
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
  if (branchHeight < 30){
    for (let k =0; k < 5; k++){
      let RNDR = Math.floor(Math.random() * 50 + 180);
      let RNDG = Math.floor(Math.random() * 40 + 100);
      fill(RNDR, RNDG, 40);
      noStroke();
      let RNDW = Math.floor(Math.random() * 10 + 5);
      let RNDH = Math.floor(Math.random() * 5 + 5);
      ellipse(branchHeight, branchWidth / 2, RNDH, RNDW);
    }
  }
  branch(branchHeight, branchWidth, angle);
  pop();
  
  push();
  rotate(-angle);
  if (branchHeight < 30){
    for (let k = 0; k < 5; k++){
      let RNDR = Math.floor(Math.random() * 50 + 180);
      let RNDG = Math.floor(Math.random() * 40 + 100);
      fill(RNDR, RNDG, 40);
      noStroke();
      let RNDW = Math.floor(Math.random() * 10 + 5);
      let RNDH = Math.floor(Math.random() * 5);
      ellipse(branchHeight, branchWidth / 2, RNDH, RNDW);
    }
  }
  branch(branchHeight, branchWidth, angle);
  pop();
}