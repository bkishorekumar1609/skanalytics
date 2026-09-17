const screens = [
    "screen-start",
    "screen-loading",
    "screen-scam",
    "screen-evidence",
    "screen-form",
    "screen-done"
];


// Show one screen and hide the others

function show(id) {

    screens.forEach(function(screen) {

        document
            .getElementById(screen)
            .classList
            .add("hidden");

    });

    document
        .getElementById(id)
        .classList
        .remove("hidden");
}



// STEP 1
// User clicks "Do you want to know?"

document
    .getElementById("startBtn")
    .addEventListener("click", function() {

        show("screen-loading");


        const text =
            document.getElementById("loadingText");


        const messages = [

            "Opening yesterday's incident…",

            "Checking the chat history…",

            "Finding the missing chocolate…",

            "Calculating emotional damage…"

        ];


        let i = 0;


        const timer =
            setInterval(function() {

                text.textContent =
                    messages[i];

                i++;


                if (i === messages.length) {

                    clearInterval(timer);

                }

            }, 650);



        // After 3 seconds show the prank

        setTimeout(function() {

            show("screen-scam");

        }, 3000);

    });



// STEP 2
// Show evidence

document
    .getElementById("evidenceBtn")
    .addEventListener("click", function() {

        show("screen-evidence");

    });



// STEP 3
// Go to the Dairy Milk question

document
    .getElementById("claimBtn")
    .addEventListener("click", function() {

        show("screen-form");

    });



// STEP 4
// Submit the reply

document
    .getElementById("replyForm")
    .addEventListener("submit", function() {

        /*
            The form is submitted to Google Apps Script
            inside the hidden iframe.

            This allows the page to stay open.
        */


        setTimeout(function() {

            show("screen-done");

        }, 900);

    });