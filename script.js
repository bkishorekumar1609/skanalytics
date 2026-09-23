const screens = [
    "screen1",
    "screen2",
    "screen3",
    "screen4",
    "screen5",
    "screen6",
    "screen7"
];

const continueBtn = document.getElementById("continueBtn");
const promiseBtn = document.getElementById("promiseBtn");
const questionBtn = document.getElementById("questionBtn");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const punishmentBtn =
    document.getElementById("punishmentBtn");

const tryAgainBtn = null;

const punishmentInput =
    document.getElementById("punishmentInput");

const charCount =
    document.getElementById("charCount");

const errorMessage =
    document.getElementById("errorMessage");

const replyForm =
    document.getElementById("replyForm");

const replyInput =
    document.getElementById("replyInput");


/* =========================
   CHANGE SCREEN
========================= */

function showScreen(id) {

    screens.forEach(function(screenId) {

        document
            .getElementById(screenId)
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
   PHONE VIBRATION
========================= */

function vibrate() {

    if (
        "vibrate" in navigator
    ) {

        navigator.vibrate(60);

    }
}


/* =========================
   SAVE TO GOOGLE SHEET
========================= */

function saveResponse(response) {

    replyInput.value = response;

    /*
     * Submit silently through the hidden iframe.
     *
     * This sends:
     *
     * name = Sherly
     * reply = user's choice
     */

    replyForm.submit();
}


/* =========================
   SCREEN 1
========================= */

continueBtn.addEventListener(
    "click",
    function() {

        vibrate();

        showScreen("screen2");

        startTyping();

        createSmallHeartBurst(3);
    }
);


/* =========================
   SCREEN 2
========================= */

promiseBtn.addEventListener(
    "click",
    function() {

        vibrate();

        showScreen("screen3");

        createSmallHeartBurst(4);
    }
);


/* =========================
   SCREEN 3
========================= */

questionBtn.addEventListener(
    "click",
    function() {

        vibrate();

        showScreen("screen4");
    }
);


/* =========================
   YES
========================= */

yesBtn.addEventListener(
    "click",
    function() {

        vibrate();

        /*
         * This is exactly what
         * will appear in Google Sheet.
         */

        saveResponse(
            "ACCEPTED ❤️ - She accepted my apology."
        );

        showScreen("screen6");

        createConfetti(30);

        createSmallHeartBurst(10);
    }
);


/* =========================
   NO
========================= */

noBtn.addEventListener(
    "click",
    function() {

        vibrate();

        showScreen("screen5");

        punishmentInput.focus();
    }
);


/* =========================
   CHARACTER COUNT
========================= */

punishmentInput.addEventListener(
    "input",
    function() {

        charCount.textContent =
            punishmentInput.value.length;

        errorMessage.textContent = "";

    }
);


/* =========================
   PUNISHMENT SUBMIT
========================= */

punishmentBtn.addEventListener(
    "click",
    function() {

        const punishment =
            punishmentInput.value.trim();


        if (!punishment) {

            errorMessage.textContent =
                "You have to give me a punishment 😭";

            punishmentInput.focus();

            return;
        }


        vibrate();


        /*
         * The punishment will be saved
         * directly into the Reply column.
         */

        const response =
            "NOT ACCEPTED 😭 - Punishment: " +
            punishment;


        saveResponse(response);


        showScreen("screen7");


        createSmallHeartBurst(5);

        createConfetti(12);
    }
);


/* =========================
   TYPING ANIMATION
========================= */

let typingStarted = false;

function startTyping() {

    if (typingStarted) {
        return;
    }

    typingStarted = true;

    const textElement =
        document.getElementById("typingText");


    const message =
        "I know you tried calling me on Instagram, WhatsApp and Google Chat. I saw that I missed your calls, and I'm genuinely sorry. I wasn't trying to ignore you. I should have picked up.";


    let index = 0;


    function type() {

        if (index < message.length) {

            textElement.textContent +=
                message.charAt(index);

            index++;

            setTimeout(
                type,
                25
            );

        }
    }


    type();
}


/* =========================
   LIMITED HEARTS
========================= */

function createSmallHeart() {

    const container =
        document.getElementById(
            "floatingHearts"
        );


    const heart =
        document.createElement("div");


    heart.className =
        "floating-heart";


    const hearts = [
        "❤️",
        "💗",
        "💕"
    ];


    heart.textContent =
        hearts[
            Math.floor(
                Math.random() *
                hearts.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.animationDuration =
        (5 + Math.random() * 3) + "s";


    container.appendChild(heart);


    setTimeout(
        function() {
            heart.remove();
        },
        8500
    );
}


/*
 * Only one heart every few seconds.
 * This keeps the page clean.
 */

setInterval(
    function() {

        createSmallHeart();

    },
    2500
);


/* =========================
   SMALL HEART BURST
========================= */

function createSmallHeartBurst(amount) {

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        setTimeout(
            function() {

                createSmallHeart();

            },
            i * 150
        );
    }
}


/* =========================
   CONFETTI
========================= */

function createConfetti(amount) {

    const emojis = [
        "🎉",
        "✨",
        "❤️",
        "💗",
        "🥳"
    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        setTimeout(
            function() {

                const item =
                    document.createElement("div");


                item.textContent =
                    emojis[
                        Math.floor(
                            Math.random() *
                            emojis.length
                        )
                    ];


                item.style.position =
                    "fixed";


                item.style.left =
                    Math.random() * 100 + "vw";


                item.style.top =
                    "-40px";


                item.style.fontSize =
                    (16 +
                    Math.random() * 20) +
                    "px";


                item.style.zIndex =
                    "999";


                document.body.appendChild(
                    item
                );


                const animation =
                    item.animate(
                        [
                            {
                                transform:
                                    "translateY(0) rotate(0deg)",
                                opacity: 1
                            },
                            {
                                transform:
                                    "translateY(110vh) rotate(600deg)",
                                opacity: 0
                            }
                        ],
                        {
                            duration:
                                2200 +
                                Math.random() * 1800,

                            easing:
                                "cubic-bezier(.2,.8,.3,1)"
                        }
                    );


                animation.onfinish =
                    function() {
                        item.remove();
                    };

            },
            i * 45
        );
    }
}


/* =========================
   BACKGROUND PARTICLES
========================= */

function createParticles() {

    const container =
        document.getElementById(
            "particles"
        );


    for (
        let i = 0;
        i < 30;
        i++
    ) {

        const particle =
            document.createElement("div");


        particle.className =
            "particle";


        particle.style.left =
            Math.random() * 100 + "vw";


        particle.style.animationDuration =
            (8 +
            Math.random() * 12) +
            "s";


        particle.style.animationDelay =
            Math.random() * 10 +
            "s";


        container.appendChild(
            particle
        );
    }
}


createParticles();

/* =========================================
   FLOATING BACKGROUND ICONS
========================================= */

function createFloatingIcon() {

    const item =
        document.createElement("div");

    item.className =
        "floating-item";

    const icons = [
        "⭐",
        "✨",
        "🌟",
        "💫",
        "📞",
        "😊",
        "🥺",
        "☁️"
    ];

    item.textContent =
        icons[
            Math.floor(
                Math.random() * icons.length
            )
        ];

    item.style.left =
        Math.random() * 100 + "vw";

    item.style.fontSize =
        (14 + Math.random() * 20) + "px";

    item.style.animationDuration =
        (7 + Math.random() * 8) + "s";

    document.body.appendChild(item);

    setTimeout(
        function() {
            item.remove();
        },
        16000
    );
}


/*
   Create floating objects continuously.
*/

setInterval(
    createFloatingIcon,
    600
);


/* =========================================
   BURST EFFECT
========================================= */

function createBurst(symbol, amount) {

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        setTimeout(
            function() {

                const item =
                    document.createElement("div");

                item.className =
                    "floating-item";

                item.textContent =
                    symbol;

                item.style.left =
                    (35 + Math.random() * 30) +
                    "vw";

                item.style.fontSize =
                    (16 + Math.random() * 20) +
                    "px";

                item.style.animationDuration =
                    (3 + Math.random() * 3) +
                    "s";

                document.body.appendChild(item);

                setTimeout(
                    function() {
                        item.remove();
                    },
                    7000
                );

            },
            i * 70
        );
    }
}


/* =========================================
   CONFETTI
========================================= */

function createConfetti(amount) {

    const items = [
        "🎉",
        "✨",
        "⭐",
        "🌟",
        "💫",
        "🥳",
        "😊"
    ];

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        setTimeout(
            function() {

                const piece =
                    document.createElement("div");

                piece.style.position =
                    "fixed";

                piece.style.left =
                    Math.random() * 100 +
                    "vw";

                piece.style.top =
                    "-50px";

                piece.style.fontSize =
                    (16 + Math.random() * 22) +
                    "px";

                piece.style.zIndex =
                    "999";

                piece.textContent =
                    items[
                        Math.floor(
                            Math.random() *
                            items.length
                        )
                    ];

                document.body.appendChild(piece);


                const duration =
                    2000 +
                    Math.random() * 3000;


                piece.animate(
                    [
                        {
                            transform:
                                "translateY(0) rotate(0deg)",
                            opacity: 1
                        },

                        {
                            transform:
                                "translateY(110vh) rotate(720deg)",
                            opacity: 0
                        }
                    ],
                    {
                        duration:
                            duration,

                        easing:
                            "cubic-bezier(.2,.8,.3,1)"
                    }
                );


                setTimeout(
                    function() {
                        piece.remove();
                    },
                    duration + 100
                );

            },
            i * 35
        );
    }
}


/* =========================================
   INITIAL BACKGROUND
========================================= */

for (
    let i = 0;
    i < 12;
    i++
) {
    setTimeout(
        createFloatingIcon,
        i * 300
    );
}
