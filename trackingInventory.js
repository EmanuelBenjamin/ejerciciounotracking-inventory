// Global variables
let inventory = ["water", "knife", "shield", "hat"]; // Initial inventory with some items
let sceneNum = 1; // Scene number, starting at scene 1
let coins = 10; // Initial number of coins, starting with 10

// Flags to track if each scene has been completed
let flagScene2 = false;
let flagScene3 = false;
let flagScene4 = false;
let flagScene5 = false;
let flagScene6 = false;
let flagScene7 = false;
let flagScene8 = false;
let flagScene9 = false;
let flagScene10 = false;

// Array to store images for the scenes
let sceneImages = [];
let gameFont; // Variable to store the custom font

// Preload function to load all images and fonts before the program executes
function preload() {
  // Load images for each scene
  sceneImages[1] = loadImage('images/scene1.png');
  sceneImages[2] = loadImage('images/scene2.png');
  sceneImages[3] = loadImage('images/scene3.png');
  sceneImages[4] = loadImage('images/scene4.png');
  sceneImages[5] = loadImage('images/scene5.png');
  sceneImages[6] = loadImage('images/scene6.png');
  sceneImages[7] = loadImage('images/scene7.png');
  sceneImages[8] = loadImage('images/scene8.png');
  sceneImages[9] = loadImage('images/scene9.png');
  sceneImages[10] = loadImage('images/scene10.png');
  sceneImages[11] = loadImage('images/scene11.png');

  // Load custom font
  gameFont = loadFont('PressStart2P-Regular.ttf');
}

// Initial canvas setup
function setup() {
  createCanvas(800, 600); // Create an 800x600 pixel canvas
  textFont(gameFont); // Apply the custom font
  textSize(20); // Set text size
  fill(255); // Set text color to white
  textAlign(CENTER, CENTER); // Center the text both horizontally and vertically
  textWrap(WORD); // Enable word wrapping for text
}

// Function to change scenes when the mouse is clicked
function mousePressed() {
  sceneNum++; // Move to the next scene number
  if (sceneNum > 11) sceneNum = 1; // Restart the story if scene number exceeds 11
}

// Function to draw the current scene based on sceneNum
function draw() {
  background(242, 48, 101); // Set background color for all scenes

  // Display the image corresponding to the current scene if it exists
  if (sceneNum >= 1 && sceneNum <= 11) {
    image(sceneImages[sceneNum], 0, 0, width, height);
  }

  // Display the number of coins at the top-left corner
  drawCoins();

  // Display the inventory at the top-right corner
  drawInventory();

  // Call the function for the current scene
  switch (sceneNum) {
    case 1:
      scene1();
      break;
    case 2:
      scene2();
      break;
    case 3:
      scene3();
      break;
    case 4:
      scene4();
      break;
    case 5:
      scene5();
      break;
    case 6:
      scene6();
      break;
    case 7:
      scene7();
      break;
    case 8:
      scene8();
      break;
    case 9:
      scene9();
      break;
    case 10:
      scene10();
      break;
    case 11:
      scene11();
      break;
  }
}

// Function to display the number of coins at the top-left corner
function drawCoins() {
  textAlign(LEFT, TOP); // Align text to the left and top
  textSize(25); // Increase text size for better visibility
  fill(255, 223, 0); // Set text color to gold
  text("Coins: " + coins, 20, 20); // Display the number of coins
}

// Function to display the inventory at the top-right corner
function drawInventory() {
  textAlign(RIGHT, TOP); // Align text to the right and top
  textSize(17); // Set text size
  fill(0, 255, 255); // Set text color to aqua
  let startX = width - 20; // Position x at the top-right with a 20-pixel margin
  let startY = 20; // Initial y position
  text("Inventory:", startX, startY); // Display the inventory title

  // Display each item in the inventory on a new line
  for (let i = 0; i < inventory.length; i++) {
    text(inventory[i], startX, startY + (i + 1) * 20);
  }
}

