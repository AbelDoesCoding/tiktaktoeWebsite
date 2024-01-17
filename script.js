var turnNumber = 0;

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



function xMove(quadrant, xCheck) {
    if (turnNumber == 0 && xCheck == 0) {
        document.getElementById(quadrant).src="blackX.png";
        turnNumber += 1;
        xCheck += 1;
        return xCheck;
    } else if (turnNumber == 1 && xCheck == 0) {
        document.getElementById(quadrant).src="redX.png";
        turnNumber -= 1;
        xCheck += 1;
        return xCheck;
    }
}

function mainFuncTopLeft() {
    topLeftCheck = xMove(topLeft, topLeftCheck);
}
function mainFuncTopCenter() {
    topCenterCheck = xMove(topCenter, topCenterCheck);
}
function mainFuncTopRight() {
    topRightCheck = xMove(topRight, topRightCheck);
}
function mainFuncMidLeft() {
    midLeftCheck = xMove(middleLeft, midLeftCheck);
}
function mainFuncMidCenter() {
    midCenterCheck = xMove(middleCenter, midCenterCheck);
}
function mainFuncMidRight() {
    midRightCheck = xMove(middleRight, midRightCheck);
}
function mainFuncBtmLeft() {
    btmLeftCheck = xMove(bottomLeft, btmLeftCheck);
}
function mainFuncBtmCenter() {
    btmCenterCheck = xMove(bottomCenter, btmCenterCheck);
}
function mainFuncBtmRight() {
    btmRightCheck = xMove(bottomRight, btmRightCheck);
}