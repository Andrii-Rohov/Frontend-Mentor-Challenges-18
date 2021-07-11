let quoteBlock = document.querySelector("#content");
let personPhoto = document.querySelector("#photo-person");
let personText = document.querySelector("#quote-text");
let personName = document.querySelector("#name");
let arrows = document.querySelector("#arrows");

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








let prevButton = document.querySelector("#prev-arrow");
let nextButton = document.querySelector("#next-arrow");

prevButton.addEventListener("click", function() {
    quoteBlock.classList.add("anim-left");
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
        quoteBlock.classList.remove("anim-left");
        openedQuoteBlock = personId.className;
    }, 1550)
    
})
nextButton.addEventListener("click", function() {

    quoteBlock.classList.add("anim-right");
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
        quoteBlock.classList.remove("anim-right");
        openedQuoteBlock = personId.className;
    }, 1550)

})