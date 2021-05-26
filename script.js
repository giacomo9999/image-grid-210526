const container = document.querySelector(".container");
const unsplashURL = "https://source.unsplash.com/random/";
const rows = 3;

const getRandomNr = () => {
  return Math.floor(Math.random() * 10) + 300;
};

const getRandomSize = () => {
  return `${getRandomNr()}x${getRandomNr()}`;
};

for (let i = 0; i < rows; i++) {
  let row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);
  for (let j = 0; j < 3; j++) {
    const img = document.createElement("img");
    img.src = `${unsplashURL}${getRandomSize()}`;
    row.appendChild(img);
  }
}
