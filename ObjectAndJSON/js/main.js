// Your code here!
function heroicInventory(input) {
    let heroes = [];

    for (let line of input) {
        let heroData = line.split(' / ');
        let heroName = heroData[0];
        let heroLevel = +heroData[1];

        let heroItems = [];
        if (heroData.length > 2) {
            heroItems = heroData[2].split(', ');

        }
        let hero = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        };
        heroes.push(hero);
    }
    console.log(JSON.stringify(heroes));

}

function JSONsTable(input) {
    let rslt = `<table>\n`;

    for (let line of input) {
        let obj = JSON.parse(line);
        rslt += `\t<tr>\n`;
        rslt += `\t\t<td>${escapeChars(obj.name)}</td>\n`;
        rslt += `\t\t<td>${escapeChars(obj.position)}</td>\n`;
        rslt += `\t\t<td>${obj.salary}</td>\n`;
        rslt += `\t</tr>\n`;
    }

    rslt += `</table>`;

    console.log(rslt);

    function escapeChars(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

function cappyJuice(input) {
    let juices = {};
    let bottles = {};

    for (let line of input) {
        line = line.split(' => ');
        let juiceName = line[0];
        let quantity = +line[1];


        if (!juices.hasOwnProperty(juiceName)) {
            juices[juiceName] = 0;

        }

        juices[juiceName] += quantity;

        if (juices[juiceName] >= 1000) {
            bottles[juiceName] = parseInt(juices[juiceName] / 1000);
        }
    }

    for (const key of Object.keys(bottles)) {

        console.log(`${key} => ${bottles[key]}`);

    }

}

function storeCatalog(input) {
    let store = {};

    for (const line of input) {
        let ch = line[0];
        let data = line.split(' : ');
        let prdctName = data[0];
        let prdctPrice = +data[1];


        if (!store.hasOwnProperty(ch)) {
            store[ch] = {};

        }
        store[ch][prdctName] = prdctPrice;

    }

    let storeKeys = Object.keys(store).sort((a, b) => a.localeCompare(b));
    for (const key of storeKeys) {
        if (store.hasOwnProperty(key)) {
            const element = store[key];
            let sortedKeys = Object.keys(element).sort((a, b) => a.localeCompare(b, 'en', {
                sensitivity: 'base'
            }));

            console.log(key);
            for (const el of sortedKeys) {
                console.log(`  ${el}: ${store[key][el]}`);
            }
        }
    }
}

function autoEngineeringCompany(input) {
    let cars = {};

    for (let carData of input) {
        carData = carData.split(' | ');
        let carBrand = carData[0];
        let carModel = carData[1];
        let producedCars = +carData[2];

        if (!cars.hasOwnProperty(carBrand)) {
            cars[carBrand] = {};

        }
        if (!cars[carBrand].hasOwnProperty(carModel)) {
            cars[carBrand][carModel] = 0;

        }
        cars[carBrand][carModel] += producedCars;

    }

    for (const key in cars) {
        console.log(key);
        const element = cars[key];
        for (const mdl in element) {
            const count = element[mdl];
            console.log(`###${mdl} -> ${count}`);
        }
    }

}

function systemComponents(input) {
    let components = {};
    for (let data of input) {
        data = data.split(' | ');

        let systemName = data[0];
        let componentName = data[1];
        let subcomponentName = data[2];

        if (!components.hasOwnProperty(systemName)) {
            components[systemName] = {};
        }
        if (!components[systemName].hasOwnProperty(componentName)) {
            components[systemName][componentName] = [];

        }
        components[systemName][componentName].push(subcomponentName);

    }
    let sortedSystems = Object.keys(components).sort((a, b) => {
        let countA = Object.keys(components[a]).length;
        let countB = Object.keys(components[b]).length;
        if (countA > countB) return -1; //descending order
        if (countA < countB) return 1;
        if (a < b) return -1; //ascending order
        if (a > b) return 1;
        return 0;
    });

    for (const key of sortedSystems) {
        console.log(key);
        let ssss = components[key];

        let dddd = Object.keys(ssss).sort((a, b) => {
            let fr = Object.keys(ssss[a]).length;
            let sc = Object.keys(ssss[b]).length;

            if (fr > sc) return -1; //descending order
            if (fr < sc) return 1;
            return 0;
        });
        for (const it of dddd) {
            let sdsd = components[key][it];
            console.log(`|||${it}`);
            for (let i = 0; i < sdsd.length; i++) {
                console.log(`||||||${sdsd[i]}`);

            }
        }
    }
}

function usernames(input) {
    let usernames = {};

    for (let username of input) {
        if (!usernames.hasOwnProperty(username)) {

            usernames[username] = null;
        }
    }

    let sortedUsernames = Object.keys(usernames).sort((a, b) => {
        if (a.length < b.length) return -1; //ascending order
        if (a.length > b.length) return 1;
        if (a < b) return -1; //ascending order
        if (a > b) return 1;
        return 0;
    });
    console.log(sortedUsernames.join('\n'));
}

function uniqueSequences(input) {
    let arrays = [];
    for (let arr of input) {
        arr = JSON.parse(arr).sort((a, b) => {
            return b - a;
        });

        let isUnique = true;
        for (let i = 0; i < arrays.length; i++) {
            let hasEquals = arrays[i].length === arr.length && arrays[i].every((value, index) => value === arr[index]);
            if (hasEquals) {
                isUnique = false;
            }
        }

        if (isUnique) {
            arrays.push(arr);

        }
    }

    arrays
        .sort((a, b) => a.length - b.length)
        .forEach(arr => {
            console.log(`[${arr.join(', ')}]`);
        });

}

function arenaTier(input) {
    let gldData = input
        .map((info) => {
            return info.split(/\s+->\s+/);
        })
        .filter((ln) => ln.length === 3)
        .reduce((acc, cur) => {
            const gldName = cur[0];
            const technique = cur[1];
            const skill = +cur[2];
            let ssss = acc[gldName];

            if (!acc[gldName]) {
                acc[gldName] = {};

                if (!acc[gldName][technique]) {
                    acc[gldName][technique] = skill;
                    acc[gldName].overalSkill = skill;

                }
            } else if (!acc[gldName][technique]) {
                acc[gldName][technique] = skill;
                acc[gldName].overalSkill += skill;

            } else if (acc[gldName][technique]) {
                if (acc[gldName][technique] < skill) {
                    acc[gldName].overalSkill += skill - acc[gldName][technique];

                }
                acc[gldName][technique] = skill;

            }
            return acc;

        }, {});


    let battleData = input
        .map((line) => {
            return line.split(/\svs\s/);
        })
        .filter(ln => ln.length === 2)
        .forEach((arr) => {
            if (gldData[arr[0]] && gldData[arr[1]] && gldData[arr[0]] !== null && gldData[arr[1]] !== null) {
                let frst = Object.keys(gldData[arr[0]]).filter(p => p !== 'overalSkill');
                let scnd = Object.keys(gldData[arr[1]]).filter(p => p !== 'overalSkill');
                let hasCommonTechnique = frst
                    .some(r => scnd.indexOf(r) >= 0);

                if (hasCommonTechnique) {
                    const looser =
                        gldData[arr[0]].overalSkill < gldData[arr[1]].overalSkill ?
                            arr[0] : arr[1];

                    gldData[looser] = null;
                }
            }
        });

    Object.keys(gldData)
        .filter(gl => gldData[gl] !== null)
        .sort((a, b) => {
            return gldData[b].overalSkill - gldData[a].overalSkill || a - b;
        })
        .forEach((name) => {
            console.log(`${name}: ${gldData[name].overalSkill} skill`);

            Object.keys(gldData[name])
                .filter((tech) => tech !== 'overalSkill')
                .sort((a, b) => {
                    return gldData[name][b] - gldData[name][a] || a > b;
                })
                .forEach(technique => {
                    console.log(`- ${technique} <!> ${gldData[name][technique]}`);
                });
        });

}