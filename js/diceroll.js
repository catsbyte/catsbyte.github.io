document.addEventListener("DOMContentLoaded", function() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomDice1Image = `img/diceroll/dice${randomNumber1}.png`;
    var randomDice2Image = `img/diceroll/dice${randomNumber2}.png`;
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomDice1Image);
    var image2 = document.querySelectorAll("img")[1];
    image1.setAttribute("src", randomDice1Image);
    image2.setAttribute("src", randomDice2Image);
});
