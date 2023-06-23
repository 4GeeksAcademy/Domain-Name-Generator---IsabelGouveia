/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".pt", ".io"];

  let combinations = [];

  for (let pronoun of pronoun) {
    for (let adj of adj) {
      for (let noun of noun) {
        for (let extensions of extensions) {
          let combination = pronoun + adj + noun + extensions;
          combinations.push(combination);
        }
      }
    }
  }

  console.log(combinations);
};
