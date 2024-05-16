export function buyerReviewComponent(data) {
  const review = document.createElement("div");
  review.className = "review";

  const loadSrcImage = `<img src="${data.buyerImage}" alt="image of ${data.buyerNAme}">`;
  const buyerName = `<span class="buyer-name">${data.buyerName}</span>`;
  const buyerStatus = `<span class="buyer-status">${data.buyerStatus}</span>`;
  const buyerReviewText = `<p>${data.buyerReview}</p>`;

  const reviewHeader = `
    <div class="review-header">
        <figure>${loadSrcImage}</figure>
        <div>${buyerName.concat(buyerStatus)}</div>
    </div>`;

  review.innerHTML = reviewHeader.concat(buyerReviewText);
  return review;
}
