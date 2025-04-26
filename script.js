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

        // Save to history
        saveHistoryEntry(selectedDrink, drinkAmount, alcoholPercentage);

    // Dynamically update statistics
    updateStatistics(); // <-- Ensure statistics are updated immediately

        // Close modals
        document.getElementById('drink-details-modal').style.display = 'none';
        document.getElementById('drink-modal').style.display = 'none';
    });


    // Event Listener for "Statistics" Button
    const statisticsBtn = document.getElementById('statistics-btn');
    const statisticsScreen = document.getElementById('statistics-screen');
    if (statisticsBtn) {
        statisticsBtn.addEventListener('click', () => {
            // Hide the settings screen
            settingsScreen.style.display = 'none';

            // Show the statistics screen
            statisticsScreen.style.display = 'flex';

            // Update statistics dynamically
            updateStatistics();
        });
    } else {
        console.error('Statistics button not found.');
    }

    // Event Listener for "Back" Button in Statistics Screen
    const backFromStatisticsBtn = document.getElementById('back-from-statistics-btn');
    if (backFromStatisticsBtn) {
        backFromStatisticsBtn.addEventListener('click', () => {
            // Hide the statistics screen
            statisticsScreen.style.display = 'none';

            // Show the settings screen
            settingsScreen.style.display = 'flex';
        });
    } else {
        console.error('Back button in Statistics screen not found.');
    }


    // Function to calculate total alcohol units for a given date range
    function calculateTotalAlcohol(startDate, endDate) {
        const history = JSON.parse(localStorage.getItem('drinkHistory')) || [];
        const total = history.reduce((sum, entry) => {
            const entryDate = new Date(entry.date);
            if (entryDate >= startDate && entryDate <= endDate) {
                return sum + (entry.amount * entry.percentage) / 1000; // Calculate alcohol units
            }
            return sum;
        }, 0);
        return total.toFixed(1); // Return total rounded to 1 decimal place
    }

        // Function to update statistics in the statistics screen
        function updateStatistics() {
            const now = new Date();
    
            // Calculate weekly total (last 7 days)
            const oneWeekAgo = new Date();
            oneWeekAgo.setDate(now.getDate() - 7);
            const weeklyTotal = calculateTotalAlcohol(oneWeekAgo, now);
            document.getElementById('weekly-total').textContent = `${weeklyTotal} единици алкохол`;
    
            // Calculate monthly total (current month)
            const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1); // First day of the month
            const monthlyTotal = calculateTotalAlcohol(startOfMonth, now);
            document.getElementById('monthly-total').textContent = `${monthlyTotal} единици алкохол`;
        }
    
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
            updateStatistics(); // Update statistics when entering the settings screen
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

    // Function to calculate total alcohol units for a given date range
    function calculateTotalAlcohol(startDate, endDate) {
        const history = JSON.parse(localStorage.getItem('drinkHistory')) || [];
        const total = history.reduce((sum, entry) => {
            const entryDate = new Date(entry.date);
            if (entryDate >= startDate && entryDate <= endDate) {
                return sum + (entry.amount * entry.percentage) / 1000; // Calculate alcohol units
            }
            return sum;
        }, 0);
        return total.toFixed(1); // Return total rounded to 1 decimal place
    }

    // Function to update statistics in the settings screen
    function updateStatistics() {
        const now = new Date();

        // Calculate weekly total (last 7 days)
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(now.getDate() - 7);
        const weeklyTotal = calculateTotalAlcohol(oneWeekAgo, now);
        document.getElementById('weekly-total').textContent = `${weeklyTotal} единици алкохол`;

        // Calculate monthly total (current month)
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1); // First day of the month
        const monthlyTotal = calculateTotalAlcohol(startOfMonth, now);
        document.getElementById('monthly-total').textContent = `${monthlyTotal} единици алкохол`;
    }

    // FAQ Alcohol Info Button Logic
    const faqAlcoholInfoBtn = document.getElementById('faq-alcohol-info-btn');
    const faqScreen = document.getElementById('faq-screen');
    const backFromFaqBtn = document.getElementById('back-from-faq-btn');

    if (faqAlcoholInfoBtn && faqScreen && backFromFaqBtn) {
        // Show the FAQ screen when the FAQ button is clicked
        faqAlcoholInfoBtn.addEventListener('click', () => {
            faqScreen.style.display = 'flex'; // Show the FAQ screen
            settingsScreen.style.display = 'none'; // Hide the settings screen
        });

        // Navigate back to settings screen when the back button is clicked
        backFromFaqBtn.addEventListener('click', () => {
            faqScreen.style.display = 'none'; // Hide the FAQ screen
            settingsScreen.style.display = 'flex'; // Show the settings screen
        });
    } else {
        console.error('FAQ elements not found.');
    }

