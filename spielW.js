const input = document.querySelector(".field__form__input");
const btn = document.querySelector(".field__form__btn");
const startBtn = document.querySelector(".start");
const check = document.querySelector(".result__check__out");
const help = document.querySelector(".result__help__out");
const count = document.querySelector(".result__count__out");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const los = document.querySelector(".los");

let item = 0;
let userNum;
let randNum;

startBtn.onclick = function randonGenerator() {
    let ersteGrenze = Math.ceil(first.value);
    let zweiteGrenze = Math.floor(second.value);
    randNum = Math.floor(Math.random() * (zweiteGrenze - ersteGrenze + 1)) + ersteGrenze;
    los.textContent = "Los Geht's";
    return randNum;
};

btn.onclick = function () {
    userNum = input.value;

    console.log(userNum, randNum);
    if (userNum > randNum) {
        check.textContent = "nicht erraten";
        help.textContent = "Zahl ist zu groß";
        item++;
        count.textContent = item;
    } else if (userNum < randNum) {
        check.textContent = "nicht erraten";
        help.textContent = "Zahl ist zu klein";
        item++;
        count.textContent = item;
    } else {
        check.textContent = "Glückwünsche! du hast die Nummer erraten";
        help.textContent = "Genau richtig";
        item++;
        count.textContent = item;
    }
};
