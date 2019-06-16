var link = document.querySelector(".button-write-to-us");

var popup = document.querySelector(".write-to-us");
var close = popup.querySelector(".modal-close");

var shadow = document.querySelector(".modal-overlay");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=e-mail]");

var isStorageSupport = true;
  var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  shadow.classList.add("modal-overlay-shadow");

  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  shadow.classList.remove("modal-overlay-shadow");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      shadow.classList.remove("modal-overlay-shadow");
    }
  }
});

shadow.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    shadow.classList.remove("modal-overlay-shadow");
});
