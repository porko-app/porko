document.addEventListener('DOMContentLoaded', () => {
    let selectedDrink = ""; // Global variable for selected drink
    let totalUnits = 0; // Global tracker for alcohol units
    let userName = ""; // Global tracker for the user's name

// Function to update the ferret's mood based on alcohol units
function updateFerretMood(units) {
    const states = ['neutral', 'tipsy', 'drunk', 'wobbly'];
    let mood = 'neutral';

    // Determine the mood based on alcohol units
    if (units <= 4.0) mood = 'neutral';
    else if (units <= 7.0) mood = 'tipsy';
    else if (units <= 10.0) mood = 'drunk';
    else mood = 'wobbly';

    console.log('Updating ferret mood to:', mood);

// Predefined messages for each mood (some include placeholders for the username)
const messages = {
    neutral: [
        `Хей, ${userName}! Всичко е супер!`,
        "Чувствам се страхотно! А ти?",
        `Толкова е хубаво да сме заедно, ${userName}!`,
        "Хайде да се насладим на деня!"
    ],
    tipsy: [
        `Юхуу, ${userName}! Чувствам се леко замаян!`,
        "Ох, чувствам се приятно развеселен!",
        `Хей, ${userName}, забавляваме се, нали?`,
        "Опа, леко ми се върти главата!"
    ],
    drunk: [
        `Охо, ${userName}, нещата стават по-интересни!`,
        "Чувствам се доста... уааа!",
        `Това е малко повече от очакваното, ${userName}!`,
        "Ох, всичко изглежда толкова забавно!"
    ],
    wobbly: [
        "О, не! Вече е твърде много!",
        `Моля, ${userName}, нека си починем за малко!`,
        "Чувствам се като в лодка в буря!",
        `${userName}, имам нужда от вода...`
    ]
};

    // Hide all mood-related elements (images and speech bubbles)
    states.forEach(state => {
        const ferretElement = document.getElementById(`ferret-${state}`);
        const bubbleElement = document.getElementById(`bubble-${state}`);
        const bubbleTextElement = document.getElementById(`bubble-text-${state}`);

        if (ferretElement) ferretElement.style.display = 'none';
        if (bubbleElement) bubbleElement.style.display = 'none';
        if (bubbleTextElement) bubbleTextElement.style.display = 'none';
    });

    // Randomly select a message for the current mood
    const randomMessage = messages[mood][Math.floor(Math.random() * messages[mood].length)];

    // Show the correct mood's image and speech bubble with the selected message
    const ferretElement = document.getElementById(`ferret-${mood}`);
    const bubbleElement = document.getElementById(`bubble-${mood}`);
    const bubbleTextElement = document.getElementById(`bubble-text-${mood}`);

    if (ferretElement) ferretElement.style.display = 'block';
    if (bubbleElement) bubbleElement.style.display = 'block';
    if (bubbleTextElement) {
        bubbleTextElement.textContent = randomMessage;
        bubbleTextElement.style.display = 'block';
    }
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

 // Clear the input fields every time the modal opens
    document.getElementById('alcohol-percentage').value = '';
    document.getElementById('drink-amount').value = '';

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

   // Update the UI and ferret mood
   updateAlcoholUnitsDisplay();
   updateFerretMood(totalUnits);

   // Save to history (called only once)
   saveHistoryEntry(selectedDrink, drinkAmount, alcoholPercentage);

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
        const entryDate = new Date(entry.date); // Parse entry date
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

// Function to reset the ferret's mood to neutral
function resetFerretMoodToNeutral() {
    console.log("Resetting ferret's mood to neutral...");
    updateFerretMood(totalUnits); // Use the current totalUnits instead of resetting to 0
    localStorage.setItem('lastMoodReset', new Date().toISOString()); // Update the last reset time
}

// Function to check if the ferret's mood needs to be reset
function checkAndResetFerretMood() {
    const lastResetTime = localStorage.getItem('lastMoodReset'); // Get the last reset time from storage
    const now = new Date();

    if (!lastResetTime || new Date(lastResetTime).getTime() < now.getTime() - 10 * 60 * 60 * 1000) {
        // If no reset time exists OR the last reset was more than 10 hours ago:
        resetFerretMoodToNeutral(); // Reset the ferret's mood to neutral
    }
}

    // Check and reset ferret's mood if needed
    checkAndResetFerretMood();

// Calculate 24-hour total (exact last 24 hours)
const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000); // Subtract 24 hours
const dailyTotal = calculateTotalAlcohol(oneDayAgo, now);
document.getElementById('daily-total').textContent = `${dailyTotal} единици алкохол`;


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
        whiskey: 'Уиски (прибл.40-50%)',
        vodka: 'Водка (прибл. 40%)',
        rum: 'Ром (прибл. 40%)',
        gin: 'Джин (прибл. 36-50%)',
        tequila: 'Текила (прибл. 35-50%)',
    };

    Object.keys(drinks).forEach(drinkId => {
        document.getElementById(`${drinkId}-btn`).addEventListener('click', () => {
            openDetailsModal(drinks[drinkId]);
        });
    });

// ... (other code above)

function isIsoDateString(str) {
    // Simple check for ISO format: YYYY-MM-DDTHH:MM...
    return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(str);
}

function migrateHistoryDatesToIso() {
    const history = JSON.parse(localStorage.getItem('drinkHistory')) || [];
    let updated = false;

    
    const migrated = history.map(entry => {
        if (entry.date && !isIsoDateString(entry.date)) {
            // Try to parse the old locale date string
            const parsed = new Date(entry.date);
            if (!isNaN(parsed.getTime())) {
                // Convert to ISO string
                updated = true;
                return { ...entry, date: parsed.toISOString() };
            }
        }
        return entry;
    });

    if (updated) {
        localStorage.setItem('drinkHistory', JSON.stringify(migrated));
    }
}

// Call migration early, before any stats/history is shown
document.addEventListener('DOMContentLoaded', () => {
    migrateHistoryDatesToIso();
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
    
        // Calculate 24-hour total (last 24 hours)
        const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
        const dailyTotal = calculateTotalAlcohol(oneDayAgo, now);
        document.getElementById('daily-total').textContent = `${dailyTotal} единици алкохол`;
    
        // Calculate weekly total (last 7 days)
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(now.getDate() - 7);
        const weeklyTotal = calculateTotalAlcohol(oneWeekAgo, now);
        document.getElementById('weekly-total').textContent = `${weeklyTotal} единици алкохол`;
    
        // Calculate monthly total (current month)
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
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

// Event listener for the "Start" button to capture the username
const userForm = document.getElementById('user-info-form');
userForm.addEventListener('submit', async event => {
    event.preventDefault(); // Prevent form from refreshing the page
    const usernameInput = document.getElementById('username');
    userName = usernameInput.value.trim(); // Capture the username

        if (!userName) {
            alert('Моля, напишете твоето име!');
            return;
        }

   // Save user info to Firebase
   try {
    const userRef = ref(database, `users/${userName}`);
    await set(userRef, {
        username: userName,
        createdAt: new Date().toISOString()
    });
    console.log('User info saved to Firebase:', userName);
} catch (error) {
    console.error('Error saving user info to Firebase:', error);
}

        document.getElementById('first-screen').style.display = 'none';
        document.getElementById('second-screen').style.display = 'flex';
        updateFerretMood(totalUnits); // Use the current totalUnits instead of resetting to 0
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

      history.slice().reverse().forEach(entry => {
        const listItem = document.createElement('li');
        let formattedDate = '';
        if (entry.date) {
            const dateObj = new Date(entry.date);
            formattedDate = !isNaN(dateObj) ? dateObj.toLocaleString() : entry.date;
        }
        listItem.textContent = `${formattedDate} - ${entry.drinkName}, ${entry.amount} мл, ${entry.percentage}% алкохол`;
        historyList.appendChild(listItem);

    });


// Clear History Button Logic
const clearHistoryBtn = document.getElementById('clear-history-btn');

// Get references to the Clear History modal and buttons
const clearHistoryModal = document.getElementById('clear-history-modal');
const confirmClearBtn = document.getElementById('confirm-clear-btn');
const cancelClearBtn = document.getElementById('cancel-clear-btn');

// Show the custom modal when "Clear History" button is clicked
clearHistoryBtn.addEventListener('click', () => {
    clearHistoryModal.style.display = 'flex'; // Display your custom modal
});

// Handle the "Confirm" button in the modal
confirmClearBtn.addEventListener('click', () => {
    localStorage.removeItem('drinkHistory'); // Clear the history
    loadHistory();
    clearHistoryModal.style.display = 'none'; // Hide the modal
});

// Handle the "Cancel" button in the modal
cancelClearBtn.addEventListener('click', () => {
    clearHistoryModal.style.display = 'none'; // Simply hide the modal without clearing the history
});

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

// Function to save a new history entry
function saveHistoryEntry(drinkName, amount, percentage) {
    const history = JSON.parse(localStorage.getItem('drinkHistory')) || [];
   const newEntry = {
    date: new Date().toISOString(),
    drinkName,
    amount,
    percentage
};
    history.push(newEntry);
    localStorage.setItem('drinkHistory', JSON.stringify(history));
}

document.addEventListener('DOMContentLoaded', () => {
    let selectedDrink = ""; // Global variable for selected drink
    let totalUnits = 0; // Global tracker for alcohol units
    let userName = ""; // Global tracker for the user's name

    // Initialize Visitor Counter
    const visitorCounterElement = document.getElementById('visitor-count');
    const visitorRef = ref(database, "visitorCounter");

    const updateVisitorCountDisplay = async () => {
        try {
            const snapshot = await get(visitorRef);
            if (snapshot.exists()) {
                const visitorCount = snapshot.val().count || 0;
                visitorCounterElement.textContent = visitorCount;
            } else {
                console.log("Visitor counter not found in Firebase. Initializing...");
                visitorCounterElement.textContent = 0; // Display 0 while initializing
                await initializeVisitorCounter(); // Initialize the counter
            }
        } catch (error) {
            console.error("Error fetching visitor counter:", error);
            visitorCounterElement.textContent = "Error";
        }
    };

    // Function to increment the visitor counter
    const incrementVisitorCount = () => {
        get(visitorRef)
            .then((snapshot) => {
                const currentCount = snapshot.exists() ? snapshot.val().count : 0;
                const newCount = currentCount + 1;

                // Update the counter in Firebase
                return set(visitorRef, { count: newCount });
            })
            .then(() => {
                console.log("Visitor counter updated successfully!");
                updateVisitorCountDisplay(); // Refresh the display after updating
            })
            .catch((error) => {
                console.error("Error updating visitor counter:", error);
            });
    };

    // Call the function to display the current visitor count on the welcome screen
    updateVisitorCountDisplay();

    // Start button (form submission)
    const userForm = document.getElementById('user-info-form');
    userForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from refreshing the page
        const usernameInput = document.getElementById('username');
        userName = usernameInput.value.trim();

        if (!userName) {
            alert('Моля, напишете твоето име!');
            return;
        }

        // Increment the visitor counter when the user clicks "Start"
        incrementVisitorCount();

        // Proceed with the usual logic for starting the app
        document.getElementById('first-screen').style.display = 'none';
        document.getElementById('second-screen').style.display = 'flex';
        updateFerretMood(totalUnits); // Use the current totalUnits instead of resetting to 0
    });
});

// Function to increment the visitor counter
const incrementVisitorCount = () => {
    get(visitorRef)
        .then((snapshot) => {
            const currentCount = snapshot.exists() ? snapshot.val().count : 0;
            const newCount = currentCount + 1;

            // Update the counter in Firebase
            return set(visitorRef, { count: newCount });
        })
        .then(() => {
            console.log("Visitor counter updated successfully!");
            updateVisitorCountDisplay(); // Refresh the display after updating
        })
        .catch((error) => {
            console.error("Error updating visitor counter:", error);
        });
};


    // Start button (form submission)
    (document.getElementById('user-info-form')).addEventListener('submit', event => {
        event.preventDefault(); // Prevent form from refreshing the page
        const usernameInput = document.getElementById('username');
        userName = usernameInput.value.trim();

        if (!userName) {
            alert('Моля, напишете твоето име!');
            return;
        }

        // Increment the visitor counter when the user clicks "Start"
        incrementVisitorCount();

        // Proceed with the usual logic for starting the app
        document.getElementById('first-screen').style.display = 'none';
        document.getElementById('second-screen').style.display = 'flex';
        updateFerretMood(totalUnits); // Use the current totalUnits instead of resetting to 0
    });


document.addEventListener('DOMContentLoaded', () => {
    const changeNameBtn = document.getElementById('change-name-btn');
    const firstScreen = document.getElementById('first-screen');
    const settingsScreen = document.getElementById('settings-screen');

    if (changeNameBtn) {
        changeNameBtn.addEventListener('click', () => {
            // Hide the settings screen
            settingsScreen.style.display = 'none';

            // Show the first screen
            firstScreen.style.display = 'flex';
        });
    }

if (changeNameBtn) {
    changeNameBtn.addEventListener('click', () => {
        // Hide the settings screen and show the first screen
        settingsScreen.style.display = 'none';
        firstScreen.style.display = 'flex';

        // Preserve the current ferret mood and prevent resetting it to "neutral"
        const currentUnits = totalUnits; // Save the current alcohol units
        updateFerretMood(totalUnits); // Use the current totalUnits instead of resetting to 0
    });
}
});

// Call this function when capturing the username
(document.getElementById('user-info-form')).addEventListener('submit', event => {
    event.preventDefault();
    const usernameInput = document.getElementById('username');
    userName = usernameInput.value.trim();

    if (!userName) {
        alert('Моля, напишете твоето име!');
        return;
    }

    // Save user info to Firebase
    saveUserInfo(userName);

    // Proceed with the usual logic
    document.getElementById('first-screen').style.display = 'none';
    document.getElementById('second-screen').style.display = 'flex';
    updateFerretMood(totalUnits); // Use the current totalUnits instead of resetting to 0
    updateStatistics();
});

import { database } from "./firebase.js";
import { ref, get, set, runTransaction } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

// Visitor Counter
const visitorCounterElement = document.getElementById("visitor-count");
const visitorRef = ref(database, "visitorCounter");

// Initialize the visitor counter if it doesn't exist
const initializeVisitorCounter = async () => {
    try {
        const snapshot = await get(visitorRef);
        if (!snapshot.exists()) {
            await set(visitorRef, { count: 0 });
            console.log("Visitor counter initialized to 0.");
        }
    } catch (error) {
        console.error("Error initializing visitor counter:", error);
    }
};

// Update the visitor counter display
const updateVisitorCountDisplay = async () => {
    try {
        const snapshot = await get(visitorRef);
        if (snapshot.exists()) {
            const visitorCount = snapshot.val().count || 0;
            visitorCounterElement.textContent = visitorCount;
        } else {
            console.warn("Visitor counter not found in Firebase.");
            visitorCounterElement.textContent = 0; // Default to 0
        }
    } catch (error) {
        console.error("Error fetching visitor counter:", error);
        visitorCounterElement.textContent = "Error";
    }
};

// Initialize and display the visitor counter on page load
document.addEventListener("DOMContentLoaded", async () => {
    await initializeVisitorCounter();
    await updateVisitorCountDisplay();
});

// Event listener for the "Start" button to capture the username
const userForm = document.getElementById("user-info-form");
(document.getElementById('user-info-form')).addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    const usernameInput = document.getElementById("username");
    const userName = usernameInput.value.trim();

    if (!userName) {
        alert("Моля, напишете твоето име!");
        return;
    }

    // Increment the visitor counter when the user clicks "Start"
    await incrementVisitorCount();

    // Proceed with the usual logic for starting the app
    document.getElementById("first-screen").style.display = "none";
    document.getElementById("second-screen").style.display = "flex";
});

