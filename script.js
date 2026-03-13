// EDIT PASSWORD HERE: change this value before sharing the page.
const EPK_PASSWORD = "mara-preview";

const SESSION_KEY = "mara_epk_unlocked";

const gate = document.getElementById("password-gate");
const form = document.getElementById("password-form");
const passwordInput = document.getElementById("password-input");
const errorText = document.getElementById("password-error");
const content = document.getElementById("epk-content");

<<<<<<< codex/build-static-one-page-epk-for-cheap-coffins-y24w53
// Some browser privacy configurations can block storage access.
// These helpers keep the page functional even if sessionStorage throws.
function getSessionFlag(key) {
  try {
    return sessionStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

function setSessionFlag(key, value) {
  try {
    sessionStorage.setItem(key, value);
  } catch (error) {
    // Non-fatal: unlock still works for current page load.
  }
}

function unlockPage() {
  if (!gate || !content) {
    return;
  }

=======
function unlockPage() {
>>>>>>> main
  gate.classList.add("hidden");
  content.classList.remove("hidden");
  content.setAttribute("aria-hidden", "false");
}

<<<<<<< codex/build-static-one-page-epk-for-cheap-coffins-y24w53
if (getSessionFlag(SESSION_KEY) === "true") {
  unlockPage();
}

if (form && passwordInput && errorText) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const attemptedPassword = passwordInput.value.trim();

    if (attemptedPassword === EPK_PASSWORD) {
      setSessionFlag(SESSION_KEY, "true");
      errorText.textContent = "";
      unlockPage();
      return;
    }

    errorText.textContent = "Incorrect password. Please try again.";
    passwordInput.select();
  });
}
=======
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
>>>>>>> main
