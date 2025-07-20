
const addBtn = document.querySelector('#submit-btn');
const firstPlayer = document.querySelector('.st-player');
const secondPlayer = document.querySelector('.nd-player');
const wrapper = document.querySelectorAll('.time-left-wrapper');

/**
 * @param [string] -> set user variable and get user data from input
 * @return [string] -> to return user data per validation in conditional statement
 */
function userNameData() {
    const userData = document.querySelectorAll('.user-data');
    const first = document.querySelector('#player-1');
    const second = document.querySelector('#player-2');

    userData.forEach(itemList=>{
    
      if(itemList.value.trim() !== "" && itemList.id === 'user-2'){
        const span = document.createElement('span');
        span.textContent = itemList.value;
            first.appendChild(span)
            itemList.value = "";
        }else{
          if(itemList.value.trim() !== "" && itemList.id === 'user-1'){
          const span = document.createElement('span');
         span.textContent = itemList.value;
           second.appendChild(span);
           itemList.value = '';
        }}})}
function updateTimeLeft() {
     wrapper.forEach((container, index)=>{
        let time = 120;
        const paragraph = document.createElement('p');
        const span = document.createElement('span');
        paragraph.style.fontSize = '1.2rem';
        paragraph.textContent = 'Time Status: ';
        span.textContent = time+" mins";
        span.style.color = 'blue';
        paragraph.appendChild(span);
        paragraph.style.color = 'green';
        container.appendChild(paragraph);
        const timer = setInterval(() =>{
            time--;
            
                span.textContent = time === 0? 'game ended!': time+" mins";
            
                span.style.fontSize = '1rem';
                span.style.color = 'blue'
                paragraph.textContent = 'Time Status: ';
                paragraph.style.fontSize = '1.2rem';
                paragraph.appendChild(span);
                container.appendChild(paragraph);
                if(time === 0) clearInterval(timer);
        
        }, 1000)
    return;
     })}
   addBtn.addEventListener('click', () =>{
updateTimeLeft();
//firstUser();
//secondUser();
userNameData()
});  







