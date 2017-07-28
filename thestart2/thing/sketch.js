function setup(){
  createCanvas(windowWidth-4, windowHeight-4, WEBGL);
}

function draw(){
  background(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(200, 200, 200);
  
  rotateX(frameCount * -0.02);
  rotateY(frameCount * -0.02);
  box(200, 200, 200);
  
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(2000, 300);
  
  rotateX(frameCount * -0.02);
  rotateY(frameCount * -0.02);
  torus(2000, 300);
}