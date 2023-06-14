import generateJoke from "./generateJokes.js";
import "../styles/styles.css";

generateJoke();

const generateJokeButton = document.getElementById("generate-button");

generateJokeButton.addEventListener("click", generateJoke);
