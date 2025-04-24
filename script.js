// Move this function here (above DOMContentLoaded)
function updateFerretMood(units) {
    const states = ['neutral', 'tipsy', 'drunk', 'wobbly'];

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

    // Hide all mood images and speech bubbles
    states.forEach(state => {
        const ferret = document.getElementById(`ferret-${state}`);
        const bubble = document.getElementById(`bubble-${state}`);
        const bubbleText = document.getElementById(`bubble-text-${state}`);

        if (ferret) ferret.style.display = 'none'; // Hide ferret image
        if (bubble) bubble.style.display = 'none'; // Hide speech bubble
        if (bubbleText) bubbleText.style.display = 'none'; // Hide bubble text
    });

    // Show the correct mood images and text based on the updated `mood`
    const selectedFerret = document.getElementById(`ferret-${mood}`);
    const selectedBubble = document.getElementById(`bubble-${mood}`);
    const selectedBubbleText = document.getElementById(`bubble-text-${mood}`);

    if (selectedFerret) selectedFerret.style.display = 'block';
    if (selectedBubble) selectedBubble.style.display = 'block';
    if (selectedBubbleText) selectedBubbleText.style.display = 'block';

    // Replace "Friend" with the user's name in the text
    const userNamePlaceholder = document.getElementById(`user-name-placeholder-${mood}`);
    if (userNamePlaceholder) {
        userNamePlaceholder.textContent = userName;  // Use the user's name dynamically
    }
}

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

        const usernameInput = document.getElementById('username');
        userName = usernameInput.value.trim();  // 👈 Assign to global userName    
        
        if (!userName) {
            alert('Моля, напишете твоето име!');
            return;
        }

        console.log("✅ Start button clicked");

        document.getElementById('first-screen').style.display = 'none';
        document.getElementById('second-screen').style.display = 'flex';

        updateFerretMood(0); // ✅ show neutral ferret & speech bubble on second screen
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

// Add event listeners for each drink button
whiskeyButton.addEventListener('click', () => openDetailsModal('Whiskey'));
vodkaButton.addEventListener('click', () => openDetailsModal('Vodka'));
rumButton.addEventListener('click', () => openDetailsModal('Rum'));
ginButton.addEventListener('click', () => openDetailsModal('Gin'));
tequilaButton.addEventListener('click', () => openDetailsModal('Tequila'));

    // Info popup handling
    const infoBtn = document.getElementById('info-btn');
    const infoPopup = document.getElementById('info-popup');
    const backBtn = document.getElementById('back-btn');

    // Debugging - Log to see if infoBtn exists
    if (infoBtn) {
        console.log('Info button found.');
        infoBtn.addEventListener('click', () => {
            console.log('Info button clicked.');
            infoPopup.style.display = 'flex';
            setTimeout(() => {
                infoPopup.style.opacity = 1;
            }, 10);
        });
    } else {
        console.log('Info button not found.');
    }

    // Debugging - Log to see if backBtn exists
    if (backBtn) {
        console.log('Back button found.');
        backBtn.addEventListener('click', () => {
            console.log('Back button clicked.');
            infoPopup.style.opacity = 0;
            setTimeout(() => {
                infoPopup.style.display = 'none';
            }, 300);
        });
    } else {
        console.log('Back button not found.');
    }

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

// Handle empty or invalid values
if (isNaN(alcoholPercentage) || isNaN(drinkAmount)) {
    alert("Моля въведете алкохолен процент и милилитри.");
    return;
}

    // Calculate alcohol unit using the updated formula
    const units = calculateAlcoholUnits(alcoholPercentage, drinkAmount);
    totalUnits += units;
    updateAlcoholUnitsDisplay();
    updateFerretMood(totalUnits);

    // Close both modals
    document.getElementById('drink-details-modal').style.display = 'none'; // Hide the second modal
    document.getElementById('drink-modal').style.display = 'none'; // Hide the first modal

    // Switch to the second screen
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
let userName = "";       // global tracker for user's name

  const settingsBtn = document.getElementById("settings-btn");
  const secondScreen = document.getElementById("second-screen");
  const settingsScreen = document.getElementById("settings-screen");
  const backToSecondBtn = document.getElementById("back-to-second-btn");
  
  settingsBtn.addEventListener("click", () => {
    secondScreen.style.display = "none";
    settingsScreen.style.display = "flex";
  });

