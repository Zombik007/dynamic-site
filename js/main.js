// DOM елементи
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

// Функція відображення часу
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Ввиведення часу на сторінці
  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(
    min
  )}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);
}

// Додавання нуля перед однозначною цифрою
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Встановлення фону та привітання
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour === 0 || hour < 5) {
    // Ніч після 00:00 до 06:00
    document.body.style.backgroundImage = "url('/img/The_Beach_8.jpg')";
    greeting.textContent = "Доброї Ночі";
  } else if (hour < 6) {
    // Ранок
    document.body.style.backgroundImage = "url('/img/The_Beach_1.jpg')";
    greeting.textContent = "Доброго Ранку";
  } else if (hour < 9) {
    // Ранок до полудня
    document.body.style.backgroundImage = "url('/img/The_Beach_2.jpg')";
    greeting.textContent = "Доброго Ранку";
  } else if (hour < 12) {
    // Полудень
    document.body.style.backgroundImage = "url('/img/The_Beach_3.jpg')";
    greeting.textContent = "Доброго Дня";
  } else if (hour < 14) {
    //   День
    document.body.style.backgroundImage = "url('/img/The_Beach_4.jpg')";
    greeting.textContent = "Доброго Дня";
  } else if (hour < 17) {
    // День до вечора
    document.body.style.backgroundImage = "url('/img/The_Beach_5.jpg')";
    greeting.textContent = "Доброго Дня";
  } else if (hour < 19) {
    // Вечір
    document.body.style.backgroundImage = "url('/img/The_Beach_6.jpg')";
    greeting.textContent = "Доброго Вечора";
  } else if (hour < 21) {
    // Вечір до ночі
    document.body.style.backgroundImage = "url('/img/The_Beach_7.jpg')";
    greeting.textContent = "Доброго Вечора";
  } else {
    document.body.style.backgroundImage = "url('/img/The_Beach_8.jpg')";
    greeting.textContent = "Доброї Ночі";
  }
}

// Отримання імені
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Введіть ім'я]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

// Додавання імені в локальне сховище
function setName(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

// Отримання зосередження
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Введіть зосередження]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

// Додавання зосередження в локальне сховище
function setFocus(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

// Додавання прослуховувачі подій
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

// Запуск функцій на виконання
showTime();
setBgGreet();
getName();
getFocus();