// Event Listener for "Terms of Use" Button
const termsOfUseBtn = document.getElementById('terms-of-use-btn');
const termsOfUseScreen = document.getElementById('terms-of-use-screen');
if (termsOfUseBtn) {
    termsOfUseBtn.addEventListener('click', () => {
        // Hide the settings screen
        settingsScreen.style.display = 'none';

        // Show the Terms of Use screen
        termsOfUseScreen.style.display = 'flex';
    });
} else {
    console.error('Terms of Use button not found.');
}

// Event Listener for "Back" Button in Terms of Use Screen
const backFromTermsBtn = document.getElementById('back-from-terms-btn');
if (backFromTermsBtn) {
    backFromTermsBtn.addEventListener('click', () => {
        // Hide the Terms of Use screen
        termsOfUseScreen.style.display = 'none';

        // Show the settings screen
        settingsScreen.style.display = 'flex';
    });
} else {
    console.error('Back button in Terms of Use screen not found.');
}

// Event Listener for "QR Code" Button
const qrCodeBtn = document.getElementById('qr-code-btn');
const qrCodeScreen = document.getElementById('qr-code-screen');
if (qrCodeBtn) {
    qrCodeBtn.addEventListener('click', () => {
        // Hide the settings screen
        settingsScreen.style.display = 'none';

        // Show the QR Code screen
        qrCodeScreen.style.display = 'flex';
    });
} else {
    console.error('QR Code button not found.');
}

// Event Listener for "Back" Button in QR Code Screen
const backFromQrBtn = document.getElementById('back-from-qr-btn');
if (backFromQrBtn) {
    backFromQrBtn.addEventListener('click', () => {
        // Hide the QR Code screen
        qrCodeScreen.style.display = 'none';

        // Show the settings screen
        settingsScreen.style.display = 'flex';
    });
} else {
    console.error('Back button in QR Code screen not found.');
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

// History Log Button Logic
const historyLogBtn = document.getElementById('history-log-btn'); // Button for history log
const historyLogScreen = document.getElementById('history-log-screen'); // History log screen
const backFromHistoryBtn = document.getElementById('back-from-history-btn'); // Back button in history log screen
const historyList = document.getElementById('history-list'); // History log list container

// Function to load history from localStorage
function loadHistory() {
    const history = JSON.parse(localStorage.getItem('drinkHistory')) || [];
    historyList.innerHTML = ''; // Clear existing list

    if (history.length === 0) {
        const noHistoryMessage = document.createElement('li');
        noHistoryMessage.textContent = 'Няма записана история.';
        noHistoryMessage.style.color = '#cccccc';
        historyList.appendChild(noHistoryMessage);
        return;
    }

    // Function to load history from localStorage
function loadHistory() {
    const history = JSON.parse(localStorage.getItem('drinkHistory')) || [];
    historyList.innerHTML = ''; // Clear existing list

    if (history.length === 0) {
        const noHistoryMessage = document.createElement('li');
        noHistoryMessage.textContent = 'Няма записана история.';
        noHistoryMessage.style.color = '#cccccc';
        historyList.appendChild(noHistoryMessage);
        return;
    }

    history.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.textContent = `${entry.date} - ${entry.drinkName}, ${entry.amount} мл, ${entry.percentage}% алкохол`;
        historyList.appendChild(listItem);
    });
}

// Clear History Button Logic
const clearHistoryBtn = document.getElementById('clear-history-btn');

