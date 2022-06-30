//pick your plant
//Welcome screen
//choose your plant screen
//final plant screen

//var to keep track of different screen functions
var phase = 0;
//uploading font for game and setting up p5js drawing
var myFont;
function setup() {
  createCanvas(760, 760);
  myFont=loadFont("TitanOne-Regular.ttf");
}

//CREATE WELCOME SCREEN
function welcomeScreen(){
  //Display Welcome to: 
  textFont(myFont);
  textSize(20);
  fill(157, 196, 153);
  textAlign(CENTER,CENTER);
  text("WELCOME TO:", width/2, 270);    
  //Display Name of Game
  textFont(myFont);
  textSize(65);
  textAlign(CENTER,CENTER);
  text("Pick Your Plant!", width/2, 320); 
  //Display "click to move on!"
  textFont(myFont);
  textSize(15);
  textAlign(CENTER,CENTER);
  text("click to move on", width/2, 410);  
  //use mouse pressed function to change to other screen
}

//when the mouse is pressed, it will change to a different screen by using phase
function mousePressed (){
  if (phase==0 || phase==1){
    phase++;
  }
  
  
  //use mousepressed-- potsX, potsWidth, mouseX mouseY
  // check if user clicked on first pot
  // this is the code that makes the plants clickable. when they are clicked they are saved to a variable that will be used in the finalPlantScreen.
  else if (phase == 2){
    if (clickedOnce == true){
      phase++;
      clickedOnce=false;
    }else{
      clickedOnce = true;
    }

    if (potsOrPlants=="pots"){
      if(mouseX > potsX && mouseX < (potsX+potsWidth)){
        if(mouseY>potsY && mouseY<potsY+potsHeight){
          chosenPot = pots[0];
        }
      } else if (mouseX > potsX+250 && mouseX < potsX+250+potsWidth){
        if (mouseY>potsY && mouseY<potsY+potsHeight){
          chosenPot = pots[1];
        }
      } else{
        chosenPot = pots[2];
      }  
        
    }
    
    //using the same tecnique for plants
    if (potsOrPlants == "plants"){
      if (mouseX > plantsX && mouseX < (plantsX+plantsWidth)){
        if(mouseY>plantsY && mouseY<(plantsY+plantsHeight)){
          chosenPlant = plants[0];
        }
      } 
      else if (mouseX > (plantsX+distanceBetweenPlants) && mouseX < (plantsX+distanceBetweenPlants+plantsWidth)){
        if(mouseY>plantsY && mouseY<(plantsY+plantsHeight)){
          chosenPlant = plants[1];
        }
      }
      else if (mouseX>(plantsX+distanceBetweenPlants*2) && mouseX < (plantsX+(distanceBetweenPlants*2)+plantsWidth)){
        if (mouseY>plantsY && mouseY<(plantsY+plantsHeight)){
          chosenPlant = plants[2];
         }     
      } 
      else{
        chosenPlant = plants[3];
      }
      potsOrPlants = "pots";
    }
  }
}
  
//CREATE DESCRIPTION SCREEN
function descriptionScreen(){
  //setting up font , size, and placement for description
  textFont(myFont);
  textSize(30);
  textAlign(CENTER,CENTER);
  // different texts for description
  text("Hello!", width/2, height/2-120);
  text("In this game you will be able to create your", width/2, height/2-70);
  text("own virtual plant! Click on any of the options", width/2, height/2-35);
  text("that are shown in the next screen and click", width/2, height/2);
  text("the 'next' button to move on. At the end, ", width/2, height/2+35);
  text("you will be able to see your new plant!", width/2, height/2+70);
  // changing size for "click to move on"
  textSize(15);
  text("click to move on", width/2, 510);
}

//CREATE PICKYOURPLANTSCREEN
//different global variables
var plants;
var pots;
var pot1;
var pot2;
var pot3;
var plantCactus;
var plantSucculent;
var plantBigLeaf;
var plantBasic;
var potsWidth= 200;
var potsHeight= 200;
var potsY= 375;
var potsX;
var chosenPot;
var plantsWidth= 150;
var plantsHeight= 150;
var plantsY= 125;
var plantsX=5;
var chosenPlant;
var distanceBetweenPlants= 200;
var clickedOnce = false;
var potsOrPlants = "plants";

function preload(){
  //add image to a variable then puts that variable in an array- one array for plant options and one for pot options
  pot1 = loadImage("blue pot.png");
  pot2 = loadImage("orange pot.png");
  pot3 = loadImage("yellow pot.png");
  plantCactus = loadImage("cactus.png");
  plantSucculent = loadImage("succulent.png");
  plantBigLeaf = loadImage("big leaves.png");
  plantBasic = loadImage("generic.png");
  pots = [pot1,pot2,pot3];
  plants = [plantCactus , plantSucculent , plantBigLeaf , plantBasic];
}

  //ACTUAL FUNCTION
function pickYourPlantScreen(){
  // using display name of game function for this function
  displayNameOfGame("choose!");
  
  //display different plants in a row
  trackingPlantsX = plantsX;
  for (var f= 0;  f<= plants.length-1; f++){
    image(plants[f], trackingPlantsX,plantsY,plantsWidth,plantsHeight);
     trackingPlantsX += distanceBetweenPlants;
  }
  //display each of the pots in a row
  potsX= 30;
  trackingPotsX = potsX;
  for (var i= 0; i <= pots.length-1;i++){
    image(pots[i], trackingPotsX,potsY,potsWidth,potsHeight);
    trackingPotsX += 250;
  }
}

//CREATE FINAL PLANT SCREEN
function finalPlantScreen(){
  displayNameOfGame("FINAL PLANT!");
  image(chosenPlant,280,185,200,200);
  image(chosenPot,280,370,200,200);
}


 // function to display name of game at the top of the screen
function displayNameOfGame(addOn){
  textSize(30);
  textAlign(CENTER,CENTER);
  text("Pick Your Plant: " + addOn ,width/2,20); 
}
//using different functions-- what is actually showing up*****
function draw() {
  background(199, 237, 255);
  //background(187, 223, 240);
  if (phase == 0){
    welcomeScreen();
  } else if(phase==1){
    descriptionScreen();
  }else if(phase==2){
    pickYourPlantScreen()
  }else{
    finalPlantScreen()
  }
}










































// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);
// }