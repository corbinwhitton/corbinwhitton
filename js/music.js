// MOD to allow for more than 3 images (not working atm)
// const { gsap, imagesLoaded } = window;

// const buttons = {
// 	prev: document.getElementById("music-btn-left"),
// 	next: document.getElementById("music-btn-right"),
// };

// const cardsContainerEls = document.getElementsByClassName("cards__wrapper")[0].getElementsByClassName("card");
// const appBgContainerEls = document.getElementsByClassName("app__bg")[0].getElementsByClassName("app__bg__image");
// const cardInfosContainerEls = document.getElementsByClassName("info__wrapper")[0].getElementsByClassName("info");
// const cardContainerWrapper = document.getElementsByClassName("cards__wrapper")[0];
// const cardBgContainerWrapper = document.getElementsByClassName("app__bg")[0];
// const cardInfoContainerWrapper = document.getElementsByClassName("info__wrapper")[0];

// let currentImageIndex = 0;

// buttons.next.addEventListener('click', (event) => {swapCards("ascending")});

// buttons.prev.addEventListener("click", () => swapCards("descending"));

// function swapCards(direction) {
//     let previousImageIndex = currentImageIndex - 1;
//     let nextImageIndex = currentImageIndex + 1;
//     if (previousImageIndex < 0) {
//         previousImageIndex = cardsContainerEls.length-1;
//     }
//     if (nextImageIndex > cardsContainerEls.length-1) {
//         nextImageIndex = 0;
//     }
//     let previousPreviousImageIndex = previousImageIndex - 1;
//     let nextNextImageIndex = nextImageIndex + 1;
//     if (previousPreviousImageIndex < 0) {
//         previousPreviousImageIndex = cardsContainerEls.length-1;
//     }
//     if (nextNextImageIndex > cardsContainerEls.length-1) {
//         nextNextImageIndex = 0;
//     }

// 	changeInfo(direction);
// 	swapCardsClass();

// 	removeCardEvents(cardsContainerEls[currentImageIndex]);

// 	function swapCardsClass() {
// 		cardsContainerEls[currentImageIndex].classList.remove("current--card");
// 		cardsContainerEls[previousImageIndex].classList.remove("previous--card");
// 		cardsContainerEls[nextImageIndex].classList.remove("next--card");

// 		cardsContainerEls[currentImageIndex].classList.remove("unseen--card");

// 		appBgContainerEls[currentImageIndex].classList.remove("current--image");
// 		appBgContainerEls[previousImageIndex].classList.remove("previous--image");
// 		appBgContainerEls[nextImageIndex].classList.remove("next--image");

// 		appBgContainerEls[currentImageIndex].classList.remove("unseen--image");

// 		cardsContainerEls[currentImageIndex].style.zIndex = "50";
// 		appBgContainerEls[currentImageIndex].style.zIndex = "-2";

// 		if (direction === "ascending") {
// 			cardsContainerEls[previousImageIndex].style.zIndex = "20";
// 			cardsContainerEls[nextImageIndex].style.zIndex = "30";

// 			cardsContainerEls[nextImageIndex].style.zIndex = "-1";

// 			cardsContainerEls[currentImageIndex].classList.add("previous--card");
// 			cardsContainerEls[previousImageIndex].classList.add("unseen--card");
//             cardsContainerEls[nextNextImageIndex].classList.remove("unseen--card");
//             cardsContainerEls[nextNextImageIndex].classList.add("next--card");
// 			cardsContainerEls[nextImageIndex].classList.add("current--card");


// 			appBgContainerEls[currentImageIndex].classList.add("previous--image");
// 			appBgContainerEls[previousImageIndex].classList.add("unseen--image");
//             appBgContainerEls[nextNextImageIndex].classList.remove("unseen--image");
//             appBgContainerEls[nextNextImageIndex].classList.add("next--image");
// 			appBgContainerEls[nextImageIndex].classList.add("current--image");

//             if (currentImageIndex == cardsContainerEls.length) {
//                 currentImageIndex = 0;
//             } else {
//                 currentImageIndex++;
//             }
// 		} else if (direction === "descending") {
//             cardsContainerEls[previousImageIndex].style.zIndex = "30";
// 			cardsContainerEls[nextImageIndex].style.zIndex = "20";

// 			cardsContainerEls[previousImageIndex].style.zIndex = "-1";

// 			cardsContainerEls[currentImageIndex].classList.add("next--card");
// 			cardsContainerEls[nextImageIndex].classList.add("unseen--card");
//             cardsContainerEls[previousPreviousImageIndex].classList.remove("unseen--card");
//             cardsContainerEls[previousPreviousImageIndex].classList.add("previous--card");
// 			cardsContainerEls[previousImageIndex].classList.add("current--card");


