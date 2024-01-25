let activeCardIndex = 0;

let cardElArray = document.querySelectorAll(".asmt-feature-card");

cardElArray.forEach(function (cardEl) {
  cardEl.addEventListener("mouseover", function () {
    let cardElId = cardEl.getAttribute("id");
    let activeCardId = cardElArray[activeCardIndex].getAttribute("id");
    if (activeCardId !== cardElId) {
      makePrevCardActive(activeCardId);
      makeNextCardActive(cardElId);
      changeIframe(activeCardId, cardElId);
      activeCardIndex = parseInt(cardEl.dataset.cardIndex);
    }
  });
});

let activeCardMobId = "card-mob-gab";

let cardMobElArray = document.querySelectorAll(".asmt-feature-mob-card");
cardMobElArray.forEach(function (cardMobEl) {
  cardMobEl.addEventListener("mouseover", function () {
    let cardMobElId = cardMobEl.getAttribute("id");
    if (activeCardMobId !== cardMobElId) {
      changeIframe(activeCardMobId, cardMobElId);
      // makePrevCardMobActive(activeCardMobId);
      activeCardMobId = cardMobElId;
    }
  });
});

// function makePrevCardMobActive(previousActiveCardMobId) {
//   let previousActiveCardMobEl = document.getElementById(
//     previousActiveCardMobId
//   );
//   let activeSVG = previousActiveCardMobEl.querySelector(".card-mob-icon");
//   activeSVG.classList.add("grayscale");
// }

function makePrevCardActive(previousActiveCardId) {
  let previousActiveCardEl = document.getElementById(previousActiveCardId);
  previousActiveCardEl.classList.remove("border-l-4");
  previousActiveCardEl.classList.add("bg-stone-50");

  let activeSVG = previousActiveCardEl.querySelector(".card-icon");
  activeSVG.classList.add("grayscale");

  let activeCardHeading = previousActiveCardEl.querySelector(".card-heading ");
  activeCardHeading.classList.add("text-neutral-400");
  activeCardHeading.classList.remove("text-blue-900");

  let acticeCardDesc = previousActiveCardEl.querySelector(".card-desc");
  acticeCardDesc.classList.remove("text-gray-700");
  acticeCardDesc.classList.add("text-neutral-400");
}

function makeNextCardActive(nextActiveCardId) {
  let nextActiveCardEl = document.getElementById(nextActiveCardId);
  nextActiveCardEl.classList.add("border-l-4");
  nextActiveCardEl.classList.remove("bg-stone-50");

  let activeSVG = nextActiveCardEl.querySelector(".card-icon");
  activeSVG.classList.remove("grayscale");

  let activeCardHeading = nextActiveCardEl.querySelector(".card-heading ");
  activeCardHeading.classList.remove("text-neutral-400");
  activeCardHeading.classList.add("text-blue-900");

  let acticeCardDesc = nextActiveCardEl.querySelector(".card-desc");
  acticeCardDesc.classList.add("text-gray-700");
  acticeCardDesc.classList.remove("text-neutral-400");
}

// Same for mob and computer

function changeIframe(previousActiveCardId, nextActiveCardId) {
  let previousActiveOutputId = previousActiveCardId + "-output";
  let previousActiveOutputEl = document.getElementById(previousActiveOutputId);
  previousActiveOutputEl.classList.add("hidden");
  let nextActiveOutputId = nextActiveCardId + "-output";
  let nextActiveOutputEl = document.getElementById(nextActiveOutputId);
  nextActiveOutputEl.classList.remove("hidden");
}
