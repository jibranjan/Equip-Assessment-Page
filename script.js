// adding interactivity of Assessment-features section for small devices
let activeCardMobId = "card-mob-gab";

let cardMobElArray = document.querySelectorAll(".asmt-feature-mob-card");
cardMobElArray.forEach(function (cardMobEl) {
  cardMobEl.addEventListener("click", function () {
    let cardMobElId = cardMobEl.getAttribute("id");
    if (activeCardMobId !== cardMobElId) {
      makePrevCardInActive(activeCardMobId, true);
      makeNextCardActive(cardMobElId, true);
      changeIframe(activeCardMobId, cardMobElId);
      activeCardMobId = cardMobElId;
    }
  });
});

// adding interactivity of Assessment-features section for large devices
let activeCardIndex = 0;

let cardElArray = document.querySelectorAll(".asmt-feature-card");

cardElArray.forEach(function (cardEl) {
  cardEl.addEventListener("click", function () {
    let cardElId = cardEl.getAttribute("id");
    let activeCardId = cardElArray[activeCardIndex].getAttribute("id");
    if (activeCardId !== cardElId) {
      makePrevCardInActive(activeCardId);
      makeNextCardActive(cardElId);
      changeIframe(activeCardId, cardElId);
      activeCardIndex = parseInt(cardEl.dataset.cardIndex);
      handleNavButtons(activeCardIndex);
    }
  });
});

// adding right left chevron effect for assessment features output in large screens

let chevronRightEl = document.getElementById("chevron-right");

chevronRightEl.addEventListener("click", function () {
  if (activeCardIndex < cardElArray.length - 1) {
    let activeCardId = cardElArray[activeCardIndex].getAttribute("id");
    let cardElId = cardElArray[activeCardIndex + 1].getAttribute("id");
    makePrevCardInActive(activeCardId);
    makeNextCardActive(cardElId);
    changeIframe(activeCardId, cardElId);
    activeCardIndex = activeCardIndex + 1;
    handleNavButtons(activeCardIndex);
  }
});

let chevronLeftEl = document.getElementById("chevron-left");

chevronLeftEl.addEventListener("click", function () {
  if (activeCardIndex > 0) {
    let activeCardId = cardElArray[activeCardIndex].getAttribute("id");
    let cardElId = cardElArray[activeCardIndex - 1].getAttribute("id");
    makePrevCardInActive(activeCardId);
    makeNextCardActive(cardElId);
    changeIframe(activeCardId, cardElId);
    activeCardIndex = activeCardIndex - 1;
    handleNavButtons(activeCardIndex);
  }
});

function handleNavButtons(nextIndex) {
  if (nextIndex == 0) {
    chevronLeftEl.classList.add("opacity-50", "cursor-not-allowed");
    chevronRightEl.classList.remove("opacity-50", "cursor-not-allowed");
  }
  if (nextIndex > 0 && nextIndex < cardElArray.length - 1) {
    chevronLeftEl.classList.remove("opacity-50", "cursor-not-allowed");
    chevronLeftEl.classList.add("cursor-pointer");
    chevronRightEl.classList.remove("opacity-50", "cursor-not-allowed");
  }
  if (nextIndex == cardElArray.length - 1) {
    chevronRightEl.classList.add("opacity-50", "cursor-not-allowed");
    chevronLeftEl.classList.remove("opacity-50", "cursor-not-allowed");
  }
}

function onIframeLoaded(e) {
  let loadedIframe = e.target;
  loadedIframe.classList.remove("hidden");
  let loaderId = loadedIframe.id + "-loader";
  let loaderEl = document.getElementById(loaderId);
  loaderEl.classList.add("hidden");
}

function makePrevCardInActive(previousActiveCardId, isMobile = false) {
  let previousActiveCardEl = document.getElementById(previousActiveCardId);
  previousActiveCardEl.classList.remove("border-l-4");

  let activeSVG = previousActiveCardEl.querySelector(".card-icon");
  activeSVG.classList.add("grayscale");

  let activeCardHeading = previousActiveCardEl.querySelector(".card-heading ");
  activeCardHeading.classList.add("text-gray-400");
  activeCardHeading.classList.remove("text-blue-900");

  if (isMobile) {
    let activeChevron = previousActiveCardEl.querySelector(".card-mob-chevron");
    activeChevron.classList.add("grayscale", "opacity-50");
    activeChevron.classList.remove("rotate-180");
  } else {
    previousActiveCardEl.classList.add("bg-stone-50");
    let acticeCardDesc = previousActiveCardEl.querySelector(".card-desc");
    acticeCardDesc.classList.remove("text-gray-700");
    acticeCardDesc.classList.add("text-neutral-400");
  }
}

function makeNextCardActive(nextActiveCardId, isMobile = false) {
  let nextActiveCardEl = document.getElementById(nextActiveCardId);
  nextActiveCardEl.classList.add("border-l-4");

  let activeSVG = nextActiveCardEl.querySelector(".card-icon");
  activeSVG.classList.remove("grayscale");

  let activeCardHeading = nextActiveCardEl.querySelector(".card-heading ");
  activeCardHeading.classList.remove("text-gray-400");
  activeCardHeading.classList.add("text-blue-900");

  if (isMobile) {
    let activeChevron = nextActiveCardEl.querySelector(".card-mob-chevron");
    activeChevron.classList.remove("grayscale", "opacity-50");
    activeChevron.classList.add("rotate-180");
  } else {
    nextActiveCardEl.classList.remove("bg-stone-50");
    let acticeCardDesc = nextActiveCardEl.querySelector(".card-desc");
    acticeCardDesc.classList.add("text-gray-700");
    acticeCardDesc.classList.remove("text-neutral-400");
  }
}

function changeIframe(previousActiveCardId, nextActiveCardId) {
  let previousActiveOutputId = previousActiveCardId + "-output";
  let previousActiveOutputEl = document.getElementById(previousActiveOutputId);
  previousActiveOutputEl.classList.add("hidden");
  let nextActiveOutputId = nextActiveCardId + "-output";
  let nextActiveOutputEl = document.getElementById(nextActiveOutputId);
  let iFrameEl = nextActiveOutputEl.querySelector("iframe");
  if (iFrameEl.getAttribute("src") == "") {
    iFrameEl.setAttribute("src", iFrameEl.dataset.src);
  }
  nextActiveOutputEl.classList.remove("hidden");
}
