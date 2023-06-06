// Get the necessary elements from the DOM
const appContainer = document.getElementById("app");
const startBtn = document.getElementById("startBtn");

// Define the user flow steps and button choices
const steps = [
  {
    text: "Find a menu item or button which looks related to what you want to do.",
    choices: [
      { text: "Okay, I found one", nextStep: 1 },
      { text: "I can't find one", nextStep: 2 },
    ],
  },
  {
    text: "Click the menu item or button. Did it work?",
    choices: [
      { text: "Yes", nextStep: 4 },
      { text: "No", nextStep: 3 },
    ],
  },
  {
    text: "Pick one at random.",
    choices: [
      { text: "Okay", nextStep: 1 },
      { text: "I've tried them all", nextStep: 5 },
    ],
  },
  {
    text: "Google the name of the program plus a few words related to what you want to do. Follow any instructions. Did it work?",
    choices: [
      { text: "Yes", nextStep: 4 },
      { text: "No", nextStep: 6 },
    ],
  },
  {
    text: "You're done!",
  },
  {
    text: "Have you been trying this for over half an hour?",
    choices: [
      { text: "Yes", nextStep: 7 },
      { text: "No", nextStep: 1 },
    ],
  },
  {
    text: "Ask someone for help or give up.",
  },
];

let currentStep = 0; // Track the current step in the user flow

// Function to handle button clicks and update the user flow
function handleButtonClick(choiceIndex) {
  const choice = steps[currentStep].choices[choiceIndex];

  if (choice.nextStep === undefined) {
    // No next step, display the final text
    appContainer.innerHTML = `<p>${steps[currentStep].text}</p>`;
  } else {
    // Update the current step and display the next step
    currentStep = choice.nextStep;
    renderStep();
  }
}

// Function to render the current step in the user flow
function renderStep() {
  const step = steps[currentStep];
  let buttonsHTML = "";

  if (step.choices) {
    // Build the HTML for the button choices
    buttonsHTML = step.choices.map((choice, index) => `<button onclick="handleButtonClick(${index})">${choice.text}</button>`).join("");
  }

  // Update the app container with the current step text and button choices
  appContainer.innerHTML = `<p>${step.text}</p>${buttonsHTML}`;
}

// Add event listener to the start button
startBtn.addEventListener("click", renderStep);
