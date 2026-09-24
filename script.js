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


const startBtn =
    document.getElementById("startBtn");

const continueBtn =
    document.getElementById("continueBtn");

const revealBtn =
    document.getElementById("revealBtn");

const storyBtn =
    document.getElementById("storyBtn");

const proposalBtn =
    document.getElementById("proposalBtn");

const yesBtn =
    document.getElementById("yesBtn");

const timeBtn =
    document.getElementById("timeBtn");

const sendResponseBtn =
    document.getElementById("sendResponseBtn");

const typingText =
    document.getElementById("typingText");

const clue =
    document.getElementById("clue");

const thinking =
    document.getElementById("thinking");

const responseText =
    document.getElementById("responseText");

const counter =
    document.getElementById("counter");

const error =
    document.getElementById("error");

const replyForm =
    document.getElementById("replyForm");

const replyInput =
    document.getElementById("replyInput");


/* =========================
   SCREEN SYSTEM
========================= */

function showScreen(id) {

    screens.forEach(function(screenId) {

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
   GOOGLE SHEETS
========================= */

function saveResponse(message) {

    replyInput.value = message;

    replyForm.submit();
}


/* =========================
   SCREEN 1
========================= */

startBtn.addEventListener(
    "click",
    function() {

        showScreen("screen2");

    }
);


/* =========================
   SCREEN 2
========================= */

continueBtn.addEventListener(
    "click",
    function() {

        showScreen("screen3");

        startTyping();

    }
);


/* =========================
   SCREEN 3 TYPEWRITER
========================= */

let typingStarted = false;


function startTyping() {

    if (typingStarted) {
        return;
    }

    typingStarted = true;


    const message =
        "There is someone who makes my ordinary days feel a little more special...";


    let index = 0;


    function typeNext() {

        if (index < message.length) {

            typingText.textContent +=
                message.charAt(index);

            index++;

            setTimeout(
                typeNext,
                45
            );

        } else {

            setTimeout(
                function() {

                    clue.classList.remove(
                        "hidden"
                    );

                    thinking.style.display =
                        "none";

                    revealBtn.classList.remove(
                        "hidden"
                    );

                },
                700
            );
        }
    }


    typeNext();
}


/* =========================
   SCREEN 4
========================= */

revealBtn.addEventListener(
    "click",
    function() {

        showScreen("screen4");

        celebration(18);

    }
);


/* =========================
   SCREEN 5
========================= */

storyBtn.addEventListener(
    "click",
    function() {

        showScreen("screen5");

    }
);


/* =========================
   PROPOSAL
========================= */

proposalBtn.addEventListener(
    "click",
    function() {

        showScreen("screen6");

    }
);


/* =========================
   YES
========================= */

yesBtn.addEventListener(
    "click",
    function() {

        saveResponse(
            "YES ❤️ - Christopher accepted Sherly's proposal."
        );


        showScreen("screen7");


        celebration(55);

    }
);


/* =========================
   NEED TIME
========================= */

timeBtn.addEventListener(
    "click",
    function() {

        showScreen("screen8");

    }
);


/* =========================
   MESSAGE COUNTER
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

sendResponseBtn.addEventListener(
    "click",
    function() {

        const message =
            responseText.value.trim();


        if (!message) {

            error.textContent =
                "Please write a message first ❤️";

            responseText.focus();

            return;
        }


        saveResponse(
            "NEEDS TIME 🥺 - Christopher's message: " +
            message
        );


        showScreen("screen9");


        celebration(20);

    }
);


/* =========================
   STARS
========================= */

function createStars() {

    const container =
        document.getElementById("stars");


    for (
        let i = 0;
        i < 55;
        i++
    ) {

        const star =
            document.createElement("div");


        star.className =
            "star";


        star.style.left =
            Math.random() * 100 + "vw";


        star.style.top =
            Math.random() * 100 + "vh";


        star.style.animationDelay =
            Math.random() * 3 + "s";


        container.appendChild(star);

    }
}


/* =========================
   PARTICLES
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
            (7 +
            Math.random() * 10) +
            "s";


        particle.style.animationDelay =
            Math.random() * 8 +
            "s";


        container.appendChild(
            particle
        );

    }
}


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const container =
        document.getElementById(
            "hearts"
        );


    const heart =
        document.createElement("div");


    heart.className =
        "heart-particle";


    const heartTypes = [
        "❤️",
        "💗",
        "💕"
    ];


    heart.textContent =
        heartTypes[
            Math.floor(
                Math.random() *
                heartTypes.length
            )
        ];


    heart.style.left =
        Math.random() * 100 +
        "vw";


    heart.style.animationDuration =
        (5 +
        Math.random() * 3) +
        "s";


    container.appendChild(
        heart
    );


    setTimeout(
        function() {

            heart.remove();

        },
        8500
    );
}


/*
 * Keep the hearts limited.
 */

setInterval(
    createHeart,
    2800
);


/* =========================
   CELEBRATION
========================= */

function celebration(amount) {

    const emojis = [
        "❤️",
        "💕",
        "💗",
        "✨",
        "🎉",
        "🥰"
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
                    Math.random() * 100 +
                    "vw";


                item.style.top =
                    "-50px";


                item.style.fontSize =
                    (16 +
                    Math.random() * 24) +
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
            i * 45
        );

    }
}


/* =========================
   MUSIC BUTTON
========================= */

const musicBtn =
    document.getElementById("musicBtn");


let audioContext = null;
let musicStarted = false;


musicBtn.addEventListener(
    "click",
    function() {

        /*
         * This creates a tiny ambient tone
         * without requiring an audio file.
         */

        try {

            if (!audioContext) {

                audioContext =
                    new (
                        window.AudioContext ||
                        window.webkitAudioContext
                    )();

            }


            const oscillator =
                audioContext.createOscillator();

            const gain =
                audioContext.createGain();


            oscillator.type =
                "sine";


            oscillator.frequency.value =
                220;


            gain.gain.value =
                0.025;


            oscillator.connect(
                gain
            );

            gain.connect(
                audioContext.destination
            );


            oscillator.start();


            oscillator.stop(
                audioContext.currentTime +
                1.2
            );


            musicStarted = true;

            musicBtn.textContent =
                "♥";

        } catch (e) {

            console.log(
                "Audio unavailable."
            );

        }

    }
);


/* =========================
   INITIALIZE
========================= */

createStars();

createParticles();
