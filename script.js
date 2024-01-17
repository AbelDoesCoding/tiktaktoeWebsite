var turnNumber = 0;

/* these variables need to become one array, should have done that in the first placce*/
const topLeft = "topLeft";
var topLeftCheck = 0;

const topCenter = "topCenter";
var topCenterCheck = 0;

const topRight = "topRight";
var topRightCheck = 0;

const middleLeft = "middleLeft";
var midLeftCheck = 0;

const middleCenter = "middleCenter";
var midCenterCheck = 0;

const middleRight = "middleRight";
var midRightCheck = 0;

const bottomLeft = "bottomLeft";
var btmLeftCheck = 0;

const bottomCenter = "bottomCenter";
var btmCenterCheck = 0;

const bottomRight = "bottomRight"
var btmRightCheck = 0;

// Creates element for annoucing whose turn it is runs it through xMove function
const container = document.querySelector('#turn-announcer');
const content = document.createElement('turn');
content.classList.add('content');


function xMove(quadrant, xCheck) {
    if (turnNumber == 0 && xCheck == 0) {
        document.getElementById(quadrant).src="blackX.png";
        turnNumber += 1;
        xCheck += 1;
        content.textContent = 'Player Two, Your Turn!';
        content.setAttribute('style', 'color: black; background: red; fontSize: 40px;'); 
        return xCheck;

    } else if (turnNumber == 1 && xCheck == 0) {
        document.getElementById(quadrant).src="redX.png";
        turnNumber -= 1;
        xCheck += 1;
        content.textContent = 'Player One, Your Turn!';
        content.setAttribute('style', 'color: white; background: black; fontSize: 40px;'); 
        return xCheck;
    }
}
/*
var testArray = [0, 0, 1, 1, 0 , 1 , 1, 1, 0];
var x = 0;

function winnerCheck() {
    for (i in testArray) {
        console.log(i);
        console.log("---");
        console.log(x);
        console.log("---");
        x += 1;
        i += i;
        if (x == 3 && i == 3) {
            console.log("Player two wins!");
            break;
        } else if (x == 3 && i == 0) {
            console.log("Player two wins!");
            break;
        } else if (i == 3) {
            i = 0;
            continue;
        }   
}
*/

function mainFuncTopLeft() {
    topLeftCheck = xMove(topLeft, topLeftCheck);
    container.appendChild(content);
}
function mainFuncTopCenter() {
    topCenterCheck = xMove(topCenter, topCenterCheck);
    container.appendChild(content);
}
function mainFuncTopRight() {
    topRightCheck = xMove(topRight, topRightCheck);
    container.appendChild(content);
}
function mainFuncMidLeft() {
    midLeftCheck = xMove(middleLeft, midLeftCheck);
    container.appendChild(content);
}
function mainFuncMidCenter() {
    midCenterCheck = xMove(middleCenter, midCenterCheck);
    container.appendChild(content);
}
function mainFuncMidRight() {
    midRightCheck = xMove(middleRight, midRightCheck);
    container.appendChild(content);
}
function mainFuncBtmLeft() {
    btmLeftCheck = xMove(bottomLeft, btmLeftCheck);
    container.appendChild(content);
}
function mainFuncBtmCenter() {
    btmCenterCheck = xMove(bottomCenter, btmCenterCheck);
    container.appendChild(content);
}
function mainFuncBtmRight() {
    btmRightCheck = xMove(bottomRight, btmRightCheck);
    container.appendChild(content);
}


