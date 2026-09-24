const screens = [
    "screen1",
    "screen2",
    "screen3",
    "screen4",
    "screen5",
    "screen6",
    "screen7",
    "screen8",
    "screen9"
];

const replyForm =
    document.getElementById("replyForm");

const replyInput =
    document.getElementById("replyInput");

const responseText =
    document.getElementById("responseText");

const counter =
    document.getElementById("counter");

const error =
    document.getElementById("error");


/* =========================
   SCREEN SYSTEM
========================= */

function showScreen(id) {

    screens.forEach(function(screen) {

        document
            .getElementById(screen)
            .classList.remove("active");

    });

    document
        .getElementById(id)
        .classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   SAVE RESPONSE
========================= */

function saveResponse(message) {

    replyInput.value = message;

    replyForm.submit();
}


/* =========================
   SCREEN 1
========================= */

document
    .getElementById("openBtn")
    .addEventListener("click", function() {

        showScreen("screen2");

    });


/* =========================
   SCREEN 2
========================= */

document
    .getElementById("page2Btn")
    .addEventListener("click", function() {

        showScreen("screen3");

    });


/* =========================
   SCREEN 3
========================= */

document
    .getElementById("revealBtn")
    .addEventListener("click", function() {

        showScreen("screen4");

        createStarsBurst();

    });


/* =========================
   SCREEN 4
========================= */

document
    .getElementById("messageBtn")
    .addEventListener("click", function() {

        showScreen("screen5");

    });


/* =========================
   SCREEN 5
========================= */

document
    .getElementById("questionBtn")
    .addEventListener("click", function() {

        showScreen("screen6");

    });


/* =========================
   YES
========================= */

document
    .getElementById("yesBtn")
    .addEventListener("click", function() {

        saveResponse(
            "YES ❤️ - Christopher accepted Sherly's proposal."
        );

        showScreen("screen7");

        createStarsBurst();

    });


/* =========================
   NEED TIME
========================= */

document
    .getElementById("timeBtn")
    .addEventListener("click", function() {

        showScreen("screen8");

    });


/* =========================
   COUNTER
========================= */

responseText.addEventListener(
    "input",
    function() {

        counter.textContent =
            responseText.value.length;

        error.textContent = "";

    }
);


/* =========================
   SEND MESSAGE
========================= */

document
    .getElementById("sendBtn")
    .addEventListener("click", function() {

        const message =
            responseText.value.trim();

        if (!message) {

            error.textContent =
                "Please write something first.";

            responseText.focus();

            return;
        }

        saveResponse(
            "NEEDS TIME - Christopher's message: " +
            message
        );

        showScreen("screen9");

    });


/* =========================
   CREATE STARS
========================= */

function createStars() {

    const container =
        document.getElementById("stars");

    for (
        let i = 0;
        i < 80;
        i++
    ) {

        const star =
            document.createElement("div");

        star.className =
            "star-point";

        star.style.left =
            Math.random() * 100 + "vw";

        star.style.top =
            Math.random() * 100 + "vh";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        star.style.animationDuration =
            1.5 +
            Math.random() * 3 +
            "s";

        container.appendChild(star);
    }
}


/* =========================
   SHOOTING STARS
========================= */

function createShootingStars() {

    const container =
        document.getElementById(
            "shootingStars"
        );

    for (
        let i = 0;
        i < 3;
        i++
    ) {

        const star =
            document.createElement("div");

        star.className =
            "shooting-star";

        star.style.animationDelay =
            i * 4 + "s";

        container.appendChild(star);
    }
}


/* =========================
   SPECIAL STAR BURST
========================= */

function createStarsBurst() {

    for (
        let i = 0;
        i < 25;
        i++
    ) {

        const star =
            document.createElement("div");

        star.textContent = "✦";

        star.style.position =
            "fixed";

        star.style.left =
            "50vw";

        star.style.top =
            "50vh";

        star.style.zIndex =
            "999";

        star.style.color =
            "#e5c979";

        star.style.fontSize =
            "14px";

        document.body.appendChild(star);

        const angle =
            Math.random() *
            Math.PI *
            2;

        const distance =
            80 +
            Math.random() * 220;

        const x =
            Math.cos(angle) *
            distance;

        const y =
            Math.sin(angle) *
            distance;

        const animation =
            star.animate(
                [
                    {
                        transform:
                            "translate(-50%,-50%) scale(.2)",
                        opacity: 1
                    },
                    {
                        transform:
                            `translate(
                                calc(-50% + ${x}px),
                                calc(-50% + ${y}px)
                            ) scale(1.4)`,
                        opacity: 0
                    }
                ],
                {
                    duration:
                        1000 +
                        Math.random() * 800,

                    easing:
                        "cubic-bezier(.2,.8,.3,1)"
                }
            );

        animation.onfinish =
            function() {

                star.remove();

            };
    }
}


/* =========================
   START
========================= */

createStars();

createShootingStars();
