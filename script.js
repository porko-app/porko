const translations = {
    bg: {
        // Welcome Screen Translations
        welcome1: "Тук ще се запознаеш с твоето ново порче!",
        welcome2: "Как работи?",
        howto1: "• Напиши твоето име за да стартираш приложението",
        howto2: "• Въвеждай твоите напитки и разбери алкохолните ти единици",
        howto3: "• Гледай как порчето ти се променя и какво казва според алкохолните единици",
        start: "Да започнем",
        visitor: "порчета са станали приятели с човека",
        appName: "Порко приложение",

        // First Screen Translations
        firstScreenTitle: "Напиши твоето име",
        firstScreenPlaceholder: "пример: Порко",
        infoButtonAriaLabel: "Покажи информация",
        infoPopupTitle: "Важна информация",
        infoPopupText: "Приложението е за проследяване на консумацията на алкохол и не насърчава прекомерната консумация на алкохол.",
        backButtonAriaLabel: "Затвори информацията",

        // Second Screen Translations
        alcoholUnitsText: "Досега сте изпили <span id='dynamic-units' class='orange-text'>0.0</span> единици алкохол",
        menuButtonAriaLabel: "Меню",
        settingsButtonAriaLabel: "Настройки",

        // Ferret Statuses
        neutralStatuses: [
            "Хей! Всичко е супер!",
            "Чувствам се страхотно! А ти?",
            "Толкова е хубаво да сме заедно!",
            "Хайде да се насладим на деня!"
        ],
        tipsyStatuses: [
            "Юхуу! Чувствам се леко замаян!",
            "Ох, чувствам се приятно развеселен!",
            "Забавляваме се, нали?",
            "Опа, леко ми се върти главата!"
        ],
        drunkStatuses: [
            "Охо, нещата стават по-интересни!",
            "Чувствам се доста... уааа!",
            "Това е малко повече от очакваното!",
            "Ох, всичко изглежда толкова забавно!"
        ],
        wobblyStatuses: [
            "О, не! Вече е твърде много!",
            "Моля, нека си починем за малко!",
            "Чувствам се като в лодка в буря!",
            "Имам нужда от вода..."
        ],

        // Drink Modal and Details
        chooseDrinkTitle: "Избери напитка",
        drinkDetailsTitle: "Напиши информация за",
        alcoholPercentageLabel: "% Алкохол",
        drinkAmountLabel: "Количество в милилитри",
        submitDrinkButton: "OK",
        drinkErrorMessage: "Моля въведете процент на алкохола и милилитри.",
        drinkOptions: {
            whiskey: "Уиски (прибл.40-50%)",
            vodka: "Водка (прибл. 40%)",
            rum: "Ром (прибл. 40%)",
            gin: "Джин (прибл. 36-50%)",
            tequila: "Текила (прибл. 35-50%)"
        }
    },
    en: {
        // Welcome Screen Translations
        welcome1: "Here you will meet your new ferret friend!",
        welcome2: "How does it work?",
        howto1: "• Write your name to start the app",
        howto2: "• Enter your drinks and see your alcohol units",
        howto3: "• Watch your ferret change and talk based on your alcohol units",
        start: "Let's Go",
        visitor: "ferrets have become friends with us",
        appName: "Porko App",

        // First Screen Translations
        firstScreenTitle: "Enter your name",
        firstScreenPlaceholder: "example: Porko",
        infoButtonAriaLabel: "Show information",
        infoPopupTitle: "Important Information",
        infoPopupText: "The app is designed to track alcohol consumption and does not encourage excessive drinking.",
        backButtonAriaLabel: "Close the information",

        // Second Screen Translations
        alcoholUnitsText: "So far, you have consumed <span id='dynamic-units' class='orange-text'>0.0</span> alcohol units",
        menuButtonAriaLabel: "Menu",
        settingsButtonAriaLabel: "Settings",

        // Ferret Statuses
        neutralStatuses: [
            "Hey! Everything is great!",
            "I feel amazing! How about you?",
            "It’s so nice to be together!",
            "Let’s enjoy the day!"
        ],
        tipsyStatuses: [
            "Yoo-hoo! I feel a little tipsy!",
            "Oh, I feel pleasantly cheerful!",
            "We’re having fun, aren’t we?",
            "Oops, my head’s spinning a little!"
        ],
        drunkStatuses: [
            "Oh wow, things are getting interesting!",
            "I feel quite... whoa!",
            "This is a bit more than expected!",
            "Oh, everything looks so funny!"
        ],
        wobblyStatuses: [
            "Oh no! This is too much now!",
            "Please, let’s take a break!",
            "I feel like I’m on a boat in a storm!",
            "I need water..."
        ],

        // Drink Modal and Details
        chooseDrinkTitle: "Choose a Drink",
        drinkDetailsTitle: "Enter details for",
        alcoholPercentageLabel: "% Alcohol",
        drinkAmountLabel: "Amount in milliliters",
        submitDrinkButton: "OK",
        drinkErrorMessage: "Please enter both the alcohol percentage and milliliters.",
        drinkOptions: {
            whiskey: "Whiskey (approx. 40-50%)",
            vodka: "Vodka (approx. 40%)",
            rum: "Rum (approx. 40%)",
            gin: "Gin (approx. 36-50%)",
            tequila: "Tequila (approx. 35-50%)"
        }
    }
};

