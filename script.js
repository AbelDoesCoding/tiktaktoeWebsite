var turnNumber = 0;

/* 
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
var btmRightCheck = 0; */

var gameBoard = {
    topLeft: ["topleft", 0],
    topCenter: ["topCenter", 0],
    topRight: ["topRight", 0],
    middleLeft: ["middleleft", 0],
    middleCenter: ["middleCenter", 0],
    middleRight: ["middleRight", 0],
    bottomLeft: ["bottomLeft", 0],
    bottomCenter: ["bottomCenter", 0],
    bottomRight: ["bottomRight", 0],
}

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

function mainFuncTopLeft() {
    gameBoard.topLeft[1] = xMove("topLeft", gameBoard.topLeft[1]);
    container.appendChild(content);
}
function mainFuncTopCenter() {
    gameBoard.topCenter[1] = xMove("topCenter", gameBoard.topCenter[1]);
    container.appendChild(content);
}
function mainFuncTopRight() {
    gameBoard.topRight[1] = xMove("topRight",  gameBoard.topRight[1]);
    container.appendChild(content);
}
function mainFuncMidLeft() {
    gameBoard.middleLeft[1] = xMove("middleLeft", gameBoard.middleLeft[1]);
    container.appendChild(content);
}
function mainFuncMidCenter() {
    gameBoard.middleCenter[1] = xMove("middleCenter", gameBoard.middleCenter[1]);
    container.appendChild(content);
}
function mainFuncMidRight() {
    gameBoard.middleRight[1] = xMove("middleRight", gameBoard.middleRight[1]);
    container.appendChild(content);
}
function mainFuncBtmLeft() {
    gameBoard.bottomLeft[1] = xMove("bottomLeft", gameBoard.bottomLeft[1]);
    container.appendChild(content);
}
function mainFuncBtmCenter() {
    gameBoard.bottomCenter[1] = xMove("bottomCenter", gameBoard.bottomCenter[1]);
    container.appendChild(content);
}
function mainFuncBtmRight() {
    gameBoard.bottomRight[1] = xMove("bottomRight", gameBoard.bottomRight[1]);
    container.appendChild(content);
}


