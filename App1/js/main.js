function multiplyNumbers(a, b) {
    console.log(a * b);
}

function boxesAndBottles(n, k) {
    console.log(Math.ceil(n / k));
}

function leapYear(year) {
    let result = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    console.log(result ? 'yes' : 'no');
}

function circleArea(r) {
    let area = Math.PI * r * r;

    console.log(area);
    console.log(Math.round(area * 100) / 100);
}

function triangleArea(a, b, c) {
    let p = (a + b + c) / 2;
    let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    console.log(area);
}

function cone() {
    let B = Math.PI * r * r;
    let volume = B * h / 3;

    let area = B + Math.PI * r * Math.sqrt(r * r + h * h);

    console.log('volume = ' + volume);
    console.log('area = ' + area)
}

function oddEven(num) {
    if (!Number.isInteger(num))
        console.log("invalid")
    else if (num % 2 === 0)
        console.log("even")
    else
        console.log("odd")

}

function food(word) {
    switch (word) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
        case 'peach':
            console.log('fruit');
            break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'onion':
        case 'parsley':
        case 'garlic':
            console.log('vegetable');
            break;
        default:
            console.log('unknown');
    }
}

function colorfulNumbers(n) {
    let html = '<ul>\n';

    for (let i = 1; i <= n; i++) {
        let color = 'blue';
        if (i % 2 !== 0) color = 'green';
        html += `<li><span style='color:${color}'>${i}</span></li>\n`;
    }

    html += '</ul>';

    return html;
}

function chessboard(n) {
    function chessboard(size) {
        let html = '<div class="chessboard">\n';
        for (let row = 0; row < size; row++) {
            html += '  <div>\n';
            let color = (row % 2 === 0) ? 'black' : 'white';
            for (let col = 0; col < size; col++) {
                html += `    <span class="${color}"></span>\n`;
                color = (color === 'white') ? 'black' : 'white';
            }
            html += '  </div>\n';
        }
        return html + '</div>';
    }
}

function binaryLogarithm(nums) {
    for (let x of nums) {
        console.log(Math.log2(x));
    }
}
