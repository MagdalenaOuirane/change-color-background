const clickBtn = document.querySelector(".btn");

const body = document.querySelector("body");

const colors = ["yellow", "blue", "green", "red", "violet", "gold"];

body.style.backgroundColor ='red';


const changeColor = function () {
   
 const index= parseInt(Math.random()*colors.length+1)
  body.style.backgroundColor = colors[index];
};

clickBtn.addEventListener("click", changeColor);