// === LOAD OR DEFAULT LANGUAGE ===
let currentLanguage = localStorage.getItem('language') || 'bg';

// === LANGUAGE BUTTON UPDATE FUNCTION ===
const langBtn = document.getElementById('language-switch-btn');
if (langBtn) {
    langBtn.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'bg' ? 'en' : 'bg'; // Toggle language
        localStorage.setItem('language', currentLanguage); // Save to localStorage
        updateWelcomeScreenLanguage();
         updateFirstScreenLanguage();
             updateSecondScreenLanguage();
             updateFerretStatusesAndModal();

        updateLangButton(); 
        updateVisitorCountDisplay();
    });
}

// === TRANSLATE WELCOME SCREEN FUNCTION ===
function updateWelcomeScreenLanguage() {
    const t = translations[currentLanguage]; // Get translations for the current language

    // Ensure translations exist for the current language
    if (!t) {
        console.error(`No translations found for language: ${currentLanguage}`);
        return;
    }

    // Update welcome texts
    const paragraphs = document.querySelectorAll('#welcome-screen p');
    if (paragraphs.length >= 2) {
        paragraphs[0].textContent = t.welcome1 || '';
        paragraphs[1].textContent = t.welcome2 || '';
    } else {
        console.error("Welcome screen paragraphs are missing or incorrectly structured.");
    }

    // Update how-to list
    const howtoList = document.querySelectorAll('#welcome-screen ul li');
    if (howtoList.length >= 3) {
        howtoList[0].textContent = t.howto1 || '';
        howtoList[1].textContent = t.howto2 || '';
        howtoList[2].textContent = t.howto3 || '';
    } else {
        console.error("How-to list items are missing or incorrectly structured.");
    }

    // Update start button (alt text)
    const continueBtn = document.querySelector('#continue-btn img');
    if (continueBtn) {
        continueBtn.alt = t.start || '';
    } else {
        console.error("Continue button image is missing.");
    }

    // Update visitor counter label (keep the number from the span)
    const visitorCounter = document.querySelector('#visitor-counter');
    const visitorCount = document.querySelector('#visitor-count');
    if (visitorCounter && visitorCount) {
        visitorCounter.innerHTML = `<span id="visitor-count">${visitorCount.textContent}</span> ${t.visitor || ''}`;
    } else {
        console.error("Visitor counter elements are missing.");
    }

    // Update document title
    document.title = t.appName || 'Porko app';
}

