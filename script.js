const screens = [
    "screen-start",
    "screen-loading",
    "screen-secret",
    "screen-sherly",
    "screen-message",
    "screen-proposal",
    "screen-yes"
];


// =========================
// SCREEN SWITCHING
// =========================

function showScreen(id) {

    screens.forEach(function(screen) {

        const element = document.getElementById(screen);

        if (element) {
            element.classList.add("hidden");
        }

    });

    const target = document.getElementById(id);

    if (target) {
        target.classList.remove("hidden");
    }

}


// =========================
// START
// =========================

document.getElementById("startBtn").addEventListener("click", function() {

    showScreen("screen-loading");

    const loadingText =
        document.getElementById("loadingText");

    const messages = [
        "Finding the right words... 💭",
        "Gathering some courage... 🥹",
        "Checking the heart... ❤️",
        "Okay... here we go. 💌"
    ];

    let index = 0;

    const timer = setInterval(function() {

        loadingText.textContent = messages[index];

        index++;

        if (index >= messages.length) {
            clearInterval(timer);
        }

    }, 700);


    setTimeout(function() {

        showScreen("screen-secret");

    }, 3200);

});


// =========================
// REVEAL SHERLY
// =========================

document.getElementById("revealBtn").addEventListener("click", function() {

    showScreen("screen-sherly");

});


// =========================
// SHERLY MESSAGE
// =========================

document.getElementById("messageBtn").addEventListener("click", function() {

    showScreen("screen-message");

});


// =========================
// PROPOSAL
// =========================

document.getElementById("proposalBtn").addEventListener("click", function() {

    showScreen("screen-proposal");

});


// =========================
// YES BUTTON
// =========================

document.getElementById("yesBtn").addEventListener("click", function() {

    showScreen("screen-yes");

    createHearts();

});


// =========================
// NO BUTTON
// =========================

// The NO button is intentionally disabled.
// It cannot be clicked.


// =========================
// CELEBRATION HEARTS
// =========================

function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("div");

        heart.textContent = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "%";
        heart.style.bottom = "-30px";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.zIndex = "9999";

        heart.style.pointerEvents = "none";

        heart.style.transition =
            "transform 4s ease-out, opacity 4s ease-out";

        document.body.appendChild(heart);


        setTimeout(function() {

            heart.style.transform =
                `translateY(-${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`;

            heart.style.opacity = "0";

        }, 50);


        setTimeout(function() {

            heart.remove();

        }, 4200);

    }

}
