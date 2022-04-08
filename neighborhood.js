let foodArray = [`Marco's Pizza`, `Tsunami`, `Chick-fil-A`];

document.getElementById("randoRestrnt").addEventListener("click", function () {
  const randomElement = Math.floor(Math.random() * foodArray.length);
  console.log(foodArray[randomElement]);
  alert(`You should go to ${foodArray[randomElement]}`);
});
