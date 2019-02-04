function coffeeMachine(strArr) {
    let totalMoney = 0;
    strArr.forEach(line => {
        let orderPrice = 0.8;
        let order = line.split(', ');
        let insertedCoins = order[0];
        let drinkType = order[1];


        if (drinkType === 'coffee' && order[2] === 'decaf') {
            orderPrice = 0.9;

        }

        if (order[order.length - 2] === 'milk') {
            orderPrice += 0.1;

        }
        let sugarPrice = +order.slice(-1)[0];

        if (sugarPrice > 0) {
            orderPrice += 0.1;

        }

        if (insertedCoins >= orderPrice) {
            totalMoney += orderPrice;
            let change = insertedCoins - orderPrice;
            console.log(`You ordered ${drinkType}. Price: ${orderPrice.toFixed(2)}$ Change: ${change.toFixed(2)}$`);
        } else {
            let lack = orderPrice - insertedCoins;
            console.log(`Not enough money for ${drinkType}. Need ${lack.toFixed(2)}$ more.`);
        }
    });

    console.log(`Income Report: ${totalMoney.toFixed(2)}$`);
}

