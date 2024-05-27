import { buyerReviewComponent } from "./components/buyerReviewComponent.js";
import { ratedComponent } from "./components/ratedComponent.js";
import { getData } from "./getData.js";

const getContainer = (selector) => document.querySelector(selector);

(async function renderData(callback) {
  try {
    const data = await callback();
    const { rated, buyers } = data[0];

    const containers = [
      {
        data: rated,
        selector: ".rating-content",
        component: ratedComponent,
      },
      {
        data: buyers,
        selector: ".buyer-review-content",
        component: buyerReviewComponent,
      },
    ];

    containers.forEach((object) => {
      object.data.forEach((itemData) =>
        getContainer(object.selector).appendChild(object.component(itemData))
      );
    });
  } catch (error) {
    console.error("Error fetching or rendering data:", error);
  }
})(getData);

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("show");
});
