// Смена "активного" элемента в FAQ
const accountFaq = document.getElementById("accountFaq");
const generalFaq = document.getElementById("generalFaq");

const generalTitle = document.getElementById("generalTitle");
const accountTitle = document.getElementById("accountTitle");

const accountQuestions = document.getElementById("account_questions");
const generalQuestions = document.getElementById("general_questions");

function showAccountFaq() {
    accountTitle.style.color = "#dc052d";
    accountFaq.style.borderBottom = "2px solid #dc052d";
    accountFaq.style.width = "100%";


    generalTitle.style.color = "#999";
    generalFaq.style.width = "75%";
    generalFaq.style.borderBottom = "2px solid #999";

    accountQuestions.style.display = "block";
    generalQuestions.style.display = "none";
}
function showGeneralFaq() {
    generalTitle.style.color = "#dc052d";
    generalFaq.style.borderBottom = "2px solid #dc052d";
    generalFaq.style.width = "100%";

    accountTitle.style.color = "#999";
    accountFaq.style.width = "75%";
    accountFaq.style.borderBottom = "2px solid #999";

    accountQuestions.style.display = "none";
    generalQuestions.style.display = "block";
}

generalFaq.onclick = showGeneralFaq;
accountFaq.onclick = showAccountFaq;

// Кликабельность элементов FAQ
const questions = document.getElementsByClassName("question");
const answerSmall = document.getElementsByClassName("answer__small");

// Функция для блоков с большим количеством текста
function showActiveQuestion() {
    if ((window.innerWidth >= 1200) && window.innerWidth <= 1440) {
        if(this.style.minHeight === "180px") {
            this.style.minHeight = "50px";
            this.style.background = "rgba(61, 0, 18, 0)";
            this.querySelector(".arrow").style.transform = "rotate(0deg)";
        } else {
            this.style.minHeight = "180px";
            this.style.background = "rgba(61, 0, 18, 0.6)";
            this.querySelector(".arrow").style.transform = "rotate(90deg)";
        }
    }
    else if ((window.innerWidth >= 856) && (window.innerWidth <= 1199)) {
        if(this.style.minHeight === "225px") {
            this.style.minHeight = "50px";
            this.style.background = "rgba(61, 0, 18, 0)";
            this.querySelector(".arrow").style.transform = "rotate(0deg)";
        } else {
            this.style.minHeight = "225px";
            this.style.background = "rgba(61, 0, 18, 0.6)";
            this.querySelector(".arrow").style.transform = "rotate(90deg)";
        }
    }
    else if ((window.innerWidth >= 811) && (window.innerWidth <= 855)) {
        if(this.style.minHeight === "230px") {
            this.style.minHeight = "50px";
            this.style.background = "rgba(61, 0, 18, 0)";
            this.querySelector(".arrow").style.transform = "rotate(0deg)";
        } else {
            this.style.minHeight = "230px";
            this.style.background = "rgba(61, 0, 18, 0.6)";
            this.querySelector(".arrow").style.transform = "rotate(90deg)";
        }
    }
    else if ((window.innerWidth >= 650) && (window.innerWidth <= 810)) {
        if(this.style.minHeight === "235px") {
            this.style.minHeight = "50px";
            this.style.background = "rgba(61, 0, 18, 0)";
            this.querySelector(".arrow").style.transform = "rotate(0deg)";
        } else {
            this.style.minHeight = "235px";
            this.style.background = "rgba(61, 0, 18, 0.6)";
            this.querySelector(".arrow").style.transform = "rotate(90deg)";
        }
    }
    else if ((window.innerWidth >= 450) && (window.innerWidth <= 649)) {
        if(this.style.minHeight === "260px") {
            this.style.minHeight = "50px";
            this.style.background = "rgba(61, 0, 18, 0)";
            this.querySelector(".arrow").style.transform = "rotate(0deg)";
        } else {
            this.style.minHeight = "260px";
            this.style.background = "rgba(61, 0, 18, 0.6)";
            this.querySelector(".arrow").style.transform = "rotate(90deg)";
        }
    }
    else if ((window.innerWidth >= 430) && (window.innerWidth <= 449)) {
        if(this.style.minHeight === "235px") {
            this.style.minHeight = "50px";
            this.style.background = "rgba(61, 0, 18, 0)";
            this.querySelector(".arrow").style.transform = "rotate(0deg)";
        } else {
            this.style.minHeight = "235px";
            this.style.background = "rgba(61, 0, 18, 0.6)";
            this.querySelector(".arrow").style.transform = "rotate(90deg)";
        }
    }
    else if ((window.innerWidth >= 375) && (window.innerWidth <= 429)) {
        if(this.style.minHeight === "258px") {
            this.style.minHeight = "50px";
            this.style.background = "rgba(61, 0, 18, 0)";
            this.querySelector(".arrow").style.transform = "rotate(0deg)";
        } else {
            this.style.minHeight = "258px";
            this.style.background = "rgba(61, 0, 18, 0.6)";
            this.querySelector(".arrow").style.transform = "rotate(90deg)";
        }
    }
    else {
        if(this.style.minHeight === "150px") {
            this.style.minHeight = "50px";
            this.style.background = "rgba(61, 0, 18, 0)";
            this.querySelector(".arrow").style.transform = "rotate(0deg)";
        } else {
            this.style.minHeight = "150px";
            this.style.background = "rgba(61, 0, 18, 0.6)";
            this.querySelector(".arrow").style.transform = "rotate(90deg)";
        }
    }
}

