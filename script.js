const screens = [
    "screenApology",
    "screenMessage",
    "screenQuestion",
    "screenYes",
    "screenPunishment",
    "screenPunishmentDone"
];

const apologyNext = document.getElementById("apologyNext");
const questionNext = document.getElementById("questionNext");

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const submitPunishment =
    document.getElementById("submitPunishment");

const tryAgainButton = document.getElementById("tryAgainButton");

const punishmentText =
    document.getElementById("punishmentText");

const punishmentDisplay =
    document.getElementById("punishmentDisplay");

const punishmentError =
    document.getElementById("punishmentError");

const characterCount =
    document.getElementById("characterCount");

const replyForm =
    document.getElementById("replyForm");

const replyInput =
    document.getElementById("replyInput");


/* =========================================
   CHANGE SCREEN
========================================= */

function showScreen(screenId) {

    screens.forEach(function(id) {

        const screen =
            document.getElementById(id);

        screen.classList.add("hidden");
    });

    const selected =
        document.getElementById(screenId);

    selected.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================
   SAVE TO GOOGLE SHEET
========================================= */

function saveResponse(response) {

    /*
       The response is placed inside the hidden
       form and submitted to Google Apps Script.
    */

    replyInput.value = response;

    replyForm.submit();
}


/* =========================================
   SCREEN 1 → SCREEN 2
========================================= */

apologyNext.addEventListener(
    "click",
    function() {

        showScreen("screenMessage");

        createBurst("✨", 15);
        createBurst("⭐", 10);
    }
);


/* =========================================
   SCREEN 2 → SCREEN 3
========================================= */

questionNext.addEventListener(
    "click",
    function() {

        showScreen("screenQuestion");

        createBurst("✨", 18);
        createBurst("⭐", 12);
    }
);


/* =========================================
   YES
========================================= */

yesButton.addEventListener(
    "click",
    function() {

        /*
           This is what will appear in Google Sheet.
        */

        saveResponse(
            "ACCEPTED MY SORRY 😊"
        );

        showScreen("screenYes");

        createBurst("🎉", 25);
        createBurst("✨", 25);
        createBurst("⭐", 20);

        createConfetti(50);
    }
);


/* =========================================
   NO
========================================= */

noButton.addEventListener(
    "click",
    function() {

        showScreen("screenPunishment");

        createBurst("😤", 8);
        createBurst("⚡", 8);
    }
);


/* =========================================
   PUNISHMENT CHARACTER COUNT
========================================= */

punishmentText.addEventListener(
    "input",
    function() {

        characterCount.textContent =
            punishmentText.value.length;
    }
);


/* =========================================
   SUBMIT PUNISHMENT
========================================= */

submitPunishment.addEventListener(
    "click",
    function() {

        const punishment =
            punishmentText.value.trim();

        /*
           Don't allow an empty punishment.
        */

        if (!punishment) {

            punishmentError.style.display =
                "block";

            punishmentText.focus();

            return;
        }

        punishmentError.style.display =
            "none";


        /*
           Show the punishment on final screen.
        */

        punishmentDisplay.textContent =
            punishment;


        /*
           Save BOTH the fact that she rejected
           the apology and the punishment.
        */

        saveResponse(
            "NOT ACCEPTED — PUNISHMENT: " +
            punishment
        );


        /*
           Show final screen.
        */

        showScreen(
            "screenPunishmentDone"
        );


        createBurst("😭", 12);
        createBurst("📜", 8);
    }
);


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
