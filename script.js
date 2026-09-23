const screenIds = [
    "screen1",
    "screen2",
    "screen3",
    "screen4",
    "screen5",
    "screen6",
    "screen7"
];

const continueBtn =
    document.getElementById("continueBtn");

const promiseBtn =
    document.getElementById("promiseBtn");

const questionBtn =
    document.getElementById("questionBtn");

const yesBtn =
    document.getElementById("yesBtn");

const noBtn =
    document.getElementById("noBtn");

const punishmentBtn =
    document.getElementById("punishmentBtn");

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
   SCREEN CONTROL
========================= */

function showScreen(id) {

    screenIds.forEach(function(screenId) {

        const screen =
            document.getElementById(screenId);

        screen.classList.remove("active");
    });


    const target =
        document.getElementById(id);

    target.classList.add("active");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   VIBRATION
========================= */

function vibrate() {

    if (
        navigator.vibrate
    ) {

        navigator.vibrate(50);
    }
}


/* =========================
   GOOGLE SHEET
========================= */

function saveResponse(response) {

    replyInput.value = response;

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

        heartBurst(3);
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

        heartBurst(4);
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


        saveResponse(
            "YES ❤️ - She accepted my apology."
        );


        showScreen("screen6");


        createConfetti(35);

        heartBurst(8);
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

        setTimeout(
            function() {

                punishmentInput.focus();

            },
            400
        );
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
   PUNISHMENT
========================= */

punishmentBtn.addEventListener(
    "click",
    function() {

        const punishment =
            punishmentInput.value.trim();


        if (!punishment) {

            errorMessage.textContent =
                "Please give me a punishment 😭";

            punishmentInput.focus();

            return;
        }


        vibrate();


        saveResponse(
            "NO 😭 - Punishment: " +
            punishment
        );


        showScreen("screen7");


        createConfetti(18);

        heartBurst(4);
    }
);


/* =========================
   TYPEWRITER
========================= */

let typingStarted = false;

function startTyping() {

    if (typingStarted) {
        return;
    }

    typingStarted = true;


    const typingText =
        document.getElementById("typingText");


    const message =
        "I know you tried calling me on Instagram, WhatsApp and Google Chat. I was online, but I didn't pick up your calls. I'm really sorry. I wasn't trying to ignore you. I should have picked up.";


    let index = 0;


    function typeNext() {

        if (index < message.length) {

            typingText.textContent +=
                message.charAt(index);

            index++;

            setTimeout(
                typeNext,
                24
            );
        }
    }


    typeNext();
}


/* =========================
   LIMITED FLOATING HEARTS
========================= */

function createHeart() {

    const container =
        document.getElementById(
            "floatingHearts"
        );


    const heart =
        document.createElement("div");


    heart.className =
        "floating-heart";


    const choices = [
        "💜",
        "💗"
    ];


    heart.textContent =
        choices[
            Math.floor(
                Math.random() *
                choices.length
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
 * Only one heart every 3 seconds.
 */

setInterval(
    createHeart,
    3000
);


/* =========================
   HEART BURST
========================= */

function heartBurst(amount) {

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        setTimeout(
            createHeart,
            i * 180
        );
    }
}


/* =========================
   CONFETTI
========================= */

function createConfetti(amount) {

    const items = [
        "💜",
        "✨",
        "🎉",
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
                    items[
                        Math.floor(
                            Math.random() *
                            items.length
                        )
                    ];


                item.style.position =
                    "fixed";

                item.style.left =
                    Math.random() * 100 + "vw";

                item.style.top =
                    "-40px";

                item.style.fontSize =
                    (15 +
                    Math.random() * 20) +
                    "px";

                item.style.zIndex =
                    "9999";


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
                                    "translateY(110vh) rotate(720deg)",
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
            i * 50
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
