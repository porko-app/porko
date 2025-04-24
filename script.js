document.addEventListener('DOMContentLoaded', () => {
    // Initially show the welcome screen
    document.getElementById('welcome-screen').style.display = 'flex';
    document.getElementById('first-screen').style.display = 'none';
    document.getElementById('second-screen').style.display = 'none';

    // Continue button on welcome screen
    document.getElementById('continue-btn').addEventListener('click', function () {
        console.log("Continue button clicked");
        document.getElementById('welcome-screen').style.display = 'none';
        document.getElementById('first-screen').style.display = 'flex';
    });

    // Start button (form submission)
    const userForm = document.getElementById('user-info-form');
    userForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent reload

        const gender = document.getElementById('gender').value;
        const weight = document.getElementById('weight').value;

        if (!gender || !weight) {
            alert('Please enter your gender and weight!');
            return;
        }

        console.log("✅ Start button clicked");

        document.getElementById('first-screen').style.display = 'none';
        document.getElementById('second-screen').style.display = 'flex';
    });
});

    // Event listener for the "Choose Drink" button to open the modal
    const menuButton = document.getElementById('menu-btn'); // Use the menu-btn for triggering the modal
    const drinkModal = document.getElementById('drink-modal');
    const closeModalButton = document.getElementById('close-modal-btn');
    const closeDetailsBtn = document.getElementById('close-details-btn');

    menuButton.addEventListener('click', () => {
        drinkModal.style.display = 'flex'; // Show the modal when menu button is clicked
    });

    // Close modal when clicking the close button (X)
    closeModalButton.addEventListener('click', () => {
        drinkModal.style.display = 'none'; // Hide the modal
    });
 // Close drink detail modal
    closeDetailsBtn.addEventListener('click', () => {
        document.getElementById('drink-details-modal').style.display = 'none';
    });

    // Event listeners for each drink option
    const whiskeyButton = document.getElementById('whiskey-btn');
    const vodkaButton = document.getElementById('vodka-btn');
    const rumButton = document.getElementById('rum-btn');
    const ginButton = document.getElementById('gin-btn');
    const tequilaButton = document.getElementById('tequila-btn');


   function updateFerretMood(units) {
    const states = ['neutral', 'tipsy', 'drunk', 'wobbly'];

  // Determine current mood based on units
  let mood = 'neutral';

  if (units <= 1.5) {
      mood = 'neutral';
  } else if (units <= 3.5) {
      mood = 'tipsy';
  } else if (units <= 6.0) {
      mood = 'drunk';
  } else {
      mood = 'wobbly'; // Covers 6.1 and above, including 12.0+
  }
  

// Hide all mood images
states.forEach(state => {
    const ferret = document.getElementById(`ferret-${state}`);
    const bubble = document.getElementById(`bubble-${state}`);
    if (ferret) ferret.style.display = 'none';
    if (bubble) bubble.style.display = 'none';
});

// Show the correct mood images based on the updated `mood`
const selectedFerret = document.getElementById(`ferret-${mood}`);
const selectedBubble = document.getElementById(`bubble-${mood}`);
if (selectedFerret) selectedFerret.style.display = 'block';
if (selectedBubble) selectedBubble.style.display = 'block';


    // Show current mood images
    const currentFerret = document.getElementById(`ferret-${mood}`);
    const currentBubble = document.getElementById(`bubble-${mood}`);
    if (currentFerret) currentFerret.style.display = 'block';
    if (currentBubble) currentBubble.style.display = 'block';
}


    // Info popup handling
    const infoBtn = document.getElementById('info-btn');
    const infoPopup = document.getElementById('info-popup');
    const backBtn = document.getElementById('back-btn');

    infoBtn.addEventListener('click', () => {
        infoPopup.style.display = 'flex';
        setTimeout(() => {
            infoPopup.style.opacity = 1;
        }, 10);
    });

    backBtn.addEventListener('click', () => {
        infoPopup.style.opacity = 0;
        setTimeout(() => {
            infoPopup.style.display = 'none';
        }, 300);
    });

    function openDetailsModal(drinkName) {
        selectedDrink = drinkName; // Store it globally for later use
    
        // Update the modal title
        const drinkDetailsModal = document.getElementById('drink-details-modal');
        const modalTitle = drinkDetailsModal.querySelector('h2');
        modalTitle.textContent = `Enter Info for ${drinkName}`;

    // Show the details modal
    drinkDetailsModal.style.display = 'flex';

    // Hide the drink picker modal
    document.getElementById('drink-modal').style.display = 'none';
}

