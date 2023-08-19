const body = document.querySelector("body");
const h1Title = document.querySelector(".titleDiv");
const h3Text = document.querySelector(".subTitleDiv");

const openClick = () => {
  body.classList.add("openMode");
  h1Title.innerText = "Aqui está a sua sorte de hoje:";
  h3Text.innerText = "";
  setTimeout(() => {
    h3Text.innerText = `
    Não se preocupe.
    Ao virar do relogio.
    Tudo começa denovo.
    `;
  }, 2000);
};

const closeClick = () => {
  body.classList.toggle("openMode");
  h1Title.innerText = "Qual é a sua sorte de hoje?";
  h3Text.innerText = "Abra o biscoito e descubra";
};
