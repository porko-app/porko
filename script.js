document.addEventListener('DOMContentLoaded', () => {
    // Global variables
    let selectedDrink = ""; // Global variable for selected drink
    let totalUnits = 0; // Global tracker for alcohol units
    let userName = ""; // Global tracker for the user's name

    // Initialize Visitor Counter
    const visitorCounterElement = document.getElementById('visitor-count');

    // Function to update the visitor counter display
    const updateVisitorCountDisplay = () => {
        const visitorCount = parseInt(localStorage.getItem('visitorCount'), 10) || 0;
        visitorCounterElement.textContent = visitorCount;
    };

    // Function to increment the visitor counter
    const incrementVisitorCount = () => {
        let visitorCount = parseInt(localStorage.getItem('visitorCount'), 10) || 0;
        visitorCount += 1;
        localStorage.setItem('visitorCount', visitorCount.toString());
        updateVisitorCountDisplay(); // Update the display with the new count
    };

    // Display the current visitor count on the welcome screen
    updateVisitorCountDisplay();

    // Welcome screen logic
    document.getElementById('welcome-screen').style.display = 'flex';
    document.getElementById('first-screen').style.display = 'none';
    document.getElementById('second-screen').style.display = 'none';
    document.getElementById('settings-screen').style.display = 'none';

    // Continue button on welcome screen
    document.getElementById('continue-btn').addEventListener('click', () => {
        document.getElementById('welcome-screen').style.display = 'none'; // Hide the welcome screen
        document.getElementById('first-screen').style.display = 'flex';  // Show the first screen
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Event listener for the "Start" button to capture the username
    const userForm = document.getElementById('user-info-form');
    userForm.addEventListener('submit', event => {
        event.preventDefault(); // Prevent form submission from refreshing the page
        const usernameInput = document.getElementById('username');
        userName = usernameInput.value.trim(); // Capture the username

        if (!userName) {
            alert('Моля, напишете твоето име!'); // Prompt the user to enter a name
            return;
        }

        // Increment the visitor counter when the user clicks "Start"
        incrementVisitorCount();

        // Proceed with the usual logic for starting the app
        document.getElementById('first-screen').style.display = 'none';
        document.getElementById('second-screen').style.display = 'flex';
        updateFerretMood(0); // Reset the ferret's mood for the new user
    });

    // Function to update the ferret's mood based on alcohol units
    function updateFerretMood(units) {
        const states = ['neutral', 'tipsy', 'drunk', 'wobbly'];
        let mood = 'neutral';

        // Determine the mood based on alcohol units
        if (units <= 1.5) mood = 'neutral';
        else if (units <= 3.5) mood = 'tipsy';
        else if (units <= 6.0) mood = 'drunk';
        else mood = 'wobbly';

        console.log('Updating ferret mood to:', mood);

        // Hide all mood-related elements (images and speech bubbles)
        states.forEach(state => {
            const ferretElement = document.getElementById(`ferret-${state}`);
            const bubbleElement = document.getElementById(`bubble-${state}`);
            const bubbleTextElement = document.getElementById(`bubble-text-${state}`);

            if (ferretElement) ferretElement.style.display = 'none';
            if (bubbleElement) bubbleElement.style.display = 'none';
            if (bubbleTextElement) bubbleTextElement.style.display = 'none';
        });

        // Predefined messages for each mood
        const messages = {
            neutral: [`Хей, ${userName}! Всичко е супер!`, "Чувствам се страхотно! А ти?"],
            tipsy: [`Юхуу, ${userName}! Чувствам се леко замаян!`, "Опа, леко ми се върти главата!"],
            drunk: [`Охо, ${userName}, нещата стават по-интересни!`, "Ох, всичко изглежда толкова забавно!"],
            wobbly: ["О, не! Вече е твърде много!", `${userName}, имам нужда от вода...`]
        };

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
});
document.addEventListener('DOMContentLoaded', () => {
    let selectedDrink = ""; // Global variable for selected drink

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
});
document.addEventListener('DOMContentLoaded', () => {
    const historyList = document.getElementById('history-list');
    const clearHistoryBtn = document.getElementById('clear-history-btn');
    const clearHistoryModal = document.getElementById('clear-history-modal');
    const confirmClearBtn = document.getElementById('confirm-clear-btn');
    const cancelClearBtn = document.getElementById('cancel-clear-btn');

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

        history.reverse().forEach(entry => {
            const listItem = document.createElement('li');
            listItem.textContent = `${entry.date} - ${entry.drinkName}, ${entry.amount} мл, ${entry.percentage}% алкохол`;
            historyList.appendChild(listItem);
        });
    }

    // Clear history logic
    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener('click', () => {
            clearHistoryModal.style.display = 'block';
        });
    }

    if (cancelClearBtn) {
        cancelClearBtn.addEventListener('click', () => {
            clearHistoryModal.style.display = 'none';
        });
    }

    if (confirmClearBtn) {
        confirmClearBtn.addEventListener('click', () => {
            localStorage.removeItem('drinkHistory'); // Clear history
            alert('History cleared successfully!');
            loadHistory(); // Reload the history list
            clearHistoryModal.style.display = 'none';
        });
    }
});
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase, ref, onValue, runTransaction } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2VdbddoZDY7L_AlLWIwJDMuHxmh0HHk",
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

// Increment visitor count on Firebase
runTransaction(visitorCountRef, currentCount => {
    return (currentCount || 0) + 1; // Increment by 1
});

// Display the visitor count
onValue(visitorCountRef, snapshot => {
    const count = snapshot.val();
    document.getElementById('visitor-count').textContent = count || 0;
});