function updateFirstScreenLanguage() {
    const t = translations[currentLanguage]; // Get translations for the current language

    // Ensure translations exist for the current language
    if (!t) {
        console.error(`No translations found for language: ${currentLanguage}`);
        return;
    }

    // Update the title (label text)
    const titleLabel = document.querySelector('#user-info-form label');
    if (titleLabel) {
        titleLabel.textContent = t.firstScreenTitle || '';
    }

    // Update the placeholder for the input field
    const usernameInput = document.getElementById('username');
    if (usernameInput) {
        usernameInput.placeholder = t.firstScreenPlaceholder || '';
    }

    // Update the aria-label for the Info button
    const infoButton = document.getElementById('info-btn');
    if (infoButton) {
        infoButton.setAttribute('aria-label', t.infoButtonAriaLabel || '');
    }

    // Update the Info Popup title
    const infoPopupTitle = document.getElementById('info-title');
    if (infoPopupTitle) {
        infoPopupTitle.textContent = t.infoPopupTitle || '';
    }

    // Update the Info Popup text
    const infoPopupText = document.querySelector('#info-popup p');
    if (infoPopupText) {
        infoPopupText.textContent = t.infoPopupText || '';
    }

    // Update the aria-label for the Back button inside the Info Popup
    const backButton = document.getElementById('back-btn');
    if (backButton) {
        backButton.setAttribute('aria-label', t.backButtonAriaLabel || '');
    }

    console.log('First screen translations updated.');
}

function updateSecondScreenLanguage() {
    const t = translations[currentLanguage]; // Get translations for the current language

    // Ensure translations exist for the current language
    if (!t) {
        console.error(`No translations found for language: ${currentLanguage}`);
        return;
    }

    // Update alcohol units text
    const alcoholUnitsText = document.getElementById('alcohol-units-text');
    if (alcoholUnitsText) {
        alcoholUnitsText.innerHTML = t.alcoholUnitsText || '';
    }

    // Update Menu button aria-label
    const menuButton = document.getElementById('menu-btn');
    if (menuButton) {
        menuButton.setAttribute('aria-label', t.menuButtonAriaLabel || '');
    }

    // Update Settings button aria-label
    const settingsButton = document.getElementById('settings-btn');
    if (settingsButton) {
        settingsButton.setAttribute('aria-label', t.settingsButtonAriaLabel || '');
    }

    console.log('Second screen translations updated.');
}

function updateFerretStatusesAndModal() {
    const t = translations[currentLanguage]; // Get translations for the current language

    // Ensure translations exist for the current language
    if (!t) {
        console.error(`No translations found for language: ${currentLanguage}`);
        return;
    }

    // Update "Choose Drink" modal title
    const chooseDrinkTitle = document.getElementById('drink-modal-title');
    if (chooseDrinkTitle) {
        chooseDrinkTitle.textContent = t.chooseDrinkTitle || '';
    }

    // Update drink options
    const drinkOptions = t.drinkOptions;
    if (drinkOptions) {
        Object.keys(drinkOptions).forEach(drinkId => {
            const drinkButton = document.getElementById(`${drinkId}-btn`);
            if (drinkButton) {
                drinkButton.setAttribute('aria-label', drinkOptions[drinkId]);
                const drinkImage = drinkButton.querySelector('img');
                if (drinkImage) {
                    drinkImage.alt = drinkOptions[drinkId];
                }
            }
        });
    }

    // Update drink details modal
    const drinkDetailsTitle = document.getElementById('drink-details-title');
    if (drinkDetailsTitle) {
        drinkDetailsTitle.textContent = t.drinkDetailsTitle || '';
    }

    const alcoholPercentageLabel = document.querySelector('label[for="alcohol-percentage"]');
    if (alcoholPercentageLabel) {
        alcoholPercentageLabel.textContent = t.alcoholPercentageLabel || '';
    }

    const drinkAmountLabel = document.querySelector('label[for="drink-amount"]');
    if (drinkAmountLabel) {
        drinkAmountLabel.textContent = t.drinkAmountLabel || '';
    }

    const submitDrinkButton = document.getElementById('submit-drink');
    if (submitDrinkButton) {
        submitDrinkButton.textContent = t.submitDrinkButton || '';
    }

    const drinkErrorMessage = document.getElementById('drink-error-title');
    if (drinkErrorMessage) {
        drinkErrorMessage.textContent = t.drinkErrorMessage || '';
    }

    console.log('Ferret statuses and modal translations updated.');
}

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

        // Clear input fields every time the modal opens
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
        // Show custom error modal
        document.getElementById('drink-error-modal').style.display = 'flex';
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
        updateStatistics();

        // Close modals
        document.getElementById('drink-details-modal').style.display = 'none';
        document.getElementById('drink-modal').style.display = 'none';

        // Remove focus from inputs (closes the mobile keyboard)
