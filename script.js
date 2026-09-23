const apologyCard = document.getElementById("apologyCard");
const messageCard = document.getElementById("messageCard");
const questionCard = document.getElementById("questionCard");
const yesCard = document.getElementById("yesCard");
const noCard = document.getElementById("noCard");

const continueBtn = document.getElementById("continueBtn");
const questionBtn = document.getElementById("questionBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const tryAgainBtn = document.getElementById("tryAgainBtn");

const replyForm = document.getElementById("replyForm");
const replyInput = document.getElementById("replyInput");


/* =========================
   SCREEN SWITCHING
========================= */

function showScreen(screen) {

    const screens = [
        apologyCard,
        messageCard,
        questionCard,
        yesCard,
        noCard
    ];

    screens.forEach(function(item) {
        item.classList.add("hidden");
    });

    screen.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   SAVE RESPONSE TO GOOGLE SHEET
========================= */

function saveResponse(response) {

    replyInput.value = response;

    /*
     * Submit silently to Google Apps Script.
     * The iframe prevents the user from leaving the website.
     */
    replyForm.submit();
}


/* =========================
   FIRST BUTTON
========================= */

continueBtn.addEventListener("click", function() {

    showScreen(messageCard);

    createHeartBurst(8);
});


/* =========================
   SECOND BUTTON
========================= */

questionBtn.addEventListener("click", function() {

    showScreen(questionCard);

    createHeartBurst(12);
});


/* =========================
   YES BUTTON
========================= */

yesBtn.addEventListener("click", function() {

    saveResponse("Yes, I accept your sorry ❤️");

    showScreen(yesCard);

    createHeartBurst(35);
    createConfetti(45);
});


/* =========================
   NO BUTTON
========================= */

noBtn.addEventListener("click", function() {

    saveResponse("Not yet 😭");

    showScreen(noCard);

    createHeartBurst(5);
});


/* =========================
   TRY AGAIN
========================= */

tryAgainBtn.addEventListener("click", function() {

    showScreen(questionCard);

    createHeartBurst(10);
});


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const emojis = [
        "❤️",
        "💗",
        "💖",
        "💕",
        "💓",
        "💞"
    ];

    heart.textContent =
        emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (14 + Math.random() * 22) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 6) + "s";

    document.body.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 12000);
}


/* Create hearts continuously */

setInterval(function() {

    createHeart();

}, 700);


/* =========================
   HEART BURST
========================= */

function createHeartBurst(amount) {

    for (let i = 0; i < amount; i++) {

        setTimeout(function() {

            const heart = document.createElement("div");

            heart.className = "heart";

            heart.textContent = "❤️";

            heart.style.left =
                (40 + Math.random() * 20) + "vw";

            heart.style.fontSize =
                (18 + Math.random() * 20) + "px";

            heart.style.animationDuration =
                (3 + Math.random() * 3) + "s";

            document.body.appendChild(heart);

            setTimeout(function() {
                heart.remove();
            }, 7000);

        }, i * 80);
    }
}


/* =========================
   CONFETTI
========================= */

function createConfetti(amount) {

    const emojis = [
        "🎉",
        "✨",
        "💖",
        "❤️",
        "🥳",
        "💕"
    ];

    for (let i = 0; i < amount; i++) {

        setTimeout(function() {

            const piece = document.createElement("div");

            piece.style.position = "fixed";
            piece.style.left =
                Math.random() * 100 + "vw";

            piece.style.top = "-40px";

            piece.style.fontSize =
                (18 + Math.random() * 20) + "px";

            piece.style.zIndex = "999";

            piece.textContent =
                emojis[Math.floor(Math.random() * emojis.length)];

            document.body.appendChild(piece);

            const duration =
                2000 + Math.random() * 3000;

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
                    duration: duration,
                    easing: "cubic-bezier(.2,.8,.3,1)"
                }
            );

            setTimeout(function() {
                piece.remove();
            }, duration + 100);

        }, i * 40);
    }
}


/* =========================
   BACKGROUND PARTICLES
========================= */

function createParticles() {

    const container =
        document.getElementById("particles");

    for (let i = 0; i < 35; i++) {

        const particle =
            document.createElement("div");

        particle.className = "particle";

        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.animationDuration =
            (8 + Math.random() * 12) + "s";

        particle.style.animationDelay =
            Math.random() * 8 + "s";

        container.appendChild(particle);
    }
}

createParticles();
