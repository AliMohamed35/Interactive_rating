let selectedRating = null; // Variable to keep track of the selected rating

// Function to handle rating button clicks
function selectRating(rating) {
    selectedRating = rating; // Set the selected rating
    const buttons = document.querySelectorAll('.rating-circles .btn');
    
    // Remove active class from all buttons
    buttons.forEach(button => button.classList.remove('active'));
    
    // Add active class to the selected button
    buttons[rating - 1].classList.add('active');
}

// Function to show the thank-you message
function popUpShow() {
    if (selectedRating) { // Only proceed if a rating has been selected
        let container = document.getElementsByClassName('container')[0];
        let thankYouCont = document.getElementsByClassName('thank-you-cont')[0];
        
        // Update the thank-you message with the selected rating
        const labelSpan = thankYouCont.querySelector('.label span');
        labelSpan.innerHTML = `You selected ${selectedRating} out of 5`;
        
        // Hide the container
        container.classList.add("hide");
        
        // Show the thank-you container
        thankYouCont.classList.add("show");
    } else {
        alert("Please select a rating before submitting!"); // Alert if no rating selected
    }
}

// Attach click event to each rating button
const ratingButtons = document.querySelectorAll('.rating-circles .btn');
ratingButtons.forEach((button, index) => {
    button.addEventListener('click', () => selectRating(index + 1)); // Pass the rating (1-5)
});