document.getElementById('alcohol-percentage').blur();
document.getElementById('drink-amount').blur();

// Try to scroll both the window and main app container to the top
window.scrollTo(0, 0);
const mainContainers = [
    document.getElementById('second-screen'),
    document.body, // fallback
    document.documentElement // fallback
];
mainContainers.forEach(container => {
    if (container && typeof container.scrollTop !== "undefined") {
        container.scrollTop = 0;
    }
});

// For Firefox: force a slight reflow after a short timeout
setTimeout(() => {
    window.scrollTo(0, 0);
    mainContainers.forEach(container => {
        if (container && typeof container.scrollTop !== "undefined") {
            container.scrollTop = 0;
        }
    });
}, 100);
    });


    // Event Listener for "Statistics" Button
    const statisticsBtn = document.getElementById('statistics-btn');
    const statisticsScreen = document.getElementById('statistics-screen');
    const settingsScreen = document.getElementById('settings-screen');
    if (statisticsBtn) {
        statisticsBtn.addEventListener('click', () => {
            settingsScreen.style.display = 'none';
            statisticsScreen.style.display = 'flex';
            updateStatistics();
        });
    } else {
        console.error('Statistics button not found.');
    }

    // Event Listener for "Back" Button in Statistics Screen
    const backFromStatisticsBtn = document.getElementById('back-from-statistics-btn');
    if (backFromStatisticsBtn) {
        backFromStatisticsBtn.addEventListener('click', () => {
            statisticsScreen.style.display = 'none';
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
                return sum + (entry.amount * entry.percentage) / 1000;
            }
            return sum;
        }, 0);
        return total.toFixed(1);
    }

    // Function to update statistics in the statistics screen
    function updateStatistics() {
        const now = new Date();

        // Reset mood if needed
        checkAndResetFerretMood();

        // Calculate 24-hour total (exact last 24 hours)
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

    // Function to reset the ferret's mood to neutral
    function resetFerretMoodToNeutral() {
        console.log("Resetting ferret's mood to neutral...");
        updateFerretMood(totalUnits);
        localStorage.setItem('lastMoodReset', new Date().toISOString());
    }

    // Function to check if the ferret's mood needs to be reset
    function checkAndResetFerretMood() {
        const lastResetTime = localStorage.getItem('lastMoodReset');
        const now = new Date();

        if (!lastResetTime || new Date(lastResetTime).getTime() < now.getTime() - 10 * 60 * 60 * 1000) {
            resetFerretMoodToNeutral();
        }
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
    const secondScreen = document.getElementById('second-screen');
    const backFromSettingsBtn = document.getElementById('back-from-settings-btn');

    if (settingsBtn) {
        settingsBtn.addEventListener('click', () => {
            secondScreen.style.display = 'none';
            settingsScreen.style.display = 'flex';
            updateStatistics();
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

    // FAQ Alcohol Info Button Logic
    const faqAlcoholInfoBtn = document.getElementById('faq-alcohol-info-btn');
    const faqScreen = document.getElementById('faq-screen');
    const backFromFaqBtn = document.getElementById('back-from-faq-btn');

    if (faqAlcoholInfoBtn && faqScreen && backFromFaqBtn) {
        faqAlcoholInfoBtn.addEventListener('click', () => {
            faqScreen.style.display = 'flex';
            settingsScreen.style.display = 'none';
        });

        backFromFaqBtn.addEventListener('click', () => {
            faqScreen.style.display = 'none';
            settingsScreen.style.display = 'flex';
        });
    } else {
        console.error('FAQ elements not found.');
    }

    // Terms of Use
    const termsOfUseBtn = document.getElementById('terms-of-use-btn');
    const termsOfUseScreen = document.getElementById('terms-of-use-screen');
    if (termsOfUseBtn) {
        termsOfUseBtn.addEventListener('click', () => {
            settingsScreen.style.display = 'none';
            termsOfUseScreen.style.display = 'flex';
        });
    } else {
        console.error('Terms of Use button not found.');
    }

    const backFromTermsBtn = document.getElementById('back-from-terms-btn');
    if (backFromTermsBtn) {
        backFromTermsBtn.addEventListener('click', () => {
            termsOfUseScreen.style.display = 'none';
            settingsScreen.style.display = 'flex';
        });
    } else {
        console.error('Back button in Terms of Use screen not found.');
    }

    // QR Code
    const qrCodeBtn = document.getElementById('qr-code-btn');
    const qrCodeScreen = document.getElementById('qr-code-screen');
    if (qrCodeBtn) {
        qrCodeBtn.addEventListener('click', () => {
            settingsScreen.style.display = 'none';
            qrCodeScreen.style.display = 'flex';
        });
    } else {
        console.error('QR Code button not found.');
    }

    const backFromQrBtn = document.getElementById('back-from-qr-btn');
    if (backFromQrBtn) {
        backFromQrBtn.addEventListener('click', () => {
            qrCodeScreen.style.display = 'none';
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

    document.getElementById('continue-btn').addEventListener('click', () => {
        document.getElementById('welcome-screen').style.display = 'none';
        document.getElementById('first-screen').style.display = 'flex';
    });

    // Event listener for the "Start" button to capture the username
    const userForm = document.getElementById('user-info-form');
    userForm.addEventListener('submit', async event => {
        event.preventDefault();
        const usernameInput = document.getElementById('username');
        userName = usernameInput.value.trim();

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

    // Count unique visitor per device
    if (!localStorage.getItem('visitorCounted')) {
        incrementVisitorCount();
        localStorage.setItem('visitorCounted', 'true');
    }

        document.getElementById('first-screen').style.display = 'none';
        document.getElementById('second-screen').style.display = 'flex';
        updateFerretMood(totalUnits);
        incrementVisitorCount();
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

    const closeDrinkErrorBtn = document.getElementById('close-drink-error-btn');
if (closeDrinkErrorBtn) {
    closeDrinkErrorBtn.addEventListener('click', () => {
        document.getElementById('drink-error-modal').style.display = 'none';
    });
} else {
    console.error('Close button for drink error modal not found.');
}

    // History Log Button Logic
    const historyLogBtn = document.getElementById('history-log-btn');
    const historyLogScreen = document.getElementById('history-log-screen');
    const backFromHistoryBtn = document.getElementById('back-from-history-btn');
    const historyList = document.getElementById('history-list');

    // Function to load history from localStorage
    function loadHistory() {
        const history = JSON.parse(localStorage.getItem('drinkHistory')) || [];
        historyList.innerHTML = '';

        if (history.length === 0) {
            const noHistoryMessage = document.createElement('li');
            noHistoryMessage.textContent = 'Няма записана история.';
            noHistoryMessage.style.color = '#cccccc';
            historyList.appendChild(noHistoryMessage);
            return;
        }

        // Show newest first, only once per entry
history.slice().reverse().forEach(entry => {
    const listItem = document.createElement('li');
    let formattedDate = '';
    if (entry.date) {
        const dateObj = new Date(entry.date);
        formattedDate = !isNaN(dateObj)
            ? dateObj.toLocaleString(undefined, { hour12: false })
            : entry.date;
    }
    listItem.textContent = `${formattedDate} - ${entry.drinkName}, ${entry.amount} мл, ${entry.percentage}% алкохол`;
    historyList.appendChild(listItem);
});
    }

    // Clear History Button Logic
    const clearHistoryBtn = document.getElementById('clear-history-btn');
    const clearHistoryModal = document.getElementById('clear-history-modal');
    const confirmClearBtn = document.getElementById('confirm-clear-btn');
    const cancelClearBtn = document.getElementById('cancel-clear-btn');

    clearHistoryBtn.addEventListener('click', () => {
        clearHistoryModal.style.display = 'flex';
    });

    confirmClearBtn.addEventListener('click', () => {
        localStorage.removeItem('drinkHistory');
        loadHistory();
        clearHistoryModal.style.display = 'none';
    });

    cancelClearBtn.addEventListener('click', () => {
        clearHistoryModal.style.display = 'none';
    });

    // Event listener for the "History Log" button
    if (historyLogBtn) {
        historyLogBtn.addEventListener('click', () => {
            loadHistory();
            historyLogScreen.style.display = 'flex';
            settingsScreen.style.display = 'none';
        });
    } else {
        console.error('History Log button not found.');
    }

    if (backFromHistoryBtn) {
        backFromHistoryBtn.addEventListener('click', () => {
            historyLogScreen.style.display = 'none';
            settingsScreen.style.display = 'flex';
        });
    } else {
        console.error('Back button in History Log screen not found.');
    }

    // Change your name logic
    const changeNameBtn = document.getElementById('change-name-btn');
    const firstScreen = document.getElementById('first-screen');
    if (changeNameBtn) {
        changeNameBtn.addEventListener('click', () => {
            settingsScreen.style.display = 'none';
            firstScreen.style.display = 'flex';
        });
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

// Migrate locale dates to ISO (run before any stats/history are shown)
function isIsoDateString(str) {
    return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(str);
}
function migrateHistoryDatesToIso() {
    const history = JSON.parse(localStorage.getItem('drinkHistory')) || [];
    let updated = false;
    const migrated = history.map(entry => {
        if (entry.date && !isIsoDateString(entry.date)) {
            const parsed = new Date(entry.date);
            if (!isNaN(parsed.getTime())) {
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
document.addEventListener('DOMContentLoaded', () => {
    migrateHistoryDatesToIso();
});

// Firebase Visitor Counter logic (unchanged)
import { database } from "./firebase.js";
import { ref, get, set, runTransaction } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

const visitorCounterElement = document.getElementById("visitor-count");
const visitorRef = ref(database, "visitorCounter");

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

const updateVisitorCountDisplay = async () => {
    try {
        const snapshot = await get(visitorRef);
        if (snapshot.exists()) {
            const visitorCount = snapshot.val().count || 0;
            visitorCounterElement.textContent = visitorCount;
        } else {
            console.warn("Visitor counter not found in Firebase.");
            visitorCounterElement.textContent = 0;
        }
    } catch (error) {
        console.error("Error fetching visitor counter:", error);
        visitorCounterElement.textContent = "Error";
    }
};

document.addEventListener("DOMContentLoaded", async () => {
    await initializeVisitorCounter();
    await updateVisitorCountDisplay();
});

const incrementVisitorCount = () => {
    runTransaction(visitorRef, (currentData) => {
        if (!currentData || typeof currentData.count !== "number") {
            return { count: 1 };
        }
        return { count: currentData.count + 1 };
    })
    .then(() => {
        console.log("Visitor counter updated successfully!");
        updateVisitorCountDisplay();
    })
    .catch((error) => {
        console.error("Error updating visitor counter:", error);
    });
};

const termsOfUseBtn = document.getElementById('terms-of-use-btn');
const termsOfUseScreen = document.getElementById('terms-of-use-screen');
const settingsScreen = document.getElementById('settings-screen');
const backFromTermsBtn = document.getElementById('back-from-terms-btn');

if (termsOfUseBtn && termsOfUseScreen && settingsScreen && backFromTermsBtn) {
    termsOfUseBtn.addEventListener('click', () => {
        settingsScreen.style.display = 'none';
        termsOfUseScreen.style.display = 'flex';
    });
    backFromTermsBtn.addEventListener('click', () => {
        termsOfUseScreen.style.display = 'none';
        settingsScreen.style.display = 'flex';
    });
} else {
    console.error('Terms of Use elements not found.');
}
