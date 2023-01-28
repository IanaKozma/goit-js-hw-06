const randomColor = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

changeColorBtn.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick() {
  document.body.style.backgroundColor = randomColor();
  colorName.innerHTML = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}