whiskeyButton.addEventListener('click', () => {
    openDetailsModal("Whiskey");
});

vodkaButton.addEventListener('click', () => {
    openDetailsModal("Vodka");
});

rumButton.addEventListener('click', () => {
    openDetailsModal("Rum");
});

ginButton.addEventListener('click', () => {
    openDetailsModal("Gin");
});

tequilaButton.addEventListener('click', () => {
    openDetailsModal("Tequila");
});


    // Start button (form submission)
    const userForm = document.getElementById('user-info-form');
    userForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent reload

        const gender = document.getElementById('gender').value;
        const weight = document.getElementById('weight').value;

        if (!gender || !weight) {
            alert('Please enter your gender and weight!');
            return;
        }

        console.log("✅ Start button clicked");

        document.getElementById('first-screen').style.display = 'none';
        document.getElementById('second-screen').style.display = 'flex';
         // Immediately show the neutral mood (0 units)
    updateFerretMood(0);
    });


    // Function to transition to the second screen after drink details are submitted
function goToSecondScreen() {
    document.getElementById('first-screen').style.display = 'none'; // Hide the first screen
    document.getElementById('second-screen').style.display = 'flex'; // Show the second screen
}
// Event listener for the "Submit Drink" button
document.getElementById('submit-drink').addEventListener('click', () => {
    console.log("OK button clicked!");

    const alcoholPercentage = parseFloat(document.getElementById('alcohol-percentage').value);
    const drinkAmount = parseFloat(document.getElementById('drink-amount').value);

    // Calculate alcohol unit using the updated formula
    const units = calculateAlcoholUnits(alcoholPercentage, drinkAmount);
    totalUnits += units;
    updateAlcoholUnitsDisplay();
    updateFerretMood(totalUnits);

    // Handle empty or invalid values
    if (isNaN(alcoholPercentage) || isNaN(drinkAmount)) {
        alert("Please enter valid alcohol percentage and drink amount.");
        return;
    }

    // Close the drink details modal before going to the second screen
    document.getElementById('drink-details-modal').style.display = 'none'; // Close the second modal

    // Close modals and switch screens (only this function is needed to do both!)
    goToSecondScreen();
});


// calculator alcohol units
function calculateAlcoholUnits(alcoholPercentage, drinkAmount) {
    return (alcoholPercentage * drinkAmount) / 1000;
}


// Update the alcohol unit on the second screen
function updateAlcoholUnitsDisplay() {
    let unitsTextElement = document.getElementById('dynamic-units');
    unitsTextElement.innerHTML = `${totalUnits.toFixed(1)}`;  // Display total units
}

  // Transition to second screen after calculation
  goToSecondScreen();

  // Function to transition to the second screen after drink details are submitted
function goToSecondScreen() {
    document.getElementById('first-screen').style.display = 'none'; // Hide the first screen
    document.getElementById('second-screen').style.display = 'flex'; // Show the second screen
}

let selectedDrink = ""; // global
let totalUnits = 0;      // global tracker for alcohol units

document.querySelectorAll('.drink-option').forEach(button => {
  button.addEventListener('click', () => {
    selectedDrink = button.dataset.drinkName;
    const drinkModal = document.getElementById('drink-modal');
    if (drinkModal) {
        // Do something with the modal if it exists
    } else {
        console.error("The modal element was not found!");
    }
    
  });

  const settingsBtn = document.getElementById("settings-btn");
  const secondScreen = document.getElementById("second-screen");
  const settingsScreen = document.getElementById("settings-screen");
  const backToSecondBtn = document.getElementById("back-to-second-btn");
  
  settingsBtn.addEventListener("click", () => {
    secondScreen.style.display = "none";
    settingsScreen.style.display = "flex";
  });
  
  backToSecondBtn.addEventListener("click", () => {
    settingsScreen.style.display = "none";
    secondScreen.style.display = "flex";
  });
  

});
