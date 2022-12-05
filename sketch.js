var song;

function preload(){
  song = loadSound("lofi.wav");
}

function setup() {
  angleMode(DEGREES)
  createCanvas(700, 550, WEBGL);
  // song.play();
}

function draw() {
  
  background(0); 
    rotateX(-mouseX);
    rotateY(frameCount * 1.5);
    let ellipseRed = map(mouseX, 0, width, 0, 255);
    fill(ellipseRed, 200, 150);
    torus(50,35);
    
    if (mouseIsPressed){
      if (song.isPlaying() == false){
        song.loop();
      }
      else{
        song.stop();
      }
    }
   
}