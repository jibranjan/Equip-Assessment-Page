// adding interactivity of Assessment-features section for small devices
let activeCardMobId = "card-mob-gab";

let cardMobElArray = document.querySelectorAll(".asmt-feature-mob-card");
cardMobElArray.forEach(function (cardMobEl) {
  cardMobEl.addEventListener("mouseover", function () {
    let cardMobElId = cardMobEl.getAttribute("id");
    if (activeCardMobId !== cardMobElId) {
      makePrevCardMobInActive(activeCardMobId);
      makeNextCardMobActive(cardMobElId);
      changeIframe(activeCardMobId, cardMobElId);
      activeCardMobId = cardMobElId;
    }
  });
});

function makePrevCardMobInActive(previousActiveCardMobId) {
  let previousActiveCardMobEl = document.getElementById(
    previousActiveCardMobId
  );

  previousActiveCardMobEl.classList.remove("border-l-4");
  let activeSVG = previousActiveCardMobEl.querySelector(".card-mob-icon");
  activeSVG.classList.add("grayscale");

  let activeCardMobHeading =
    previousActiveCardMobEl.querySelector(".card-mob-heading ");
  activeCardMobHeading.classList.add("text-gray-400");
  activeCardMobHeading.classList.remove("text-blue-900");

  let activeChevron =
    previousActiveCardMobEl.querySelector(".card-mob-chevron");
  activeChevron.classList.add("grayscale", "opacity-50");
  activeChevron.classList.remove("rotate-180");
}

function makeNextCardMobActive(nextActiveCardMobId) {
  let nextActiveCardMobEl = document.getElementById(nextActiveCardMobId);
  nextActiveCardMobEl.classList.add("border-l-4");

  let activeSVG = nextActiveCardMobEl.querySelector(".card-mob-icon");
  activeSVG.classList.remove("grayscale");

  let activeCardMobHeading =
    nextActiveCardMobEl.querySelector(".card-mob-heading ");
  activeCardMobHeading.classList.remove("text-gray-400");
  activeCardMobHeading.classList.add("text-blue-900");

  let activeChevron = nextActiveCardMobEl.querySelector(".card-mob-chevron");
  activeChevron.classList.remove("grayscale", "opacity-50");
  activeChevron.classList.add("rotate-180");
}

// adding interactivity of Assessment-features section for large devices
let activeCardIndex = 0;

let cardElArray = document.querySelectorAll(".asmt-feature-card");

cardElArray.forEach(function (cardEl) {
  cardEl.addEventListener("mouseover", function () {
    let cardElId = cardEl.getAttribute("id");
    let activeCardId = cardElArray[activeCardIndex].getAttribute("id");
    if (activeCardId !== cardElId) {
      makePrevCardInActive(activeCardId);
      makeNextCardActive(cardElId);
      changeIframe(activeCardId, cardElId);
      activeCardIndex = parseInt(cardEl.dataset.cardIndex);
    }
  });
});

function makePrevCardInActive(previousActiveCardId) {
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

// adding right left chevron effect for assessment features output in large screens

let chevronRightEl = document.getElementById("chevron-right");

chevronRightEl.addEventListener("click", function () {
  let activeCardId = cardElArray[activeCardIndex].getAttribute("id");
  let cardElId;
  if (activeCardIndex == 6) {
    cardElId = cardElArray[0].getAttribute("id");
  } else {
    cardElId = cardElArray[activeCardIndex + 1].getAttribute("id");
  }
  makePrevCardInActive(activeCardId);
  makeNextCardActive(cardElId);
  changeIframe(activeCardId, cardElId);
  activeCardIndex = activeCardIndex == 6 ? 0 : parseInt(activeCardIndex) + 1;
});

let chevronLeftEl = document.getElementById("chevron-left");

chevronLeftEl.addEventListener("click", function () {
  let activeCardId = cardElArray[activeCardIndex].getAttribute("id");
  let cardElId;
  if (activeCardIndex == 0) {
    cardElId = cardElArray[6].getAttribute("id");
  } else {
    cardElId = cardElArray[activeCardIndex - 1].getAttribute("id");
  }
  makePrevCardInActive(activeCardId);
  makeNextCardActive(cardElId);
  changeIframe(activeCardId, cardElId);
  activeCardIndex = activeCardIndex == 0 ? 6 : parseInt(activeCardIndex) - 1;
});
