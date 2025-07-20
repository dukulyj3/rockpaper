const userName = document.querySelector('#user-2');
const addBtn = document.querySelector('#submit-btn');
const wrapper = document.querySelectorAll('.time-left-wrapper');


 function firstUser() {
    const user = document.createElement('span');
    const paragraph = 
    
 }

function updateTimeLeft() {
     wrapper.forEach((container, index)=>{
        let time = userName.value;
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
     })
}



addBtn.addEventListener('click', () =>{
updateTimeLeft();
});








