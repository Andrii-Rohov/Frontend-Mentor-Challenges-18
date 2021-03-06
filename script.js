let body = document.querySelector("#body")
let quoteBlock = document.querySelector("#content");
let personPhoto = document.querySelector("#photo-person");
let personText = document.querySelector("#quote-text");
let personName = document.querySelector("#name");

let arrows = document.querySelector("#arrows");
let prevButton = document.querySelector("#prev-arrow");
let nextButton = document.querySelector("#next-arrow");

let personId = document.querySelector("#quote");




let openedQuoteBlock = personId.className;
let personsObj = {
    "tanya" : {
        "h1": "Tanya Sinclair",
        "h2": "UX Engineer",
        "quoteText": `“ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”`,
        "photo": "./images/image-tanya.jpg",
    },
    "jhon": {
        "h1": "John Tarkpor",
        "h2": "Junior Front-end Developer",
        "quoteText": `“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`,
        "photo": "./images/image-john.jpg",
        
    },

};

let i = 0;



function prevQuoteBlock() {
    if(i == 0) {
        quoteBlock.classList.add(`anim-left-${i}`);
        personId.classList.toggle("tanya");
        personId.classList.toggle("jhon");
        personPhoto.src = personsObj[openedQuoteBlock].photo;
        personText.innerHTML = personsObj[openedQuoteBlock].quoteText;
        personName.firstElementChild.innerHTML = personsObj[openedQuoteBlock].h1;
        personName.lastElementChild.innerHTML = personsObj[openedQuoteBlock].h2;
        quoteBlock.classList.remove(`anim-left-${i}`);
        openedQuoteBlock = personId.className;
        return;
    }
    quoteBlock.classList.add(`anim-left-${i}`);
    personId.classList.toggle("tanya");
    personId.classList.toggle("jhon");
    console.log(openedQuoteBlock);

    
    setTimeout(function(){
        console.log(openedQuoteBlock);
        personPhoto.src = personsObj[openedQuoteBlock].photo;
        personText.innerHTML = personsObj[openedQuoteBlock].quoteText;
        personName.firstElementChild.innerHTML = personsObj[openedQuoteBlock].h1;
        personName.lastElementChild.innerHTML = personsObj[openedQuoteBlock].h2;
        
    }, 750)

    setTimeout(function(){
        quoteBlock.classList.remove(`anim-left-${i}`);
        openedQuoteBlock = personId.className;
        
    }, 1550)

};

function nextQuoteBlock() {
    if(i == 0) {
        
        quoteBlock.classList.add(`anim-right-${i}`);
        personId.classList.toggle("tanya");
        personId.classList.toggle("jhon");
        personPhoto.src = personsObj[openedQuoteBlock].photo;
        personText.innerHTML = personsObj[openedQuoteBlock].quoteText;
        personName.firstElementChild.innerHTML = personsObj[openedQuoteBlock].h1;
        personName.lastElementChild.innerHTML = personsObj[openedQuoteBlock].h2;
        quoteBlock.classList.remove(`anim-right-${i}`);
        openedQuoteBlock = personId.className;
        return;
        
    }
    quoteBlock.classList.add(`anim-right-${i}`);
    personId.classList.toggle("tanya");
    personId.classList.toggle("jhon");
    console.log(openedQuoteBlock);

    
    setTimeout(function(){
        console.log(openedQuoteBlock);
        personPhoto.src = personsObj[openedQuoteBlock].photo;
        personText.innerHTML = personsObj[openedQuoteBlock].quoteText;
        personName.firstElementChild.innerHTML = personsObj[openedQuoteBlock].h1;
        personName.lastElementChild.innerHTML = personsObj[openedQuoteBlock].h2;
        
    }, 750)

    setTimeout(function(){
        quoteBlock.classList.remove(`anim-right-${i}`);
        openedQuoteBlock = personId.className;
        
    }, 1550)


};


prevButton.addEventListener("click", function() {
    prevQuoteBlock();
    
})
nextButton.addEventListener("click", function() {
    nextQuoteBlock();

});

body.addEventListener("keydown", function(e){
    if(e.key == "ArrowRight") {
        nextQuoteBlock();
    } else if(e.key == "ArrowLeft") {
        prevQuoteBlock();
    } else if(e.key == "e") {
        alert("You found an easter egg");
    }

   
    console.log(e.key);
})



let radio = document.querySelector("#radio");
let circle = document.querySelector("#circle");

radio.addEventListener("click", function(){
    
    if(i == 0) {
        circle.classList.add("move-1");
        i++;
    } else if(i == 1) {
        circle.classList.add("move-2");
        i++;
    } else if(i == 2) {
        circle.classList.add("move-3");
        i++;
    } else if(i == 3) {
        circle.classList.add("move-4");
        i++;
    } else {
        i = 0;
        circle.classList.remove("move-1");
        circle.classList.remove("move-2");
        circle.classList.remove("move-3");
        circle.classList.remove("move-4");
        circle.classList.add("move");
    }
    
    
});