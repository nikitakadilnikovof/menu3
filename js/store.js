const menu = {
    mainDishes: [
        {
            img: "1",
            name: { ru: "Говяжьи ребрышки", tr: "Dana Kaburga", en: "Beef Ribs" },
            description: {
                ru: "Говяжьи ребрышки, приготовленные в специальном барбекю на яблоневом дереве, коптятся на медленном огне 10-12...",
                tr: "Özel BBQ’de, elma odunuyla, 10-12 saate kadar ağır ateşte tütsülenerek pişirilmiş dana kaburga, baharatlı baby patates...",
                en: "Beef ribs cooked in a special BBQ with apple wood, smoked over a slow fire for 10-12 hours, spicy baby potatoes..."
            },
            price: "260 ",
            time: { ru: "20 МИН", tr: "20 DK", en: "20 MIN" }
        },
        {
            img: "2",
            name: { ru: "Восхитительная вырезка", tr: "Bonfile Lokum", en: "Tenderloin Delight" },
            description: {
                ru: "Вырезка на гриле, соте из картофеля, брокколи, цветная капуста, пармезан и руккола",
                tr: "Izgara lokum bonfile, Patates sote, Brokoli, karnabahar, Parmesan ve Roka ile",
                en: "Grilled tenderloin, sautéed potatoes, broccoli, cauliflower, Parmesan and arugula"
            },
            price: "220 ",
            time: { ru: "15 МИН", tr: "15 DK", en: "15 MIN" }
        },
        {
            img: "3",
            name: { ru: "Робеспьер", tr: "Robespierre", en: "Robespierre" },
            description: {
                ru: "Запеченная говяжья вырезка с шалфеем, розмарином, картофельным соте, пармезаном и рукколой",
                tr: "Fırında yaprak dana bonfile, adaçayı, biberiye, patates sote, parmesan ve roka ile",
                en: "Baked beef tenderloin with sage, rosemary, potato sauté, parmesan and rocket"
            },
            price: "200 ",
            time: { ru: "15 МИН", tr: "15 DK", en: "15 MIN" }
        },
        {
            img: "4",
            name: { ru: "Лосось на гриле", tr: "Izgara Somon", en: "Grilled Salmon" },
            description: {
                ru: "Норвежский лосось, приготовленный на гриле, с овощным гарниром, сыром пармезан и рукколой",
                tr: "Izgara Norveç somonu, Sebze garnitür ve Parmesan peynirli ve Roka ile",
                en: "Grilled Norwegian salmon, with vegetable garnish and Parmesan cheese and rocket"
            },
            price: "320",
            time: { ru: "15 МИН", tr: "15 DK", en: "15 MIN" }
        },
        {
            img: "5",
            name: { ru: "Мясная кесадилья", tr: "Etli Quesadilla", en: "Meat Quesadilla" },
            description: {
                ru: "Обжаренные кусочки говядины, мексиканская фасоль, цветной перец, моцарелла, горчица, острый соус, томатная сальса...",
                tr: "Tortilla içinde sote dana et parçaları, Meksika fasulyesi, renkli biberler, mozzarella, hardal, acı sos, yanında domates salsa sos...",
                en: "Sauteed beef pieces, Mexican beans, colorful peppers, mozzarella, mustard, hot sauce, tomato salsa..."
            },
            price: "260",
            time: {
                ru: "20 МИН", tr: "20 DK", en: "20 MIN"
            }
        },
        {
            img: "6",
            name: { ru: "Комбо из говяжьих ребрышек", tr: "Dana Kaburga Kombo", en: "Beef Rib Combo" },
            description: {
                ru: "Говяжьи ребрышки, изысканная колбаса, пряный картофель, салат коулслоу, соус барбекю и корнишоны",
                tr: "Dana kaburga, gurme sosis, baharatlı baby patates, coleslaw salata, BBQ sos ve kornişyon turşu ile",
                en: "Beef ribs, gourmet sausage, spicy baby potatoes, coleslaw salad, BBQ sauce and gherkins"
            },
            price: "440",
            time: {
                ru: "20 МИН", tr: "20 DK", en: "20 MIN"
            }
        }
    ],
    snacks: [
        {
            img: "1",
            name: { ru: "Сырная тарелка", tr: "Peynir Tabağı", en: "Cheese Platter" },
            description: {
                ru: "Импортные и местные сорта сыра, сушеные абрикосы, грецкие орехи, оливки и гризи",
                tr: "İthal ve yerli peynir çeşitleri,Kuru kayısı, Ceviz, Zeytin ve grisini",
                en: "Imported and local cheese varieties, dried apricots, walnuts, olives and grisi"
            },
            price: "80",
            time: { ru: "2 МИН", tr: "20 DK", en: "20 MIN" }
        },
        {
            img: "2",
            name: { ru: "Начос с грудинкой", tr: "Füme Etli Nachos", en: "Smoked Meat Nachos" },
            description: {
                ru: "Копченая говяжья грудинка, перец халапеньо, мексиканская фасоль, сырный соус Моцарелла и Чеддер, красный и зеленый перец",
                tr: "Tütsülenmiş dana brisket, jalapeno biberi, Meksika fasulyesi, mozzarella ve cheddar peyniri sos, kırmızı-yeşil biber ile",
                en: "Smoked beef brisket, jalapeno peppers, Mexican beans, mozzarella and cheddar cheese sauce, red and green chili"
            },
            price: "180",
            time: { ru: "15 МИН", tr: "20 DK", en: "20 MIN" }
        },
        {
            img: "3",
            name: { ru: "Начос с креветками", tr: "Karidesli Nachos Lokmaları", en: "Shrimp Nachos Bites" },
            description: {
                ru: "Чипсы начос с паштетом из свежего авокадо и жареными креветками, томатный соус сальса",
                tr: "Nachos cipslerinde taze avokado ezme ve tava karides, salsa domates sos ile",
                en: "Nachos chips with fresh avocado pate and pan-fried shrimp, salsa tomato sauce"
            },
            price: "120",
            time: { ru: "5 МИН", tr: "5 DK", en: "5 MIN" }
        },
        {
            img: "4",
            name: { ru: "Тартин из сардин", tr: "Sardalya Tartine", en: "Sardine Tartine" },
            description: {
                ru: "Сардина с трюфельным майонезом, ракула, соленые огурцы, цветы каперсов, маринованная свекла на поджаренном деревенском хлебе",
                tr: "Kızarmış ekşi maya köy ekmeğinde trüf mantarlı mayonezli sardalya, rakula, turşu, kapari çiçeği, pancar turşusu ile",
                en: "Sardine with truffle mayonnaise, rakula, pickles, caper flower, pickled beetroot on toasted sourdough village bread"
            },
            price: "70",
            time: { ru: "5 МИН", tr: "5 DK", en: "5 MIN" }
        },
        {
            img: "5",
            name: { ru: "Мексиканские начос", tr: "Meksika Nachos", en: "Mexican Nachos" },
            description: {
                ru: "Сальса из авокадо, сметана, мексиканская фасоль, перец халапеньо, соус из сыра моцарелла и чеддер, красный и зеленый перец",
                tr: "Avokado salsa, Ekşi krema, Meksika fasulyesi, jalapeno biberi, Mozzarella ve cheddar peyniri sos, kırmızı-yeşilbiber",
                en: "Avocado salsa, sour cream, Mexican beans, jalapeno pepper, mozzarella and cheddar cheese sauce, red-green pepper"
            },
            price: "220",
            time: { ru: "5 МИН", tr: "5 DK", en: "5 MIN" }
        }
    ],
    drinks: [
        {
            img: "1",
            name: { ru: "Аффогато", tr: "Affogato", en: "Beef Ribs" },
            description: {
                ru: "С ванильным мороженым и эспрессо",
                tr: "Vanilyalı dondurma ve Espresso ile",
                en: "With vanilla ice cream and espresso"
            },
            price: "70",
            time: { ru: "1 МИН", tr: "1 DK", en: "1 MIN" }
        },
        {
            img: "2",
            name: { ru: "Капучино", tr: "Cappuccino", en: "Cappuccino" },
            description: {
                ru: "С эспрессо и молочным кремом",
                tr: "Espresso ve süt kreması ile",
                en: "With espresso and milk cream"
            },
            price: "35",
            time: { ru: "2 МИН", tr: "2 DK", en: "2 MIN" }
        },
        {
            img: "3",
            name: { ru: "Классический турецкий чай", tr: "Klasik Türk Çayı", en: "Classic Turkish Tea" },
            description: {
                ru: "Описание товара отсутствует",
                tr: "Ürün açıklaması bulunmamaktadır",
                en: "There is no product description"
            },
            price: "15",
            time: { ru: "1 МИН", tr: "1 DK", en: "1 MIN" }
        },
        {
            img: "4",
            name: { ru: "Бутылка Coca Cola", tr: "Coca Cola Şişe", en: "Coca Cola Bottle" },
            description: {
                ru: "Описание товара отсутствует",
                tr: "Ürün açıklaması bulunmamaktadır",
                en: "There is no product description"
            },
            price: "20",
            time: { ru: "1 МИН", tr: "1 DK", en: "1 MIN" }
        },
        {
            img: "5",
            name: { ru: "Бутылка Sprite", tr: "Sprite Şişe", en: "Sprite Bottle" },
            description: {
                ru: "Описание товара отсутствует",
                tr: "Ürün açıklaması bulunmamaktadır",
                en: "There is no product description"
            },
            price: "20",
            time: { ru: "1 МИН", tr: "1 DK", en: "1 MIN" }
        }
    ],
    alcoholicDrinks: [
        {
            img: "1",
            name: { ru: "Desperados 33 мл", tr: "Desperados 33 ml", en: "Desperados 33 cl" },
            description: {
                ru: "Темное фильтрованное пиво",
                tr: "Koyu filtrelenmiş bira",
                en: "Dark filtered beer"
            },
            price: "100",
            time: { ru: "1 МИН", tr: "1 DK", en: "1 MIN" }
        },
        {
            img: "2",
            name: {
                ru: "Tuborg Gold 33 мл", tr: "Tuborg Gold 33 ml", en: "Tuborg Gold 33 cl" },
            description: {
            ru: "Светлое фильтрованное пиво",
            tr: "Hafif filtrelenmiş bira",
            en: "Light filtered beer"
        },
        price: "100",
        time: { ru: "1 МИН", tr: "1 DK", en: "1 MIN" }
        }
    ]
}


