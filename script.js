'use strict';

const modal = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// selectorall holds all the elements that use this class, and we can iterate through them
let flag = -1; // shows which button was selected
// it also shows if a modal is active
//-1->no modal is active, 0,1,2->shows which modal is active
console.log(flag);

//even though they are created inside a for loop they would coexist independently
for (let i = 0; i < btnsOpenModal.length; i++) {
  //this way we can create an event listener for each button efficiently
  btnsOpenModal[i].addEventListener('click', function () {
    console.log(i);
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    flag = i; // it will keep the value of i that corresponds to the current itteration
    modal[i].classList.remove('hidden');
    // makes the modal visible again since hidden has display equal to none
    overlay.classList.remove('hidden');
    //makes the background blurry when the modal window is up
  });
}

function returnToFrontPage() {
  // this function will make the overlay hidden and close the modal
  modal[flag].classList.add('hidden'); //it will close the appropriate modal based on the flag
  overlay.classList.add('hidden');
  flag = -1;
  console.log(flag);
}

for (let i = 0; i < btnCloseModal.length; i++) {
  btnCloseModal[i].addEventListener('click', returnToFrontPage);
  //when we press the X button the modal will close
}

//if I want to remove the modal by simply touching at the background(overlay)
overlay.addEventListener('click', returnToFrontPage);

//we can return to the basic background by also pressing the escape button
document.addEventListener('keydown', function (event) {
  //key press info are stored inside event
  if (event.key === 'Escape') {
    if (flag != -1) {
      // if flag is different from -1 it means that a modal is active
      returnToFrontPage();
    }
    // is true if we press the escape key
    //if (!modal.classList.contains('hidden')) {
    //checks if it already contains the hidden class
    // if it already contains hidden we dont want to add it again
    // returnToFrontPage();
    //}
  }
});
