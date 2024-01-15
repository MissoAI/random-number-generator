let username;
do{
  username = window.prompt("Enter your username to get random numbers!")
} while (username === "" || username === null)
const submit = document.getElementById("btn");
const numbers = document.getElementById("number");
const maxnum = 1000;
const minnum = 0;
submit.onclick = function () {
  randomN = Math.floor(Math.random() * (maxnum - minnum));
  numbers.textContent = randomN;
};
