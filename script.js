const notification = document.querySelector("#notification");
const actionButton = document.querySelector("#action-button");
const dismissButton = document.querySelector("#dismiss-button");
const restoreButton = document.querySelector("#restore-button");
const feedback = document.querySelector("#feedback");

actionButton.addEventListener("click", () => {
  feedback.textContent = "Дію виконано: інформацію профілю переглянуто.";
});

dismissButton.addEventListener("click", () => {
  notification.hidden = true;
  restoreButton.hidden = false;
  restoreButton.focus();
});

restoreButton.addEventListener("click", () => {
  notification.hidden = false;
  restoreButton.hidden = true;
  dismissButton.focus();
});
