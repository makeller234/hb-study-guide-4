'use strict';

// Make an Event Handler
const popup = document.querySelector('#popup-alert-button');
function clicky() {
  alert("OMG ALERT!");
}
popup.addEventListener('click', clicky);


// Practice Your Times Tables
const multButton = document.querySelector('#multiply-btn');
multButton.addEventListener('click', (evt) =>{
  evt.preventDefault();
  
  const multsOf = document.getElementById('mults-of').value;
  const maxNum = Number(document.getElementById('max').value);
  const finalArray = [];
  let i = 1;
  while (i <= maxNum){
   
    finalArray.push(multsOf*i);
    i+=1;
  }
  console.log(finalArray)
})

// Your Code Here

$('.find-me').on('click', () => {
  alert("SOME MESSAGE!");
});
  

// Your Code Here

$('#make-a-porcupine').on('click', ()=>{

  $('#cute-porcupine-image').css("display", "block").slideUp(30000).delay(1000);
});



$('#agreeable-form').on('submit', (evt) =>{
  evt.preventDefault();
  const favFood = $('#favorite-food-input').val();

  $('#agreeable-text').html(`Wow, my fave food is ${favFood}, too!`);
});

// Five colored primes

const PRIME_COLORS = ['orange', 'midnightblue', 'darkgoldenrod', 'green', 'purple'];


function isPrime(x){
  for (let i =2; i*i<=x; i++){

    if(x%i === 0){
      return false;
    }
  }
    return true;
  }
function makeDiv(color, number){

}
let count = 0;
let primeNum = 2;
$('#make-prime-circles').on('click', (evt)=>{
  evt.preventDefault()
  while(count < 5){
    if (isPrime(primeNum)){
      $('#prime-circle-area').append(`<div class= "prime-circle" style="background-color: ${PRIME_COLORS[count]}">${primeNum}</div>`);
      count +=1;
    }
    primeNum+=1;
  }
  
});

// Got Puppies?

// NOTE: DO NOT CHANGE THE CODE OF THIS FUNCTION
function showPuppies(results) {
  console.log(results);
  //get the URL for the puppy photo out of the results object
  const puppyURL = results.url;

  //create a new img element and set its source to be the puppy URL
  const puppyPhoto = $('<img>').attr('src', puppyURL);

  //clear anything in the div and then add the img element
  $('#puppies-go-here').empty();
  $('#puppies-go-here').append(puppyPhoto);
}

// Your Code Here
$('#puppy-form').on("submit", (evt)=>{
  evt.preventDefault();
  $.get('/puppies.json', showPuppies);
})
