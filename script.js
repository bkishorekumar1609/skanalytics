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

    if (navigator.vibrate) {

        navigator.vibrate(50);

    }
}


/* =========================
   SAVE TO GOOGLE SHEET
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

        sadEmojiBurst(3);
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

        sadEmojiBurst(2);
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


        createConfetti(22);

        smallHeartBurst(2);
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

        sadEmojiBurst(5);


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

            sadEmojiBurst(2);

            punishmentInput.focus();

            return;
        }


        vibrate();


        saveResponse(
            "NO 😭 - Punishment: " +
            punishment
        );


        showScreen("screen7");


        sadEmojiBurst(4);

        createConfetti(10);
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
   SAD EMOJI BURST
========================= */

function sadEmojiBurst(amount) {

    const emojis = [
        "🥺",
        "😭",
        "😔",
        "🥲",
        "😢"
    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        setTimeout(
            function() {

                const emoji =
                    document.createElement("div");


                emoji.textContent =
                    emojis[
                        Math.floor(
                            Math.random() *
                            emojis.length
                        )
                    ];


                emoji.style.position =
                    "fixed";


                emoji.style.left =
                    (35 +
                    Math.random() * 30) +
                    "vw";


                emoji.style.top =
                    "45vh";


                emoji.style.fontSize =
                    (24 +
                    Math.random() * 15) +
                    "px";


                emoji.style.zIndex =
                    "9999";


                emoji.style.pointerEvents =
                    "none";


                document.body.appendChild(
                    emoji
                );


                const animation =
                    emoji.animate(
                        [
                            {
                                transform:
                                    "translate(0,0) scale(.6) rotate(0deg)",
                                opacity: 0
                            },

                            {
                                transform:
                                    "translate(" +
                                    (Math.random() * 80 - 40) +
                                    "px,-60px) scale(1.2) rotate(-8deg)",
                                opacity: 1
                            },

                            {
                                transform:
                                    "translate(" +
                                    (Math.random() * 120 - 60) +
                                    "px,-150px) scale(.9) rotate(8deg)",
                                opacity: 0
                            }
                        ],
                        {
                            duration: 1600,

                            easing:
                                "cubic-bezier(.2,.8,.3,1)"
                        }
                    );


                animation.onfinish =
                    function() {

                        emoji.remove();

                    };

            },
            i * 140
        );
    }
}


/* =========================
   ONLY A TINY HEART BURST
========================= */

function smallHeartBurst(amount) {

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        setTimeout(
            function() {

                const heart =
                    document.createElement("div");


                heart.textContent = "💜";


                heart.style.position =
                    "fixed";


                heart.style.left =
                    (45 +
                    Math.random() * 10) +
                    "vw";


                heart.style.top =
                    "55vh";


                heart.style.fontSize =
                    "18px";


                heart.style.zIndex =
                    "9999";


                heart.style.pointerEvents =
                    "none";


                document.body.appendChild(
                    heart
                );


                const animation =
                    heart.animate(
                        [
                            {
                                transform:
                                    "translateY(0) scale(.5)",
                                opacity: 0
                            },

                            {
                                transform:
                                    "translateY(-100px) scale(1)",
                                opacity: .8
                            },

                            {
                                transform:
                                    "translateY(-180px) scale(.7)",
                                opacity: 0
                            }
                        ],
                        {
                            duration: 1600
                        }
                    );


                animation.onfinish =
                    function() {

                        heart.remove();

                    };

            },
            i * 200
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
        "💗"
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
                    Math.random() * 100 +
                    "vw";

                item.style.top =
                    "-40px";

                item.style.fontSize =
                    (15 +
                    Math.random() * 18) +
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
                                    "translateY(110vh) rotate(600deg)",
                                opacity: 0
                            }
                        ],
                        {
                            duration:
                                2200 +
                                Math.random() * 1600,

                            easing:
                                "cubic-bezier(.2,.8,.3,1)"
                        }
                    );


                animation.onfinish =
                    function() {

                        item.remove();

                    };

            },
            i * 60
        );
    }
}


/* =========================
   PURPLE PARTICLES
========================= */

function createParticles() {

    const container =
        document.getElementById(
            "particles"
        );


    for (
        let i = 0;
        i < 28;
        i++
    ) {

        const particle =
            document.createElement("div");


        particle.className =
            "particle";


        particle.style.left =
            Math.random() * 100 +
            "vw";


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
