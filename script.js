import { API_URL } from './config.js';

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("joke-button");
  const jokeElement = document.getElementById("joke");

  button.addEventListener("click", async () => {
    try {
      const res = await fetch(`${API_URL}/blagues/random`);
      if (!res.ok) throw new Error("Erreur de l'API");

      const data = await res.json();
      jokeElement.innerHTML = `<strong>${data.question}</strong><br>${data.answer}`;
    } catch (error) {
      jokeElement.textContent = "Impossible de charger une blague";
      console.error(error);
    }
  });
});
