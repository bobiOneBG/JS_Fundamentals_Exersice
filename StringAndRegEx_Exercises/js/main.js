function splitAString(str, dlmtr) {
    let rslt = str.split(dlmtr);

    console.log(rslt.join('\n'));
}

function repeatAString(str, num) {
    console.log(str.repeat(num));
}

function startsWith(text, str) {
    let rslt;
    if (text.startsWith(str)) {
        rslt = true;

    } else {
        rslt = false;
    }

    console.log(rslt);
}

function endsWith(text, str) {
    let rslt;
    if (text.endsWith(str)) {
        rslt = true;

    } else {
        rslt = false;
    }

    console.log(rslt);
}

function capitalizeWords(str) {
    let arr = str
        .split(' ')
        .map((s) => {
            return s.toLowerCase();
        })
        .map((s) => {
            return s.charAt(0).toUpperCase() + s.substring(1);
        });

    console.log(arr.join(' '));
}

function captureTheNumbers(arr) {
    let re = /\d+/g;

    let str = arr.toString();
    let rslt = str.match(re);

    console.log(rslt.join(' '));
}

function findVariableNames(sentnc) {
    let re = /\b_[a-zA-Z0-9]+\b/g;

    let matches = sentnc
        .match(re)
        .map(str => str.substr(1));

    console.log(matches.join());
}

function wordOccurences(text, word) {
    let re = new RegExp('\\b' + word + '\\b', 'gi');

    let matches = text.match(re);

    console.log(matches !== null ? matches.length : 0);
}

function extractLinks(arr) {
    let text = arr.toString();

    let re = /www\.([A-Za-z0-9-]+)(\.[a-z]+){1,}/g;

    let matches = text.match(re);

    console.log(matches !== null ? matches.join('\n') : '');
}

function secretData(input) {
    input
        .forEach(l => console.log(l
            .replace(
                /(\*[A-Z][a-zA-Z]*)(?= |\t|$)|(\+[0-9-]{10})(?= |\t|$)|(![0-9a-zA-Z]+)(?= |\t|$)|(_[0-9a-zA-Z]+)(?= |\t|$)/g,
                (m) => '|'.repeat(m.length))));
}