// Event listener for the "Clear History" button
if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener('click', () => {
        // Confirm with the user before clearing the history
        const confirmClear = confirm("Сигурни ли сте, че искате да изчистите историята?");
        if (confirmClear) {
            // Clear history from localStorage
            localStorage.removeItem('drinkHistory');

            // Reload the history list (it will now show 'No history' message)
            loadHistory();

            alert("Историята беше изчистена успешно!");
        }
    });
} else {
    console.error('Clear History button not found.');
}

// Get references to the Clear History modal and buttons
const clearHistoryModal = document.getElementById('clear-history-modal');
const confirmClearBtn = document.getElementById('confirm-clear-btn');
const cancelClearBtn = document.getElementById('cancel-clear-btn');

// Event listener for the "Clear History" button
if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener('click', () => {
        // Show the modal when the button is clicked
        clearHistoryModal.style.display = 'flex';
    });
} else {
    console.error('Clear History button not found.');
}

// Event listener for the "Confirm Clear" button
if (confirmClearBtn) {
    confirmClearBtn.addEventListener('click', () => {
        // Clear history from localStorage
        localStorage.removeItem('drinkHistory');

        // Reload the history list (it will now show 'No history' message)
        loadHistory();

        // Reset statistics in localStorage or memory
        resetStatistics();

        // Hide the modal
        clearHistoryModal.style.display = 'none';

        // Notify the user
        alert("Историята и статистиката бяха изчистени успешно!");
    });
} else {
    console.error('Confirm Clear button not found.');
}

function resetStatistics() {
    // Set statistics to 0
    document.getElementById('weekly-total').textContent = '0.0 единици алкохол';
    document.getElementById('monthly-total').textContent = '0.0 единици алкохол';

    // Optionally, you can also clear any saved statistics in localStorage if needed
    // localStorage.removeItem('weeklyStatistics');
    // localStorage.removeItem('monthlyStatistics');
}

// Event listener for the "Cancel Clear" button
if (cancelClearBtn) {
    cancelClearBtn.addEventListener('click', () => {
        // Simply hide the modal when canceled
        clearHistoryModal.style.display = 'none';
    });
} else {
    console.error('Cancel Clear button not found.');
}

    history.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.textContent = `${entry.date} - ${entry.drinkName}, ${entry.amount} мл, ${entry.percentage}% алкохол`;
        historyList.appendChild(listItem);
    });
}

// Event listener for the "History Log" button
if (historyLogBtn) {
    historyLogBtn.addEventListener('click', () => {
        loadHistory(); // Load history before showing the screen
        historyLogScreen.style.display = 'flex'; // Show the history log screen
        document.getElementById('settings-screen').style.display = 'none'; // Hide the settings screen
    });
} else {
    console.error('History Log button not found.');
}

// Event listener for the Back button in the history log screen
if (backFromHistoryBtn) {
    backFromHistoryBtn.addEventListener('click', () => {
        historyLogScreen.style.display = 'none'; // Hide the history log screen
        document.getElementById('settings-screen').style.display = 'flex'; // Show the settings screen
    });
} else {
    console.error('Back button in History Log screen not found.');
}
    });

// Function to load history from localStorage
function loadHistory() {
    const history = JSON.parse(localStorage.getItem('drinkHistory')) || [];
    historyList.innerHTML = ''; // Clear existing list

    if (history.length === 0) {
        const noHistoryMessage = document.createElement('li');
        noHistoryMessage.textContent = 'Няма записана история.';
        noHistoryMessage.style.color = '#cccccc';
        historyList.appendChild(noHistoryMessage);
        return;
    }

    history.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.textContent = `${entry.date} - ${entry.drinkName}, ${entry.amount} мл, ${entry.percentage}% алкохол`;
        historyList.appendChild(listItem);
    });
}

// Function to save a new history entry
function saveHistoryEntry(drinkName, amount, percentage) {
    const history = JSON.parse(localStorage.getItem('drinkHistory')) || [];
    const newEntry = {
        date: new Date().toLocaleString(),
        drinkName,
        amount,
        percentage
    };
    history.push(newEntry);
    localStorage.setItem('drinkHistory', JSON.stringify(history));
}
