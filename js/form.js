const url = new URLSearchParams(window.location.search);
console.log(url)

const tableNumber = url.get("table");
console.log(tableNumber)

const feedBackBloсk = document.querySelector('.feedBack-bloсk');
const feedBackButton = document.querySelector('.feedBack-button');

feedBackButton.onclick = function () {

    feedBackButton.classList.toggle('feedBack-button_active');
    feedBackBloсk.classList.toggle('feedBack-bloсk_active');
}

let footRating;
const footStars = document.querySelectorAll("#footStars i");
const footRatingInput = document.querySelector("#footRating");
for (let i = 0; i < footStars.length; i++) {
    footStars[i].onclick = function () {
        footRating = `Оценка еды ${i + 1} ⭐`;
        footRatingInput.value = footRating
        console.log(footRating)
        for (let g = 0; g < footStars.length; g++) {
            footStars[g].classList.remove("star_active");

        }
        for (let s = 0; s < i + 1; s++) {
            footStars[s].classList.add("star_active");
        }
    }
}


let serviceRating;
const serviceRatingInput = document.querySelector("#serviceRating");
const serviceStars = document.querySelectorAll("#serviceStars i");
for (let i = 0; i < serviceStars.length; i++) {
    serviceStars[i].onclick = function () {
        serviceRating = `Оценка обслуживания ${i + 1} ⭐`;
        serviceRatingInput.value = serviceRating
        console.log(serviceRating)
        for (let g = 0; g < serviceStars.length; g++) {
            serviceStars[g].classList.remove("star_active");
        }
        for (let s = 0; s < i + 1; s++) {
            serviceStars[s].classList.add("star_active");
        }
    }
}



const iframe = document.querySelector("iframe");
const formWrapper = document.querySelector(".form-wrapper");
iframe.onload = function () {
    formWrapper.classList.add("form-wrapper_active");
    setTimeout(() => {
        feedBackButton.classList.toggle('feedBack-button_active');
        feedBackBloсk.classList.toggle('feedBack-bloсk_active');
    }, 3000);
}