const toggleSwitch = document.querySelector('input[type="checkbox"]');

const nav = document.querySelector('nav');
const toggleIcon = document.getElementById('toggle-icon');
const firstImage = document.getElementById('cloud');
const secondImage = document.getElementById('airport');
const thirdImage = document.getElementById('love');
const textBox = document.querySelector('.about_text__text');

//Dark or Light Images
function imageMode(color){
    firstImage.src= `static/img/cloud_${color}.svg`;
    secondImage.src= `static/img/airport_${color}.svg`;
    thirdImage.src= `static/img/love_${color}.svg`;
}


function toggleDarkLightMode(isLight){
    nav.style.backgroundColor = isLight ? 'rgb(255 255 255 / 50%)': 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = isLight ? 'rgb(0 0 0 / 50%)': 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = isLight ? 'Light Mode': 'Dark Mode';
    isLight? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun'): toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    isLight? imageMode('light'): imageMode('dark');

}

//Switch Theme
function switchTheme(event){
    if (event.target.checked==true){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(false);
    } else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(true);
    }
}


//Event Listener
toggleSwitch.addEventListener('change', switchTheme);

//Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
        toggleDarkLightMode(false);
    }
}