// Функция для клика на блоки с маленьким количеством текста
function showActiveQuestionSmall() {
    if ((window.innerWidth >= 856) && (window.innerWidth <= 1199)) {
        if(this.style.minHeight === "160px") {
            this.style.minHeight = "50px";
            this.style.background = "rgba(61, 0, 18, 0)";
            this.querySelector(".arrow").style.transform = "rotate(0deg)";
        } else {
            this.style.minHeight = "160px";
            this.style.background = "rgba(61, 0, 18, 0.6)";
            this.querySelector(".arrow").style.transform = "rotate(90deg)";
        }
    }
    else if ((window.innerWidth >= 811) && (window.innerWidth <= 855)) {
        if(this.style.minHeight === "170px") {
            this.style.minHeight = "50px";
            this.style.background = "rgba(61, 0, 18, 0)";
            this.querySelector(".arrow").style.transform = "rotate(0deg)";
        } else {
            this.style.minHeight = "170px";
            this.style.background = "rgba(61, 0, 18, 0.6)";
            this.querySelector(".arrow").style.transform = "rotate(90deg)";
        }
    }
    else if ((window.innerWidth >= 750) && (window.innerWidth <= 810)) {
        if(this.style.minHeight === "180px") {
            this.style.minHeight = "50px";
            this.style.background = "rgba(61, 0, 18, 0)";
            this.querySelector(".arrow").style.transform = "rotate(0deg)";
        } else {
            this.style.minHeight = "180px";
            this.style.background = "rgba(61, 0, 18, 0.6)";
            this.querySelector(".arrow").style.transform = "rotate(90deg)";
        }
    }
    else if ((window.innerWidth >= 450) && (window.innerWidth <= 749)) {
        if(this.style.minHeight === "165px") {
            this.style.minHeight = "50px";
            this.style.background = "rgba(61, 0, 18, 0)";
            this.querySelector(".arrow").style.transform = "rotate(0deg)";
        } else {
            this.style.minHeight = "165px";
            this.style.background = "rgba(61, 0, 18, 0.6)";
            this.querySelector(".arrow").style.transform = "rotate(90deg)";
        }
    }
    else if ((window.innerWidth >= 400) && (window.innerWidth <= 449)) {
        if(this.style.minHeight === "155px") {
            this.style.minHeight = "50px";
            this.style.background = "rgba(61, 0, 18, 0)";
            this.querySelector(".arrow").style.transform = "rotate(0deg)";
        } else {
            this.style.minHeight = "155px";
            this.style.background = "rgba(61, 0, 18, 0.6)";
            this.querySelector(".arrow").style.transform = "rotate(90deg)";
        }
    }
    else if ((window.innerWidth >= 375) && (window.innerWidth <= 399)) {
        if(this.style.minHeight === "165px") {
            this.style.minHeight = "50px";
            this.style.background = "rgba(61, 0, 18, 0)";
            this.querySelector(".arrow").style.transform = "rotate(0deg)";
        } else {
            this.style.minHeight = "165px";
            this.style.background = "rgba(61, 0, 18, 0.6)";
            this.querySelector(".arrow").style.transform = "rotate(90deg)";
        }
    }
    else {
        if(this.style.minHeight === "150px") {
            this.style.minHeight = "50px";
            this.style.background = "rgba(61, 0, 18, 0)";
            this.querySelector(".arrow").style.transform = "rotate(0deg)";
        } else {
            this.style.minHeight = "150px";
            this.style.background = "rgba(61, 0, 18, 0.6)";
            this.querySelector(".arrow").style.transform = "rotate(90deg)";
        }
    }
}

// Даём кнопкам возможность менять цвет и размер
for(let i = 0; i < questions.length; i++) {
    questions[i].onclick = showActiveQuestion;
}
for (let i = 0; i < answerSmall.length; i++) {
    answerSmall[i].onclick = showActiveQuestionSmall;
}
