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
// Функция для блоков с большим количеством текста
function showActiveQuestion() {
    if (this.querySelector('.question__answer').style.display === "block") {
        this.style.background = "none";
        this.querySelector('.question__answer').style.display = "none";
    }
    else {
        this.style.background = "#3d0011";
        this.querySelector(".question__answer").style.display = "block";
    }
}

// Даём кнопкам возможность менять цвет и размер
const questions = document.getElementsByClassName("question");

for(let i = 0; i < questions.length; i++) {
    questions[i].onclick = showActiveQuestion;
}

