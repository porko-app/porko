document.addEventListener('DOMContentLoaded', () => {
    let selectedDrink = ""; // Global variable for selected drink
    let totalUnits = 0; // Global tracker for alcohol units
    let userName = ""; // Global tracker for the user's name

    // Function to update the ferret's mood based on alcohol units
    function updateFerretMood(units) {
        const states = ['neutral', 'tipsy', 'drunk', 'wobbly'];
        let mood = 'neutral';

        if (units <= 1.5) mood = 'neutral';
        else if (units <= 3.5) mood = 'tipsy';
        else if (units <= 6.0) mood = 'drunk';
        else mood = 'wobbly';

        states.forEach(state => {
            document.getElementById(`ferret-${state}`).style.display = 'none';
            document.getElementById(`bubble-${state}`).style.display = 'none';
            document.getElementById(`bubble-text-${state}`).style.display = 'none';
        });

        document.getElementById(`ferret-${mood}`).style.display = 'block';
        document.getElementById(`bubble-${mood}`).style.display = 'block';
        document.getElementById(`bubble-text-${mood}`).style.display = 'block';

        const userNamePlaceholder = document.getElementById(`user-name-placeholder-${mood}`);
        if (userNamePlaceholder) userNamePlaceholder.textContent = userName;
    }

    // Function to calculate alcohol units
    function calculateAlcoholUnits(alcoholPercentage, drinkAmount) {
        return (alcoholPercentage * drinkAmount) / 1000;
    }

    // Function to update the alcohol units display
    function updateAlcoholUnitsDisplay() {
        const unitsTextElement = document.getElementById('dynamic-units');
        unitsTextElement.innerHTML = `${totalUnits.toFixed(1)}`;
    }

    // Function to open the drink details modal
    function openDetailsModal(drinkName) {
        selectedDrink = drinkName;

        const drinkDetailsModal = document.getElementById('drink-details-modal');
        const modalTitle = drinkDetailsModal.querySelector('h2');
        modalTitle.textContent = `Въведи повече информация за ${drinkName}`;

        drinkDetailsModal.style.display = 'flex';
        document.getElementById('drink-modal').style.display = 'none';
    }

    // Initially show the welcome screen
    document.getElementById('welcome-screen').style.display = 'flex';
    document.getElementById('first-screen').style.display = 'none';
    document.getElementById('second-screen').style.display = 'none';
    document.getElementById('settings-screen').style.display = 'none';

    // Continue button on welcome screen
    document.getElementById('continue-btn').addEventListener('click', () => {
        document.getElementById('welcome-screen').style.display = 'none';
        document.getElementById('first-screen').style.display = 'flex';
    });

    // Start button (form submission)
    const userForm = document.getElementById('user-info-form');
    userForm.addEventListener('submit', event => {
        event.preventDefault();
        const usernameInput = document.getElementById('username');
        userName = usernameInput.value.trim();

        if (!userName) {
            alert('Моля, напишете твоето име!');
            return;
        }

        document.getElementById('first-screen').style.display = 'none';
        document.getElementById('second-screen').style.display = 'flex';
        updateFerretMood(0);
    });

    // Event listener for the "Choose Drink" button
    const menuButton = document.getElementById('menu-btn');
    const drinkModal = document.getElementById('drink-modal');
    menuButton.addEventListener('click', () => {
        drinkModal.style.display = 'flex';
    });

    // Close modals
    document.getElementById('close-modal-btn').addEventListener('click', () => {
        drinkModal.style.display = 'none';
    });

    document.getElementById('close-details-btn').addEventListener('click', () => {
        document.getElementById('drink-details-modal').style.display = 'none';
    });

    // Event listener for submitting drink details
    document.getElementById('submit-drink').addEventListener('click', () => {
        const alcoholPercentage = parseFloat(document.getElementById('alcohol-percentage').value);
        const drinkAmount = parseFloat(document.getElementById('drink-amount').value);

        if (isNaN(alcoholPercentage) || isNaN(drinkAmount)) {
            alert('Моля въведете процент на алкохола и милилитри.');
            return;
        }

        const units = calculateAlcoholUnits(alcoholPercentage, drinkAmount);
        totalUnits += units;
        updateAlcoholUnitsDisplay();
        updateFerretMood(totalUnits);

        document.getElementById('drink-details-modal').style.display = 'none';
        drinkModal.style.display = 'none';
    });

    // Event listeners for drink options
    const drinks = {
        whiskey: 'Уиски',
        vodka: 'Водка',
        rum: 'Ром',
        gin: 'Джин',
        tequila: 'Текила',
    };

    Object.keys(drinks).forEach(drinkId => {
        document.getElementById(`${drinkId}-btn`).addEventListener('click', () => {
            openDetailsModal(drinks[drinkId]);
        });
    });

    // Info popup handling
    const infoBtn = document.getElementById('info-btn');
    const infoPopup = document.getElementById('info-popup');
    const backBtn = document.getElementById('back-btn');

    if (infoBtn) {
        infoBtn.addEventListener('click', () => {
            infoPopup.style.display = 'flex';
            setTimeout(() => (infoPopup.style.opacity = 1), 10);
        });
    } else {
        console.error('Info button not found.');
    }

    if (backBtn) {
        backBtn.addEventListener('click', () => {
            infoPopup.style.opacity = 0;
            setTimeout(() => (infoPopup.style.display = 'none'), 300);
        });
    } else {
        console.error('Back button not found.');
    }

    // Settings button handling
    const settingsBtn = document.getElementById('settings-btn');
    const settingsScreen = document.getElementById('settings-screen');
    const secondScreen = document.getElementById('second-screen');
    const backFromSettingsBtn = document.getElementById('back-from-settings-btn');

    if (settingsBtn) {
        settingsBtn.addEventListener('click', () => {
            secondScreen.style.display = 'none';
            settingsScreen.style.display = 'flex';
        });
    } else {
        console.error('Settings button not found.');
    }

    if (backFromSettingsBtn) {
        backFromSettingsBtn.addEventListener('click', () => {
            settingsScreen.style.display = 'none';
            secondScreen.style.display = 'flex';
        });
    } else {
        console.error('Back from settings button not found.');
    }
});
    function openDetailsModal(drinkName) {
        selectedDrink = drinkName; // Store it globally for later use
    
        // Update the modal title
        const drinkDetailsModal = document.getElementById('drink-details-modal');
        const modalTitle = drinkDetailsModal.querySelector('h2');
        modalTitle.textContent = `Въведи повече информация за ${drinkName}`;

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
    alert("Моля въведете процент на алкохола и милилитри.");
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

