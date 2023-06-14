import jokesData from "./jokes.json";

export default function generateJoke() {
  const randomIndex = Math.floor(Math.random() * jokesData.jokes.length);
  const randomJoke = jokesData.jokes[randomIndex];
  const jokeContainer = document.getElementById("root");
  jokeContainer.innerHTML = `
  <p>${randomJoke.question}</p>
  <p>${randomJoke.answer}</p>
  `;
}
