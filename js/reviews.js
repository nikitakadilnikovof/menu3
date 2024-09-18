let footRating;
const footStars = document.querySelectorAll("#footStars i");
for (let i = 0; i < footStars.length; i++) {
    footStars[i].onclick = function () {
        footRating = `Оценка еды ${i + 1} ⭐`;
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
const serviceStars = document.querySelectorAll("#serviceStars i");
for (let i = 0; i < serviceStars.length; i++) {
    serviceStars[i].onclick = function () {
        serviceRating = `Оценка обслуживания ${i + 1} ⭐`;
        console.log(serviceRating)
        for (let g = 0; g < serviceStars.length; g++) {
            serviceStars[g].classList.remove("star_active");
        }
        for (let s = 0; s < i + 1; s++) {
            serviceStars[s].classList.add("star_active");
        }
    }
}

let comment;

const textarea = document.querySelector("textarea");
textarea.oninput = function () {
    comment = textarea.value;
    console.log(comment)
}


const tokenTg = "6951046334:AAFt7lerf2Qptumrk0BmFx7RQuEzGaVb1Mk";
const chatIdTg = "5712656420";
const wrapper = document.querySelector(".wrapper");
const button = document.querySelector("button");
const formBlock = document.querySelector(".form-block");
button.onclick = function () {
    if (footRating != undefined && serviceRating != undefined) {
        const messageText = `Новый отзыв с сайта\n -  ${serviceRating}\n  - ${footRating}\n Комментарий - ${comment}`;
        const url = `https://api.telegram.org/bot${tokenTg}/sendMessage`;
        const params = {
            chat_id: chatIdTg,
            text: messageText,
        };
        axios.post(url, params)
            .then(response => {
                console.log('Сообщение успешно отправлено:', response.data);
                formBlock.classList.add("wrapper_active");
                setTimeout(() => {
                    textarea.value = "";
                    formBlock.classList.remove("wrapper_active");
                }, 3000);
            })
            .catch(error => {
                console.error('Ошибка при отправке сообщения:', error);
            });
        return false
    }else{
        alert("Пожалуйста поставте звездочки")
    }
}
