// Your code here!
function helloJS(name) {
    console.log(`Hello, ${name}, I am JavaScript!`)
}

function areaAndPerimeter(a, b) {
    console.log(a * b);
    console.log(2 * a + 2 * b)

}

function distanceOverTime(input) {
    v1 = input[0];
    v2 = input[1];
    t = input[2] / 3600;
    let diff = (Math.abs(v1 - v2) * t) * 1000;
    console.log(diff);
}

function distanceIn3D(input) {
    x0 = input[0];
    y0 = input[1];
    z0 = input[2];
    x1 = input[3];
    y1 = input[4];
    z1 = input[5];

    let distance = Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2) + Math.pow(z0 - z1, 2));

    console.log(distance);
}

function gradsToRadians(grad) {

    let degrees = 0.9 * grad;

    degrees %= 360;

    if (degrees < 0) {
        degrees = 360 + degrees;
    }

    console.log(degrees);
}

function compoundInterest(input) {

    let P = input[0];
    let i = input[1];
    let n = input[2];
    let t = input[3];

    let F = P * Math.pow((1 + (i / 100) / (12 / n)), (12 / n) * t);

    console.log(Math.round(F * 100) / 100);

}

function rounding(input) {
    let nmbr = +input[0];

    let precision = +input[1];

    if (precision > 15) {
        precision = 15;
    }

    console.log(+nmbr.toFixed(precision));
}

function imperialUnits(a) {

    let feet = parseInt(a / 12);
    let inches = a % 12;

    console.log(feet + "\'-" + inches + "\"");
}

function nowPlaying([songName, name, time]) {
    console.log(`Now Playing: ${name} - ${songName} [${time}]`);
}

function composeTag([name, tag]) {
    console.log(`<img src="${name}" alt="${tag}">`);
}

function binaryToDecimal(binary) {
    var digit = parseInt(+binary, 2);
    console.log(digit)
}

function assignProperties(input) {
    let a = input[0];
    let b = input[1];
    let c = input[2];
    let d = input[3];
    let e = input[4];
    let f = input[5];

    let objct = {
        [a]: b,
        [c]: d,
        [e]: f
    }

    console.log(objct);

}

function lastMonth([day, month, year]) {
   
    let date = new Date(year, month-1, 0);

    let days = date.getDate();

    console.log(days);
}

function biggestOfThreeNumbers([a, b, c]) {
    let maxNum = Math.max(a, b, c);
    console.log(maxNum);
}

function pointInRectangle([x, y, xMin, xMax, yMin, yMax]) {
    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
        console.log('inside');
    } else {
        console.log('outside');
    }
}

function oddNumbersOneToN(n) {
    for (let i = 1; i <= n; i += 2) {

        console.log(i);
    }
}

function triangleOfDollars(n) {
    for (let i = 1; i <= n; i++) {

        let line = '';
        for (let j = 0; j < i; j++) {

            line += '$';
        }

        console.log(line);
    }
}

function moviePrices([movieTitle, dayOfWeek]) {
    let title = movieTitle.toString().toLowerCase();
    let day = dayOfWeek.toString().toLowerCase();
    let price = '';

    switch (title) {
        case 'the godfather':
            switch (day) {
                case 'monday':
                    price = 12;
                    break;
                case 'tuesday':
                    price = 10;
                    break;
                case 'wednesday':
                    price = 15;
                    break;
                case 'thursday':
                    price = 12.50;
                    break;
                case 'friday':
                    price = 15;
                    break;
                case 'saturday':
                    price = 25;
                    break;
                case 'sunday':
                    price = 30;
                    break;

                default:
                    console.log('error');
                    break;
            }
            break;
        case 'schindler\'s list':
            switch (day) {
                case 'monday':
                    price = 8.50;
                    break;
                case 'tuesday':
                    price = 8.50;
                    break;
                case 'wednesday':
                    price = 8.50;
                    break;
                case 'thursday':
                    price = 8.50;
                    break;
                case 'friday':
                    price = 8.50;
                    break;
                case 'saturday':
                    price = 15;
                    break;
                case 'sunday':
                    price = 15;
                    break;

                default:
                    console.log('error');
                    break;
            }
            break;
        case 'casablanca':
            switch (day) {
                case 'monday':
                    price = 8;
                    break;
                case 'tuesday':
                    price = 8;
                    break;
                case 'wednesday':
                    price = 8;
                    break;
                case 'thursday':
                    price = 8;
                    break;
                case 'friday':
                    price = 8;
                    break;
                case 'saturday':
                    price = 10;
                    break;
                case 'sunday':
                    price = 10;
                    break;

                default:
                    console.log('error');
                    break;
            }
            break;
        case 'the wizard of oz':
            switch (day) {
                case 'monday':
                    price = 10;
                    break;
                case 'tuesday':
                    price = 10;
                    break;
                case 'wednesday':
                    price = 10;
                    break;
                case 'thursday':
                    price = 10;
                    break;
                case 'friday':
                    price = 10;
                    break;
                case 'saturday':
                    price = 15;
                    break;
                case 'sunday':
                    price = 15;
                    break;

                default:
                    console.log('error');
                    break;
            }
            break;

        default:
            console.log('error');
            break;
    }

    console.log(price);
}

function quadraticequation(a, b, c) {
    let d = b * b - 4 * a * c;

    if (d < 0) {
        console.log('No');

    } else if (d === 0) {
        console.log(-b / (2 * a));

    } else {
        console.log(-b / 2 / a - Math.pow(Math.pow(b, 2) - 4 * a * c, 0.5) / 2 / a);
        console.log(-b / 2 / a + Math.pow(Math.pow(b, 2) - 4 * a * c, 0.5) / 2 / a);
    }
}

