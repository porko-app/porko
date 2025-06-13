// === TRANSLATIONS ===
const translations = {
    bg: {
        welcome1: "Тук ще се запознаеш с твоето ново порче!",
        welcome2: "Как работи?",
        howto1: "• Напиши твоето име за да стартираш приложението",
        howto2: "• Въвеждай твоите напитки и разбери алкохолните ти единици",
        howto3: "• Гледай как порчето ти се променя и какво казва според алкохолните единици",
        start: "Продължи",
        visitor: "порчета са станали приятели с нас",
        appName: "Порко приложение",
        usernameLabel: "Напиши твоето име",
        usernamePlaceholder: "пример: Порко",
        startBtn: "Старт",
        infoBtnAlt: "Покажи информация",
        infoTitle: "Важна информация",
        infoText: "Приложението е за проследяване на консумацията на алкохол и не насърчава прекомерната консумация на алкохол. Моля, бъдете отговорни и се грижете за здравето си.",
        backBtnAlt: "Затвори информацията",
        alcoholUnitsLabel: "Алкохолни единици",
        chooseDrink: "Избери напитка",
        soFarDrank: "Досега сте изпили {units} единици алкохол",
        termsBtn: "Общи условия",
        termsTitle: "Общи условия",
        menuBtn: "Меню",
          drinkModalTitle: "Избери напитка",
          whiskey: "Уиски",
           vodka: "Водка",
           rum: "Ром",
           gin: "Джин",
           tequila: "Текила",
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
        startBtn: "Start",
        infoBtnAlt: "Show information",
        infoTitle: "Important Information",
        infoText: "This app is for tracking alcohol consumption and does not encourage excessive drinking. Please be responsible and take care of your health.",
        backBtnAlt: "Close information",
        alcoholUnitsLabel: "Alcohol units",
        chooseDrink: "Choose a drink",
        soFarDrank: "So far you have drunk {units} alcohol units",
        termsBtn: "Terms of Use",
        termsTitle: "Terms of Use",
        menuBtn: "Menu",
          drinkModalTitle: "Choose a drink",
          whiskey: "Whiskey",
          vodka: "Vodka",
          rum: "Rum",
          gin: "Gin",
          tequila: "Tequila",
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

// --- Utility: 10-hour Ferret Reset ---
function checkFerretReset() {
    const now = Date.now();
    const lastUpdate = Number(localStorage.getItem('lastUnitsUpdate') || now);
    const hoursPassed = (now - lastUpdate) / (1000 * 60 * 60);
    if (hoursPassed > 10) {
        localStorage.setItem('totalUnits', 0);
        localStorage.setItem('lastUnitsUpdate', now);
    }
}

// Helper: always reload totalUnits after possible reset
function checkFerretResetAndReload() {
    checkFerretReset();
    totalUnits = parseFloat(localStorage.getItem('totalUnits')) || 0;
}

function updateLogoLanguage() {
  // Welcome screen logo
  const welcomeLogo = document.getElementById("welcome-logo");
  if (welcomeLogo) {
    welcomeLogo.src = currentLanguage === "en" ? "logoporkoen.png" : "logoporko.png";
  }
  // First screen logo
  const logoImg = document.getElementById("logo-img");
  if (logoImg) {
    logoImg.src = currentLanguage === "en" ? "logoporkoen.png" : "logoporko.png";
  }
}

function updateLangButtons() {
  const langBtnWelcome = document.getElementById('welcome-language-switch-btn');
  if (langBtnWelcome) {
    langBtnWelcome.textContent = currentLanguage === 'bg' ? 'EN' : 'BG';
  }
}

// --- Language Switcher
document.addEventListener("DOMContentLoaded", () => {
  updateLogoLanguage();
  updateLangButtons();

  function handleLanguageSwitch() {
    currentLanguage = currentLanguage === "bg" ? "en" : "bg";
    localStorage.setItem("language", currentLanguage);
    updateWelcomeScreenLanguage();
    updateFirstScreenLanguage();
    updateSecondScreenLanguage();
    updateMenuButton();
    updateFerretMood(totalUnits);
    updateLangButtons();
    updateVisitorCountDisplay();
    updateTermsTranslation();
    updateLogoLanguage();
  }
  const langBtnWelcome = document.getElementById("welcome-language-switch-btn");
  if (langBtnWelcome) {
    langBtnWelcome.addEventListener("click", handleLanguageSwitch);
  }
  const langBtnFirst = document.getElementById("language-switch-btn");
  if (langBtnFirst) {
    langBtnFirst.addEventListener("click", handleLanguageSwitch);
  }
});

// ... rest of translation functions unchanged ...

function updateWelcomeScreenLanguage() {
    const t = translations[currentLanguage];
    if (!t) return;

    const paragraphs = document.querySelectorAll('#welcome-screen p');
    if (paragraphs.length >= 2) {
        paragraphs[0].textContent = t.welcome1 || '';
        paragraphs[1].textContent = t.welcome2 || '';
    }

    const howtoList = document.querySelectorAll('#welcome-screen ul li');
    if (howtoList.length >= 3) {
        howtoList[0].textContent = t.howto1 || '';
        howtoList[1].textContent = t.howto2 || '';
        howtoList[2].textContent = t.howto3 || '';
    }

    const continueBtn = document.querySelector('#continue-btn');
    const continueBtnLabel = document.querySelector('#continue-btn-label');
    if (continueBtnLabel) {
        continueBtnLabel.textContent = t.start || '';
        continueBtn.setAttribute('aria-label', t.start || '');
    }

    const visitorCounter = document.querySelector('#visitor-counter');
    const visitorCount = document.querySelector('#visitor-count');
    if (visitorCounter && visitorCount) {
        visitorCounter.innerHTML = `<span id="visitor-count">${visitorCount.textContent}</span> ${t.visitor || ''}`;
    }

    document.title = t.appName || 'Porko app';
}

function updateFirstScreenLanguage() {
    const t = translations[currentLanguage];
    const usernameLabel = document.querySelector('#user-info-form label[for="username"]');
    if (usernameLabel) usernameLabel.textContent = t.usernameLabel;

    const usernameInput = document.getElementById('username');
    if (usernameInput) usernameInput.placeholder = t.usernamePlaceholder;

    const startBtnLabel = document.getElementById('start-btn-label');
    if (startBtnLabel) startBtnLabel.textContent = t.startBtn;

    const infoBtnImg = document.querySelector('#info-btn img');
    const infoBtn = document.getElementById('info-btn');
    if (infoBtnImg) infoBtnImg.alt = t.infoBtnAlt;
    if (infoBtn) infoBtn.setAttribute('aria-label', t.infoBtnAlt);

    const infoTitle = document.getElementById('info-title');
    if (infoTitle) infoTitle.textContent = t.infoTitle;

    const infoText = document.querySelector('#info-popup p');
    if (infoText) infoText.textContent = t.infoText;

    const backBtnImg = document.querySelector('#back-btn img');
    const backBtn = document.getElementById('back-btn');
    if (backBtnImg) backBtnImg.alt = t.backBtnAlt;
    if (backBtn) backBtn.setAttribute('aria-label', t.backBtnAlt);
}

function updateTermsTranslation() {
    const t = translations[currentLanguage];
    const termsFromInfoBtn = document.getElementById('terms-from-info-btn');
    if (termsFromInfoBtn) termsFromInfoBtn.textContent = t.termsBtn;

    const termsTitle = document.getElementById('terms-title');
    if (termsTitle) termsTitle.textContent = t.termsTitle;
    const termsText = document.getElementById('terms-text');
    if (termsText) termsText.textContent = t.termsText;
}

function updateSecondScreenLanguage() {
    const t = translations[currentLanguage];
    const unitsLabel = document.getElementById('alcohol-units-label');
    if (unitsLabel) unitsLabel.textContent = t.alcoholUnitsLabel;
    const menuBtn = document.getElementById('menu-btn');
    if (menuBtn) {
    menuBtn.textContent = t.menuBtn;
    menuBtn.setAttribute('aria-label', t.menuBtn);
}
}

function updateMenuButton() {
  const menuBtn = document.getElementById("menu-btn");
  if (menuBtn) {
    menuBtn.textContent = translations[currentLanguage].menuBtn;
  }
}

// === GLOBAL VARIABLES FOR STATE PERSISTENCE ===
let selectedDrink = "";
let totalUnits = 0;
let userName = "";
let previousScreenBeforeTerms = null;

// === ALCOHOL & FERRET STATE PERSISTENCE & RESET LOGIC ===
function saveUnitsToStorage() {
    localStorage.setItem('totalUnits', totalUnits);
    localStorage.setItem('lastUnitsUpdate', Date.now());
}

function updateFerretMood(units) {
    const states = ['neutral', 'tipsy', 'drunk', 'wobbly'];
    let mood = 'neutral';
    if (units <= 4.0) mood = 'neutral';
    else if (units <= 7.0) mood = 'tipsy';
    else if (units <= 10.0) mood = 'drunk';
    else mood = 'wobbly';

    const t = translations[currentLanguage];
    const messages = t.ferretStates[mood];
    const nameToUse = userName ? userName : (t.usernamePlaceholder || "Friend");
    if (!messages || !messages.length) return;
    const randomMsg = messages[Math.floor(Math.random() * messages.length)].replace('{name}', nameToUse);

    states.forEach(state => {
        const ferretElement = document.getElementById(`ferret-${state}`);
        const bubbleElement = document.getElementById(`bubble-${state}`);
        const bubbleTextElement = document.getElementById(`bubble-text-${state}`);
        if (ferretElement) ferretElement.style.display = 'none';
        if (bubbleElement) bubbleElement.style.display = 'none';
        if (bubbleTextElement) bubbleTextElement.style.display = 'none';
    });

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

function calculateAlcoholUnits(alcoholPercentage, drinkAmount) {
    return (alcoholPercentage * drinkAmount) / 1000;
}

function updateAlcoholUnitsDisplay() {
    const t = translations[currentLanguage];
    const formatted = t.soFarDrank.replace('{units}', `<span class="orange-text">${totalUnits.toFixed(2)}</span>`);
    document.getElementById('alcohol-units-text').innerHTML = formatted;
    saveUnitsToStorage();
}

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

// ===== FIREBASE VISITOR COUNTER LOGIC (SAFE, NO USER DATA WRITE) =====
import { database } from "./firebase.js";
import { ref, get, set, runTransaction } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

// ---- Only allow reading/incrementing the visitor counter, not writing user data ----
const auth = getAuth();
signInAnonymously(auth);
const visitorRef = ref(database, "visitorCounter");

const initializeVisitorCounter = async () => {
    try {
        const snapshot = await get(visitorRef);
        if (!snapshot.exists()) {
            try {
                await set(visitorRef, { count: 0 });
            } catch (err) {}
        }
    } catch (error) {}
};

const updateVisitorCountDisplay = async () => {
    const visitorCounterElement = document.getElementById("visitor-count");
    if (!visitorCounterElement) return;
    try {
        const snapshot = await get(visitorRef);
        if (snapshot.exists()) {
            const visitorCount = snapshot.val().count || 0;
            visitorCounterElement.textContent = visitorCount;
        } else {
            visitorCounterElement.textContent = 0;
        }
    } catch (error) {
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
        updateVisitorCountDisplay();
    })
    .catch(() => {});
};

// === APP INIT ===
document.addEventListener('DOMContentLoaded', () => {
    updateWelcomeScreenLanguage();
    updateFirstScreenLanguage();
    updateSecondScreenLanguage();
    updateLangButtons();
    updateMenuButton();
    migrateHistoryDatesToIso();
    checkFerretResetAndReload();
    initializeVisitorCounter().then(updateVisitorCountDisplay);
    updateTermsTranslation();

    const drinks = {
        whiskey: 'Уиски (прибл.40-50%)',
        vodka: 'Водка (прибл. 40%)',
        rum: 'Ром (прибл. 40%)',
        gin: 'Джин (прибл. 36-50%)',
        tequila: 'Текила (прибл. 35-50%)',
    };

    Object.keys(drinks).forEach(drinkId => {
        document.getElementById(`${drinkId}-btn`)?.addEventListener('click', () => {
            openDetailsModal(drinks[drinkId]);
        });
    });

    document.getElementById('submit-drink')?.addEventListener('click', () => {
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

    const infoBtn = document.getElementById('info-btn');
    const infoPopup = document.getElementById('info-popup');
    const backBtn = document.getElementById('back-btn');
    const termsFromInfoBtn = document.getElementById('terms-from-info-btn');
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
            document.querySelectorAll('.app-container').forEach(el => el.style.display = 'none');
            previousScreenBeforeTerms = firstScreen; // <-- Add this line
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

    const termsOfUseBtn = document.getElementById('terms-of-use-btn');
if (termsOfUseBtn) {
    termsOfUseBtn.addEventListener('click', () => {
        previousScreenBeforeTerms = settingsScreen; // <-- Add this line
        settingsScreen.style.display = 'none';
        termsOfUseScreen.style.display = 'flex';
    });
}

if (backFromTermsBtn) {
    backFromTermsBtn.addEventListener('click', () => {
        termsOfUseScreen.style.display = 'none';
        if (previousScreenBeforeTerms) {
            previousScreenBeforeTerms.style.display = 'flex';
        } else {
            firstScreen.style.display = 'flex';
        }
    });
} else {
    console.error('Back button in Terms of Use screen not found.');
}

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

    // === CRUCIAL: always update UI after user logs in ===
    const userForm = document.getElementById('user-info-form');
    userForm.addEventListener('submit', async event => {
        event.preventDefault();
        const usernameInput = document.getElementById('username');
        userName = usernameInput.value.trim();

        if (!userName) {
            alert(translations[currentLanguage].emptyNameAlert || "Please enter your name.");
            return;
        }

        // --- FIX: No user info write to Firebase, only increment visitor count ---
        if (!localStorage.getItem('visitorCounted')) {
            incrementVisitorCount();
            localStorage.setItem('visitorCounted', 'true');
        }

        document.getElementById('first-screen').style.display = 'none';
        document.getElementById('second-screen').style.display = 'flex';
        updateAlcoholUnitsDisplay();
        updateFerretMood(totalUnits);
    });

    const menuButton = document.getElementById('menu-btn');
    const drinkModal = document.getElementById('drink-modal');
    menuButton.addEventListener('click', () => {
        drinkModal.style.display = 'flex';
    });

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
    }

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

    const changeNameBtn = document.getElementById('change-name-btn');
    if (changeNameBtn) {
        changeNameBtn.addEventListener('click', () => {
            settingsScreen.style.display = 'none';
            firstScreen.style.display = 'flex';
        });
    }

// === AUTO FERRET RESET TIMER ===
// This code will check every 30 seconds if a reset is needed, and update the ferret and UI instantly.

setInterval(() => {
    const oldUnits = totalUnits;
    // Use the same logic as on page load
    checkFerretReset();
    const newUnits = parseFloat(localStorage.getItem('totalUnits')) || 0;
    console.log("Timer tick", { oldUnits, current: parseFloat(localStorage.getItem('totalUnits')) });
    if (oldUnits !== newUnits) {
        totalUnits = newUnits;
        updateAlcoholUnitsDisplay();
        updateFerretMood(totalUnits);
    }
}, 30000); // every 30 seconds

// Also, call this once on page load to ensure UI is correct
checkFerretReset();
totalUnits = parseFloat(localStorage.getItem('totalUnits')) || 0;
updateAlcoholUnitsDisplay();
updateFerretMood(totalUnits);

});