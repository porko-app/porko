  // Declare userName globally so it is accessible everywhere in the script
  let userName = ""; // Global tracker for the user's name
  
  // DOM ELEMENTS
    const clearHistoryBtn = document.getElementById('clear-history-btn');
    const clearHistoryModal = document.getElementById('clear-history-modal');
    const clearHistoryModalOverlay = document.getElementById('clear-history-modal-overlay');
    const confirmClearBtn = document.getElementById('confirm-clear-btn');
    const cancelClearBtn = document.getElementById('cancel-clear-btn');
    const historyLogBtn = document.getElementById('history-log-btn');
    const historyLogScreen = document.getElementById('history-log-screen');
    const backFromHistoryBtn = document.getElementById('back-from-history-btn');
    const historyList = document.getElementById('history-list');
    const settingsBtn = document.getElementById('settings-btn');
    const settingsScreen = document.getElementById('settings-screen');
    const secondScreen = document.getElementById('second-screen');
    const backFromSettingsBtn = document.getElementById('back-from-settings-btn');
    const visitorCounterElement = document.getElementById('visitor-count');
    const userForm = document.getElementById('user-info-form');


    // FUNCTION: Update Ferret Mood
    function updateFerretMood(units) {
        const states = ['neutral', 'tipsy', 'drunk', 'wobbly'];
        let mood = 'neutral';

        if (units <= 1.5) mood = 'neutral';
        else if (units <= 3.5) mood = 'tipsy';
        else if (units <= 6.0) mood = 'drunk';
        else mood = 'wobbly';

        console.log('Updating ferret mood to:', mood);

// Show the correct mood's image and speech bubble
const ferretElement = document.getElementById(`ferret-${mood}`);
const bubbleElement = document.getElementById(`bubble-${mood}`);
const bubbleTextElement = document.getElementById(`bubble-text-${mood}`);

    // Randomly select a message for the current mood
    const randomMessage = messages[mood][Math.floor(Math.random() * messages[mood].length)];

    if (ferretElement) ferretElement.style.display = 'block';
    if (bubbleElement) bubbleElement.style.display = 'block';
    if (bubbleTextElement) {
        bubbleTextElement.textContent = randomMessage;
        bubbleTextElement.style.display = 'block';
    }
}

function loadHistory() {
    // Retrieve and validate the history from localStorage
    let history = localStorage.getItem('drinkHistory');
    try {
        history = JSON.parse(history);
        if (!Array.isArray(history)) {
            throw new Error('Invalid history format'); // Force fallback to empty array
        }
    } catch (error) {
        console.error('Error parsing history from localStorage:', error);
        history = []; // Default to an empty array if parsing fails
    }

    // Clear the existing history list in the DOM
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';

    // Handle the case where there is no history
    if (history.length === 0) {
        const noHistoryMessage = document.createElement('li');
        noHistoryMessage.textContent = 'Няма записана история.'; // Display message for no history
        noHistoryMessage.style.color = '#cccccc'; // Set light gray color for better visibility
        historyList.appendChild(noHistoryMessage);
        return;
    }

   // Iterate over the history array and create list items for each entry
   history.reverse().forEach(entry => {
    const listItem = document.createElement('li');
    listItem.textContent = `${entry.date} - ${entry.drinkName}, ${entry.amount} мл, ${entry.percentage}% алкохол`;
    historyList.appendChild(listItem);
});
}

    // FUNCTION: Increment Visitor Counter
    function incrementVisitorCount() {
        let visitorCount = parseInt(localStorage.getItem('visitorCount'), 10) || 0;
        visitorCount += 1;
        localStorage.setItem('visitorCount', visitorCount.toString());
        updateVisitorCountDisplay();
    }
    
    // Show History Log Screen
    if (historyLogBtn) {
        historyLogBtn.addEventListener('click', () => {
            loadHistory();
            historyLogScreen.style.display = 'flex';
            settingsScreen.style.display = 'none';
        });
    }

    // Back from History Log Screen
    if (backFromHistoryBtn) {
        backFromHistoryBtn.addEventListener('click', () => {
            historyLogScreen.style.display = 'none';
            settingsScreen.style.display = 'flex';
        });
    }

        // Settings Button
        if (settingsBtn) {
            settingsBtn.addEventListener('click', () => {
                secondScreen.style.display = 'none';
                settingsScreen.style.display = 'flex';
            });
        }

   // Back from Settings Screen
   if (backFromSettingsBtn) {
    backFromSettingsBtn.addEventListener('click', () => {
        settingsScreen.style.display = 'none';
        secondScreen.style.display = 'flex';
    });
}

    // Form Submission - Capture Username
    if (userForm) {
        userForm.addEventListener('submit', event => {
            event.preventDefault();
            const usernameInput = document.getElementById('username');
            userName = usernameInput.value.trim();

            if (!userName) {
                alert('Моля, напишете твоето име!');
                return;
            }

            incrementVisitorCount();
            document.getElementById('first-screen').style.display = 'none';
            document.getElementById('second-screen').style.display = 'flex';
            updateFerretMood(0); // Reset ferret's mood for the new user
        });
    }

// Predefined messages for each mood (some include placeholders for the username)
function getRandomMoodMessages(mood) {}
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

function resetStatistics() {
    // Set statistics to 0
    document.getElementById('weekly-total').textContent = '0.0 единици алкохол';
    document.getElementById('monthly-total').textContent = '0.0 единици алкохол';

    // Optionally, you can also clear any saved statistics in localStorage if needed
    // localStorage.removeItem('weeklyStatistics');
    // localStorage.removeItem('monthlyStatistics');
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

        // Proceed with the usual logic for starting the app
        document.getElementById('first-screen').style.display = 'none';
        document.getElementById('second-screen').style.display = 'flex';
        updateFerretMood(0); // Reset ferret's mood for the new user

// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase, ref, onValue, runTransaction } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2aVdbddoZDY7L_AlLWIwJDMuHxmh0HHk",
    authDomain: "porko-bdad4.firebaseapp.com",
    databaseURL: "https://porko-bdad4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "porko-bdad4",
    storageBucket: "porko-bdad4.appspot.com",
    messagingSenderId: "903004439010",
    appId: "1:903004439010:web:33d37f46d52d1bc7d2b9bb",
    measurementId: "G-PPTSVS7Z1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Reference to the visitor count
const visitorCountRef = ref(database, 'visitorCount');

// Increment the visitor count
runTransaction(visitorCountRef, currentCount => {
    return (currentCount || 0) + 1; // Increment by 1
});

// Display the visitor count
onValue(visitorCountRef, snapshot => {
    const count = snapshot.val();
    document.getElementById('visitor-count').textContent = count || 0;
});