//конец базы даных 



const lang = document.querySelector("html").getAttribute("lang");
let buttonWord;
let buttonWordActive;
let basketButtonWord;
let basketButtonWordActive;
if (lang == "ru") {
    buttonWord = "Выбрать";
    buttonWordActive = "Отменить";
    basketButtonWord = "Развернуть";
    basketButtonWordActive = "Свернуть";
}
if (lang == "tr") {
    buttonWord = "Seçmek"
    buttonWordActive = "Seçildi";
    basketButtonWord = "Genişletmek";
    basketButtonWordActive = "Нıkılmak";
}
if (lang == "en") {
    buttonWord = "Choose"
    buttonWordActive = "Selected";
    basketButtonWord = "Expand";
    basketButtonWordActive = "Сollapse";
}




const menuListAll = document.querySelectorAll(".menu-list");//переменая в которую попадают дивы с котекореями для карточек
for (let i = 0; i < menuListAll.length; i++) {//цыкл который подставляет все карточки с блюдоми
    const menuListDiv = menuListAll[i];
    const menuListDivID = menuListDiv.getAttribute("id");
    for (let i = 0; i < menu[menuListDivID].length; i++) {
        const cartInfo = menu[menuListDivID][i];
        let cartDiv = document.createElement("div");
        cartDiv.className = "menu-cart";

        cartDiv.innerHTML = `
        <i class="fa-solid fa-circle-check"></i>
        <img src="./img/menu/${menuListDivID}/${cartInfo.img}.png" alt="">
        <div class="menu-cart__info">
            <div>
                <h3>${cartInfo.name[lang]}</h3>
                <p>${cartInfo.description[lang]}</p>
            </div>
            <div class="menu-cart__details">
                <div>
                    <span class="price"> <i class="fa-solid fa-hand-holding-dollar"></i> <span class="price__value"> ${cartInfo.price}</span> TL</span>
                    <span> <i class="fa-solid fa-clock"></i> ${cartInfo.time[lang]}</span>
                </div>
                <div class="menu-cart__amount">
                    <button> - </button>
                    <span class="amount-number">0</span>
                    <button> + </button>
                </div>

                <button class="menu-cart__choose">${buttonWord}</button>
            </div>
        </div>
        `
        menuListDiv.appendChild(cartDiv);
    }
}