// Function to draw centered and styled text for each scene
function drawTextCentered(textContent, yPosition) {
  let textWidthLimit = width - 40; // Set a margin for text (20 pixels on each side)
  text(textContent, 20, yPosition, textWidthLimit); // Draw the text with a width limit
  textAlign(CENTER, CENTER); // Ensure text is correctly centered for other parts
}

// Scene functions with their respective descriptions
function scene1() {
  drawTextCentered("Scene 1: A monster apocalypse has begun! As a hero, you must save the kingdom.", 450);
}

function scene2() {
  drawTextCentered("Scene 2: You meet a kind granny who gives you a map and 5 coins.", 450);

  if (!flagScene2) {
    if (!inventory.includes("map")) {
      inventory.push("map");
      coins += 5; // Add 5 coins to the player's total
    }
    flagScene2 = true; // Mark this scene as completed
  }
}

function scene3() {
  drawTextCentered("Scene 3: You encounter a terrible monster. You win, but your shield breaks.", 450);

  if (!flagScene3) {
    let shieldIndex = inventory.indexOf("shield");
    if (shieldIndex !== -1) {
      inventory.splice(shieldIndex, 1); // Remove the shield from the inventory
    }
    flagScene3 = true; // Mark this scene as completed
  }
}

function scene4() {
  drawTextCentered("Scene 4: You find an abandoned restaurant and gather food supplies.", 450);

  if (!flagScene4) {
    inventory.splice(1, 0, "hot dog", "pizza pocket"); // Add food items to the inventory
    flagScene4 = true; // Mark this scene as completed
  }
}

function scene5() {
  drawTextCentered("Scene 5: You meet some hungry children and decide to taunt them with your food.", 450);

  if (!flagScene5) {
    flagScene5 = true; // Mark this scene as completed
  }

  drawTextCentered("Look at these things we have and you don't: " + inventory.slice(0, 3).join(', ') + " ... muahahaha!", 500);
}

function scene6() {
  drawTextCentered("Scene 6: You decide to upgrade your hat to a magical hat.", 450);

  if (!flagScene6) {
    let hatIndex = inventory.indexOf("hat");
    if (hatIndex !== -1) {
      inventory.splice(hatIndex, 1, "magical hat"); // Replace the normal hat with a magical hat
    }
    flagScene6 = true; // Mark this scene as completed
  }
}

function scene7() {
  drawTextCentered("Scene 7: You meet a blacksmith who offers to sell you a magical sword for 5 coins.", 450);

  if (!flagScene7) {
    if (coins >= 5) {
      coins -= 5; // Deduct 5 coins
      inventory.push("magical sword"); // Add the magical sword to the inventory
    }
    flagScene7 = true; // Mark this scene as completed
  }
}

function scene8() {
  drawTextCentered("Scene 8: You fall asleep and when you wake up, you notice some new footprints.", 450);

  if (!flagScene8) {
    let waterIndex = inventory.indexOf("water");
    if (waterIndex !== -1) {
      inventory.splice(waterIndex, 1); // Remove water from the inventory
    }
    flagScene8 = true; // Mark this scene as completed
  }
}

function scene9() {
  drawTextCentered("Scene 9: You find a mysterious box. Should you open it?", 450);

  if (!flagScene9) {
    if (!inventory.includes("mysterious Box")) {
      inventory.push("mysterious Box"); // Add a mysterious box to the inventory
    }
    flagScene9 = true; // Mark this scene as completed
  }
}

function scene10() {
  drawTextCentered("Scene 10: You discover the Queen Monster and face her in an epic battle. You save the world but your weapons are destroyed.", 450);

  if (!flagScene10) {
    let swordIndex = inventory.indexOf("magical sword");
    if (swordIndex !== -1) {
      inventory.splice(swordIndex, 1); // Remove the magical sword from the inventory
    }
    flagScene10 = true; // Mark this scene as completed
  }
}

function scene11() {
  drawTextCentered("Scene 11: The End. You have successfully saved the kingdom.", 450);
}
