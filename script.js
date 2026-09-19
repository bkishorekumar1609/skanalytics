const screens = [
    "screen-start",
    "screen-loading",
    "screen-secret",
    "screen-sherly",
    "screen-message",
    "screen-proposal",
    "screen-yes"
];


// =====================================
// SCREEN SWITCH
// =====================================

function showScreen(id) {

    screens.forEach(function(screen) {

        const element =
            document.getElementById(screen);

        if (element) {
            element.classList.add("hidden");
        }

    });

    const target =
        document.getElementById(id);

    if (target) {
        target.classList.remove("hidden");
    }

}


// =====================================
// START
// =====================================

document
    .getElementById("startBtn")
    .addEventListener("click", function() {

        showScreen("screen-loading");

        const text =
            document.getElementById("loadingText");

        const messages = [

            "Finding the right words... 💭",

            "Gathering some courage... 🥹",

            "Listening to her heart... ❤️",

            "Almost ready... 🦋",

            "Okay... here we go. 💌"

        ];

        let index = 0;

        const timer =
            setInterval(function() {

                text.textContent =
                    messages[index];

                index++;

                if (index >= messages.length) {
                    clearInterval(timer);
                }

            }, 650);


        setTimeout(function() {

            showScreen("screen-secret");

        }, 3500);

    });


// =====================================
// REVEAL
// =====================================

document
    .getElementById("revealBtn")
    .addEventListener("click", function() {

        showScreen("screen-sherly");

        createMiniHearts();

    });


// =====================================
// SHERLY MESSAGE
// =====================================

document
    .getElementById("messageBtn")
    .addEventListener("click", function() {

        showScreen("screen-message");

        createMiniHearts();

    });


// =====================================
// PROPOSAL
// =====================================

document
    .getElementById("proposalBtn")
    .addEventListener("click", function() {

        showScreen("screen-proposal");

        createMiniHearts();

    });


// =====================================
// YES
// =====================================

document
    .getElementById("yesBtn")
    .addEventListener("click", function() {

        showScreen("screen-yes");

        createLoveExplosion();

        createButterflies();

    });


// =====================================
// CREATE FLOATING HEARTS
// =====================================

function createMiniHearts() {

    for (let i = 0; i < 8; i++) {

        const heart =
            document.createElement("div");

        heart.textContent =
            Math.random() > 0.5
                ? "❤️"
                : "💕";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.bottom =
            "-40px";

        heart.style.fontSize =
            (15 + Math.random() * 20) + "px";

        heart.style.zIndex = "20";

        heart.style.pointerEvents =
            "none";

        heart.style.transition =
            "transform 5s ease-out, opacity 5s ease-out";

        document.body.appendChild(heart);


        setTimeout(function() {

            heart.style.transform =
                `translateY(-${window.innerHeight + 100}px)
                 rotate(${Math.random() * 360}deg)`;

            heart.style.opacity = "0";

        }, 50);


        setTimeout(function() {

            heart.remove();

        }, 5200);

    }

}


// =====================================
// BIG LOVE EXPLOSION
// =====================================

function createLoveExplosion() {

    const symbols = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "💝",
        "🌹",
        "✨",
        "🦋"
    ];

    for (let i = 0; i < 45; i++) {

        const item =
            document.createElement("div");

        item.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        item.style.position =
            "fixed";

        item.style.left =
            "50%";

        item.style.top =
            "50%";

        item.style.fontSize =
            (16 + Math.random() * 28) + "px";

        item.style.zIndex =
            "9999";

        item.style.pointerEvents =
            "none";

        item.style.transition =
            "transform 2.5s ease-out, opacity 2.5s ease-out";

        document.body.appendChild(item);


        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            150 + Math.random() * 400;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;


        setTimeout(function() {

            item.style.transform =
                `translate(${x}px, ${y}px)
                 rotate(${Math.random() * 720}deg)
                 scale(${0.8 + Math.random()})`;

            item.style.opacity = "0";

        }, 50);


        setTimeout(function() {

            item.remove();

        }, 2800);

    }

}


// =====================================
// EXTRA BUTTERFLIES
// =====================================

function createButterflies() {

    const butterflies = [
        "🦋",
        "🦋",
        "🦋",
        "🦋",
        "🦋",
        "🦋"
    ];

    butterflies.forEach(function(symbol, index) {

        const butterfly =
            document.createElement("div");

        butterfly.textContent =
            symbol;

        butterfly.style.position =
            "fixed";

        butterfly.style.left =
            "50%";

        butterfly.style.top =
            "50%";

        butterfly.style.fontSize =
            (25 + Math.random() * 20) + "px";

        butterfly.style.zIndex =
            "9998";

        butterfly.style.pointerEvents =
            "none";

        butterfly.style.transition =
            "transform 4s ease-out, opacity 4s ease-out";

        document.body.appendChild(butterfly);


        setTimeout(function() {

            const direction =
                index % 2 === 0
                    ? 1
                    : -1;

            butterfly.style.transform =
                `translate(
                    ${direction * (150 + Math.random() * 300)}px,
                    ${-(150 + Math.random() * 500)}px
                )
                rotate(${direction * 360}deg)`;

            butterfly.style.opacity = "0";

        }, 100);


        setTimeout(function() {

            butterfly.remove();

        }, 4300);

    });

}


// =====================================
// KEEP NO DISABLED
// =====================================

const noButton =
    document.getElementById("noBtn");

noButton.disabled = true;
