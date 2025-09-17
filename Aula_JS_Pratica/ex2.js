// const buttonRed = document.getElementById('red');


//buttonRed.addEventListener('click', () => {
//  document.body.style.backgroundColor = 'red';
//});


function changeBodyColor(color) {
  document.body.style.backgroundColor = color;
}

const buttons = document.getElementsByClassName("change-color");
for ( let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    changeBodyColor(this.dataset.color)
  });
}

const buttonRandom = document.getElementById("button-random");
buttonRandom.addEventListener("click", function() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  //changeBodyColor("rgb(" +r + "," +g + "," +b+ ")"); //rgb(255, 255, 255)
  //changeBodyColor(`rgb(${r}, ${g}, ${b})`); //rgb(255, 255, 255)
  //r.toString(16).padStart(2, "0");
  changeBodyColor(`#${rHex}${gHex}${bHex}`); // #ffffff
});

