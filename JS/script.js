const numeriTabellone = [];

const tabellone = document.getElementById("tabella");

for (let i = 1; i <= 76; i++) {
  numeriTabellone.push(i);
  const numCellDiv = document.createElement("span");
  numCellDiv.classList.add("num");
  const numCellContent = document.createElement("span");
  numCellContent.innerText = i;
  numCellDiv.appendChild(numCellContent);
  numCellDiv.style.border = "1px solid black";
  numCellDiv.style.margin = "1px";
  numCellDiv.style.padding = "1px";
  tabella.appendChild(numCellDiv);
}

const button = document.getElementById("bottone");

button.onclick = function randomNumber() {
  const randomized = Math.floor(Math.random() * numeriTabellone.length);
  const randomSpan = tabellone.children[randomized];
  randomSpan.style.backgroundColor = "green";
  console.log(numeriTabellone[randomized]);
};
console.log(numeriTabellone);
