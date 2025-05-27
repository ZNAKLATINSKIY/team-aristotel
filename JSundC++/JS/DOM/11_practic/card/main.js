// document.querySelector("body").innerHTML = "<div class='container'></div>";
// document.querySelector(".container").innerHTML = "<div id='card'></div>";
// document.querySelector("#card").innerHTML = "<h1 class='card__title'>INFORMATION</h1><div class='card__content'></div>";
// document.querySelector('.card__content').innerHTML = "<span class='card__content-info'>Name: Michail</span><br><span class='card__content-info'>Age: 17</span><br><span class='card__content-info'>—Каждый день убивай одного раба,<br> одного советчика, одного судью,<br> одного аристократа<br> и одного вождя</span><br><span class='card__content-info'>By Solovey</span>";
//
// const body = document.body;
// const myContainer = document.getElementsByClassName("container")[0];
// const myCard = document.getElementById("card");
// const cardTitle = document.getElementsByClassName("card__title")[0];
// const cardContent = document.getElementsByClassName("card__content")[0];
// const cardContentInfo = document.querySelectorAll(".card__content-info");
//
// body.style.backgroundColor = 'black';
// body.style.padding = "150px 0 0 0";
//
// myContainer.style.margin = "0 auto";
// myContainer.style.maxWidth = "840px";
//
// myCard.style.height = "500px";
// myCard.style.backgroundColor = "rgba(80, 166, 144)";
// myCard.style.backgroundImage = "url(backCard.jpg)";
// myCard.style.borderRadius = "35px";
// myCard.style.border = "3px solid white";
// myCard.style.display = "flex";
// myCard.style.flexDirection = "column";
// myCard.style.alignItems = "center";
//
// cardTitle.style.textAlign = "center";
// cardTitle.style.color = "white";
// cardTitle.style.fontSize = "2rem";
// cardTitle.style.padding = "20px 0 0 0";
//
// cardContent.style.margin = "35px 0 0 0";
// cardContent.style.width = "80%";
//
// cardContentInfo[0].style.fontSize = "2rem";
// cardContentInfo[0].style.color = "white";
//
// cardContentInfo[1].style.fontSize = "2rem";
// cardContentInfo[1].style.color = "white";
// cardContentInfo[1].style.position = "relative";
// cardContentInfo[1].style.top = "10px";
//
// cardContentInfo[addColor_block].style.fontSize = "1.3rem";
// cardContentInfo[addColor_block].style.color = "white";
// cardContentInfo[addColor_block].maxWidth = "200px";
// cardContentInfo[addColor_block].style.position = "relative";
// cardContentInfo[addColor_block].style.top = "50px";
// cardContentInfo[addColor_block].style.fontStyle = "italic";
//
// cardContentInfo[color-palitre].style.fontStyle = "italic";
// cardContentInfo[color-palitre].style.fontSize = "3rem";
// cardContentInfo[color-palitre].style.color = "white";
// cardContentInfo[color-palitre].style.fontStyle = "italic";
// cardContentInfo[color-palitre].style.position = "relative";
// cardContentInfo[color-palitre].style.top = "120px";
// cardContentInfo[color-palitre].style.right = "50px";
let body = document.querySelector("body");
body.style.backgroundColor = "black";

document.querySelector("body").innerHTML = "<div id='container'></div>";
let container = document.getElementById("container");
container.style.maxWidth = "1080px";
container.style.margin = "0 auto";

let card = document.createElement("div");
card.id = "card";
card.style.margin = "50px 0 0 0";
card.style.width = "1200px";
card.style.height = "650px";
card.style.borderRadius = "30px";
card.style.border = "3px solid white";
card.style.backgroundImage = "url(backCard.jpg)";
document.querySelector("#container").appendChild(card);

let cardTitle = document.createElement("h1");
cardTitle.classname = "card__title";
cardTitle.textContent = "INFORMATION";
cardTitle.style.color = "white";
cardTitle.style.fontSize = "4em";
cardTitle.style.textAlign = "left";
cardTitle.style.margin = "20px 0 0 20px";
document.querySelector("#card").appendChild(cardTitle);


