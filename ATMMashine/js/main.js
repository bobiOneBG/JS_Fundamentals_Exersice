function atmMashine(matrix) {

    let atm = {};
    let atmBalance = 0;

    matrix.forEach(arr => {
        if (arr.length > 2) {
            insert(arr);

        } else if (arr.length === 2) {
            let currBalance = arr[0];
            let toWithdraw = arr[1];

            if (currBalance < toWithdraw) {
                console.log(`Not enough money in your account. Account balance: ${currBalance}$.`);

            } else if (atmBalance < toWithdraw) {
                console.log('ATM machine is out of order!');
            } else {
                let sortedAtm = Object.keys(atm).sort((a, b) => { //  string array
                    return b - a;
                }).map(el => +el);


                let i = 0;
                let count = 0;
                let curSum = toWithdraw;
                while (curSum >0) {
                    count = parseInt(curSum / sortedAtm[i]);
                    atm[sortedAtm[i]] -= count;
                    if (count>0) {                        
                    curSum = toWithdraw % sortedAtm[i];

                    }
                    count = 0;
                    i++;
                }

                currBalance -= toWithdraw;
                atmBalance -= toWithdraw;

                console.log(`You get ${toWithdraw}$. Account balance: ${currBalance}$. Thank you!`);
            }
        } else if (arr.length === 1) {
            let nominal = arr[0];

            let cnt = atm[nominal] ? atm[nominal] : 0;

            console.log(`Service Report: Banknotes from ${nominal}$: ${cnt}.`);
        }
    });

    function insert(arr) {
        let insert = 0;

        arr.forEach(el => {
            if (!atm[el]) {
                atm[el] = 0;
            }
            insert += el;
            atm[el] += 1;
        });
        atmBalance += insert;
        console.log(`Service Report: ${insert}$ inserted. Current balance: ${atmBalance}$.`);

    }
}

atmMashine([
    [10, 20, 10, 50, 5, 10],
    [100, 30],
    [20],
    [20, 10, 10],
    [5, 10],
    [150, 150]
]);
