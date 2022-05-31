function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

const daysList = document.getElementById("days");
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function createDays() {
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let newDays = dezDaysList[index];
    let daysElement = document.createElement("li");
    daysElement.innerText = newDays;
    daysElement.className = "day";
    daysList.appendChild(daysElement);

    if (newDays === 24 || newDays === 31) {
      daysElement.className = "day holiday";
    }
    if (newDays === 4 || newDays === 11 || newDays === 18) {
      daysElement.className = "day friday";
    }
    if (newDays === 25) {
      daysElement.className = "day friday holiday";
    }
  }
}

createDays();

function createButtonHoliday(string) {
  let buttonContainer = document.querySelector(".buttons-container");
  let newButton = document.createElement("button");
  newButton.setAttribute("id", "btn-holiday");
  newButton.innerHTML = string;
  buttonContainer.appendChild(newButton);
}

createButtonHoliday("Feriados");

function holidayColorButton() {
  let holidayButton = document.querySelector("#btn-holiday");
  let days = document.getElementsByClassName("holiday");

  holidayButton.addEventListener("click", function () {
    for (let i = 0; i < days.length; i += 1) {
      if (days[i].style.backgroundColor === "green") {
        days[i].style.backgroundColor = "rgb(238,238,238)";
      } else {
        days[i].style.backgroundColor = "green";
      }
    }
  });
}

holidayColorButton();

function itsFriday(string) {
  let buttonContainer = document.querySelector(".buttons-container");
  let newButtonFriday = document.createElement("button");
  newButtonFriday.setAttribute("id", "btn-friday");
  newButtonFriday.innerHTML = string;
  buttonContainer.appendChild(newButtonFriday);
}

itsFriday("Sextou");

function sextou() {
  let buttonFriday = document.querySelector("#btn-friday");
  let fridayDays = document.getElementsByTagName("friday");
  let stringFriday = "SEXTOU!!!";

  buttonFriday.addEventListener("click", function () {
    for (let i = 0; i < fridayDays.length; i += 1) {
      if (fridayDays[i].innerHTML !== stringFriday) {
        fridayDays[i].innerHTML = stringFriday;
      } else {
        fridayDays[i].innerHTML = fridayDays[i];
      }
    }
  });
}

sextou();