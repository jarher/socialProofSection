import { starComponent } from "./starComponent.js";

function starCreator(number) {
  let stars = "";
  for (let i = 0; i < number; i++) {
    stars += starComponent();
  }
  return stars;
}

export function ratedComponent(data) {
  const ratedContainer = document.createElement("div");
  ratedContainer.className = "rated";

  const starContent = `<div class="star-content">${starCreator(
    data.ratedStars
  )}</div>`;
  const paragraph = `<p>${data.ratedText}</p>`;

  ratedContainer.innerHTML = starContent.concat(paragraph);

  return ratedContainer;
}
