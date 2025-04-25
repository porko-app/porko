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

        // Hide all mood images and speech bubbles
        states.forEach(state => {
            document.getElementById(`ferret-${state}`).style.display = 'none';
            document.getElementById(`bubble-${state}`).style.display = 'none';
            document.getElementById(`bubble-text-${state}`).style.display = 'none';
        });

        // Show the correct mood images and text
        document.getElementById(`ferret-${mood}`).style.display = 'block';
        document.getElementById(`bubble-${mood}`).style.display = 'block';
        document.getElementById(`bubble-text-${mood}`).style.display = 'block';

        // Replace "Friend" with the user's name in the text
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

    // Event listener for submitting drink details
    document.getElementById('submit-drink').addEventListener('click', () => {
        console.log("OK button clicked!");

        const alcoholPercentage = parseFloat(document.getElementById('alcohol-percentage').value);
        const drinkAmount = parseFloat(document.getElementById('drink-amount').value);

        // Handle empty or invalid values
        if (isNaN(alcoholPercentage) || isNaN(drinkAmount)) {
            alert("Моля въведете процент на алкохола и милилитри.");
            return;
        }

        // Calculate alcohol units and update total
        const units = calculateAlcoholUnits(alcoholPercentage, drinkAmount);
        totalUnits += units;
        console.log("Updated totalUnits:", totalUnits);

        updateAlcoholUnitsDisplay();
        updateFerretMood(totalUnits);

        // Close modals
        document.getElementById('drink-details-modal').style.display = 'none';
        document.getElementById('drink-modal').style.display = 'none';
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

    // Welcome screen logic
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

    // Close modal buttons
    const closeModalButton = document.getElementById('close-modal-btn');
    const closeDetailsButton = document.getElementById('close-details-btn');

    if (closeModalButton) {
        closeModalButton.addEventListener('click', () => {
            drinkModal.style.display = 'none';
        });
    }

    if (closeDetailsButton) {
        closeDetailsButton.addEventListener('click', () => {
            document.getElementById('drink-details-modal').style.display = 'none';
        });
    }
});