// 			appBgContainerEls[currentImageIndex].classList.add("next--card");
// 			appBgContainerEls[nextImageIndex].classList.add("unseen--card");
//             appBgContainerEls[previousPreviousImageIndex].classList.remove("unseen--card");
//             appBgContainerEls[previousPreviousImageIndex].classList.add("previous--card");
// 			appBgContainerEls[previousImageIndex].classList.add("current--card");

//             if (currentImageIndex == cardsContainerEls.length-1) {
//                 currentImageIndex = cardsContainerEls.length-1;
//             } else {
//                 currentImageIndex--;
//             }
// 		}
// 	}
// }

// function changeInfo(direction) {
//     let previousImageIndex = currentImageIndex - 1;
//     let nextImageIndex = currentImageIndex + 1;
//     if (previousImageIndex < 0) {
//         previousImageIndex = cardsContainerEls.length-1;
//     }
//     if (nextImageIndex > cardsContainerEls.length-1) {
//         nextImageIndex = 0;
//     }
//     let previousPreviousImageIndex = previousImageIndex - 1;
//     let nextNextImageIndex = nextImageIndex + 1;
//     if (previousPreviousImageIndex < 0) {
//         previousPreviousImageIndex = cardsContainerEls.length-1;
//     }
//     if (nextNextImageIndex > cardsContainerEls.length-1) {
//         nextNextImageIndex = 0;
//     }

// 	gsap.timeline()
// 		.to([buttons.prev, buttons.next], {
// 		duration: 0.2,
// 		opacity: 0.5,
// 		pointerEvents: "none",
// 	})
// 		.to(
// 		cardInfosContainerEls[currentImageIndex].getElementsByClassName("text"),
// 		{
// 			duration: 0.4,
// 			stagger: 0.1,
// 			translateY: "-120px",
// 			opacity: 0,
// 		},
// 		"-="
// 	)
// 		.call(() => {
// 		swapInfosClass(direction);
// 	})
// 		.call(() => initCardEvents())
// 		.fromTo(
// 		direction === "ascending"
// 		? cardInfosContainerEls[nextImageIndex].getElementsByClassName("text")
// 		: cardInfosContainerEls[previousImageIndex].getElementsByClassName("text"),
// 		{
// 			opacity: 0,
// 			translateY: "40px",
// 		},
// 		{
// 			duration: 0.4,
// 			stagger: 0.1,
// 			translateY: "0px",
// 			opacity: 1,
// 		}
// 	)
// 		.to([buttons.prev, buttons.next], {
// 		duration: 0.2,
// 		opacity: 1,
// 		pointerEvents: "all",
// 	});

// 	function swapInfosClass() {
// 		cardInfosContainerEls[currentImageIndex].classList.remove("current--info");
// 		cardInfosContainerEls[previousImageIndex].classList.remove("previous--info");
// 		cardInfosContainerEls[nextImageIndex].classList.remove("next--info");

// 		if (direction === "ascending") {
//             cardInfosContainerEls[currentImageIndex].classList.add("previous--info");
// 			cardInfosContainerEls[previousImageIndex].classList.add("unseen--info");
//             cardInfosContainerEls[nextNextImageIndex].classList.remove("unseen--info");
//             cardInfosContainerEls[nextNextImageIndex].classList.add("next--info");
// 			cardInfosContainerEls[nextImageIndex].classList.add("current--info");
// 		} else if (direction === "descending") {
// 			cardInfosContainerEls[currentImageIndex].classList.add("next--info");
// 			cardInfosContainerEls[nextImageIndex].classList.add("unseen--info");
//             cardInfosContainerEls[previousPreviousImageIndex].classList.remove("unseen--info");
//             cardInfosContainerEls[previousPreviousImageIndex].classList.add("previous--info");
// 			cardInfosContainerEls[previousImageIndex].classList.add("current--info");
// 		}
// 	}
// }

// function updateCard(e) {
// 	const card = e.currentTarget;
// 	const box = card.getBoundingClientRect();
// 	const centerPosition = {
// 		x: box.left + box.width / 2,
// 		y: box.top + box.height / 2,
// 	};
// 	let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
// 	gsap.set(card, {
// 		"--current-card-rotation-offset": `${angle}deg`,
// 	});
// 	const currentInfoEl = cardInfosContainerEls[currentImageIndex];
// 	gsap.set(currentInfoEl, {
// 		rotateY: `${angle}deg`,
// 	});
// }

// function resetCardTransforms(e) {
// 	const card = e.currentTarget;
// 	const currentInfoEl = cardInfosContainerEls[currentImageIndex];
// 	gsap.set(card, {
// 		"--current-card-rotation-offset": 0,
// 	});
// 	gsap.set(currentInfoEl, {
// 		rotateY: 0,
// 	});
// }

