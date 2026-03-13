// EDIT PASSWORD HERE: change this value before sharing the page.
const EPK_PASSWORD = "mara-preview";

const SESSION_KEY = "mara_epk_unlocked";

const gate = document.getElementById("password-gate");
const form = document.getElementById("password-form");
const passwordInput = document.getElementById("password-input");
const errorText = document.getElementById("password-error");
const content = document.getElementById("epk-content");

function unlockPage() {
  gate.classList.add("hidden");
  content.classList.remove("hidden");
  content.setAttribute("aria-hidden", "false");
}

if (sessionStorage.getItem(SESSION_KEY) === "true") {
  unlockPage();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (passwordInput.value === EPK_PASSWORD) {
    sessionStorage.setItem(SESSION_KEY, "true");
    errorText.textContent = "";
    unlockPage();
    return;
  }

  errorText.textContent = "Incorrect password. Please try again.";
  passwordInput.select();
});
