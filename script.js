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

const maybeBtn =
    document.getElementById("maybeBtn");

const sendResponseBtn =
    document.getElementById("sendResponseBtn");

const responseText =
    document.getElementById("responseText");

const replyInput =
    document.getElementById("replyInput");

const replyForm =
    document.getElementById("replyForm");

const count =
    document.getElementById("count");

const error =
    document.getElementById("error");


/* =========================
   SCREEN CHANGE
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
   SAVE TO GOOGLE SHEET
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
   SCREEN 3
========================= */

const typingText =
    document.getElementById("typingText");

let typingStarted = false;


function startTyping() {

    if (typingStarted) {
        return;
    }

    typingStarted = true;


    const message =
        "There is someone who makes my ordinary days feel a little more special...";


    let index = 0;


    function type() {

        if (index < message.length) {

            typingText.textContent +=
                message.charAt(index);

            index++;

            setTimeout(
                type,
                45
            );

        }
    }


    type();
}


revealBtn.addEventListener(
    "click",
    function() {

        showScreen("screen4");

        createCelebration(15);

    }
);


/* =========================
   SCREEN 4
========================= */

storyBtn.addEventListener(
    "click",
    function() {

        showScreen("screen5");

    }
);


/* =========================
   SCREEN 5
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

        createCelebration(45);

    }
);


/* =========================
   NEED TIME
========================= */

maybeBtn.addEventListener(
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

        count.textContent =
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
                "Please write a message first 💜";

            responseText.focus();

            return;
        }


        saveResponse(
            "NEEDS TIME 🥺 - Christopher's message: " +
            message
        );


        showScreen("screen9");

        createCelebration(15);

    }
);


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
        i < 35;
        i++
    ) {

        const particle =
            document.createElement("div");


        particle.style.position =
            "fixed";

        particle.style.width =
            "2px";

        particle.style.height =
            "2px";

        particle.style.borderRadius =
            "50%";

        particle.style.background =
            "#c084fc";

        particle.style.boxShadow =
            "0 0 8px #c084fc";

        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.top =
            Math.random() * 100 + "vh";

        particle.style.opacity =
            Math.random();


        particle.animate(
            [
                {
                    transform:
                        "translateY(0)",
                    opacity: 0
                },
                {
                    transform:
                        "translateY(-100px)",
                    opacity: .7
                },
                {
                    transform:
                        "translateY(-200px)",
                    opacity: 0
                }
            ],
            {
                duration:
                    5000 +
                    Math.random() * 7000,

                iterations: Infinity,

                delay:
                    Math.random() * 5000
            }
        );


        container.appendChild(
            particle
        );
    }
}


createParticles();


/* =========================
   CELEBRATION
========================= */

function createCelebration(amount) {

    const emojis = [
        "💜",
        "❤️",
        "✨",
        "💗",
        "🎉"
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
                    Math.random() * 22) +
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
                                2500 +
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
