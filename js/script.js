// alert(`Script is connected`)

// Step 1: Declare Some Variables 

// The btn variable represents the button that says 'Add Skill'

let addButton = $('button');

// The userSkill is the input the user types

let userSkill = document.querySelector('input')

// Skills represents the list items (our client wants it to start blank, so there is none in the HTML. Now, the user will add list items when typing skills)

let skills = document.createElement('li');

// The skills list is the unordered list in which the skills will pop up

let skillsList = document.querySelector('ul')

// We need to create an event, when the user clicks the Add Skill button, it needs to add the input into the ul

addButton.on("click" , function (evt){
    // console.log('this works') --- I used this to test this click was set up properly 
    // when I left skills defined only outside the function, only one li would add. Re-declaring the variable here makes it function properly. 

    let skills = document.createElement('li');
    let deleteButton = document.createElement('button')

    // Had to do some MDN and YouTubing to figure this next part out. We want the list items to have the same text as the value. Paul went over this, but it took me a minute to remember that input text is a 'value' and not text.
    skills.innerHTML = userSkill.value
    // To add the skill to the bottom, we need to append child.
    skillsList.appendChild(skills);
    // Just for fun, I wanted to clear the user input. 

    userSkill.value = "";
    // looked up the opposite of append and found prepend
    // had to create a new variable to add space between the deleteButton and the li
    skills.prepend(deleteButton);

    // now that we are adding the delete button to our list item, we want to give it a couple of features.
    // first, we want it to display as an X
    // second, we want to give it a class as delete, to help us style it as red.
    deleteButton.innerHTML = "X"
    deleteButton.classList.add("delete")

    // i tried a few different things first, but ultimately realized i needed to add this event listener for the delete button within the other event listener since everything is declared within this scope
    deleteButton.addEventListener("click" , function (e){
        skillsList.removeChild(skills)
    })
})

deleteButton.addEventListener("click" , function (e){
    skillsList.removeChild(skills)
})
// console.log(btn);
// console.log(userSkill);
// console.log(skills);
// console.log(skillsList);
