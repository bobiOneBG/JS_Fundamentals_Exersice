function printLetters(str) {
    for (const key in str) {
        console.log(`str[${key}] -> ${str[key]}`);

    }
}

function concatenateAndReverse(arr) {
    let str = arr.join('')
        .split('')
        .reverse()
        .join('');

    console.log(str);
}

function countOccurences(target, str) {
    let counter = 0;
    while (true) {
        let startIndex = str.indexOf(target);
        if (startIndex < 0) {
            break;
        }
        counter++;
        str = str.substr(startIndex + 1);
    }
    console.log(counter);

}

function extractText(input) {
    let result = [];

    while (true) {
        let start = input.indexOf('(');
        if (start < 0)
            break;
        let end = input.indexOf(')');
        if (end < 0 || end < start)
            break;
        let sss = input.substring(start + 1, end);
        result.push(input.substring(start + 1, end));
        input = input.substring(end + 1);
    }
    console.log(result.join(', '));
}

function aggregateTable(input) {
    let arr = [];
    sum = 0;
    for (let str of input) {
        let data = str.split('|')
            .filter(e => e !== '')
            .map(e => {
                return e.trim();
            });

        arr.push(data[0]);
        sum += +data[1];
    }
    console.log(arr.join(', '));
    console.log(sum);
}

function restaurantBill(arr) {
    let purchases = arr.filter((p, i) => i % 2 === 0);
    let sum = arr
        .filter((p, i) => i % 2 !== 0)
        .map(p => +p)
        .reduce((acc, cur) => acc + cur);

    console.log(`You purchased ${purchases.join(', ')} for a total sum of ${sum}`)

}

function usernames(arr) {
    let arrResult = [];

    for (let i = 0; i < arr.length; i++) {
        let token = arr[i].split('@');
        let domains = token[1].split('.');
        let result = token[0] + '.';
        for (let str of domains) {
            result += str[0];
        }
        arrResult.push(result)
    }
    console.log(arrResult.join(', '));
}

function censorship(text, arr) {

    for (let censStr of arr) {
        let regex = new RegExp(censStr, 'g');

        text = text.replace(regex, '-'.repeat(censStr.length))
    };

    console.log(text);
}

function matchAllWords(str) {
    let regex = /[a-zA-Z0-9_]+/g;
    console.log(str.match(regex).join('|'));
}

function emailValidation(str) {
    let regex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/;
    if (regex.test(str)) {
        console.log("Valid");
    } else {
        console.log("Invalid");
    }
}

function expressionSplit(str) {
    let re = /[,;()\. ]+/;
    str.split(re).forEach(s => console.log(s));
}

function matchTheDates(text) {
    let re = /\b([\d]{1,2})-([A-Z][a-z]{2})-([\d]{4})/gm;

    //    ensure atleast one match
    let expRe = re.exec(text);
    while (expRe) {
        console.log(`${expRe[0]} (Day: ${expRe[1]}, Month: ${expRe[2]}, Year: ${expRe[3]})`)
        expRe = re.exec(text);
    }
}

function parseTheEmployeData(arr) {
    let re = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;

    for (let data of input) {
        let match = re.exec(data);
        if (match) {
            console.log(`Name: ${match[1]}`);
            console.log(`Position: ${match[3]}`);
            console.log(`Salary: ${match[2]}`);
        }
    }
}

function formFiller(username, email, phone, arr) {
    arr.forEach(l => {
        l = l.replace(/<![a-zA-Z]+!>/g, username);
        l = l.replace(/<@[a-zA-Z]+@>/g, email);
        l = l.replace(/<\+[a-zA-Z]+\+>/g, phone);

        console.log(l);
    });

}

function performMultiplications(text) {
    text = text.replace(/(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g,
        (match, num1, num2) => +(num1) * +(num2));
    console.log(text);
}

function matchMult(str) {
    let re = /(\-?\d+)\s*\*\s*(\-?\d+(?:\.\d+)?)/g;
    str = str.replace(re, (match, num1, num2) => +num1 * +num2);
    console.log(str);

}