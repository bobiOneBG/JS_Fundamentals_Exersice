// Your code here!
function kompot(input) {
    let fruits = input
        .map((line) => {
            return line.split(/\s+/);

        }).reduce((acc, cur) => {
            const fruitName = cur[0];
            const weight = +cur[1];

            if (!acc[fruitName]) {
                acc[fruitName] = 0;
            }
            acc[fruitName] += weight;

            return acc;
        }, {
                cherry: 0,
                plum: 0,
                peach: 0
            });
    let rakiyaFruits = Object.keys(fruits).filter(f => (f !== 'cherry' && f !== 'plum' && f !== 'peach'));

    let rakiyaQuantity = rakiyaFruits.reduce((acc, cur) => {
        return acc + fruits[cur];
    }, 0);

    let cherryCompot = parseInt(((fruits.cherry / 9) / 25) * 1000);
    let plumCompot = parseInt(((fruits.plum / 20) / 10) * 1000);
    let peachCompot = parseInt(((fruits.peach / 140) / 2.5) * 1000);
    let rakiya = ((rakiyaQuantity * 0.2).toFixed(2));

    console.log(`Cherry kompots: ${cherryCompot}`);
    console.log(`Peach kompots: ${peachCompot}`);
    console.log(`Plum kompots: ${plumCompot}`);
    console.log(`Rakiya liters: ${rakiya}`);
}

function f1Race(input) {
    let race = [];
    let pos = 1;
    input
        .shift()
        .split(' ')
        .forEach((plt) => {
            race.push(plt);
        });

    input.forEach((line) => {
        let [action, pilot] = line.split(' ');

        let index = race.indexOf(pilot);

        if (action === 'Join') {
            if (index === -1) {
                race.push(pilot);
            }
        } else if (action === 'Crash') {
            if (index > -1) {
                race.splice(index, 1);
            }
        } else if (action === 'Pit') {
            if (index > -1) {
                if (index < race.length - 1) {

                    let temp = race.splice(index, 1);
                    race.splice(index + 1, 0, temp[0]);
                }
            }
        } else if (action === 'Overtake') {
            if (index > -1) {
                if (index > 0) {
                    let temp = race.splice(index, 1);
                    race.splice(index - 1, 0, temp[0]);
                }
            }
        }
    });

    console.log(race.join(' ~ '));
}

function dnaEx(input) {
    let regex = /([a-z!@#$?]+)=(\d+)--(\d+)<<([a-z]+)/;
    let obj = {};
    input.forEach((line) => {
        if (line === 'Stop!') {
            Object.keys(obj)
                .sort((a, b) => {
                    return obj[b] - obj[a];
                }).forEach((el => {
                    console.log(`${el} has genome size of ${obj[el]}`);
                }));
        }
        let match = regex.exec(line);
        if (match) {
            let lngth = match[1].match(/[a-z]+/g) ? match[1].match(/[a-z]+/g).join('').length : 0;
            if (lngth === +match[2]) {
                if (!obj[match[4]]) {
                    obj[match[4]] = 0;
                }

                obj[match[4]] += +match[3];
            }
        }
    });
}

function f1Championship(input) {
    let teams = input
        .map((line) => {
            return line.split(/\s+->\s+/g);
        })
        .reduce((acc, cur) => {
            if (!acc[cur[0]]) {
                acc[cur[0]] = {};
                acc[cur[0]].overal = 0;
            }

            if (!acc[cur[0]][cur[1]]) {
                acc[cur[0]][cur[1]] = 0;
            }

            acc[cur[0]][cur[1]] += +cur[2];
            acc[cur[0]].overal += +cur[2];
            return acc;
        }, {});

    let sortedTeams = Object.keys(teams).sort((a, b) => {
        return teams[b].overal - teams[a].overal;
    });

    sortedTeams.splice(0, 3).forEach((team) => {
        console.log(`${team}: ${teams[team].overal}`);

        Object.keys(teams[team])
            .filter(p => p !== 'overal')
            .sort((a, b) => {
                return teams[team][b] - teams[team][a];
            })
            .forEach((pilot) => {
                console.log(`-- ${pilot} -> ${teams[team][pilot]}`);
            });
    });

}