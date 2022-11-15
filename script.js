//html element and selector variables
let p = document.createElement("p");
let h1 = document.querySelector(".header");
let input = document.querySelector(".input");
let hideButton = document.querySelector (".hide-button");
let showButton = document.querySelector (".show-button");
let updateButton = document.querySelector (".update-img-button");
let smButton = document.querySelector (".message-button");
let nameButton = document.querySelector (".name-button");
let userInput;
let Ghost = document.querySelector (".ghost-image");
let msg = document.querySelector (".message");
//declare variable for ghost image


//declare variables for all of the buttons



//create an onclick event for the Hide Me button
/*hide button variable*/hideButton.onclick = (function (){  
    Ghost.style.display = "none"
});

//create an onclick event for the Show Me button
showButton.onclick = (function() {
  Ghost.style.display = "initial"
});


//create an onclick event for the Update Img button
updateButton.onclick = (function (){
  Ghost.src = "https://pyxis.nymag.com/v1/imgs/22c/b48/43ceda124b1dfb12dbe822e858c22870bb-06-snapchat.rsquare.w330.jpg"
});

//create an onclick event for the Send Message button
//update the userInput variable by saving the value of the input
//use the insertAdjacentHTML method to append the userInput in a <p> tag
smButton.onclick = function (){
  let userInput = `<p> ${input.value} </p>`;
  msg.insertAdjacentHTML ('beforeend',userInput)
};


//create an onclick event for the Name Me button
//update the userInput variable by saving the value of the input
//use the innerHTML method to update the h1 tag
nameButton.onclick = function () {
  let userInput = input.value;
  h1.innerHTML = userInput
};