const basketDiv = document.querySelector(".basket");//див в которым отображается карзина 

const cartButtonAll = document.querySelectorAll(".menu-cart .menu-cart__choose");//все кнопки выбрать в карточках
for (let i = 0; i < cartButtonAll.length; i++) {
    cartButtonAll[i].onclick = function () {//при нажатие на любую кнопку выбора запускаеи функцую
        const cart = cartButtonAll[i].parentNode.parentNode.parentNode;
        cart.classList.toggle("cart_active");

        if (cart.classList.contains("cart_active")) {//если у карточки есть класс cart_actife то есть карточка выбрана
            let cartInfo = {
                name: cart.querySelector("h3").innerText,
                price: cart.querySelector(".price__value").innerText,//цена за одну штуку
                amount: 1,//количевство выброных штук
                totalPrice: cart.querySelector(".price__value").innerText,//цена за все штуки
            };
            cart.querySelector(".amount-number").innerText = 1;
            basket.unshift(cartInfo);
            cartButtonAll[i].innerText = buttonWordActive;

        } else {// иначе если мы отменяем выбор 
            cartButtonAll[i].innerText = buttonWord;
            cart.querySelector(".amount-number").innerText = 0;
            const cartName = cart.querySelector("h3").innerText;
            for (let y = 0; y < basket.length; y++) {
                const basketElement = basket[y];
                if (basketElement.name == cartName) {
                    basket.splice(y, 1);
                }
            }
        }
        basketShowHide();
    }
}



