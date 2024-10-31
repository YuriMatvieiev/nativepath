const popup = document.getElementById("popup");
const showPopupSection = document.querySelector(".show-popup");
const hidePopupSection = document.querySelector(".hide-popup");

function showPopup() {
  popup.style.bottom = "0";
}

function hidePopup() {
  popup.style.bottom = "-100%";
}

window.addEventListener("scroll", () => {
  const showPopupRect = showPopupSection.getBoundingClientRect();
  const hidePopupRect = hidePopupSection.getBoundingClientRect();

  const isShowPopupPassed = showPopupRect.top <= 0;

  const isHidePopupPassed = hidePopupRect.top <= 0;

  if (isShowPopupPassed && !isHidePopupPassed) {
    showPopup();
  } else if (isHidePopupPassed || !isShowPopupPassed) {
    hidePopup();
  }
});
