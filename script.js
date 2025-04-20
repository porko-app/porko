document.addEventListener('DOMContentLoaded', () => {
    // Initially show the welcome screen
    document.getElementById('welcome-screen').style.display = 'flex';
    document.getElementById('first-screen').style.display = 'none'; // Hide first screen initially
    document.getElementById('second-screen').style.display = 'none'; // Hide second screen initially

    // Add event listener to the continue button on the welcome screen
    document.getElementById('continue-btn').addEventListener('click', function() {
        // Hide welcome screen
        document.getElementById('welcome-screen').style.display = 'none';
        
        // Show first screen
        document.getElementById('first-screen').style.display = 'flex';
    });

    // Add event listener to the user info form on the first screen
    document.getElementById('user-info-form').addEventListener('submit', function(event) {
        console.log('Start button clicked');
event.preventDefault();
 // Prevent page reload on form submit
    
        // Get user input values
        const gender = document.getElementById('gender').value;
        const weight = document.getElementById('weight').value;

        // Ensure that user has selected gender and entered weight
    if (!gender || !weight) {
        alert('Please enter your gender and weight!');
        return;
    }

        // Calculate BAC (Blood Alcohol Content) based on gender and weight
        const bac = calculateBAC(gender, weight);
        
        // Update ferret's speech bubble with personalized message
        updateFerretMessage(gender, bac);
    
        // Hide first screen and show second screen
        document.getElementById('first-screen').style.display = 'none';
        document.getElementById('second-screen').style.display = 'flex'; // Show second screen
    });

    // Function to calculate BAC
    function calculateBAC(gender, weight) {
        let bac = 0;
        const alcoholConsumed = 0.5; // Just a placeholder, this can be dynamic based on drink choice
        const averageMetabolismRate = 0.017; // Standard metabolism rate per hour
        
        if (gender === 'female') {
            bac = (alcoholConsumed / (weight * 0.55)) - averageMetabolismRate;
        } else if (gender === 'male') {
            bac = (alcoholConsumed / (weight * 0.68)) - averageMetabolismRate;
        }

        return bac;
    }

    // Function to update the ferret's speech bubble based on BAC
    function updateFerretMessage(gender, bac) {
        const ferretMessageElement = document.getElementById('ferret-message');
        
        // Different messages based on BAC level
        if (bac < 0.05) {
            ferretMessageElement.innerHTML = "Hey there, I'm ready for a fun night! 🐾";
        } else if (bac >= 0.05 && bac < 0.1) {
            ferretMessageElement.innerHTML = "Whew, I'm starting to feel tipsy! 🍸";
        } else if (bac >= 0.1 && bac < 0.15) {
            ferretMessageElement.innerHTML = "Uh-oh, I think I'm feeling a little dizzy... 😵";
        } else if (bac >= 0.15) {
            ferretMessageElement.innerHTML = "Whoa, I'm a bit wobbly! 🤪 Stay safe, friend!";
        } else {
            ferretMessageElement.innerHTML = "You’re my favorite human, let’s keep this fun going! 🎉";
        }
    }

    // Info Button handling (for the popup)
    const infoBtn = document.getElementById('info-btn');
    const infoPopup = document.getElementById('info-popup');
    const backBtn = document.getElementById('back-btn');

    // Show the info popup when the "i" button is clicked
    infoBtn.addEventListener('click', function() {
        console.log('Info button clicked');
        infoPopup.style.display = 'flex'; // Display the popup
    });

    // Hide the info popup when the back button is clicked
    backBtn.addEventListener('click', function() {
        console.log('Back button clicked');
        infoPopup.style.display = 'none'; // Hide the popup
    });
});
