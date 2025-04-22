document.addEventListener('DOMContentLoaded', () => {
    // Initially show the welcome screen
    document.getElementById('welcome-screen').style.display = 'flex';
    document.getElementById('first-screen').style.display = 'none';
    document.getElementById('second-screen').style.display = 'none';

    // Continue button on welcome screen
    document.getElementById('continue-btn').addEventListener('click', function () {
        document.getElementById('welcome-screen').style.display = 'none';
        document.getElementById('first-screen').style.display = 'flex';
    });

    // Start button (form submission)
    const userForm = document.getElementById('user-info-form');
    userForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent reload

        const gender = document.getElementById('gender').value;
        const weight = document.getElementById('weight').value;

        if (!gender || !weight) {
            alert('Please enter your gender and weight!');
            return;
        }

        console.log("✅ Start button clicked");

        const bac = calculateBAC(gender, weight);
        updateFerretMessage(gender, bac);
        updateSpeechBubbleImage(bac); // ← Switches image based on BAC

        document.getElementById('first-screen').style.display = 'none';
        document.getElementById('second-screen').style.display = 'flex';
    });

    // Event listener for the "Choose Drink" button to open the modal
    const menuButton = document.getElementById('menu-btn'); // Use the menu-btn for triggering the modal
    const drinkModal = document.getElementById('drink-modal');
    const closeModalButton = document.getElementById('close-modal-btn');

    menuButton.addEventListener('click', () => {
        drinkModal.style.display = 'flex'; // Show the modal when menu button is clicked
    });

    // Close modal when clicking the close button (X)
    closeModalButton.addEventListener('click', () => {
        drinkModal.style.display = 'none'; // Hide the modal
    });

    // Event listeners for each drink option
    const whiskeyButton = document.getElementById('whiskey-btn');
    const vodkaButton = document.getElementById('vodka-btn');
    const rumButton = document.getElementById('rum-btn');
    const ginButton = document.getElementById('gin-btn');
    const tequilaButton = document.getElementById('tequila-btn');

    whiskeyButton.addEventListener('click', () => {
        alert('You selected Whiskey!');
        drinkModal.style.display = 'none'; // Close the modal
    });

    vodkaButton.addEventListener('click', () => {
        alert('You selected Vodka!');
        drinkModal.style.display = 'none'; // Close the modal
    });

    rumButton.addEventListener('click', () => {
        alert('You selected Rum!');
        drinkModal.style.display = 'none'; // Close the modal
    });

    ginButton.addEventListener('click', () => {
        alert('You selected Gin!');
        drinkModal.style.display = 'none'; // Close the modal
    });

    tequilaButton.addEventListener('click', () => {
        alert('You selected Tequila!');
        drinkModal.style.display = 'none'; // Close the modal
    });

    // BAC Calculation
    function calculateBAC(gender, weight) {
        const alcoholConsumed = 0.5;
        const averageMetabolismRate = 0.017;
        let bac;

        if (gender === 'female') {
            bac = (alcoholConsumed / (weight * 0.55)) - averageMetabolismRate;
        } else {
            bac = (alcoholConsumed / (weight * 0.68)) - averageMetabolismRate;
        }

        return bac;
    }

    // Text-based message
    function updateFerretMessage(gender, bac) {
        const ferretMessageElement = document.getElementById('ferret-message');
        if (!ferretMessageElement) return;

        if (bac < 0.05) {
            ferretMessageElement.innerHTML = "Hey there, I'm ready for a fun night! 🐾";
        } else if (bac < 0.1) {
            ferretMessageElement.innerHTML = "Whew, I'm starting to feel tipsy! 🍸";
        } else if (bac < 0.15) {
            ferretMessageElement.innerHTML = "Uh-oh, I think I'm feeling a little dizzy... 😵";
        } else {
            ferretMessageElement.innerHTML = "Whoa, I'm a bit wobbly! 🤪 Stay safe, friend!";
        }
    }

    // 🖼️ Swap bubble image based on BAC
    function updateSpeechBubbleImage(bac) {
        const bubbleImage = document.getElementById('ferret-bubble');
        const ferretImage = document.getElementById('ferret-image');

        if (!bubbleImage || !ferretImage) return;

        if (bac < 0.05) {
            bubbleImage.src = 'speech-bubble-neutral.png';
            ferretImage.src = 'ferret-neutral.png';
        } else if (bac < 0.1) {
            bubbleImage.src = 'speech-bubble-tipsy.png';
            ferretImage.src = 'ferret-tipsy.png';
        } else if (bac < 0.15) {
            bubbleImage.src = 'speech-bubble-drunk.png';
            ferretImage.src = 'ferret-drunk.png';
        } else {
            bubbleImage.src = 'speech-bubble-sobering-up.png';
            ferretImage.src = 'ferret-sobering-up.png';
        }
    }

    // Function to apply wobble effect based on BAC level
    function applyFerretWobble(bac) {
        const ferretImage = document.getElementById('ferret-image');

        // Remove previous wobble classes
        ferretImage.classList.remove('wobble-subtle', 'wobble-moderate', 'wobble-strong');

        // Apply new wobble class based on BAC level
        if (bac >= 0.05 && bac < 0.1) {
            ferretImage.classList.add('wobble-subtle');  // Small wobble
        } else if (bac >= 0.1 && bac < 0.15) {
            ferretImage.classList.add('wobble-moderate');  // Moderate wobble
        } else if (bac >= 0.15) {
            ferretImage.classList.add('wobble-strong');  // Strong wobble
        }
    }

    // Info popup handling
    const infoBtn = document.getElementById('info-btn');
    const infoPopup = document.getElementById('info-popup');
    const backBtn = document.getElementById('back-btn');

    infoBtn.addEventListener('click', () => {
        infoPopup.style.display = 'flex';
        setTimeout(() => {
            infoPopup.style.opacity = 1;
        }, 10);
    });

    backBtn.addEventListener('click', () => {
        infoPopup.style.opacity = 0;
        setTimeout(() => {
            infoPopup.style.display = 'none';
        }, 300);
    });
});
