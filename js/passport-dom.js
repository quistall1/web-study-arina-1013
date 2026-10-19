// Читаем фамилию, имя и год рождения из третьего, четвёртого и пятого абзацев.
const paragraphs = document.getElementsByTagName("p");
const surname = paragraphs[2].childNodes[1].innerText;
const firstName = paragraphs[3].childNodes[1].innerText;
const birthYear = paragraphs[4].childNodes[1].innerText;

document.getElementById("read-result").innerText =
  "Фамилия: " + surname + "\nИмя: " + firstName + "\nГод рождения: " + birthYear;
console.log("Фамилия:", surname);
console.log("Имя:", firstName);
console.log("Год рождения:", birthYear);
