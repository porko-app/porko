const translations = {
    bg: {
        welcome1: "Тук ще се запознаеш с твоето ново порче!",
        welcome2: "Как работи?",
        howto1: "• Напиши твоето име за да стартираш приложението",
        howto2: "• Въвеждай твоите напитки и разбери алкохолните ти единици",
        howto3: "• Гледай как порчето ти се променя и какво казва според алкохолните единици",
        start: "Продължи",
        visitor: "порчета са станали приятели с човека",
        appName: "Порко приложение",
        usernameLabel: "Напиши твоето име",
        usernamePlaceholder: "пример: Порко",
        startBtnAlt: "Старт",
        infoBtnAlt: "Покажи информация",
        infoTitle: "Важна информация",
        infoText: "Приложението е за проследяване на консумацията на алкохол и не насърчава прекомерната консумация на алкохол. Бъдете отговорни и се грижете за здравето си.",
        backBtnAlt: "Затвори информацията",
        alcoholUnitsLabel: "Алкохолни единици",
        chooseDrink: "Избери напитка",
        soFarDrank: "Досега сте изпили {units} единици алкохол",
        ferretStates: {
            neutral: [
                "Хей, {name}! Всичко е супер!",
                "Чувствам се страхотно! А ти?",
                "Толкова е хубаво да сме заедно, {name}!",
                "Хайде да се насладим на деня!"
            ],
            tipsy: [
                "Юхуу, {name}! Чувствам се леко замаян!",
                "Ох, чувствам се приятно развеселен!",
                "Хей, {name}, забавляваме се, нали?",
                "Опа, леко ми се върти главата!"
            ],
            drunk: [
                "Охо, {name}, нещата стават по-интересни!",
                "Чувствам се доста... уааа!",
                "Това е малко повече от очакваното, {name}!",
                "Ох, всичко изглежда толкова забавно!"
            ],
            wobbly: [
                "О, не! Вече е твърде много!",
                "Моля, {name}, нека си починем за малко!",
                "Чувствам се като в лодка в буря!",
                "{name}, имам нужда от вода..."
            ]
        }
    },
    en: {
        welcome1: "Here you will meet your new ferret friend!",
        welcome2: "How does it work?",
        howto1: "• Write your name to start the app",
        howto2: "• Enter your drinks and see your alcohol units",
        howto3: "• Watch your ferret change and talk based on your alcohol units",
        start: "Continue",
        visitor: "ferrets have became friends with us",
        appName: "Porko App",
        usernameLabel: "Write your name",
        usernamePlaceholder: "e.g. Porko",
        startBtnAlt: "Start",
        infoBtnAlt: "Show information",
        infoTitle: "Important Information",
        infoText: "This app is for tracking alcohol consumption and does not encourage excessive drinking. Please be responsible and take care of your health.",
        backBtnAlt: "Close information",
        alcoholUnitsLabel: "Alcohol units",
        chooseDrink: "Choose a drink",
        soFarDrank: "So far you have drunk {units} alcohol units",
        ferretStates: {
            neutral: [
                "Hey, {name}! Everything is great!",
                "I'm feeling awesome! How about you?",
                "It's so nice to be together, {name}!",
                "Let's enjoy the day!"
            ],
            tipsy: [
                "Yoohoo, {name}! I'm feeling a bit tipsy!",
                "Oh, I feel pleasantly buzzed!",
                "Hey, {name}, we're having fun, aren't we?",
                "Oops, my head is spinning a little!"
            ],
            drunk: [
                "Whoa, {name}, things are getting interesting!",
                "I'm feeling pretty... whoa!",
                "This is a bit more than expected, {name}!",
                "Oh, everything looks so fun!"
            ],
            wobbly: [
                "Oh no! That's too much already!",
                "Please, {name}, let's rest for a bit!",
                "I feel like I'm on a boat in a storm!",
                "{name}, I need water..."
            ]
        }
    }
};

// === LOAD OR DEFAULT LANGUAGE ===
let currentLanguage = localStorage.getItem('language') || 'en';

// === LANGUAGE BUTTON UPDATE FUNCTION ===
function updateLangButton() {
    const langBtn = document.getElementById('language-switch-btn');
    if (langBtn) {
        langBtn.textContent = currentLanguage === 'bg' ? 'EN' : 'BG';
    } else {
        console.error('Language switch button not found.');
    }
}