// function initCardEvents() {
// 	const currentCardEl = cardInfosContainerEls[currentImageIndex];
// 	currentCardEl.addEventListener("pointermove", updateCard);
// 	currentCardEl.addEventListener("pointerout", (e) => {
// 		resetCardTransforms(e);
// 	});
// }

// initCardEvents();

// function removeCardEvents(card) {
// 	card.removeEventListener("pointermove", updateCard);
// }

// function init() {

// 	let tl = gsap.timeline();

// 	tl.to(cardContainerWrapper.children, {
// 		delay: 0.15,
// 		duration: 0.5,
// 		stagger: {
// 			ease: "power4.inOut",
// 			from: "right",
// 			amount: 0.1,
// 		},
// 		"--card-translateY-offset": "0%",
// 	})
// 		.to(cardInfosContainerEls[currentImageIndex].getElementsByClassName("text"), {
// 		delay: 0.5,
// 		duration: 0.4,
// 		stagger: 0.1,
// 		opacity: 1,
// 		translateY: 0,
// 	})
// 		.to(
// 		[buttons.prev, buttons.next],
// 		{
// 			duration: 0.4,
// 			opacity: 1,
// 			pointerEvents: "all",
// 		},
// 		"-=0.4"
// 	);
// }

// const waitForImages = () => {
// 	const images = [...document.getElementsByTagName("img")];
// 	const totalImages = images.length;
// 	let loadedImages = 0;
// 	const loaderEl = document.getElementsByClassName("loader span")[0];

// 	gsap.set(cardContainerWrapper.children, {
// 		"--card-translateY-offset": "100vh",
// 	});
// 	gsap.set(cardInfosContainerEls[currentImageIndex].getElementsByClassName("text"), {
// 		translateY: "40px",
// 		opacity: 0,
// 	});
// 	gsap.set([buttons.prev, buttons.next], {
// 		pointerEvents: "none",
// 		opacity: "0",
// 	});

// 	images.forEach((image) => {
// 		imagesLoaded(image, (instance) => {
// 			if (instance.isComplete) {
// 				loadedImages++;
// 				let loadProgress = loadedImages / totalImages;

// 				gsap.to(loaderEl, {
// 					duration: 1,
// 					scaleX: loadProgress,
// 					backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
// 				});

// 				if (totalImages == loadedImages) {
// 					gsap.timeline()
// 						.to(".loading__wrapper", {
// 						duration: 0.8,
// 						opacity: 0,
// 						pointerEvents: "none",
// 					})
// 						.call(() => init());
// 				}
// 			}
// 		});
// 	});
// };

// waitForImages();


console.clear();

const { gsap, imagesLoaded } = window;

const buttons = {
	prev: document.querySelector(".btn--left"),
	next: document.querySelector(".btn--right"),
};
const cardsContainerEl = document.querySelector(".cards__wrapper");
const appBgContainerEl = document.querySelector(".app__bg");

const cardInfosContainerEl = document.querySelector(".info__wrapper");

buttons.next.addEventListener("click", () => swapCards("right"));

buttons.prev.addEventListener("click", () => swapCards("left"));

function swapCards(direction) {
	const currentCardEl = cardsContainerEl.querySelector(".current--card");
	const previousCardEl = cardsContainerEl.querySelector(".previous--card");
	const nextCardEl = cardsContainerEl.querySelector(".next--card");

	const currentBgImageEl = appBgContainerEl.querySelector(".current--image");
	const previousBgImageEl = appBgContainerEl.querySelector(".previous--image");
	const nextBgImageEl = appBgContainerEl.querySelector(".next--image");

	changeInfo(direction);
	swapCardsClass();

	removeCardEvents(currentCardEl);

	function swapCardsClass() {
		currentCardEl.classList.remove("current--card");
		previousCardEl.classList.remove("previous--card");
		nextCardEl.classList.remove("next--card");

		currentBgImageEl.classList.remove("current--image");
		previousBgImageEl.classList.remove("previous--image");
		nextBgImageEl.classList.remove("next--image");

		currentCardEl.style.zIndex = "50";
		currentBgImageEl.style.zIndex = "-2";

		if (direction === "right") {
			previousCardEl.style.zIndex = "20";
			nextCardEl.style.zIndex = "30";

			nextBgImageEl.style.zIndex = "-1";

			currentCardEl.classList.add("previous--card");
			previousCardEl.classList.add("next--card");
			nextCardEl.classList.add("current--card");

			currentBgImageEl.classList.add("previous--image");
			previousBgImageEl.classList.add("next--image");
			nextBgImageEl.classList.add("current--image");
		} else if (direction === "left") {
			previousCardEl.style.zIndex = "30";
			nextCardEl.style.zIndex = "20";

			previousBgImageEl.style.zIndex = "-1";

			currentCardEl.classList.add("next--card");
			previousCardEl.classList.add("current--card");
			nextCardEl.classList.add("previous--card");

			currentBgImageEl.classList.add("next--image");
			previousBgImageEl.classList.add("current--image");
			nextBgImageEl.classList.add("previous--image");
		}
	}
}

