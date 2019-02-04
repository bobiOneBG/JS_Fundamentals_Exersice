// Your code here!
function isInVolume(input) {
    for (let i = 0; i < input.length; i += 3) {
        let x = input[i];
        let y = input[i + 1];
        let z = input[i + 2];

        if (isInside(x, y, z)) {
            console.log("inside");
        } else {
            console.log("outside");
        }
    }

    function isInside(x, y, z) {
        let x1 = 10;
        let x2 = 50;
        let y1 = 20;
        let y2 = 80;
        let z1 = 15;
        let z2 = 50;

        if (x >= x1 && x <= x2) {
            if (y >= y1 && y <= y2) {
                if (z >= z1 && z <= z2) {
                    return true;
                }
            }
        }

        return false;
    }
}

function roadRadar(input) {
    let zone = input[1];

    function getLimit(zone) {
        switch (zone) {
            case 'city':
                return 50;
            case 'residential':
                return 20;
            case 'interstate':
                return 90;
            case 'motorway':
                return 130;

            default:
                break;
        }
    }
    let speed = +input[0];
    let limit = getLimit(zone);

    function getInfraction(speed, limit) {
        let overSpeed = speed - limit;

        if (overSpeed <= 0) {
            return '';
        } else {
            if (overSpeed <= 20) {
                return 'speeding';
            } else if (overSpeed <= 40) {
                return 'excessive speeding';
            } else {
                return 'reckless driving';
            }
        }
    }

    console.log(getInfraction(speed, limit))
}

function templateFormat(input) {
    console.log(`<?xml version="1.0" encoding="UTF-8"?>
    <quiz>`)

    for (let i = 0; i < input.length; i += 2) {
        let question = input[i];
        let answer = input[i + 1];

        console.log(`<question>
        ${question}
      </question>`);

        console.log(`<answer>
    ${answer}
  </answer>`);
    }

    console.log(`</quiz>`);
}

function cookingByNumbers(input) {
    let chop = () => inpurNumber / 2;
    let dice = () => Math.sqrt(inpurNumber);
    let spice = () => inpurNumber + 1;
    let bake = () => inpurNumber * 3;
    let fillet = () => inpurNumber * 0.8;

    let inpurNumber = +input[0];

    for (let i = 1; i < input.length; i++) {
        let operation = input[i];
        switch (operation) {
            case 'chop':
                inpurNumber = chop();
                break;
            case 'dice':
                inpurNumber = dice(inpurNumber);
                break;
            case 'spice':
                inpurNumber = spice(inpurNumber);
                break;
            case 'bake':
                inpurNumber = bake(inpurNumber);
                break;
            case 'fillet':
                inpurNumber = fillet(inpurNumber);
                break;

            default:
                break;
        }

        console.log(inpurNumber);
    }
}

function modifyAverage(input) {
    let nmbrs = input.toString();

    let avrg = (nmbrs) => {
        let sum = 0;
        for (let nmbr of nmbrs) {
            sum += +nmbr;
        }

        return sum / nmbrs.length;
    }

    while (avrg(nmbrs) <= 5) {
        nmbrs += '9';
    }
    console.log(nmbrs);
}

function validityChecker(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];

    /*
     d=√(x2−x1) ^ 2+(y2−y1) ^ 2
     */

    let d = Math.sqrt((x1 - 0) ** 2 + (y1 - 0) ** 2);
    if (isInteger(d)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    d = Math.sqrt((x2 - 0) ** 2 + (y2 - 0) ** 2);
    if (isInteger(d)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    d = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    if (isInteger(d)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }

    function isInteger(x) {
        return parseInt(x, 10) === x;
    }
}

function treasureLocator(input) {
    let tuvalu = (x, y) => {
        return x >= 1 && x <= 3 && y >= 1 && y <= 3;
    }

    let tokelau = (x, y) => {
        return x >= 8 && x <= 9 && y >= 0 && y <= 1;
    }

    let samoa = (x, y) => {
        return x >= 5 && x <= 7 && y >= 3 && y <= 6;
    }

    let tonga = (x, y) => {
        return x >= 0 && x <= 2 && y >= 6 && y <= 8;
    }

    let cook = (x, y) => {
        return x >= 4 && x <= 9 && y >= 7 && y <= 8;
    }

    let str = '';

    for (let i = 0; i < input.length; i += 2) {
        let x = input[i];
        let y = input[i + 1];

        if (tuvalu(x, y)) {
            str = 'Tuvalu';

        } else if (tokelau(x, y)) {
            str = 'Tokelau';

        } else if (samoa(x, y)) {
            str = 'Samoa';

        } else if (tonga(x, y)) {
            str = 'Tonga';

        } else if (cook(x, y)) {
            str = 'Cook';

        } else {
            str = 'On the bottom of the ocean';
        }

        console.log(str);
    }
}

function tripLength(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];
    let x3 = input[4];
    let y3 = input[5];

    let dist = (xf, yf, xs, ys) => Math.sqrt(Math.pow(xf - xs, 2) + Math.pow(yf - ys, 2));

    let d123 = dist(x1, y1, x2, y2) + dist(x2, y2, x3, y3);
    let d132 = dist(x1, y1, x3, y3) + dist(x3, y3, x2, y2);
    let d213 = dist(x2, y2, x1, y1) + dist(x1, y1, x3, y3);

    let shortD = Math.min(d123, d132, d213);

    if (shortD == d123) {
        console.log(`1->2->3: ${shortD}`);
        return;
    }

    if (shortD == d132) {
        console.log(`1->3->2: ${shortD}`);
        return;
    }

    if (shortD == d213) {
        console.log(`2->1->3: ${shortD}`);
        return;
    }

}

function DNAHelix(num) {

    let arr = ['AT', 'CG', 'TT', 'AG', 'GG'];
    let starArr = [2, 1, 0, 1];
    let dashArr = [0, 2, 4, 2];
    let s = '*';
    let d = '-';
    for (let i = 0; i < num; i++) {
        let starCnt = i % 4;
        let dnaIndx = i % 5;
        let dashCnt = i % 4;
        console.log(`${s.repeat(starArr[starCnt])}${arr[dnaIndx][0]}${d.repeat(dashArr[dashCnt])}${arr[dnaIndx][1]}${s.repeat(starArr[starCnt])}`);
    }
}

