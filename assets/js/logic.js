var openB = true;
var openH = true;

function workshopB() {
    const type2 = document.getElementById("type2");
    const legend2 = document.getElementById("legend2");
    const session2 = document.getElementsByName("session-2");


    for (let i = 0; i < session2.length; ++i) {
        if (session2[i].checked && type2.checked) {
            clearRadio(session2);
            if (openB) {
                errWindow("B");
            }
        }
    }
}

function workshopH() {
    const evol3 = document.getElementById("evol3");
    const legend2 = document.getElementById("legend2");


    if (!evol3.checked) {
        legend2.checked = false;
        if (openH) {
            errWindow("H");
        }
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
    var top = (window.innerHeight - winHeight) / 2;
    var left = (window.innerWidth -winWidth) / 2;
    var berrorUrl = "berror.html";
    var herrorUrl = "herror.html";
    var errWindow = window;
    var windowParams = `width=${winWidth}, height=${winHeight}, left=${left}, top=${top}`;
    if (workshop == "B") { fd
        errWindow.open(berrorUrl, "Error Window", windowParams);
        openB = false;
    }
    else {
        errWindow.open(herrorUrl, "Error Window", windowParams);
        openH = false;
    }
}

function closeWin() {
    let currWin = open(location, '_self');
    currWin.close();
}