function changeInfo(direction) {
	let currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	let previousInfoEl = cardInfosContainerEl.querySelector(".previous--info");
	let nextInfoEl = cardInfosContainerEl.querySelector(".next--info");

	gsap.timeline()
		.to([buttons.prev, buttons.next], {
			duration: 0.2,
			opacity: 0.5,
			pointerEvents: "none",
		})
		.to(
			currentInfoEl.querySelectorAll(".text"),
			{
				duration: 0.4,
				stagger: 0.1,
				translateY: "-120px",
				opacity: 0,
			},
			"-="
		)
		.call(() => {
			swapInfosClass(direction);
		})
		.call(() => initCardEvents())
		.fromTo(
			direction === "right"
				? nextInfoEl.querySelectorAll(".text")
				: previousInfoEl.querySelectorAll(".text"),
			{
				opacity: 0,
				translateY: "40px",
			},
			{
				duration: 0.4,
				stagger: 0.1,
				translateY: "0px",
				opacity: 1,
			}
		)
		.to([buttons.prev, buttons.next], {
			duration: 0.2,
			opacity: 1,
			pointerEvents: "all",
		});

	function swapInfosClass() {
		currentInfoEl.classList.remove("current--info");
		previousInfoEl.classList.remove("previous--info");
		nextInfoEl.classList.remove("next--info");

		if (direction === "right") {
			currentInfoEl.classList.add("previous--info");
			nextInfoEl.classList.add("current--info");
			previousInfoEl.classList.add("next--info");
		} else if (direction === "left") {
			currentInfoEl.classList.add("next--info");
			nextInfoEl.classList.add("previous--info");
			previousInfoEl.classList.add("current--info");
		}
	}
}

function updateCard(e) {
	const card = e.currentTarget;
	const box = card.getBoundingClientRect();
	const centerPosition = {
		x: box.left + box.width / 2,
		y: box.top + box.height / 2,
	};
	let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
	gsap.set(card, {
		"--current-card-rotation-offset": `${angle}deg`,
	});
	const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	gsap.set(currentInfoEl, {
		rotateY: `${angle}deg`,
	});
}

function resetCardTransforms(e) {
	const card = e.currentTarget;
	const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
	gsap.set(card, {
		"--current-card-rotation-offset": 0,
	});
	gsap.set(currentInfoEl, {
		rotateY: 0,
	});
}

function initCardEvents() {
	const currentCardEl = cardsContainerEl.querySelector(".current--card");
	currentCardEl.addEventListener("pointermove", updateCard);
	currentCardEl.addEventListener("pointerout", (e) => {
		resetCardTransforms(e);
	});
}

initCardEvents();

function removeCardEvents(card) {
	card.removeEventListener("pointermove", updateCard);
}

function init() {

	let tl = gsap.timeline();

	tl.to(cardsContainerEl.children, {
		delay: 0.15,
		duration: 0.5,
		stagger: {
			ease: "power4.inOut",
			from: "right",
			amount: 0.1,
		},
		"--card-translateY-offset": "0%",
	})
		.to(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
			delay: 0.5,
			duration: 0.4,
			stagger: 0.1,
			opacity: 1,
			translateY: 0,
		})
		.to(
			[buttons.prev, buttons.next],
			{
				duration: 0.4,
				opacity: 1,
				pointerEvents: "all",
			},
			"-=0.4"
		);
}

const waitForImages = () => {
	const images = [...document.querySelectorAll("img")];
	const totalImages = images.length;
	let loadedImages = 0;
	const loaderEl = document.querySelector(".loader span");

	gsap.set(cardsContainerEl.children, {
		"--card-translateY-offset": "100vh",
	});
	gsap.set(cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"), {
		translateY: "40px",
		opacity: 0,
	});
	gsap.set([buttons.prev, buttons.next], {
		pointerEvents: "none",
		opacity: "0",
	});

	images.forEach((image) => {
		imagesLoaded(image, (instance) => {
			if (instance.isComplete) {
				loadedImages++;
				let loadProgress = loadedImages / totalImages;

				gsap.to(loaderEl, {
					duration: 1,
					scaleX: loadProgress,
					backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
				});

				if (totalImages == loadedImages) {
					gsap.timeline()
						.to(".loading__wrapper", {
							duration: 0.8,
							opacity: 0,
							pointerEvents: "none",
						})
						.call(() => init());
				}
			}
		});
	});
};

waitForImages();