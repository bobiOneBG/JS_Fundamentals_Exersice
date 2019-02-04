// Your code here!
function bitcoin(arr) {
    let totalBGN = 0;
    let bitcoinPurchase = -1;

    for (let i = 0; i < arr.length; i++) {
        let dailyShift = +arr[i];
        if ((i + 1) % 3 === 0) {
            dailyShift *= 0.7;
        }
        let dailyBGN = dailyShift * 67.51;
        totalBGN += dailyBGN;

        if (totalBGN > 11949.16 && bitcoinPurchase < 0) {
            bitcoinPurchase = i + 1;

        }
    }
    let bitcoins = parseInt(totalBGN / 11949.16);
    totalBGN -= (bitcoins * 11949.16);

    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoinPurchase > 0) {
        console.log(`Day of the first purchased bitcoin: ${bitcoinPurchase}`);
    }
    console.log(`Left money: ${totalBGN.toFixed(2)} lv.`);
}

function airPollution(map, cmnds) {
    let matrix = [];
    map.forEach((row, i) => {
        matrix.push(row.split(' ').map(n => +n));
    });

    let commandExecutor = {
        breeze: (rowIndx) => breeze(rowIndx),
        gale: (colIndx) => gale(colIndx),
        smog: (value) => smog(value)
    };

    cmnds.forEach(row => {
        let [command, index] = row.split(' ');
        index = +index;

        commandExecutor[command](index);
    });

    let pollutedArea = [];
    matrix
        .forEach((row, i) => {
            row
                .forEach((el, j) => {
                    if (el >= 50) {
                        pollutedArea.push(`[${i}-${j}]`);
                    }
                });
        });

    if (pollutedArea.length > 0) {
        console.log(`Polluted areas: ${pollutedArea.join(', ')}`);

    } else {
        console.log('No polluted areas');
    }


    function breeze(rowIndx) {
        matrix[rowIndx].forEach((row, i) => {
            matrix[rowIndx][i] = Math.max(0, matrix[rowIndx][i] - 15);
        });
    }

    function gale(colIndx) {
        matrix.forEach((row) => {
            row[colIndx] = Math.max(0, row[colIndx] - 20);
        });
    }

    function smog(value) {
        matrix.forEach((row, i) => {
            row.forEach((col, j) => {
                matrix[i][j] += value;
            });
        });
    }

}
//      judje   88/10
function surveyParser(text) {
    let svgRe = /<svg>((.|\n|)+?)<\/svg>/g;
    let catRe = /<cat><text>(.*|\n)?\[((.|\n)+?)]<\/text><\/cat>\s*<cat>(.*|\n)?<\/cat>/;
    let digitRe = /<g><val>([1-9]|10)<\/val>([0-9]+)<\/g>/g;

    if (!svgRe.test(text)) {
        console.log('No survey found');
    } else if (!catRe.test(text)) {
        console.log('Invalid format');
    } else {
        let catRe = /<cat><text>(.*|\n)?\[((.|\n)+?)]<\/text><\/cat>\s*<cat>(.*|\n)?<\/cat>/;
        let label = catRe.exec(text)[2];

        let votes = 0;
        let sumOfRatings = 0;

        let values = digitRe.exec(text);

        while (values) {
            let rating = values[1];
            let votesCount = +values[2];

            votes += votesCount;
            sumOfRatings += votesCount * rating;

            values = digitRe.exec(text);
        }
        let avrg = +((sumOfRatings / votes).toFixed(2));
        console.log(`${label}: ${avrg}`);
    }
}
//      judje  62/100  **runtime Error
function gameOfEpicness(arrObj, fightingMatrix) {

    let kingdoms = {};

    arrObj.forEach((obj) => {
        if (!kingdoms[obj.kingdom]) {
            kingdoms[obj.kingdom] = {};
        }
        if (!kingdoms[obj.kingdom][obj.general]) {
            kingdoms[obj.kingdom][obj.general] = 0;
        }
        kingdoms[obj.kingdom][obj.general] += obj.army;
    });
    let stats = {};

    fightingMatrix.forEach((fight) => {
        let attackKingdom = fight[0];
        let attackGeneral = fight[1];
        let defendKingdom = fight[2];
        let defendGeneral = fight[3];

        fillStats(attackKingdom, attackGeneral);
        fillStats(defendKingdom, defendGeneral);

        if (kingdoms[attackKingdom] !== kingdoms[defendKingdom]) {
            if (kingdoms[attackKingdom][attackGeneral] > kingdoms[defendKingdom][defendGeneral]) {
                kingdoms[attackKingdom][attackGeneral] = parseInt(kingdoms[attackKingdom][attackGeneral] * 1.1);
                kingdoms[defendKingdom][defendGeneral] = parseInt(kingdoms[defendKingdom][defendGeneral] * 0.9);

                stats[attackKingdom][attackGeneral].wins += 1;
                stats[defendKingdom][defendGeneral].loss += 1;
                stats[attackKingdom].win += 1;
                stats[defendKingdom].lose += 1;

            } else if (kingdoms[attackKingdom][attackGeneral] < kingdoms[defendKingdom][defendGeneral]) {
                kingdoms[defendKingdom][defendGeneral] = parseInt(kingdoms[defendKingdom][defendGeneral] * 1.1);
                kingdoms[attackKingdom][attackGeneral] = parseInt(kingdoms[attackKingdom][attackGeneral] * 0.9);

                stats[attackKingdom][attackGeneral].loss += 1;
                stats[defendKingdom][defendGeneral].wins += 1;
                stats[attackKingdom].lose += 1;
                stats[defendKingdom].win += 1;

            }
        }
    });
    let rslt = Object.keys(stats).sort((a, b) => {
        return ((stats[b].win) - (stats[a].win)) || (stats[a].lose - stats[b].lose) || (a > b);

    });
    let winner = rslt[0];

    console.log(`Winner: ${winner}`);

    Object.keys(kingdoms[winner])
        .sort((a, b) => {
            return kingdoms[winner][b] - kingdoms[winner][a];
        }).forEach((g) => {
            console.log(`/\\general: ${g}`);
            console.log(`---army: ${kingdoms[winner][g]}`);
            console.log(`---wins: ${stats[winner][g].wins}`);
            console.log(`---losses: ${stats[winner][g].loss}`);

        });

    function fillStats(kingdom, general) {
        if (!stats[kingdom]) {
            stats[kingdom] = {
                win: 0,
                lose: 0
            };
        }
        if (!stats[kingdom][general]) {
            stats[kingdom][general] = {
                'wins': 0,
                'loss': 0
            };
        }
    }

}