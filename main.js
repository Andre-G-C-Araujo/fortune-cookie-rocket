const body = document.querySelector("body");
const h1Title = document.querySelector(".titleDiv");
const btnTry = document.querySelector(".btnTryAgain");
const h3Text = document.querySelector("h3");

const openClick = () => {
  if (body.classList.contains("openMode")) {
    return;
  } else {
    h3Text.classList.add("subTitleDiv");
    setTimeout(() => {
      h3Text.innerText = `
        Não se preocupe.
        Ao virar do relogio.
        Tudo começa denovo.
        `;
    }, 2000);
  }
  setTimeout(() => {
    btnTry.classList.add("showBtn");
  }, 3000);

  body.classList.add("openMode");
  h1Title.innerText = "Aqui está a sua sorte de hoje:";
  h3Text.innerText = "";
};

const closeClick = () => {
  btnTry.classList.remove("showBtn");
  body.classList.toggle("openMode");
  h1Title.innerText = "Qual é a sua sorte de hoje?";
  h3Text.innerText = "Abra o biscoito e descubra";
};
