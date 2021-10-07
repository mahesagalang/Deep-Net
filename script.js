let aktifA = document.querySelectorAll("nav ul li a");
let aktifB = document.querySelectorAll("nav ul li");

aktifA.forEach(function (link) {
  link.addEventListener("click", function (e) {
    aktifA.forEach(function (gambar) {
      if (gambar.classList.contains("aktif-Tulisan")) {
        gambar.classList.remove("aktif-Tulisan");
      }
    });
    e.target.classList.add("aktif-Tulisan");
  });
});

let humburgerMenu = document.querySelector(".humburger-menu");
let navbar = document.querySelector("nav ul");
let badan = document.querySelector("body");

humburgerMenu.addEventListener("click", function () {
  navbar.classList.toggle("slide");
  document.body.classList.toggle("transparant");
});

// slide show
var backto = 1;
//slideshow for image header
setInterval(function () {
  document.querySelector("input#slideheader" + backto).checked = true;
  backto++;
  if (backto > 4) {
    backto = 1;
  }
}, 3000);

// question

let addQuestionOne = document.querySelector(".add-question-one");
let addQuestionTwo = document.querySelector(".add-question-two");
let addQuestionThree = document.querySelector(".add-question-three");
let addQuestionFour = document.querySelector(".add-question-four");
let penjelasanSatu = document.querySelector(" .penjelasan-one");
let penjelasanDua = document.querySelector(" .penjelasan-two");
let penjelasanTiga = document.querySelector(".penjelasan-three");
let penjelasanEmpat = document.querySelector(" .penjelasan-four");

addQuestionOne.addEventListener("click", function () {
  penjelasanSatu.classList.toggle("open-close");
});
addQuestionTwo.addEventListener("click", function () {
  penjelasanDua.classList.toggle("open-close");
});
addQuestionThree.addEventListener("click", function () {
  penjelasanTiga.classList.toggle("open-close");
});
addQuestionFour.addEventListener("click", function () {
  penjelasanEmpat.classList.toggle("open-close");
});
