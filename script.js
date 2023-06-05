// Get the necessary elements from the DOM
const appContainer = document.getElementById("app");
const startBtn = document.getElementById("startBtn");

// Function to handle the start button click
function handleStart() {
  // Change the text and button choices
  appContainer.innerHTML = `
    <p>Find a menu item or button which looks related to what you want to do.</p>
    <button id="foundBtn">Okay, I found one</button>
    <button id="notFoundBtn">I can't find one</button>
  `;

  // Add event listeners to the new buttons
  const foundBtn = document.getElementById("foundBtn");
  foundBtn.addEventListener("click", handleFound);

  const notFoundBtn = document.getElementById("notFoundBtn");
  notFoundBtn.addEventListener("click", handleNotFound);
}

// Function to handle the "Okay, I found one" button click
function handleFound() {
  // Change the text and button choices
  appContainer.innerHTML = `
    <p>Click the menu item or button. Did it work?</p>
    <button id="yesBtn">Yes</button>
    <button id="noBtn">No</button>
  `;

  // Add event listeners to the new buttons
  const yesBtn = document.getElementById("yesBtn");
  yesBtn.addEventListener("click", handleYes);

  const noBtn = document.getElementById("noBtn");
  noBtn.addEventListener("click", handleNo);
}

function handleNotFound() {
  // Change the text and button choices
  appContainer.innerHTML = `
      <p>Pick one at random.</p>
      <button id="pickBtn">Okay</button>
      <button id="triedAllBtn">I've tried them all</button>
    `;

  // Add event listeners to the new buttons
  const pickBtn = document.getElementById("pickBtn");
  pickBtn.addEventListener("click", handlePick);

  const triedAllBtn = document.getElementById("triedAllBtn");
  triedAllBtn.addEventListener("click", handleTriedAll);
}

// Function to handle the "Okay" button click
function handlePick() {
  // Change the text and button choices
  appContainer.innerHTML = `
      <p>Click the menu item or button. Did it work?</p>
      <button id="yesBtn">Yes</button>
      <button id="noBtn">No</button>
    `;

  // Add event listeners to the new buttons
  const yesBtn = document.getElementById("yesBtn");
  yesBtn.addEventListener("click", handleYes);

  const noBtn = document.getElementById("noBtn");
  noBtn.addEventListener("click", handleNo);
}

// Function to handle the "I've tried them all" button click
function handleTriedAll() {
  // Change the text and button choices
  appContainer.innerHTML = `
      <p>Google the name of the program plus a few words related to what you want to do. Follow any instructions. Did it work?</p>
      <button id="googleYesBtn">Yes</button>
      <button id="googleNoBtn">No</button>
    `;

  // Add event listeners to the new buttons
  const googleYesBtn = document.getElementById("googleYesBtn");
  googleYesBtn.addEventListener("click", handleGoogleYes);

  const googleNoBtn = document.getElementById("googleNoBtn");
  googleNoBtn.addEventListener("click", handleGoogleNo);
}

// Function to handle the "Yes" button click
function handleYes() {
  // Change the text
  appContainer.innerHTML = `
      <p>You're done!</p>
    `;
}

// Function to handle the "No" button click
function handleNo() {
  // Change the text
  appContainer.innerHTML = `
      <p>Ask someone for help or give up.</p>
    `;
}

// Function to handle the "Yes" button click after Googling
function handleGoogleYes() {
  // Change the text
  appContainer.innerHTML = `
      <p>You're done!</p>
    `;
}

// Function to handle the "No" button click after Googling
function handleGoogleNo() {
  // Change the text and button choices
  appContainer.innerHTML = `
      <p>Have you been trying this for over half an hour?</p>
      <button id="halfHourYesBtn">Yes</button>
      <button id="halfHourNoBtn">No</button>
    `;

  // Add event listeners to the new buttons
  const halfHourYesBtn = document.getElementById("halfHourYesBtn");
  halfHourYesBtn.addEventListener("click", handleHalfHourYes);

  const halfHourNoBtn = document.getElementById("halfHourNoBtn");
  halfHourNoBtn.addEventListener("click", handleHalfHourNo);
}

// Function to handle the "Yes" button click after Googling
function handleGoogleYes() {
  // Change the text
  appContainer.innerHTML = `
      <p>You're done!</p>
    `;
}

// Function to handle the "Yes" button click after half an hour
function handleHalfHourYes() {
  // Change the text
  appContainer.innerHTML = `
      <p>Ask someone for help or give up.</p>
    `;
}

// Function to handle the "No" button click after half an hour
function handleHalfHourNo() {
  // Change the text and button choices
  appContainer.innerHTML = `
      <p>Find a menu item or button which looks related to what you want to do.</p>
      <button id="foundBtn">Okay, I found one</button>
      <button id="notFoundBtn">I can't find one</button>
    `;

  // Add event listeners to the new buttons
  const foundBtn = document.getElementById("foundBtn");
  foundBtn.addEventListener("click", handleFound);

  const notFoundBtn = document.getElementById("notFoundBtn");
  notFoundBtn.addEventListener("click", handleNotFound);
}

// Add event listener to the start button
startBtn.addEventListener("click", handleStart);
