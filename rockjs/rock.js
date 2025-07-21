

const addBtn = document.querySelector('#submit-btn');
const firstPlayer = document.querySelector('.st-player');
const secondPlayer = document.querySelector('.nd-player');
const wrapper = document.querySelectorAll('.time-left-wrapper');
const user1 = document.querySelector('#user-1');
const user2 = document.querySelector('#user-2');

/** For Guesses */
const trackGuesses1 = document.querySelector('#track-1');
const trackGuesses2 = document.querySelector('#track-2');

/**
 * @return [object] -> to return an object of intems
 */
function objectList() {

      const matchTime= 150; //Time in milliseconds
      const itemList= ['scissor', 'paper', 'rock'];
      const person1 = user1.value.trim();
      const person2 = user2.value.trim();
      const matchScore = 0;
      const trackWinns = 0;

      if(itemList && matchTime && person1 && person2){
          return {
            matchTime, 
            itemList,
            person1,
            person2,
            matchScore,
            trackWinns
          }}
          
          }
function randomisedItem() {
 let gameItems = objectList();
 if(gameItems){
  let randomItems = gameItems.itemList[Math.floor(Math.random()*gameItems.itemList.length)];
  return randomItems;
 }
}

function trackNumberWon() {
  const trackList = objectList();
  if(trackList){
    const span = document.createElement('span');
     span.textContent = trackList.trackWinns;
     trackGuesses1.appendChild(span);
  }
    if(trackList){
    const span = document.createElement('span');
    span.textContent = trackList.trackWinns;
     trackGuesses2.appendChild(span);
    }
}

function chooseItems(person1, person2) {
  
}


addBtn.addEventListener('click', () =>{
   const items = objectList();
  if(items){
   console.log(items);
  
  }else{
    console.log('Please enter your player name');
  }
  const random = randomisedItem();
  if(random){
  console.log(random);
  }
  const track = trackNumberWon();
  if(track){
  console.log("BOOOOM!")
  }
})



