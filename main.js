
//Image Switcher Code
let myImage = document.querySelector('img');

myImage.onclick = function() {

    let mySrc = myImage.getAttribute("src");

    if(mySrc === "puppy1.jpg"){
        myImage.setAttribute("src","puppy2.jpg");
    } else {
        myImage.setAttribute("src","puppy1.jpg");
    }
}


//Personalized welcome message code 
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please Enter Your Name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Coding Is Cool, ' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Coding Is Cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

