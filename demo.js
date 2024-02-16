const btnopen = document.querySelector(".btnopen");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".btnclose");
btnopen.onclick = (elm) => {
  overlay.classList.toggle("show");
};

btnClose.onclick = (elm) => {
  overlay.classList.toggle("show");
};


