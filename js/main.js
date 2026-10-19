// Подсветка текущей страницы и заполнение дат в формах.
const currentPage = document.body.dataset.page;
document.querySelectorAll("header nav a").forEach(function (link) {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

const today = new Date();
const dateValue = today.getFullYear() + "-" +
  String(today.getMonth() + 1).padStart(2, "0") + "-" +
  String(today.getDate()).padStart(2, "0");

["send-date", "lesson-date"].forEach(function (id) {
  const field = document.getElementById(id);
  if (field) field.value = dateValue;
});