const basketList = document.querySelector(".basket__list");//див в кором отображаются выброные блюда
function basketShowHide() {//фуекцыя включения или отключения корзины
    if (basket.length == 0) {// если корзина пустая то мы ее прячем
        basketDiv.classList.remove("basket_active");
    } else {//если карина не пустая 
        basketList.innerHTML = "";
        for (let i = 0; i < basket.length; i++) {
            const liInfo = basket[i];
            let basketItemLi = document.createElement("li");
            basketItemLi.innerHTML = `
            <h4>${liInfo.name}  </h4>
            <p>
            ×    <span>${liInfo.amount}</span>
               <span>${liInfo.totalPrice}</span>TL 
            </p>
            `
            basketList.appendChild(basketItemLi);
        }
        basketDiv.classList.add("basket_active");
        basketTotal();//запускаем функцыю подсчета стоймость выброных елементов 
    }
}




function basketTotal() {//функцыя подсчета стоимости 
    let basketTotalNumber = 0;
    for (let i = 0; i < basket.length; i++) {
        const basketItem = basket[i];
        const itemTotalPrice = basketItem.totalPrice;
        basketTotalNumber = basketTotalNumber + parseInt(itemTotalPrice);
    }
    const totalNumberSpan = document.querySelector("#basketAll");
    totalNumberSpan.innerText = basketTotalNumber;
}




let basket = [];//масив в которуй попалает выброные блюда




const amountButtonsAll = document.querySelectorAll(".menu-cart .menu-cart__amount button");//все кнопки с плюсом и минусом
for (let i = 0; i < amountButtonsAll.length; i++) {
    amountButtonsAll[i].onclick = function () {//при ножатии на кнопку щапускается функцыя
        const buttonSimval = amountButtonsAll[i].innerText;
        const cartName = amountButtonsAll[i].parentNode.parentNode.parentNode.querySelector("h3").innerText;
        const amountNumberSpan = amountButtonsAll[i].parentNode.querySelector(".amount-number");
        let amountNumber = parseInt(amountNumberSpan.innerText);
        if (buttonSimval == "+") {//если мы нажали на кнопку с плюсом
            amountNumber++;
            amountNumberSpan.innerText = amountNumber;

        } else {//если мы нажали на кнопку с минусом
            amountNumber = amountNumber - 1;
            amountNumberSpan.innerText = amountNumber;
            if (amountNumber == 0) {//если количевство выбронового блюдо варавно 0
                const cart = amountButtonsAll[i].parentNode.parentNode.parentNode.parentNode;
                cart.querySelector('.menu-cart__choose').innerText = buttonWord;
                cart.classList.remove("cart_active");
                for (let y = 0; y < basket.length; y++) {
                    const basketElement = basket[y];
                    if (basketElement.name == cartName) {
                        basket.splice(y, 1);//ужоляем это блюдо из корзины
                    }
                    basketShowHide()//перересовываем нашу карзину 
                }
            }
        }
        basketChange(cartName, amountNumber)//запускаем функцыю изменения даных в карзине 
    }
}




function basketChange(cartChengeName, amountChengeNumber) {//функцыя изменения даных в карзине 
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].name == cartChengeName) {
            basket[i].amount = amountChengeNumber;
            basket[i].totalPrice = basket[i].price * basket[i].amount
            basketShowHide()
        }
    }
}



const basketButton = document.querySelector(".basket button");
basketButton.onclick = function () {
    basketButton.classList.toggle("basket__button_active");
    basketDiv.classList.toggle("basket_active_full");
}