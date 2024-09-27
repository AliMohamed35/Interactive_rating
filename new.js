let selectedRating = null; // initialize 

function selectedRate (rating){
    selectedRating = rating;
    const buttons = document.querySelectorAll('.rating-circles .btn');

    buttons.forEach(button => button.classList.remove("active")); // this clears previous selections
    buttons[rating-1].classList.add("active") // add selection to the pressed button
}
// this function selects all buttons and then access the array of buttons through index and converts the 1- based index to 0-based index cuz thats how JS understands.

function popUpShow(){
    if(selectedRating){ // not null
        let container = document.getElementsByClassName('container')[0]; // className returns collection thats why we need to use index [0]
        let thankYouCont = document.getElementsByClassName('thank-you-cont')[0];

        const labelSpan = document.querySelector(".label span");
        labelSpan.innerHTML = "You have selected ${selectedRating} out of 5";

        container.classList.add("hide");
        thankYouCont.classList.add("show");
    } else {
        alert("please choose a rating before submitting!")
    }
}

const ratingButtons = document.querySelectorAll('.rating-circles .btn');
ratingButtons.forEach((button, index) => { // button >> current button element, index >> button position in the NodeList. starts from 0
    button.addEventListener("click", () => selectedRate(index + 1))
})