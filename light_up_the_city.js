//set up variables
var img1;
  var img2;
  var img3;
  var img4;
  var pg;

//load images (embed city background files)
  function preload() {

  img1 = loadImage("paris.jpg");
  img2 = loadImage("dubai.jpg");
  img3 = loadImage("prague.jpg");
  img4 = loadImage("hongkong.jpg")
    }


//create web-size canvas
  function setup() {
  createCanvas(windowWidth, windowHeight);
    
//use createGraphics() to make p5.Renderer, and overlay it on top of background image to draw on
  pg = createGraphics(windowWidth, windowHeight);
    
//show app instructions text
    textSize(32);
text('Click the screen and press any number from 1 to 4 to start. Then click anywhere to paint city lights !', 30,50);
    text('There are 4 different backgrounds.',30,100);
}

  
//draw on pg layer. One mouse click creates 3 ellipses w/ random color/shape/opacity.
function mousePressed(){

blendMode(BLEND);

    pg.noStroke();

  pg.fill(random(255),random(255),random(255),random(20,200));
    
  pg.ellipse(random(mouseX-50,mouseX+50), random(mouseY-50,mouseY+50), random(20,40));
  
  pg.fill(random(255),random(255),random(255),random(10,80));

  pg.ellipse(random(mouseX-50,mouseX+50), random(mouseY-80,mouseY+80), random(10,60));
  
  pg.fill(random(255),random(255),random(255),random(10,200));

  pg.ellipse(random(mouseX-50,mouseX+50), random(mouseY-70,mouseY+70), random(5,10));
  
 
}


//switch city background by pressing any number between 1-4
function draw(){
  
  if (key == 1) {
    
 image(img1,0,0,windowWidth,windowHeight);
    image (pg, 0,0);
    image (pg, 0, windowHeight);
  }
  else if (key == 2){
     image(img2,0,0,windowWidth,windowHeight);
      image (pg, 0,0);
    image (pg, 0, windowHeight);
  }
  else if (key == 3){
     image(img3,0,0,windowWidth,windowHeight);
      image (pg, 0,0);
    image (pg, 0, windowHeight);
  }
  else if (key == 4){
     image(img4,0,0,windowWidth,windowHeight);
      image (pg, 0,0);
    image (pg, 0, windowHeight);
  }
}
