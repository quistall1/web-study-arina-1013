// Простая таблица замены русских букв на латинские.
const letters = {
  "а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ё":"yo",
  "ж":"zh","з":"z","и":"i","й":"y","к":"k","л":"l","м":"m",
  "н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u",
  "ф":"f","х":"kh","ц":"ts","ч":"ch","ш":"sh","щ":"shch",
  "ъ":"","ы":"y","ь":"","э":"e","ю":"yu","я":"ya"
};

function transliterate(text) {
  return text.split("").map(function (letter) {
    const translated = letters[letter.toLowerCase()];
    if (translated === undefined) return letter;
    return letter === letter.toUpperCase() ? translated.toUpperCase() : translated;
  }).join("");
}

document.getElementById("convert").addEventListener("click", function () {
  document.querySelectorAll(".surname").forEach(function (item) {
    item.innerText = transliterate("Курбанова");
  });
  document.querySelectorAll(".first-name").forEach(function (item) {
    item.innerText = transliterate("Арина");
  });
  document.querySelectorAll(".birth-year").forEach(function (item) {
    item.innerText = transliterate("2007");
  });
  document.getElementById("latin-result").innerText =
    "Фамилия, имя и год рождения записаны латинскими символами.";
});

document.getElementById("reset").addEventListener("click", function () {
  document.querySelectorAll(".surname").forEach(item => item.innerText = "Курбанова");
  document.querySelectorAll(".first-name").forEach(item => item.innerText = "Арина");
  document.querySelectorAll(".birth-year").forEach(item => item.innerText = "2007");
  document.getElementById("latin-result").innerText = "Исходные значения восстановлены.";
});
