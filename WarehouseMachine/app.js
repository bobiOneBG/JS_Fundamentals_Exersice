function warehouseMashine(strArr) {
    let warehouse = {};

    let commandExecutor = {
        'IN': (str) => inFnctn(str),
        'OUT': (str) => out(str),
        'REPORT': () => report(),
        'INSPECTION': () => inspection()
    };

    strArr.forEach(info => {
        let command = info.split(', ')[0];
        commandExecutor[command](info);
    });

    function inFnctn(str) {
        let [brand, coffeeName, expDate, quantity] = str.split(', ').slice(1);
        if (warehouse[brand] && warehouse[brand][coffeeName]) {

            let inCoffeeDate = expDate.split('-').join('');
            let existCoffeeDate = warehouse[brand][coffeeName].expDate.split('-').join('');
            if (inCoffeeDate > existCoffeeDate) {
                warehouse[brand][coffeeName].expDate = expDate;
                warehouse[brand][coffeeName].quantity = +quantity;
            } else if (inCoffeeDate === existCoffeeDate) {
                warehouse[brand][coffeeName].quantity += +quantity;

            }
        }
        if (!warehouse[brand]) {
            warehouse[brand] = {};
            warehouse[brand][coffeeName] = {
                'expDate': expDate,
                'quantity': +quantity
            };
        }
        if (!warehouse[brand][coffeeName]) {
            warehouse[brand][coffeeName] = {
                'expDate': expDate,
                'quantity': +quantity
            };
        }

    }

    function out(str) {
        let [brand, coffeeName, expDate, quantity] = str.split(', ').slice(1);

        if (warehouse[brand] && warehouse[brand][coffeeName]) {
            let outCoffeeDate = expDate.split('-').join('');
            let existCoffeeDate = warehouse[brand][coffeeName].expDate.split('-').join('');

            if (existCoffeeDate > outCoffeeDate &&
                warehouse[brand][coffeeName].quantity >= quantity) {
                warehouse[brand][coffeeName].quantity -= quantity;
            }
        }
    }

    function report() {
        console.log('>>>>> REPORT! <<<<<');
        Object.keys(warehouse).forEach((brand) => {
            console.log(`Brand: ${brand}:`);
            Object.keys(warehouse[brand])
                .forEach((coffee) => {
                    console.log(`-> ${coffee} -> ${warehouse[brand][coffee].expDate} -> ${warehouse[brand][coffee].quantity}.`);
                });
        });
    }

    function inspection() {
        console.log('>>>>> INSPECTION! <<<<<');
        Object.keys(warehouse).sort((a, b) => {
            return a.localeCompare(b);
        }).forEach((brand) => {
            console.log(`Brand: ${brand}:`);
            Object.keys(warehouse[brand]).sort((a, b) => {
                    return warehouse[brand][b].quantity - warehouse[brand][a].quantity;
                })
                .forEach((coffee) => {
                    console.log(`-> ${coffee} -> ${warehouse[brand][coffee].expDate} -> ${warehouse[brand][coffee].quantity}.`);
                });
        });
    }
}

warehouseMashine([
    'IN, Folgers, Black Silk, 2023-03-01, 14',
    'IN, Lavazza, Crema e Gusto, 2023-05-01, 5',
    'IN, Lavazza, Crema, 2005-05-01, 5',
    'IN, Lavazza, Crema, 2006-05-01, 50',
    'IN, Batdorf & Bronson, Es, 2025-05-25, 20',
    'IN, Batdorf & Bronson, Espresso, 2035-05-25, 70',
    'IN, Batdorf & Bronson, Es, 2035-05-25, 60',
    'IN, Lavazza, Crema e Gusto, 2023-05-02, 5',
    'IN, Folgers, Black Silk, 2022-01-01, 10',
    'IN, Lavazza, Intenso, 2022-07-19, 20',
    'OUT, Dallmayr, Espresso, 2022-07-19, 5',
    'OUT, Dallmayr, Crema, 2022-07-19, 5',
    'OUT, Lavazza, Crema, 2020-01-28, 2',
    'IN, Batdorf & Bronson, Es, 2025-05-25, 10          ',
    'INSPECTION',
]);