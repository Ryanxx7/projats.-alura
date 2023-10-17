function setup() {
    createCanvas(1000, 800);
     background("black");
  }
  
  function draw() {
    
    stroke("red")
    fill("black")
    
    // console. log(mouseIsPressed);
    
   if (mouseIsPressed) {
    rect(mouseX, mouseY, 15, 10)
   }
  }