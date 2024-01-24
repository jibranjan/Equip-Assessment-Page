let activeCardId = "card-gab";

let cardElArray = document.querySelectorAll(".hiw-card");

cardElArray.forEach(function (cardEl) {
  cardEl.addEventListener("mouseover", function () {
    let cardElId = cardEl.getAttribute("id");
    if (activeCardId !== cardElId) {
      // to change output
      let previousActiveOutputId = activeCardId + "-output";

      // to change icon color
      // to change text color
      let previousActiveCardId = activeCardId;
      // to change bg color
      // to change border

      // same for all
      activeCardId = cardElId;

      // text color
      let previousActiveCardEl = document.getElementById(previousActiveCardId);
      previousActiveCardEl.classList.add("text-neutral-400");
      let nextActiveCardId = activeCardId;
      let nextActiveCardEl = document.getElementById(nextActiveCardId);
      nextActiveCardEl.classList.add("text-blue-900");
      // output
      let previousActiveOutputEl = document.getElementById(
        previousActiveOutputId
      );
      previousActiveOutputEl.classList.add("hidden");
      let nextActiveOutputId = activeCardId + "-output";
      let nextActiveOutputEl = document.getElementById(nextActiveOutputId);
      nextActiveOutputEl.classList.remove("hidden");
    }
  });
});
