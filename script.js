/* =========================
   GET ELEMENTS
========================= */

const pages = [
    document.getElementById("page1"),
    document.getElementById("page2"),
    document.getElementById("page3"),
    document.getElementById("page4"),
    document.getElementById("pageYes"),
    document.getElementById("pageNo"),
    document.getElementById("pageFinal")
];

const startBtn = document.getElementById("startBtn");
const sorryBtn = document.getElementById("sorryBtn");
const courtBtn = document.getElementById("courtBtn");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const submitPunishment =
    document.getElementById("submitPunishment");

const tryAgainBtn = null;

const punishment =
    document.getElementById("punishment");

const punishmentError =
    document.getElementById("punishmentError");

const responseForm =
    document.getElementById("responseForm");

const replyInput =
    document.getElementById("replyInput");


/* =========================
   SHOW PAGE
========================= */

function showPage(page) {

    pages.forEach(function(item) {
        item.classList.add("hidden");
    });

    page.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    createBurst();
}


/* =========================
   TYPING ANIMATION
========================= */

const typingText =
    document.getElementById("typingText");

const message =
    "I need to say sorry for something...";

let typingIndex = 0;

function typeMessage() {

    if (typingIndex < message.length) {

        typingText.textContent +=
            message.charAt(typingIndex);

        typingIndex++;

        setTimeout(
            typeMessage,
            55
        );
    }
}

setTimeout(
    typeMessage,
    700
);


/* =========================
   PAGE 1
========================= */

startBtn.addEventListener(
    "click",
    function() {

        showPage(
            document.getElementById("page2")
        );

    }
);


/* =========================
   PAGE 2
========================= */

sorryBtn.addEventListener(
    "click",
    function() {

        showPage(
            document.getElementById("page3")
        );

    }
);


/* =========================
   PAGE 3
========================= */

courtBtn.addEventListener(
    "click",
    function() {

        showPage(
            document.getElementById("page4")
        );

    }
);


/* =========================
   SAVE TO GOOGLE SHEETS
========================= */

function saveResponse(text) {

    replyInput.value = text;

    responseForm.submit();
}


/* =========================
   YES
========================= */

yesBtn.addEventListener(
    "click",
    function() {

        /*
         * This is immediately saved
         * to Google Sheets.
         */

        saveResponse(
            "YES - Apology accepted ✅"
        );

        showPage(
            document.getElementById("pageYes")
        );

        createBigCelebration();

    }
);


/* =========================
   NO
========================= */

noBtn.addEventListener(
    "click",
    function() {

        /*
         * First record that she
         * rejected the apology.
         */

        saveResponse(
            "NO - Punishment requested ❌"
        );

        showPage(
            document.getElementById("pageNo")
        );

    }
);


/* =========================
   SUBMIT PUNISHMENT
========================= */

submitPunishment.addEventListener(
    "click",
    function() {

        const text =
            punishment.value.trim();

        if (!text) {

            punishmentError.textContent =
                "You have to give me a punishment 😂";

            punishment.focus();

            return;
        }

        /*
         * Save the actual punishment.
         */

        saveResponse(
            "NO - Punishment: " + text
        );

        punishmentError.textContent = "";

        showPage(
            document.getElementById("pageFinal")
        );

        createBigCelebration();

    }
);


/* =========================
   FLOATING EMOJIS
========================= */

const floatingEmojis =
    document.getElementById(
        "floatingEmojis"
    );

function createFloatingEmoji() {

    const item =
        document.createElement("div");

    const emojis = [
        "😂",
        "📞",
        "😭",
        "🤝",
        "⚖️",
        "✨",
        "📱",
        "🤣",
        "😅"
    ];

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

    item.style.bottom =
        "-50px";

    item.style.fontSize =
        15 + Math.random() * 20 + "px";

    item.style.zIndex =
        "1";

    item.style.pointerEvents =
        "none";

    const duration =
        5 + Math.random() * 6;

    item.animate(
        [
            {
                transform:
                    "translateY(0) rotate(0deg)",
                opacity:
                    0
            },
            {
                transform:
                    "translateY(-110vh) rotate(360deg)",
                opacity:
                    .65
            },
            {
                transform:
                    "translateY(-120vh) rotate(720deg)",
                opacity:
                    0
            }
        ],
        {
            duration:
                duration * 1000,

            easing:
                "linear"
        }
    );

    floatingEmojis.appendChild(item);

    setTimeout(
        function() {
            item.remove();
        },
        duration * 1000
    );
}

setInterval(
    createFloatingEmoji,
    600
);


/* =========================
   BUTTON BURST
========================= */

function createBurst() {

    const emojis = [
        "✨",
        "😂",
        "📞",
        "🤝"
    ];

    for (
        let i = 0;
        i < 8;
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
                    35 + Math.random() * 30 + "vw";

                item.style.top =
                    40 + Math.random() * 20 + "vh";

                item.style.fontSize =
                    "24px";

                item.style.zIndex =
                    "1000";

                item.style.pointerEvents =
                    "none";

                item.animate(
                    [
                        {
                            transform:
                                "translate(0,0) scale(.4)",
                            opacity:
                                1
                        },
                        {
                            transform:
                                `translate(
                                    ${(Math.random() - .5) * 300}px,
                                    ${(Math.random() - .5) * 250}px
                                )
                                scale(1.2)
                                rotate(360deg)`,
                            opacity:
                                0
                        }
                    ],
                    {
                        duration:
                            900,

                        easing:
                            "cubic-bezier(.2,.8,.2,1)"
                    }
                );

                document.body.appendChild(item);

                setTimeout(
                    function() {
                        item.remove();
                    },
                    1000
                );

            },
            i * 70
        );
    }
}


/* =========================
   BIG CELEBRATION
========================= */

function createBigCelebration() {

    const emojis = [
        "🎉",
        "🥳",
        "😂",
        "✨",
        "🤝",
        "📞",
        "🎊",
        "🤣",
        "👏"
    ];

    for (
        let i = 0;
        i < 45;
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
                    18 + Math.random() * 22 + "px";

                item.style.zIndex =
                    "2000";

                item.style.pointerEvents =
                    "none";

                const duration =
                    1800 +
                    Math.random() * 2500;

                item.animate(
                    [
                        {
                            transform:
                                "translateY(0) rotate(0deg)",
                            opacity:
                                1
                        },
                        {
                            transform:
                                `translateY(110vh)
                                 rotate(${360 + Math.random() * 720}deg)`,
                            opacity:
                                0
                        }
                    ],
                    {
                        duration:
                            duration,

                        easing:
                            "cubic-bezier(.2,.8,.3,1)"
                    }
                );

                document.body.appendChild(item);

                setTimeout(
                    function() {
                        item.remove();
                    },
                    duration + 100
                );

            },
            i * 40
        );
    }
}


/* =========================
   BACKGROUND PARTICLES
========================= */

const background =
    document.getElementById(
        "background"
    );

for (
    let i = 0;
    i < 40;
    i++
) {

    const particle =
        document.createElement("div");

    particle.className =
        "bg-particle";

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.animationDuration =
        8 + Math.random() * 12 + "s";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    background.appendChild(
        particle
    );
}
