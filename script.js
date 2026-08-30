/* =========================
   SURPRISE POPUP
========================= */

function openSurprise() {

    const popup =
        document.getElementById("surprisePopup");

    popup.classList.add("active");

    createHearts(15);
}


function closeSurprise() {

    const popup =
        document.getElementById("surprisePopup");

    popup.classList.remove("active");

}


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 3 + 4 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 7000);

}


function createHearts(number) {

    for (let i = 0; i < number; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 200);

    }

}


/* Create hearts continuously */

setInterval(() => {

    createHeart();

}, 1200);