const langBtn = document.getElementById('language-switch-btn');
if (langBtn) {
    langBtn.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'bg' ? 'en' : 'bg'; // Toggle language
        localStorage.setItem('language', currentLanguage); // Save to localStorage
        updateWelcomeScreenLanguage();
         updateFirstScreenLanguage();
         updateSecondScreenLanguage();
         updateFerretMood(totalUnits)
        updateLangButton(); // Update button text
        updateVisitorCountDisplay(); // Ensure counter stays updated after translation
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
// Update start button (alt text and label)
const continueBtn = document.querySelector('#continue-btn');
const continueBtnLabel = document.querySelector('#continue-btn-label');
if (continueBtnLabel) {
    continueBtnLabel.textContent = t.start || '';
    continueBtn.setAttribute('aria-label', t.start || '');
} else {
    console.error("Continue button label is missing.");
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

// FIRST SCREEN TRANSLATE
function updateFirstScreenLanguage() {
    const t = translations[currentLanguage];

    // Label for username
    const usernameLabel = document.querySelector('#user-info-form label[for="username"]');
    if (usernameLabel) usernameLabel.textContent = t.usernameLabel;

    // Input placeholder
    const usernameInput = document.getElementById('username');
    if (usernameInput) usernameInput.placeholder = t.usernamePlaceholder;

    // Start button image alt
    const startBtnImg = document.querySelector('#start-btn img');
    if (startBtnImg) startBtnImg.alt = t.startBtnAlt;

    // Info button image alt & aria-label
    const infoBtnImg = document.querySelector('#info-btn img');
    const infoBtn = document.getElementById('info-btn');
    if (infoBtnImg) infoBtnImg.alt = t.infoBtnAlt;
    if (infoBtn) infoBtn.setAttribute('aria-label', t.infoBtnAlt);

    // Info popup title
    const infoTitle = document.getElementById('info-title');
    if (infoTitle) infoTitle.textContent = t.infoTitle;

    // Info popup text
    const infoText = document.querySelector('#info-popup p');
    if (infoText) infoText.textContent = t.infoText;

    // Info popup back button alt & aria-label
    const backBtnImg = document.querySelector('#back-btn img');
    const backBtn = document.getElementById('back-btn');
    if (backBtnImg) backBtnImg.alt = t.backBtnAlt;
    if (backBtn) backBtn.setAttribute('aria-label', t.backBtnAlt);
}

function updateSecondScreenLanguage() {
    const t = translations[currentLanguage];

    // Alcohol units label
    const unitsLabel = document.getElementById('alcohol-units-label');
    if (unitsLabel) unitsLabel.textContent = t.alcoholUnitsLabel;
    
    // Choose drink button/label
    const chooseDrinkBtn = document.getElementById('menu-btn');
    if (chooseDrinkBtn) chooseDrinkBtn.textContent = t.chooseDrink;
}

// === GLOBAL VARIABLES FOR STATE PERSISTENCE ===
let selectedDrink = "";
let totalUnits = 0;
let userName = "";
let lastUnitsUpdate = null;

// === ALCOHOL & FERRET STATE PERSISTENCE ===
function saveUnitsToStorage() {
    localStorage.setItem('totalUnits', totalUnits);
    localStorage.setItem('lastUnitsUpdate', Date.now());
}

function restoreUnitsFromStorage() {
    const savedUnits = localStorage.getItem('totalUnits');
    const savedUpdate = localStorage.getItem('lastUnitsUpdate');
    const now = Date.now();

    if (savedUnits !== null && savedUpdate !== null) {
        const hoursPassed = (now - Number(savedUpdate)) / (1000 * 60 * 60);
        if (hoursPassed > 10) {
            // More than 10 hours passed: reset units and update time
            totalUnits = 0;
            localStorage.setItem('totalUnits', 0);
            localStorage.setItem('lastUnitsUpdate', now);
            updateAlcoholUnitsDisplay();
            updateFerretMood(0);
        } else {
            totalUnits = parseFloat(savedUnits);
            updateAlcoholUnitsDisplay();
            updateFerretMood(totalUnits);
        }
    } else {
        // No previous data: initialize
        totalUnits = 0;
        localStorage.setItem('totalUnits', 0);
        localStorage.setItem('lastUnitsUpdate', now);
        updateAlcoholUnitsDisplay();
        updateFerretMood(0);
    }
}

// === FUNCTION: FERRET MOOD ===
function updateFerretMood(units) {
    const states = ['neutral', 'tipsy', 'drunk', 'wobbly'];
    let mood = 'neutral';
    if (units <= 4.0) mood = 'neutral';
    else if (units <= 7.0) mood = 'tipsy';
    else if (units <= 10.0) mood = 'drunk';
    else mood = 'wobbly';

    const t = translations[currentLanguage];
    const messages = t.ferretStates[mood];

    // Defensive check
    if (!messages || !messages.length) {
        console.error('No messages for this mood/language!');
        return;
    }

    const randomMsg = messages[Math.floor(Math.random() * messages.length)].replace('{name}', userName);

    // Hide all mood elements
    states.forEach(state => {
        const ferretElement = document.getElementById(`ferret-${state}`);
        const bubbleElement = document.getElementById(`bubble-${state}`);
        const bubbleTextElement = document.getElementById(`bubble-text-${state}`);

        if (ferretElement) ferretElement.style.display = 'none';
        if (bubbleElement) bubbleElement.style.display = 'none';
        if (bubbleTextElement) bubbleTextElement.style.display = 'none';
    });

    // Show the correct elements
    const ferretElement = document.getElementById(`ferret-${mood}`);
    const bubbleElement = document.getElementById(`bubble-${mood}`);
    const bubbleTextElement = document.getElementById(`bubble-text-${mood}`);

    if (ferretElement) ferretElement.style.display = 'block';
    if (bubbleElement) bubbleElement.style.display = 'block';
    if (bubbleTextElement) {
        bubbleTextElement.textContent = randomMsg;
        bubbleTextElement.style.display = 'block';
    }
}

// === FUNCTION: CALCULATE ALCOHOL UNITS ===
function calculateAlcoholUnits(alcoholPercentage, drinkAmount) {
    return (alcoholPercentage * drinkAmount) / 1000;
}

// === FUNCTION: UPDATE ALCOHOL UNITS DISPLAY ===
function updateAlcoholUnitsDisplay() {
    const unitsTextElement = document.getElementById('dynamic-units');
      const t = translations[currentLanguage];
    const formatted = t.soFarDrank.replace('{units}', `<span class="orange-text">${totalUnits.toFixed(2)}</span>`);
    document.getElementById('alcohol-units-text').innerHTML = formatted;
    saveUnitsToStorage();
}

// === FUNCTION: OPEN DRINK DETAILS MODAL ===
function openDetailsModal(drinkName) {
    selectedDrink = drinkName;

    const drinkDetailsModal = document.getElementById('drink-details-modal');
    const modalTitle = drinkDetailsModal.querySelector('h2');
    modalTitle.textContent = `Въведи повече информация за ${drinkName}`;

    document.getElementById('alcohol-percentage').value = '';
    document.getElementById('drink-amount').value = '';

    drinkDetailsModal.style.display = 'flex';
    document.getElementById('drink-modal').style.display = 'none';
}

// === FUNCTION: SAVE HISTORY ENTRY ===
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

// === FUNCTION: MIGRATE HISTORY DATES TO ISO ===
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

// === FIREBASE VISITOR COUNTER LOGIC (UNCHANGED) ===
import { database } from "./firebase.js";
import { ref, get, set, runTransaction } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";


const auth = getAuth();
signInAnonymously(auth)
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
       const visitorCounterElement = document.getElementById("visitor-count");
    if (!visitorCounterElement) {
        console.error("Visitor counter element not found in DOM.");
        return;
    }
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

// === APP INIT ===
document.addEventListener('DOMContentLoaded', () => {
    updateWelcomeScreenLanguage();
    updateFirstScreenLanguage();
    updateLangButton();
    migrateHistoryDatesToIso();
    restoreUnitsFromStorage();
    // Firebase visitor counter
    initializeVisitorCounter().then(updateVisitorCountDisplay);

    // --- DRINKS LOGIC ---
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

    // --- DRINK DETAILS SUBMIT ---
    document.getElementById('submit-drink').addEventListener('click', () => {
        const alcoholPercentage = parseFloat(document.getElementById('alcohol-percentage').value);
        const drinkAmount = parseFloat(document.getElementById('drink-amount').value);

        if (isNaN(alcoholPercentage) || isNaN(drinkAmount)) {
            document.getElementById('drink-error-modal').style.display = 'flex';
            return;
        }

        const units = calculateAlcoholUnits(alcoholPercentage, drinkAmount);
        totalUnits += units;
        updateAlcoholUnitsDisplay();
        updateFerretMood(totalUnits);
        saveHistoryEntry(selectedDrink, drinkAmount, alcoholPercentage);
        updateStatistics();

        document.getElementById('drink-details-modal').style.display = 'none';
        document.getElementById('drink-modal').style.display = 'none';

        document.getElementById('alcohol-percentage').blur();
        document.getElementById('drink-amount').blur();
        window.scrollTo(0, 0);

        const mainContainers = [
            document.getElementById('second-screen'),
            document.body,
            document.documentElement
        ];
        mainContainers.forEach(container => {
            if (container && typeof container.scrollTop !== "undefined") {
                container.scrollTop = 0;
            }
        });

        setTimeout(() => {
            window.scrollTo(0, 0);
            mainContainers.forEach(container => {
                if (container && typeof container.scrollTop !== "undefined") {
                    container.scrollTop = 0;
                }
            });
        }, 100);
    });

    // --- STATISTICS & SETTINGS ---
    const statisticsBtn = document.getElementById('statistics-btn');
    const statisticsScreen = document.getElementById('statistics-screen');
    const settingsScreen = document.getElementById('settings-screen');
    if (statisticsBtn) {
        statisticsBtn.addEventListener('click', () => {
            settingsScreen.style.display = 'none';
            statisticsScreen.style.display = 'flex';
            updateStatistics();
        });
    }
    const backFromStatisticsBtn = document.getElementById('back-from-statistics-btn');
    if (backFromStatisticsBtn) {
        backFromStatisticsBtn.addEventListener('click', () => {
            statisticsScreen.style.display = 'none';
            settingsScreen.style.display = 'flex';
        });
    }

    // --- CALCULATE STATISTICS ---
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

    function updateStatistics() {
        const now = new Date();
        // Reset mood if needed
        checkAndResetFerretMood();
        const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
        const dailyTotal = calculateTotalAlcohol(oneDayAgo, now);
        document.getElementById('daily-total').textContent = `${dailyTotal} единици алкохол`;

        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(now.getDate() - 7);
        const weeklyTotal = calculateTotalAlcohol(oneWeekAgo, now);
        document.getElementById('weekly-total').textContent = `${weeklyTotal} единици алкохол`;

        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const monthlyTotal = calculateTotalAlcohol(startOfMonth, now);
        document.getElementById('monthly-total').textContent = `${monthlyTotal} единици алкохол`;
    }

    // --- FERRET MOOD RESET LOGIC: 10 HOUR ---
    function resetFerretMoodToNeutral() {
        totalUnits = 0;
        updateAlcoholUnitsDisplay();
        updateFerretMood(0);
        localStorage.setItem('totalUnits', 0);
        localStorage.setItem('lastUnitsUpdate', Date.now());
        localStorage.setItem('lastMoodReset', new Date().toISOString());
    }

    function checkAndResetFerretMood() {
        const lastResetTime = localStorage.getItem('lastMoodReset');
        const lastUpdate = localStorage.getItem('lastUnitsUpdate');
        const now = Date.now();

        let shouldReset = false;
        if (lastUpdate && (now - Number(lastUpdate)) > 10 * 60 * 60 * 1000) {
            shouldReset = true;
        }
        if (!lastResetTime || shouldReset) {
            resetFerretMoodToNeutral();
        }
    }

    // --- MODAL & UI BUTTONS ---
    // Info popup
    const infoBtn = document.getElementById('info-btn');
    const infoPopup = document.getElementById('info-popup');
    const backBtn = document.getElementById('back-btn');
    const termsFromInfoBtn = document.getElementById('terms-from-info-btn'); // New button in info popup
    const termsOfUseScreen = document.getElementById('terms-of-use-screen');
    const firstScreen = document.getElementById('first-screen');
    const backFromTermsBtn = document.getElementById('back-from-terms-btn');
    if (infoBtn) {
        infoBtn.addEventListener('click', () => {
            infoPopup.style.display = 'flex';
            setTimeout(() => (infoPopup.style.opacity = 1), 10);
        });
    }

if (termsFromInfoBtn && termsOfUseScreen && infoPopup) {
    termsFromInfoBtn.addEventListener('click', () => {
        infoPopup.style.opacity = 0;
        setTimeout(() => {
            infoPopup.style.display = 'none';
            // Hide all app containers, then show terms
            document.querySelectorAll('.app-container').forEach(el => el.style.display = 'none');
            termsOfUseScreen.style.display = 'flex';
        }, 300);
    });
}

    if (backBtn) {
        backBtn.addEventListener('click', () => {
            infoPopup.style.opacity = 0;
            setTimeout(() => (infoPopup.style.display = 'none'), 300);
        });
    }

    // Settings
    const settingsBtn = document.getElementById('settings-btn');
    const secondScreen = document.getElementById('second-screen');
    const backFromSettingsBtn = document.getElementById('back-from-settings-btn');
    if (settingsBtn) {
        settingsBtn.addEventListener('click', () => {
            secondScreen.style.display = 'none';
            settingsScreen.style.display = 'flex';
            updateStatistics();
        });
    }
    if (backFromSettingsBtn) {
        backFromSettingsBtn.addEventListener('click', () => {
            settingsScreen.style.display = 'none';
            secondScreen.style.display = 'flex';
        });
    }

    // FAQ
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
    }

    // Terms of Use
    const termsOfUseBtn = document.getElementById('terms-of-use-btn');
    if (termsOfUseBtn) {
        termsOfUseBtn.addEventListener('click', () => {
            settingsScreen.style.display = 'none';
            termsOfUseScreen.style.display = 'flex';
        });
    }

if (backFromTermsBtn) {
    backFromTermsBtn.addEventListener('click', () => {
        // If first screen is hidden, go to settings; if not, go to first screen
        if (settingsScreen && settingsScreen.style.display === 'flex') {
            termsOfUseScreen.style.display = 'none';
            settingsScreen.style.display = 'flex';
        } else if (firstScreen) {
            termsOfUseScreen.style.display = 'none';
            firstScreen.style.display = 'flex';
        }
    });
} else {
    console.error('Back button in Terms of Use screen not found.');
}

    // QR Code
    const qrCodeBtn = document.getElementById('qr-code-btn');
    const qrCodeScreen = document.getElementById('qr-code-screen');
    const backFromQrBtn = document.getElementById('back-from-qr-btn');
    if (qrCodeBtn) {
        qrCodeBtn.addEventListener('click', () => {
            settingsScreen.style.display = 'none';
            qrCodeScreen.style.display = 'flex';
        });
    }
    if (backFromQrBtn) {
        backFromQrBtn.addEventListener('click', () => {
            qrCodeScreen.style.display = 'none';
            settingsScreen.style.display = 'flex';
        });
    }

    // Welcome screen logic
    document.getElementById('welcome-screen').style.display = 'flex';
    document.getElementById('first-screen').style.display = 'none';
    document.getElementById('second-screen').style.display = 'none';
    document.getElementById('settings-screen').style.display = 'none';

const continueBtn = document.getElementById('continue-btn');
const welcomeScreen = document.getElementById('welcome-screen');
if (continueBtn && welcomeScreen && firstScreen) {
    continueBtn.addEventListener('click', () => {
        welcomeScreen.style.display = 'none';
        firstScreen.style.display = 'flex';
    });
}


    // User info form (Start)
    const userForm = document.getElementById('user-info-form');
    userForm.addEventListener('submit', async event => {
        event.preventDefault();
        const usernameInput = document.getElementById('username');
        userName = usernameInput.value.trim();

       if (!userName) {
            alert(translations[currentLanguage].emptyNameAlert);
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
    });

    // Choose drink
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

    // Drink error modal
    const closeDrinkErrorBtn = document.getElementById('close-drink-error-btn');
    if (closeDrinkErrorBtn) {
        closeDrinkErrorBtn.addEventListener('click', () => {
            document.getElementById('drink-error-modal').style.display = 'none';
        });
    }

    // History Log Screen
    const historyLogBtn = document.getElementById('history-log-btn');
    const historyLogScreen = document.getElementById('history-log-screen');
    const backFromHistoryBtn = document.getElementById('back-from-history-btn');
    const historyList = document.getElementById('history-list');
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

    // Clear history modal
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

    // History log open/close
    if (historyLogBtn) {
        historyLogBtn.addEventListener('click', () => {
            loadHistory();
            historyLogScreen.style.display = 'flex';
            settingsScreen.style.display = 'none';
        });
    }
    if (backFromHistoryBtn) {
        backFromHistoryBtn.addEventListener('click', () => {
            historyLogScreen.style.display = 'none';
            settingsScreen.style.display = 'flex';
        });
    }

    // Change your name logic
    const changeNameBtn = document.getElementById('change-name-btn');
    if (changeNameBtn) {
        changeNameBtn.addEventListener('click', () => {
            settingsScreen.style.display = 'none';
            firstScreen.style.display = 'flex';
        });
    }
});
