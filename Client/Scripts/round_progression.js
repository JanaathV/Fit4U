"use strict";
function round1_to_round2() {
    let match1 = document.getElementById("round1");
    let match2 = document.getElementById("round2");
}
function nextRound() {
    let winner = document.getElementById('winner1');
    let newParticipant = document.getElementById('newPart');
    let clone = winner.cloneNode(true);
    newParticipant.appendChild(clone);
    if (document.getElementById("myButton").disabled = true) {
        document.getElementById("myButton2").disabled = true;
    }
}
function nextRoundB() {
    let winner = document.getElementById('winner2');
    let newParticipant = document.getElementById('newPart');
    let clone = winner.cloneNode(true);
    newParticipant.prepend(clone);
    if (document.getElementById("myButton2").disabled = true) {
        document.getElementById("myButton").disabled = true;
    }
}
function nextRoundC() {
    let winner = document.getElementById('winner3');
    let newParticipant = document.getElementById('newPart2');
    let clone = winner.cloneNode(true);
    newParticipant.prepend(clone);
    if (document.getElementById("myButton3").disabled = true) {
        document.getElementById("myButton4").disabled = true;
    }
}
function nextRoundD() {
    let winner = document.getElementById('winner4');
    let newParticipant = document.getElementById('newPart2');
    let clone = winner.cloneNode(true);
    newParticipant.prepend(clone);
    if (document.getElementById("myButton4").disabled = true) {
        document.getElementById("myButton3").disabled = true;
    }
}
function nextRoundE() {
    let winner = document.getElementById('winner5');
    let newParticipant = document.getElementById('newPart3');
    let clone = winner.cloneNode(true);
    newParticipant.prepend(clone);
    if (document.getElementById("myButton5").disabled = true) {
        document.getElementById("myButton6").disabled = true;
    }
}
function nextRoundF() {
    let winner = document.getElementById('winner6');
    let newParticipant = document.getElementById('newPart3');
    let clone = winner.cloneNode(true);
    newParticipant.prepend(clone);
    if (document.getElementById("myButton6").disabled = true) {
        document.getElementById("myButton5").disabled = true;
    }
}
function nextRoundG() {
    let winner = document.getElementById('winner7');
    let newParticipant = document.getElementById('newPart4');
    let clone = winner.cloneNode(true);
    newParticipant.prepend(clone);
    if (document.getElementById("myButton7").disabled = true) {
        document.getElementById("myButton8").disabled = true;
    }
}
function nextRoundH() {
    let winner = document.getElementById('winner8');
    let newParticipant = document.getElementById('newPart4');
    let clone = winner.cloneNode(true);
    newParticipant.prepend(clone);
    if (document.getElementById("myButton8").disabled = true) {
        document.getElementById("myButton7").disabled = true;
    }
}
function nextRoundI() {
    let winner = document.getElementById('newPart');
    let newParticipant = document.getElementById('newPart5');
    let clone = winner.cloneNode(true);
    newParticipant.prepend(clone);
    if (document.getElementById("myButton9").disabled = true) {
        document.getElementById("myButton10").disabled = true;
    }
}
function nextRoundJ() {
    let winner = document.getElementById('newPart2');
    let newParticipant = document.getElementById('newPart5');
    let clone = winner.cloneNode(true);
    newParticipant.prepend(clone);
    if (document.getElementById("myButton10").disabled = true) {
        document.getElementById("myButton9").disabled = true;
    }
}
function nextRoundK() {
    let winner = document.getElementById('newPart3');
    let newParticipant = document.getElementById('newPart6');
    let clone = winner.cloneNode(true);
    newParticipant.prepend(clone);
    if (document.getElementById("myButton11").disabled = true) {
        document.getElementById("myButton12").disabled = true;
    }
}
function nextRoundL() {
    let winner = document.getElementById('newPart4');
    let newParticipant = document.getElementById('newPart6');
    let clone = winner.cloneNode(true);
    newParticipant.prepend(clone);
    if (document.getElementById("myButton12").disabled = true) {
        document.getElementById("myButton11").disabled = true;
    }
}
function nextRoundM() {
    let winner = document.getElementById('newPart5');
    let newParticipant = document.getElementById('newPart7');
    let clone = winner.cloneNode(true);
    newParticipant.prepend(clone);
    if (document.getElementById("myButton13").disabled = true) {
        document.getElementById("myButton14").disabled = true;
    }
}
function nextRoundN() {
    let winner = document.getElementById('newPart6');
    let newParticipant = document.getElementById('newPart7');
    let clone = winner.cloneNode(true);
    newParticipant.prepend(clone);
    if (document.getElementById("myButton14").disabled = true) {
        document.getElementById("myButton13").disabled = true;
    }
}
function nextRoundO() {
    let winner = document.getElementById('newPart7');
    let newParticipant = document.getElementById('newPart8');
    let clone = winner.cloneNode(true);
    newParticipant.prepend(clone);
    if (document.getElementById("myButton15").disabled = true) {
        document.getElementById("myButton16").disabled = true;
    }
}
function nextRoundP() {
    let winner = document.getElementById('winner9');
    let newParticipant = document.getElementById('newPart10');
    let clone = winner.cloneNode(true);
    newParticipant.prepend(clone);
    if (document.getElementById("myButton23").disabled = true) {
        document.getElementById("myButton24").disabled = true;
    }
}
function nextRoundQ() {
    let winner = document.getElementById('winner10');
    let newParticipant = document.getElementById('newPart10');
    let clone = winner.cloneNode(true);
    newParticipant.prepend(clone);
    if (document.getElementById("myButton24").disabled = true) {
        document.getElementById("myButton23").disabled = true;
    }
}
function nextRoundR() {
    let winner = document.getElementById('winner11');
    let newParticipant = document.getElementById('newPart11');
    let clone = winner.cloneNode(true);
    newParticipant.prepend(clone);
    if (document.getElementById("myButton25").disabled = true) {
        document.getElementById("myButton26").disabled = true;
    }
}
function nextRoundS() {
    let winner = document.getElementById('winner12');
    let newParticipant = document.getElementById('newPart11');
    let clone = winner.cloneNode(true);
    newParticipant.prepend(clone);
    if (document.getElementById("myButton26").disabled = true) {
        document.getElementById("myButton25").disabled = true;
    }
}
function nextRoundT() {
    let winner = document.getElementById('winner13');
    let newParticipant = document.getElementById('newPart12');
    let clone = winner.cloneNode(true);
    newParticipant.prepend(clone);
    if (document.getElementById("myButton27").disabled = true) {
        document.getElementById("myButton28").disabled = true;
    }
}
function nextRoundU() {
    let winner = document.getElementById('winner14');
    let newParticipant = document.getElementById('newPart12');
    let clone = winner.cloneNode(true);
    newParticipant.prepend(clone);
    if (document.getElementById("myButton28").disabled = true) {
        document.getElementById("myButton27").disabled = true;
    }
}
function nextRoundV() {
    let winner = document.getElementById('winner15');
    let newParticipant = document.getElementById('newPart13');
    let clone = winner.cloneNode(true);
    newParticipant.prepend(clone);
    if (document.getElementById("myButton29").disabled = true) {
        document.getElementById("myButton30").disabled = true;
    }
}
function nextRoundW() {
    let winner = document.getElementById('winner16');
    let newParticipant = document.getElementById('newPart13');
    let clone = winner.cloneNode(true);
    newParticipant.prepend(clone);
    if (document.getElementById("myButton30").disabled = true) {
        document.getElementById("myButton29").disabled = true;
    }
}
function nextRoundY() {
    let winner = document.getElementById('newPart10');
    let newParticipant = document.getElementById('newPart14');
    let clone = winner.cloneNode(true);
    newParticipant.prepend(clone);
    if (document.getElementById("myButton19").disabled = true) {
        document.getElementById("myButton20").disabled = true;
    }
}
function nextRoundZ() {
    let winner = document.getElementById('newPart11');
    let newParticipant = document.getElementById('newPart14');
    let clone = winner.cloneNode(true);
    newParticipant.prepend(clone);
    if (document.getElementById("myButton20").disabled = true) {
        document.getElementById("myButton19").disabled = true;
    }
}
function nextRoundAA() {
    let winner = document.getElementById('newPart12');
    let newParticipant = document.getElementById('newPart15');
    let clone = winner.cloneNode(true);
    newParticipant.prepend(clone);
    if (document.getElementById("myButton21").disabled = true) {
        document.getElementById("myButton22").disabled = true;
    }
}
function nextRoundBB() {
    let winner = document.getElementById('newPart13');
    let newParticipant = document.getElementById('newPart15');
    let clone = winner.cloneNode(true);
    newParticipant.prepend(clone);
    if (document.getElementById("myButton22").disabled = true) {
        document.getElementById("myButton21").disabled = true;
    }
}
function nextRoundCC() {
    let winner = document.getElementById('newPart14');
    let newParticipant = document.getElementById('newPart16');
    let clone = winner.cloneNode(true);
    newParticipant.prepend(clone);
    if (document.getElementById("myButton17").disabled = true) {
        document.getElementById("myButton18").disabled = true;
    }
}
function nextRoundDD() {
    let winner = document.getElementById('newPart15');
    let newParticipant = document.getElementById('newPart16');
    let clone = winner.cloneNode(true);
    newParticipant.prepend(clone);
    if (document.getElementById("myButton18").disabled = true) {
        document.getElementById("myButton17").disabled = true;
    }
}
function nextRoundEE() {
    let winner = document.getElementById('newPart16');
    let newParticipant = document.getElementById('newPart8');
    let clone = winner.cloneNode(true);
    newParticipant.prepend(clone);
    if (document.getElementById("myButton16").disabled = true) {
        document.getElementById("myButton15").disabled = true;
    }
}
//# sourceMappingURL=round_progression.js.map