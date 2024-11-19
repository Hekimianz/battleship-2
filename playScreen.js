export default function play() {
  const playBtn = document.querySelector("#playBtn");
  const main = document.querySelector("main");
  playBtn.addEventListener("click", () => {
    main.innerHTML = "";
    createPlayerCreation();
  });
}

const createPlayerCreation = function () {
  const main = document.querySelector("main");
  const playerCreateCont = document.createElement("section");
  playerCreateCont.classList.add("playerCreateCont");
  const h1 = document.createElement("h1");
  h1.classList.add("playerCreationTitle");
  h1.innerHTML = "Create Players";
  main.appendChild(h1);
  const form1 = document.createElement("form");
  const form2 = document.createElement("form");
  form1.classList.add("playerForm");
  form2.classList.add("playerForm");
  const form1Title = document.createElement("h2");
  form1Title.innerHTML = "Player 1";
  form1.appendChild(form1Title);
  const form2Title = document.createElement("h2");
  form2Title.innerHTML = "Player 2";
  form2.appendChild(form2Title);
  playerCreateCont.appendChild(form1);
  playerCreateCont.appendChild(form2);
  const playerNameInput1 = document.createElement("input");
  playerNameInput1.classList.add("playerNameInput");
  playerNameInput1.setAttribute("placeholder", "Player name");
  const playerNameInput2 = document.createElement("input");
  playerNameInput2.classList.add("playerNameInput");
  playerNameInput2.setAttribute("placeholder", "Player name");
  form1.appendChild(playerNameInput1);
  form2.appendChild(playerNameInput2);
  const button = document.createElement("button");
  button.innerHTML = "Start Game";
  button.classList.add("playBtn");
  main.appendChild(playerCreateCont);
  main.appendChild(button);
};
