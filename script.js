// === TRANSLATIONS ===
const translations = {
    bg: {
        welcome1: "Тук ще се запознаеш с твоето ново порче!",
        welcome2: "Как работи?",
        howto1: "• Напиши твоето име за да стартираш приложението",
        howto2: "• Въвеждай твоите напитки и разбери алкохолните ти единици",
        howto3: "• Гледай как порчето ти се променя и какво казва според алкохолните единици",
        start: "ПРОДЪЛЖИ",
        visitor: "порчета са станали приятели с нас",
        appName: "Порко приложение",
        usernameLabel: "Напиши твоето име",
        usernamePlaceholder: "пример: Порко",
        startBtn: "СТАРТ",
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
        alcoholLabel: "% Алкохол",
        alcoholPlaceholder: "процент на алкохол",
        amountLabel: "Количество в милилитри",
        amountPlaceholder: "милилитри",
        submitDrink: "OK",
        closeDetailsAria: "Затвори модала",
        drinkErrorTitle: "Моля въведете процент на алкохола и милилитри.",
        closeDrinkError: "Назад",
        drinkDetailsTitle: "Въведи повече информация за {drink} (прибл. {percent}%)",
        settingsTitle: "Настройки",
        faqAlcoholInfo: "ЧЗВ за алкохола",
        historyLog: "История на логовете",
        statistics: "Показване на статистика",
        changeName: "Смени името си",
        qrCode: "QR код за споделяне",
        termsOfUse: "Общи условия",
        back: "Назад",
        faqBack: "← Назад",
    faqTitle: "ЧЗВ за алкохола",
    faqQ1: "Какво е алкохолна единица и как се измерва?",
    faqA1_1: "Алкохолните единици са официалната мярка за алкохол.",
    faqA1_2: "Една напитка обаче НЕ е равна на една алкохолна единица.",
    faqA1_3: "Измерват се като количество чист етанол.",
    faqA1_4: "Една алкохолна единица е еквивалентна на 8 г или 10 милилитра чист алкохол/етанол.",
    faqQ2: "За колко време се усвоява 1 алкохолна единица в тялото ни?",
    faqA2_1: "1 алкохолна единица се разгражда от човешкият организъм средно за малко повече от 1 час.",
    faqA2_2: "Времето за абсорбация зависи от различни фактори, като пол, ръст и тегло, колко бързо се пие, какъв вид и по колко и дали по време на консумацията се храни и пие вода.",
    faqQ3: "Какви съвети може да приемем за отговорна консумация?",
    faqA3_1: "Преди и по време на консумация на алкохол е важно да се храните и да пиете вода.",
    faqA3_2: "Предварително си поставете граници за количеството, което искате да изпиете.",
    faqA3_3: "Планирайте по какъв начин ще се приберете вкъщи.",
    faqA3_4: "Бройте напитките, които изпивате и споделяйте с приятели, в първия момент, в който почувствате, че сте изпили достатъчно.",
    faqA3_5: "Важно е да устоите на натиска от приятели и/или непознати, които искат да продължите, дори когато вие не желаете!",
    faqQ4: "Какво да правим ако сме прекалили с алкохола?",
    faqA4_1: "Въпреки всички положени усилия, се случва прекаляването с алкохол.",
    faqA4_2: "Важно е преди да си легнете да пиете много вода и да поставите до леглото си още толкова количество вода.",
    faqA4_3: "Ако имате възможност вземете хапче против киселини в стомаха. Консумирайки много алкохол предната вечер, ще е добре да не консумирате никакви алкохолни напитки следващите 48 часа.",
    faqQ5: "Не на последно място по важност:",
    faqA5_1: "НИКОГА НЕ сядайте зад волана след употреба на алкохол!",
    faqA5_2: "Използвайте алтернативи на шофирането в нетрезво състояние!",
     termsBack: "← Назад",
    termsTitle: "Общи условия",
    termsTitle1: "Предназначение на приложението",
    termsText1: "Това приложение е създадено с цел да помага на потребителите да следят консумацията си на алкохол за информационни и развлекателни цели. То не насърчава и не поощрява прекомерната употреба на алкохол.",
    termsTitle2: "Отговорност на потребителя",
    termsText2: "Потребителите носят пълна отговорност за информацията, която въвеждат в приложението, включително избраните напитки и въведените псевдоними (имена).",
    termsTitle3: "Отказ от отговорност",
    termsText3: "Това приложение не е медицински инструмент. За здравни съвети винаги се консултирайте с квалифициран специалист.",
    termsTitle4: "Поверителност и имена",
    termsText4: 'Приложението съхранява въведеното от вас име за целите на статистика и персонализация. <u>Моля, не използвайте своето истинско име, имейл или друга чувствителна лична информация като име.</u><br>Не носим отговорност, ако въведете чувствителна или лична информация в полето за име, тъй като това име се запазва в нашата система.',
    termsTitle5: "История на напитките и локални данни",
    termsText5: 'Всички данни за вашите напитки и историята на консумация (включително данните, които въвеждате чрез менюто за напитки) се съхраняват само локално на вашето устройство (телефон или компютър). Тази информация <u>не се качва на нашите сървъри</u> и е достъпна само за вас. Можете да изтриете историята си по всяко време чрез наличната опция в приложението.',
    termsTitle6: "Съхранение на данни",
    termsText6: "Приложението съхранява само вашето име (за статистика) в нашите сървъри. Не се изисква или съхранява друга лична информация на нашите сървъри.",
    termsTitle7: "Ограничение на отговорността",
    termsText7: "Създателите на това приложение не носят отговорност за каквито и да е последствия, произтичащи от употребата или неправилната употреба на приложението.",
    historyLogTitle: "История на логовете",
    backFromHistory: "← Назад",
    clearHistory: "Изчисти историята",
    clearHistoryTitle: "Сигурни ли сте, че искате да изчистите историята?",
    clearHistoryYes: "Да",
    clearHistoryNo: "Не",
    noHistory: "Няма записана история.",
    ml: "мл",
    percentAlcohol: "% алкохол",
    statisticsTitle: "Статистика",
backFromStatistics: "← Назад",
dailyStatsTitle: "Общо за последните 24 часа:",
weeklyStatsTitle: "Общо за седмицата:",
monthlyStatsTitle: "Общо за месеца:",
unitsAlcohol: "единици алкохол",
backFromQr: "← Назад",
qrCodeTitle: "QR код за споделяне",
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
        start: "CONTINUE",
        visitor: "ferrets have became friends with us",
        appName: "Porko App",
        usernameLabel: "Write your name",
        usernamePlaceholder: "e.g. Porko",
        startBtn: "START",
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
        drinkDetailsTitle: "Enter more information about {drink} (approx. {percent}%)",
        alcoholLabel: "% Alcohol",
        alcoholPlaceholder: "alcohol percentage",
        amountLabel: "Amount in milliliters",
        amountPlaceholder: "milliliters",
        submitDrink: "OK",
        closeDetailsAria: "Close modal",
        drinkErrorTitle: "Please enter alcohol percentage and milliliters.",
        closeDrinkError: "Go back",
        settingsTitle: "Settings",
        faqAlcoholInfo: "Alcohol FAQ",
        historyLog: "Log History",
        statistics: "Show Statistics",
        changeName: "Change Your Name",
        qrCode: "QR Code for Sharing",
        termsOfUse: "Terms of Use",
        back: "Back",
        faqBack: "← Back",
    faqTitle: "Alcohol FAQ",
    faqQ1: "What is an alcohol unit and how is it measured?",
    faqA1_1: "Alcohol units are the official measure of alcohol.",
    faqA1_2: "However, one drink is NOT equal to one alcohol unit.",
    faqA1_3: "They are measured by the amount of pure ethanol.",
    faqA1_4: "One alcohol unit is equivalent to 8g or 10 milliliters of pure alcohol/ethanol.",
    faqQ2: "How long does it take for the body to process 1 alcohol unit?",
    faqA2_1: "1 alcohol unit is broken down by the human body in a little over 1 hour on average.",
    faqA2_2: "Absorption time depends on factors like gender, height and weight, how quickly you drink, the type and amount consumed, and whether you eat or drink water while drinking.",
    faqQ3: "What tips can we follow for responsible drinking?",
    faqA3_1: "Before and during alcohol consumption, it is important to eat and drink water.",
    faqA3_2: "Set your limits in advance for how much you want to drink.",
    faqA3_3: "Plan how you will get home.",
    faqA3_4: "Count your drinks and share with friends the moment you feel you've had enough.",
    faqA3_5: "It's important to resist peer pressure from friends and/or strangers who want you to continue even when you don't want to!",
    faqQ4: "What should we do if we've had too much alcohol?",
    faqA4_1: "Despite all efforts, sometimes overdrinking happens.",
    faqA4_2: "Before going to bed, drink plenty of water and leave more water by your bed.",
    faqA4_3: "If possible, take an antacid. After heavy drinking, it's good to avoid any alcoholic beverages for the next 48 hours.",
    faqQ5: "Not least in importance:",
    faqA5_1: "NEVER drive after drinking alcohol!",
    faqA5_2: "Use alternatives to driving under the influence!",
     termsBack: "← Back",
    termsTitle: "Terms of Use",
    termsTitle1: "Purpose of the App",
    termsText1: "This app is designed to help users track their alcohol consumption for informational and entertainment purposes. It does not encourage or promote excessive alcohol use.",
    termsTitle2: "User Responsibility",
    termsText2: "Users are fully responsible for the information they enter in the app, including chosen drinks and submitted nicknames (names).",
    termsTitle3: "Disclaimer",
    termsText3: "This app is not a medical tool. Always consult a qualified professional for health advice.",
    termsTitle4: "Privacy and Names",
    termsText4: 'The app stores your entered name for statistics and personalization purposes. <u>Please do not use your real name, email, or other sensitive personal information as your name.</u><br>We are not responsible if you enter sensitive or personal information in the name field, as this name is saved in our system.',
    termsTitle5: "Drink History and Local Data",
    termsText5: 'All your drink data and consumption history (including data you enter via the drinks menu) are stored only locally on your device (phone or computer). This information <u>is not uploaded to our servers</u> and is only accessible to you. You can delete your history at any time using the available option in the app.',
    termsTitle6: "Data Storage",
    termsText6: "The app only stores your name (for statistics) on our servers. No other personal information is required or stored on our servers.",
    termsTitle7: "Limitation of Liability",
    termsText7: "The creators of this app are not responsible for any consequences arising from the use or misuse of the app.",
    historyLogTitle: "History Log",
    backFromHistory: "← Back",
    clearHistory: "Clear History",
    clearHistoryTitle: "Are you sure you want to clear the history?",
    clearHistoryYes: "Yes",
    clearHistoryNo: "No",
    noHistory: "No history recorded.",
    ml: "ml",
    percentAlcohol: "% alcohol",
    statisticsTitle: "Statistics",
backFromStatistics: "← Back",
dailyStatsTitle: "Total for the last 24 hours:",
weeklyStatsTitle: "Total for the week:",
monthlyStatsTitle: "Total for the month:",
unitsAlcohol: "alcohol units",
backFromQr: "← Back",
qrCodeTitle: "QR Code for Sharing",
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

const SUPABASE_URL = "https://ljepawviopqlnhjhpzze.supabase.co/";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxqZXBhd3Zpb3BxbG5oamhwenplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4NDcwMDQsImV4cCI6MjA2NjQyMzAwNH0.LCs1Ovi0zQEM6VG7fUz0afOb-LJiGtI5cu87SQKqdFw";
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const drinkPercents = {
  whiskey: 40,
  vodka: 40,
  rum: 40,
  gin: "35–50",
  tequila: "35–50"
  // ...add more as needed
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

// --- Language switch handler (TOP LEVEL!) ---
function handleLanguageSwitch() {
  currentLanguage = currentLanguage === "bg" ? "en" : "bg";
  localStorage.setItem("language", currentLanguage);
  updateWelcomeScreenLanguage();
  updateFirstScreenLanguage();
  updateSecondScreenLanguage();
  updateSettingsScreenLanguage();
  updateFaqScreenLanguage();
  updateQrCodeScreenLanguage();
  updateStatisticsScreenLanguage();
  updateTermsOfUseScreenLanguage();
  updateHistoryLogScreenLanguage();
  updateMenuButton();
  updateDrinkModalLanguage();
  updateDrinkDetailsModalLanguage();
  updateMenuLanguage();
  updateFerretMood(totalUnits);
  updateLangButtons();
  updateTermsTranslation();
  updateLogoLanguage();
}

// --- DOM loaded event ---
document.addEventListener("DOMContentLoaded", () => {
  updateLogoLanguage();
  updateLangButtons();

  // Attach the handler to the button
  const langBtnWelcome = document.getElementById('welcome-language-switch-btn');
  if (langBtnWelcome) {
    langBtnWelcome.addEventListener('click', handleLanguageSwitch);
  }
});
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

function updateDrinkDetailsModalLanguage() {
  const t = translations[currentLanguage];

  // Drink details modal
  const detailsTitle = document.getElementById('drink-details-title');
  if (detailsTitle) detailsTitle.textContent = t.drinkDetailsTitle;

  const alcoholLabel = document.querySelector('label[for="alcohol-percentage"]');
  if (alcoholLabel) alcoholLabel.textContent = t.alcoholLabel;

  const alcoholInput = document.getElementById('alcohol-percentage');
  if (alcoholInput) alcoholInput.placeholder = t.alcoholPlaceholder;

  const amountLabel = document.querySelector('label[for="drink-amount"]');
  if (amountLabel) amountLabel.textContent = t.amountLabel;

  const amountInput = document.getElementById('drink-amount');
  if (amountInput) amountInput.placeholder = t.amountPlaceholder;

  const submitBtn = document.getElementById('submit-drink');
  if (submitBtn) submitBtn.textContent = t.submitDrink;

  const closeDetailsBtn = document.getElementById('close-details-btn');
  if (closeDetailsBtn) closeDetailsBtn.setAttribute('aria-label', t.closeDetailsAria);

  // Drink error modal
  const errorTitle = document.getElementById('drink-error-title');
  if (errorTitle) errorTitle.textContent = t.drinkErrorTitle;

  const closeErrorBtn = document.getElementById('close-drink-error-btn');
  if (closeErrorBtn) closeErrorBtn.textContent = t.closeDrinkError;
}

function updateDrinkModalLanguage() {
  const t = translations[currentLanguage];

  // Modal title
  const modalTitle = document.getElementById("drink-modal-title");
  if (modalTitle) modalTitle.textContent = t.drinkModalTitle;

  // Drink buttons
  const drinkButtons = [
    { id: "whiskey-btn", key: "whiskey" },
    { id: "vodka-btn", key: "vodka" },
    { id: "rum-btn", key: "rum" },
    { id: "gin-btn", key: "gin" },
    { id: "tequila-btn", key: "tequila" }
  ];

  drinkButtons.forEach(drink => {
    const btn = document.getElementById(drink.id);
    if (btn) {
      btn.textContent = t[drink.key].toUpperCase(); // keep ALL CAPS styling
      btn.setAttribute("aria-label", `${t.drinkModalTitle} ${t[drink.key]}`);
    }
  });

  // Close button
  const closeBtn = document.getElementById("close-modal-btn");
  if (closeBtn) closeBtn.setAttribute("aria-label", currentLanguage === "bg" ? "Затвори модала" : "Close");
}

function updateMenuButton() {
  const menuBtn = document.getElementById("menu-btn");
  if (menuBtn) {
    menuBtn.textContent = translations[currentLanguage].menuBtn;
  }
}

function updateMenuLanguage() {
  const t = translations[currentLanguage];

  // Example: Modal title
  const drinkModalTitle = document.getElementById('drink-modal-title');
  if (drinkModalTitle) drinkModalTitle.textContent = t.drinkModalTitle;

  // Example: Drink options (assuming you have one button per drink)
  const whiskeyBtn = document.getElementById('drink-whiskey');
  if (whiskeyBtn) whiskeyBtn.textContent = t.whiskey;

  const vodkaBtn = document.getElementById('drink-vodka');
  if (vodkaBtn) vodkaBtn.textContent = t.vodka;

  const rumBtn = document.getElementById('drink-rum');
  if (rumBtn) rumBtn.textContent = t.rum;

  const ginBtn = document.getElementById('drink-gin');
  if (ginBtn) ginBtn.textContent = t.gin;

  const tequilaBtn = document.getElementById('drink-tequila');
  if (tequilaBtn) tequilaBtn.textContent = t.tequila;
}

function updateSettingsScreenLanguage() {
  const t = translations[currentLanguage];

  document.getElementById('settings-title').textContent = t.settingsTitle;
  document.getElementById('faq-alcohol-info-btn').textContent = t.faqAlcoholInfo;
  document.getElementById('history-log-btn').textContent = t.historyLog;
  document.getElementById('statistics-btn').textContent = t.statistics;
  document.getElementById('change-name-btn').textContent = t.changeName;
  document.getElementById('qr-code-btn').textContent = t.qrCode;
  document.getElementById('terms-of-use-btn').textContent = t.termsOfUse;
  document.getElementById('back-from-settings-btn').textContent = t.back;
}

function updateStatisticsScreenLanguage() {
  const t = translations[currentLanguage];
  document.getElementById('back-from-statistics-btn').textContent = t.backFromStatistics;
  document.querySelector('#statistics-screen h2').textContent = t.statisticsTitle;
  document.getElementById('daily-stats-title').textContent = t.dailyStatsTitle;
  document.getElementById('weekly-stats-title').textContent = t.weeklyStatsTitle;
  document.getElementById('monthly-stats-title').textContent = t.monthlyStatsTitle;
}

function updateQrCodeScreenLanguage() {
  const t = translations[currentLanguage];
  document.getElementById('back-from-qr-btn').textContent = t.backFromQr;
  document.getElementById('qr-code-title').textContent = t.qrCodeTitle;
}

function updateFaqScreenLanguage() {
  const t = translations[currentLanguage];

  document.getElementById('back-from-faq-btn').textContent = t.faqBack;
  document.getElementById('faq-title').textContent = t.faqTitle;

  document.getElementById('faq-q1').textContent = t.faqQ1;
  document.getElementById('faq-a1-1').textContent = t.faqA1_1;
  document.getElementById('faq-a1-2').textContent = t.faqA1_2;
  document.getElementById('faq-a1-3').textContent = t.faqA1_3;
  document.getElementById('faq-a1-4').textContent = t.faqA1_4;

  document.getElementById('faq-q2').textContent = t.faqQ2;
  document.getElementById('faq-a2-1').textContent = t.faqA2_1;
  document.getElementById('faq-a2-2').textContent = t.faqA2_2;

  document.getElementById('faq-q3').textContent = t.faqQ3;
  document.getElementById('faq-a3-1').textContent = t.faqA3_1;
  document.getElementById('faq-a3-2').textContent = t.faqA3_2;
  document.getElementById('faq-a3-3').textContent = t.faqA3_3;
  document.getElementById('faq-a3-4').textContent = t.faqA3_4;
  document.getElementById('faq-a3-5').textContent = t.faqA3_5;

  document.getElementById('faq-q4').textContent = t.faqQ4;
  document.getElementById('faq-a4-1').textContent = t.faqA4_1;
  document.getElementById('faq-a4-2').textContent = t.faqA4_2;
  document.getElementById('faq-a4-3').textContent = t.faqA4_3;

  document.getElementById('faq-q5').textContent = t.faqQ5;
  document.getElementById('faq-a5-1').textContent = t.faqA5_1;
  document.getElementById('faq-a5-2').textContent = t.faqA5_2;
}

function updateHistoryLogScreenLanguage() {
  const t = translations[currentLanguage];

  document.getElementById('back-from-history-btn').textContent = t.backFromHistory;
  document.querySelector('#history-log-screen h2').textContent = t.historyLogTitle;
  document.getElementById('clear-history-btn').textContent = t.clearHistory;
  document.getElementById('clear-history-title').textContent = t.clearHistoryTitle;
  document.getElementById('confirm-clear-btn').textContent = t.clearHistoryYes;
  document.getElementById('cancel-clear-btn').textContent = t.clearHistoryNo;
}

function updateTermsOfUseScreenLanguage() {
  const t = translations[currentLanguage];

  document.getElementById('back-from-terms-btn').textContent = t.termsBack;
  document.getElementById('terms-title').textContent = t.termsTitle;

  for (let i = 1; i <= 7; i++) {
    document.getElementById(`terms-title-${i}`).textContent = t[`termsTitle${i}`];
    document.getElementById(`terms-text-${i}`).innerHTML = t[`termsText${i}`];
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

function openDetailsModal(drinkKey) {
  selectedDrink = drinkKey;
  const drinkDetailsModal = document.getElementById('drink-details-modal');
  const modalTitle = drinkDetailsModal.querySelector('h2');
  const t = translations[currentLanguage];
  const percent = drinkPercents[drinkKey] || "?";
  const drinkName = t[drinkKey] || drinkKey;
  modalTitle.textContent = t.drinkDetailsTitle
    .replace("{drink}", drinkName)
    .replace("{percent}", percent);

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

// === APP INIT ===
document.addEventListener('DOMContentLoaded', () => {
    updateWelcomeScreenLanguage();
    updateFirstScreenLanguage();
    updateSecondScreenLanguage();
    updateSettingsScreenLanguage();
    updateFaqScreenLanguage();
    updateQrCodeScreenLanguage();
    updateStatisticsScreenLanguage();
    updateTermsOfUseScreenLanguage();
    updateHistoryLogScreenLanguage();
    updateLangButtons();
    updateTermsTranslation();
    updateMenuButton();
    updateDrinkModalLanguage();
    updateDrinkDetailsModalLanguage();
    updateMenuLanguage()
    migrateHistoryDatesToIso();
    checkFerretResetAndReload();
    updateAlcoholUnitsDisplay();
    updateFerretMood(totalUnits);
      getVisitorCount().then(count => {
        updateVisitorCountDisplay(count + VISITOR_OFFSET);
      });

    // List of drink keys you support
    const drinkKeys = ['whiskey', 'vodka', 'rum', 'gin', 'tequila'];

    // Add event listeners to each drink button
    drinkKeys.forEach(drinkKey => {
        const btn = document.getElementById(`${drinkKey}-btn`);
        if (btn) {
            btn.addEventListener('click', function() {
                openDetailsModal(drinkKey);
            });
        }
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
    const t = translations[currentLanguage];
    const now = new Date();
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const dailyTotal = calculateTotalAlcohol(oneDayAgo, now);
    document.getElementById('daily-total').textContent = `${dailyTotal} ${t.unitsAlcohol}`;

    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(now.getDate() - 7);
    const weeklyTotal = calculateTotalAlcohol(oneWeekAgo, now);
    document.getElementById('weekly-total').textContent = `${weeklyTotal} ${t.unitsAlcohol}`;

    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const monthlyTotal = calculateTotalAlcohol(startOfMonth, now);
    document.getElementById('monthly-total').textContent = `${monthlyTotal} ${t.unitsAlcohol}`;
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

// 2. Offset from previous system
const VISITOR_OFFSET = 122;

// 3. Display the visitor count in the DOM
function updateVisitorCountDisplay(count) {
    const el = document.getElementById('visitor-count');
    if (el) el.textContent = count;
}

// 4. Get the current visitor count from Supabase
async function getVisitorCount() {
    const { data, error } = await supabase
        .from('visitor_count')
        .select('count')
          .eq('id', 1)
        .single();
    if (error || !data) {
        console.error('Supabase getVisitorCount error:', error);
        return 0;
    }
    return data.count;
}

// 5. Increment the visitor count by 1 (once per browser/device)
async function incrementVisitorCount() {
    // Get the current count
    const { data, error } = await supabase
        .from('visitor_count')
        .select('count')
        .single();

    if (error || !data) {
        console.error('Supabase incrementVisitorCount select error:', error);
        return 0;
    }

    // Try to increment the count by 1 (RLS+trigger in your DB ensures only +1 allowed)
    const { data: updated, error: updateError } = await supabase
        .from('visitor_count')
        .update({ count: data.count + 1 })
        .eq('id', 1) // Change 1 to your PK value if not 1!
        .select('count')
        .single();

    if (updateError || !updated) {
        console.error('Supabase incrementVisitorCount update error:', updateError);
        return data.count;
    }
    return updated.count;
}

// 6. Logic to handle the count on form submit or page load
function handleVisitorCount() {
    // Optional: GoatCounter analytics, safe to leave as-is
    if (window.goatcounter) {
        window.goatcounter.count({
            path: '/username-entered',
            title: 'Username Entered'
        });
    }

    // Only increment once per browser/device
    if (!localStorage.getItem('visitorCounted')) {
        incrementVisitorCount().then(newCount => {
            updateVisitorCountDisplay(newCount + VISITOR_OFFSET);
        }).catch(() => {
            // fallback: show only the offset
            updateVisitorCountDisplay(VISITOR_OFFSET + 1);
        });
        localStorage.setItem('visitorCounted', 'true');
    } else {
        // On repeat visits, show current count (with offset)
        getVisitorCount().then(newCount => {
            updateVisitorCountDisplay(newCount + VISITOR_OFFSET);
        });
    }
}

// Example: call handleVisitorCount() in your form submit handler
const userForm = document.getElementById('user-info-form');
userForm.addEventListener('submit', async event => {
    event.preventDefault();
    const usernameInput = document.getElementById('username');
    userName = usernameInput.value.trim();

    if (!userName) {
        alert(translations[currentLanguage].emptyNameAlert || "Please enter your name.");
        return;
    }

    handleVisitorCount();

 
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
    const t = translations[currentLanguage];
    const history = JSON.parse(localStorage.getItem('drinkHistory')) || [];
    historyList.innerHTML = '';

    if (history.length === 0) {
        const noHistoryMessage = document.createElement('li');
        noHistoryMessage.textContent = t.noHistory;
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

        // Translate drink name if stored as key (e.g. 'whiskey'), else fallback to original
        const drinkDisplayName = t[entry.drinkName] || entry.drinkName;

        listItem.textContent = `${formattedDate} - ${drinkDisplayName}, ${entry.amount} ${t.ml}, ${entry.percentage}${t.percentAlcohol}`;
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

// On tab focus
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        checkFerretReset();
        totalUnits = parseFloat(localStorage.getItem('totalUnits')) || 0;
        updateAlcoholUnitsDisplay();
        updateFerretMood(totalUnits);
    }
});

// Also, call this once on page load to ensure UI is correct
checkFerretReset();
totalUnits = parseFloat(localStorage.getItem('totalUnits')) || 0;
updateAlcoholUnitsDisplay();
updateFerretMood(totalUnits);

});