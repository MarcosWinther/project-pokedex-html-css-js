const changeThemeButton = document.getElementById("change-theme-button");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".button-image");

changeThemeButton.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("dark-mode");

  body.classList.toggle("dark-mode");

  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "assets/img/sun.png");
  } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "assets/img/moon.png");
  }
});