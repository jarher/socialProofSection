import { buyerReviewComponent } from "./buyerReviewComponent.js";
import { ratedComponent } from "./ratedComponent.js";
import { getData } from "./getData.js";

const insertInRatingContent = (data) =>
  document.querySelector(".rating-content").appendChild(ratedComponent(data));

const insertInBuyerReviewContent = (data) =>
  document
    .querySelector(".buyer-review-content")
    .appendChild(buyerReviewComponent(data));

(async function renderData(callback) {
  const data = await callback();
  const { rated, buyers } = data[0];

  rated.forEach(insertInRatingContent);
  buyers.forEach(insertInBuyerReviewContent);
})(getData);
