var numberOfDrumButtons = document.querySelectorAll(".drum").length;


//play sound using click **click in addEventListener**
for(let i=0; i<numberOfDrumButtons; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click", function ()
{

// “This” keyword refers to an object that is executing the current piece of code.
//this here is the button element 

    var buttonInnerHTML=this.innerHTML
    makeSound(buttonInnerHTML);
   buttonAnimation(buttonInnerHTML);
   
});

}

//play sound using keyboard button press **keydown in addEventListener**
document.addEventListener("keydown",function(event)
{
//the event here is the keyboard button press
//the key attribute of the event is the value of the keyboard button pressed
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key)
{

    switch(key)
    {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
    }
}

function buttonAnimation(key)
{
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");   
    }, 100);
    
}