function activeRate(event){
    const myActivateClass = event.target.classList[0];
    const rateCardElem = document.querySelector(".card_rating_rate").classList[0];
    // console.log(searchActiveElemAll);
    // console.log(myActivateClass);
    // console.log(event.target.classList[0]);

    if (myActivateClass === rateCardElem) {
        const searchActiveElemAll = document.querySelectorAll(".card_rating_rate");
        for (let i = 0; i < searchActiveElemAll.length; i++) {
            searchActiveElemAll[i].classList.remove("active");
        }
        document.querySelector("."+event.target.classList[1]).classList.add("active");
    }
}

function thankYou(event){
    const clickedOnSubmit = document.querySelector("."+event.target.className);
    const submitButton = document.querySelector(".card_btn");
    console.log(clickedOnSubmit);
    if (clickedOnSubmit === submitButton) {
        // cardElem.style.display = "none";
        const rate = cardElem.querySelector(".active").textContent;

        cardElem.style.textAlign = "center";
        cardElem.querySelector(".card_title").textContent = "Thank you!";
        cardElem.querySelector(".card_description").textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
        cardElem.querySelector(".card_rating").style.display = "none";
        cardElem.querySelector(".card_btn").style.display = "none";
        cardElem.querySelector(".card_logo").style.display = "none";
        const h3Elem = document.createElement("h3");
        h3Elem.className = "card_select";
        h3Elem.textContent = "You selected "+rate+" out of 5"
        cardElem.prepend(h3Elem);
        const imgElem = document.createElement("img");
        imgElem.classList.add("image_thank-you");
        imgElem.alt = "Thank you illustration";
        imgElem.srcset = "./images/illustration-thank-you.svg";
        cardElem.prepend(imgElem);
    }


}

const cardElem = document.querySelector(".card");
cardElem.addEventListener("click", activeRate);

cardElem.addEventListener("click", thankYou);

