function stadium(arr) {
    let numberOfSeats = +arr.splice(0, 1)[0];
    let totalMoney = 0;
    let countOfFans = 0;
    let ticketPrice = 0;

    let stadium = {
        'A': {
            'LITEX': [],
            'LEVSKI': [],
            'VIP': []
        },
        'B': {
            'LITEX': [],
            'LEVSKI': [],
            'VIP': []
        },
        'C': {
            'LITEX': [],
            'LEVSKI': [],
            'VIP': []
        }
    };

    arr.forEach(line => {
        let zone = line.split('*')[0];
        let seat = line.split('*')[1];
        let sector = line.split('*')[2];
        if (sector === 'A') {
            if (zone === 'VIP') {
                ticketPrice = 25;
            } else {
                ticketPrice = 10;
            }
        } else if (sector === 'B') {
            if (zone === 'VIP') {
                ticketPrice = 15;
            } else {
                ticketPrice = 7;
            }
        } else if (sector === 'C') {
            if (zone === 'VIP') {
                ticketPrice = 10;
            } else {
                ticketPrice = 5;
            }
        }

        if (stadium[sector][zone].length === 0) {
            stadium[sector][zone] = Array(numberOfSeats).fill(0);
            stadium[sector][zone][seat - 1] = 1;

            totalMoney += ticketPrice;
            countOfFans += 1;
        } else {
            if (stadium[sector][zone][seat - 1] === 0) {
                totalMoney += ticketPrice;
                countOfFans += 1;
            } else {
                console.log(`Seat ${seat} in zone ${zone} sector ${sector} is unavailable`);
            }
        }
    });

    console.log(`${totalMoney} lv.`);
    console.log(`${countOfFans} fans`);
}

stadium(["5","LITEX*5*A", "LEVSKI*2*A", "LEVSKI*3*B", "VIP*4*C", "LITEX*3*B", "LEVSKI*2*A", "LITEX*5*B", "LITEX*5*A", "VIP*1*A"]);//42 lv.

