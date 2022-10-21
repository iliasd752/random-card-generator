/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function randomDeck() {
    const number = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    const symbol = ["Hearts", "Spades", "Diamonds", "Clubs"];

    const cards = [];
    for (let i = 0; i < number.length; i++) {
      for (let s = 0; s < symbol.length; s++) {
        const value = number[i];
        const sign = symbol[s];
        cards.push({ value, sign });
      }
    }
    return cards;
  }
  console.log(randomDeck());

  function randomCard(cards) {
    const random = Math.floor(Math.random() * 51);
    const cardValue = cards[random].value;
    const cardSign = cards[random].sign;
    let entity;
    cardSign === "Diamonds"
      ? (entity = "&diams;")
      : (entity = "&" + cardSign.toLowerCase() + ";");
    const card = document.createElement("div");
    card.classList.add("card", cardSign.toLowerCase(), cardValue.toLowerCase());
    card.innerHTML =
      '<span class="card-value-suit top">' +
      cardValue +
      entity +
      "</span>" +
      '<span class="card-suit">' +
      entity +
      "</span>" +
      '<span class="card-value-suit bot">' +
      cardValue +
      entity +
      "</span>";
    document.body.appendChild(card);
  }
  const cards = randomDeck();
  randomCard(cards);
};
