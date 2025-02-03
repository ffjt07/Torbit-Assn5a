var winCounterB = 0;
var winCounterH = 0;

function workshopB() {
    const type2 = document.getElementById("type2");
    const legend2 = document.getElementById("legend2");
    const session2 = document.getElementsByName("session-2");
    var count;

    for (let i = 0; i < session2.length; ++i) {
        if (session2[i].checked && type2.checked) {
            clearRadio(session2);
            errWindow("B");
        }
    }
}

function workshopH() {
    const evol3 = document.getElementById("evol3");
    const legend2 = document.getElementById("legend2");
    var count;

    if (!evol3.checked) {
        legend2.checked = false;
        errWindow("H", count);
    }
}

function clearRadio(radioObject) {
    for (let i = 0; i < radioObject.length; ++i) {
        radioObject[i].checked = false;
    }
}

function errWindow(workshop) {
    const winHeight = 400;
    const winWidth = 500;
    const top = (window.screen.height - winHeight) / 2;
    const left = (window.screen.width - winWidth) / 2;
    var berrorUrl = "berror.html";
    var herrorUrl = "herror.html";
    var errWindow = window;
    var windowParams = `menubar=no,stats=no,location=no,scrollbars, top=${top}, left=${left}, width=${winWidth}, height=${winHeight}`;
    if (workshop == "B") {
        errWindow.open(berrorUrl, "Error Window", windowParams);
    }
    else {
        errWindow.open(herrorUrl, "Error Window", windowParams);
    }
}

function dispWorkBerr() {
    alert(
        "Cannot select any Pokemon Evolution sessions or Two Series Legendary session."
    );
}

function dispWorkHerr() {
    alert(
        "Cannot take Two Series Legendary Pokemon session unless Double Evolution session is taken."
    );
}

function workshopF() { }
