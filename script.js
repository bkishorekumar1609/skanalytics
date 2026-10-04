const SPREADSHEET_ID = "PASTE_YOUR_SHEET_ID_HERE";

const SHEET_NAME = "Sheet1";


function doPost(e) {

    try {

        const spreadsheet =
            SpreadsheetApp.openById(
                SPREADSHEET_ID
            );

        const sheet =
            spreadsheet.getSheetByName(
                SHEET_NAME
            );


        if (!sheet) {

            throw new Error(
                "Sheet1 was not found."
            );

        }


        const p =
            e && e.parameter
                ? e.parameter
                : {};


        const from =
            String(
                p.from || ""
            )
            .trim()
            .slice(0, 80);


        const to =
            String(
                p.to || ""
            )
            .trim()
            .slice(0, 80);


        const answer =
            String(
                p.answer || ""
            )
            .trim()
            .slice(0, 40);


        const message =
            String(
                p.message || ""
            )
            .trim()
            .slice(0, 1000);


        const theme =
            String(
                p.theme || ""
            )
            .trim()
            .slice(0, 30);


        if (!answer) {

            throw new Error(
                "Answer is empty."
            );

        }


        sheet.appendRow([
            new Date(),
            from,
            to,
            answer,
            message,
            theme
        ]);


        return HtmlService
            .createHtmlOutput(
                "Response saved successfully ❤️"
            );

    }


    catch (error) {

        return HtmlService
            .createHtmlOutput(
                "ERROR: " +
                error.message
            );

    }

}


function doGet() {

    return HtmlService
        .createHtmlOutput(
            "<h2>Proposal Response Service ❤️</h2>" +
            "<p>Web app is working.</p>"
        );

}
