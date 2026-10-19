// Считаем Z по условию задачи 1013.
document.getElementById("calculate-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const x = Number(document.getElementById("x").value);
  const y = Number(document.getElementById("y").value);
  let z;
  let explanation;

  if (x > y) {
    z = x * y;
    explanation = "Так как X > Y, используем Z = X * Y.";
  } else {
    if (x + y <= 0) {
      document.getElementById("result").innerText =
        "Ошибка: для ln(X + Y) сумма X + Y должна быть больше нуля.";
      return;
    }
    z = Math.log(x + y);
    explanation = "Так как X <= Y, используем Z = ln(X + Y).";
  }

  document.getElementById("result").innerText =
    explanation + "\nРезультат Z = " + z;
});

document.getElementById("calculate-form").addEventListener("reset", function () {
  document.getElementById("result").innerText =
    "Введите X и Y и нажмите «Вычислить Z».";
});
