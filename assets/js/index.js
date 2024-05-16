import { getData } from "./getData.js";
import { ratedComponent } from "./ratedComponent.js";

function insertInRatingContent(data) {
  document.querySelector(".rating-content").appendChild(ratedComponent(data));
}

async function renderData(callback) {
  const data = await callback();
  const { rated, buyers } = data[0];
  rated.forEach(insertInRatingContent);
}

renderData(getData);
