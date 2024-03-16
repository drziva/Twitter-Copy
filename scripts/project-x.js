window.addEventListener('DOMContentLoaded', function() {
  // Get sidebar element
  const sidebar = document.querySelector('.sidebar');
  // Get content element
  const content = document.querySelector('.content');

  // Set initial margin-left of content
  content.style.marginLeft = sidebar.offsetWidth + 'px';

  // Update margin-left of content dynamically when the window is resized
  window.addEventListener('resize', function() {
    content.style.marginLeft = sidebar.offsetWidth + 'px';
  });
});


let buttonStates={};

const savedButtonStates=localStorage.getItem('buttonStates');

if(savedButtonStates){
  buttonStates=JSON.parse(savedButtonStates);
};

function followAccount(buttonElement){
  const profileName=buttonElement.closest('.follow-recommend-profile').querySelector('.follow-recommend-name').innerText.trim();
  if(buttonStates[profileName]==='Following'){
    buttonStates[profileName]='Follow';
    buttonElement.classList.remove('is-following')
  }
  else{
    buttonStates[profileName]='Following';
    buttonElement.classList.add('is-following')
  }

  buttonElement.innerText= buttonStates[profileName];
  localStorage.setItem('buttonStates',JSON.stringify(buttonStates)); 

  };

  function initializeButtonStates() {
    const buttons = document.querySelectorAll('.follow-recommended');
    buttons.forEach(button => {
        const profileName = button.closest('.follow-recommend-profile').querySelector('.follow-recommend-name').innerText.trim();
        if (buttonStates[profileName]) {
            button.innerText = buttonStates[profileName];
            if (buttonStates[profileName] === 'Following') {
              button.classList.add('is-following');
          } else {
              button.classList.remove('is-following');
          }
        }
    });
}
 
  initializeButtonStates();

  const subState=JSON.parse(localStorage.getItem('sub-state'))||'';

  function subscribe(button){
    if(button.innerText==='Subscribe'){
      button.innerText='Subscribed';
      button.classList.add('is-subscribed');
    }
    else{
      button.innerText='Subscribe';
      button.classList.remove('is-subscribed');
    }
    localStorage.setItem('sub-state',JSON.stringify(button.innerText));
  };

    function initializeSubState(){
      let button=document.querySelector('.premium-subscribe-button');
      if (subState==='Subscribe'){
        button.innerText='Subscribe';
        button.classList.remove('is-subscribed');
      }
      else if(subState==='Subscribed'){
        button.innerText='Subscribed';
        button.classList.add('is-subscribed');
      }
    };
    initializeSubState();