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


    // 🖼️ Swap bubble image based on BAC
    function updateSpeechBubbleImage(bac) {
        const bubbleImage = document.getElementById('ferret-bubble');
        const ferretImage = document.getElementById('ferret-image');

        if (!bubbleImage || !ferretImage) return;

        if (bac < 0.05) {
            bubbleImage.src = 'speech-bubble-neutral.png';
            ferretImage.src = 'ferret-neutral.png';
        } else if (bac < 0.1) {
            bubbleImage.src = 'speech-bubble-tipsy.png';
            ferretImage.src = 'ferret-tipsy.png';
        } else if (bac < 0.15) {
            bubbleImage.src = 'speech-bubble-drunk.png';
            ferretImage.src = 'ferret-drunk.png';
        } else {
            bubbleImage.src = 'speech-bubble-sobering-up.png';
            ferretImage.src = 'ferret-sobering-up.png';
        }
    }

    // Function to apply wobble effect based on BAC level
    function applyFerretWobble(bac) {
        const ferretImage = document.getElementById('ferret-image');

        // Remove previous wobble classes
        ferretImage.classList.remove('wobble-subtle', 'wobble-moderate', 'wobble-strong');

        // Apply new wobble class based on BAC level
        if (bac >= 0.05 && bac < 0.1) {
            ferretImage.classList.add('wobble-subtle');  // Small wobble
        } else if (bac >= 0.1 && bac < 0.15) {
            ferretImage.classList.add('wobble-moderate');  // Moderate wobble
        } else if (bac >= 0.15) {
            ferretImage.classList.add('wobble-strong');  // Strong wobble
        }
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
        const gender = document.getElementById('gender').value;
        const weight = document.getElementById('weight').value;

        // Handle empty or invalid values
        if (isNaN(alcoholPercentage) || isNaN(drinkAmount)) {
            alert("Please enter valid alcohol percentage and drink amount.");
            return;
        }

        // Calculate BAC using the updated formula
        let bac = calculateBAC(gender, weight, alcoholPercentage, drinkAmount);

        // Update BAC text on the second screen
        updateBACText(bac);
   // 1. Hide the modals (both the drink modal and drink details modal)
   document.getElementById('drink-modal').style.display = 'none'; // Close the drink modal
   document.getElementById('drink-details-modal').style.display = 'none'; // Close the details modal

   // 2. Transition to second screen after calculation
   goToSecondScreen();
});
});

// Widmark formula for BAC calculation
function calculateBAC(gender, weight, alcoholPercentage, drinkAmount) {
    // Convert weight to grams (from kg)
    let weightInGrams = weight * 1000;

    // Widmark factor based on gender
    let r = (gender === 'male') ? 0.68 : 0.55;

    // Calculate alcohol consumed in grams (0.789 is the density of ethanol in g/ml)
    let alcoholConsumedGrams = (alcoholPercentage * drinkAmount * 0.789) / 100;

    // Calculate BAC
    let bac = (alcoholConsumedGrams / (weightInGrams * r)) * 100;

    return bac;
}

// Update the BAC text on the second screen
function updateBACText(bac) {
    let bacTextElement = document.getElementById('bac-text');
    let dynamicBacElement = document.getElementById('dynamic-bac');

    // Update dynamic BAC number
    dynamicBacElement.innerHTML = bac.toFixed(2) + "%";
}
  // Transition to second screen after calculation
  goToSecondScreen();

  // Hide the drink details modal and the main modal
  document.getElementById('drink-modal').style.display = 'none'; // Close the drink modal
  document.getElementById('drink-details-modal').style.display = 'none'; // Close the details modal

  // Function to transition to the second screen after drink details are submitted
function goToSecondScreen() {
    document.getElementById('first-screen').style.display = 'none'; // Hide the first screen
    document.getElementById('second-screen').style.display = 'flex'; // Show the second screen
}

let selectedDrink = ""; // global

document.querySelectorAll('.drink-option').forEach(button => {
  button.addEventListener('click', () => {
    selectedDrink = button.dataset.drinkName;
    document.getElementById('drink-name').textContent = selectedDrink;
    openDrinkDetailsModal(); // show the second modal
  });
});
