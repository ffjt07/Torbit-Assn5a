var type2 = document.getElementById("type2");
var session2 = document.getElementsByName("session-2");
var evol3 = document.getElementById("evol3");
var legend2 = document.getElementById("legend2");
var form = document.getElementById("registration-form");
var errorMsgB = "Cannot select any Pokémon Evolution sessions if Electric, Ground, Rock, Steel, Ice, Fighting Pokémon session is selected.";
var errorMsgH = "Cannot select Two Series Legendary Pokémon session unless Double Evolution session is also selected.";
var errMessages = 0;
var errWinOpen = false;

if (document.title === "Registration Form") {
    console.log(document.title);
    form.addEventListener("submit", function (event) {
        if (type2.checked) {
            if (!errWinOpen) {
                if (sessionTwoCheck() == true) {
                    event.preventDefault();
                    if (legend2.checked) {
                        errMessages = 2;
                        legend2.checked = false;
                    }
                    else {
                        errMessages = 1;
                    }
                    errWindow();
                }
            }
        }
        else if (legend2.checked && !evol3.checked) {
            if (!errWinOpen) {
                event.preventDefault();
                errWindow();
                errMessages = 3;
                legend2.checked = false;
            }
        }
    });
}

function errWindow() {
    const winHeight = 400;
    const winWidth = 500;
    let topOffset = screenY;
    let leftOffset = screenX;
    let top = topOffset + (outerHeight - winHeight) / 2;
    let left = leftOffset + (outerWidth - winWidth) / 2;
    let regerrorUrl = "./regerror.html";
    let windowParams = `resizable=no,loacation=yes,width=${winWidth}, height=${winHeight}, left=${left}, top=${top}`;
    var errorWindow = window.open(regerrorUrl, "Session Error", windowParams);
    let errorHeaderOne = errorWindow.document.getElementById("error1");
    let errorHeaderTwo = errorWindow.document.getElementById("error2");
    console.log(errorWindow.location);

    if (errMessages == 1) {
        errorHeaderOne.textContent = errorMsgB;
    }
    else if (errMessages == 2) {
        errorHeaderOne.textContent = errorMsgB;
        errorHeaderTwo.textContent = errorMsgH;
    }
    else if (errMessages == 3) {
        errorHeaderOne.textContent = errorMsgH;
    }
}

function sessionTwoCheck() {
    for (let i = 0; i < session2.length; ++i) {
        if (session2[i].checked) {
            clearRadio(session2);
            return true;
        }
    }
    return false;
}

function clearRadio(radioObject) {
    for (let i = 0; i < radioObject.length; ++i) {
        radioObject[i].checked = false;
    }
}

function evolCheck() {
    const type2 = document.getElementById("type2");
    const evol1 = document.getElementById("evol1");

    if (type2.checked) {
        evol1.removeAttribute("required");
    }
}

function thankYouAlert() {
    const poll = document.getElementsByName("poll");
    for (let i = 0; i < poll.length; ++i) {
        if (poll[i].checked) {
            alert("Thank you for voting for: " + poll[i].value);
        }
    }
}

function closeWin() {
        let currWin = open(location, '_self');
        errWinOpen = false;
        currWin.close();
}

