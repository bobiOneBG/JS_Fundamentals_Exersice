function townsToJSON(townData) {
    townData = townData.slice(1).filter(str => str !== '');
    let towns = [];

    for (let town of townData) {
        town = town.split(/\s*\|\s*/).filter(str => str !== '');

        let townObj = {
            Town: town[0],
            Latitude: +town[1],
            Longitude: +town[2]
        };

        towns.push(townObj);
    }

    console.log(JSON.stringify(towns));
}

function scoreToHTML(jsonStr) {
    let parsedArr = JSON.parse(jsonStr);
    let rslt = `<table>
<tr><th>name</th><th>score</th></tr>\n`;
    for (let obj of parsedArr) {
        rslt += `\t<tr><td>${escapeChars(obj.name + '')}</td><td>${escapeChars(obj.score + '')}</td></tr>\n`;

    }

    rslt += `</table>`;

    console.log(rslt);

    function escapeChars(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

function jsonToHtml(jsonStr) {
    let parsedArr = JSON.parse(jsonStr);

    let str = `<table>\n\t<tr>`;

    let keys = Object.keys(parsedArr[0]);

    for (const key of keys) {
        str += `<th>${key}</th>`;

    }
    str += `</tr>\n`;

    for (let obj of parsedArr) {
        str += `\t<tr>`;

        for (const [k, v] of Object.entries(obj)) {
            str += `<td>${escapeChars(v + '')}</td>`;
        }

        str += '</tr>\n';
    }

    str += '</table>';
    console.log(str);


    function escapeChars(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

function sumByTown(arr) {
    let towns = {};
    for (let i = 0; i < arr.length; i += 2) {
        if (towns.hasOwnProperty(arr[i])) {
            towns[arr[i]] += +arr[i + 1];

        } else {
            towns[arr[i]] = +arr[i + 1];
        }
    }

    console.log(JSON.stringify(towns));
}

function countWordsInText(strArr) {
    let words = {};

    let arr = strArr[0].split(/[^a-zA-Z0-9]+/).filter(s => s !== '');

    for (const word of arr) {
        if (!words.hasOwnProperty(word)) {
            words[word] = 1;

        } else {
            words[word] += 1;
        }
    }

    console.log(JSON.stringify(words));
}

function countWordsWithMap(arr) {
    let myMap = new Map();
    for (let str of arr) {
        let currentWord = str.split(/[^0-9a-zA-Z_]+/)
            .filter(w => w != '');
        for (let word of currentWord) {
            word = word.toLowerCase();
            if (myMap.has(word)) {
                myMap.set(word, (myMap.get(word) + 1));
            } else {
                myMap.set(word, 1);
            }
        }
    }
    let sortedKeys = Array.from(myMap.keys()).sort((a, b) => a.localeCompare(b));
    for (let key of sortedKeys) {
        console.log("'" + key + "'" + ' -> ' + myMap.get(key) + ' times');
    }
}

function populationInTowns(arr) {
    let towns = {};
    for (const townData of arr) {

        let town = townData.split(' <-> ')[0];
        let population = townData.split(' <-> ')[1];

        if (!towns.hasOwnProperty(town)) {
            towns[town] = +population;
        } else {
            towns[town] += +population;
        }
    }

    for (let obj in towns) {
        console.log(obj + ' : ' + towns[obj]);
    }
}

function cictyMarkets(arr) {
    let towns = {};
    for (let line of arr) {
        let data = line.split(/\s->\s|\s:\s/).filter(l => l !== '');
        let product = {};
        let town = data[0];
        let prdctName = data[1];
        product[prdctName] = {
            income: +data[2] * +data[3]
        };

        if (!towns.hasOwnProperty(town)) {
            towns[town] = product;
        } else {
            if (!towns[town].hasOwnProperty(prdctName)) {
                towns[town][prdctName] = product[prdctName];
            } else {
                towns[town][prdctName].income += product[prdctName].income;
            }
        }
    }

    for (let key in towns) {
        console.log(`Town - ${key}`);
        for (const town in towns[key]) {
            console.log(`$$$${town} : ${towns[key][town].income}`);
        }
    }
}

function lowestPricesInCities(arr) {
    let products = {};

    for (let line of arr) {
        let data = line.split(' | ');
        let townName = data[0];
        let productName = data[1];
        let price = +data[2];

        let town = {};
        town[townName] = {
            price: price
        };

        if (!products.hasOwnProperty(productName)) {
            products[productName] = town;
        } else {
            if (!products[productName].hasOwnProperty(townName)) {
                products[productName][townName] = town[townName];
            } else {
                products[productName][townName].price =
                    Math.min(products[productName][townName].price, town.price);
            }
        }
    }

    for (const key in products) {
        if (products.hasOwnProperty(key)) {
            let sortedObj = sortObject(products[key]);

            let v = sortedObj[0];
            console.log(`${key} -> ${sortedObj[0].value.price} (${sortedObj[0].key})`);

        }
    }

    function sortObject(obj) {
        var arr = [];
        var prop;
        for (prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                arr.push({
                    'key': prop,
                    'value': obj[prop]
                });
            }
        }
        arr.sort(function (a, b) {
            return a.value - b.value;
        });
        return arr; // returns array
    }
}