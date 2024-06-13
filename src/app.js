/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#The-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = [" dog ", "raccon", "cholo"];
  let action = ["ruined", "eat", "atasco", "destroyed"];
  let possetion = ["homework", "shoe", "dreams", "life"];
  let where = ["in the kitchen", "in the school", "in my heart"];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    "" +
    subject[subjIndx] +
    "" +
    action[actionIndex] +
    "" +
    possetion[possetionIndex] +
    "" +
    where[whereIndex]
  );
};
