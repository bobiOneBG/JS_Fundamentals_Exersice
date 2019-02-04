function trucks(matrix) {
    let trucks = {};
    let backUpTyres = [];
    let commandExecutor = {
        NEWTRUCK: (arr) => addTruck(arr),
        NEWTIRES: (arr) => addTyre(arr),
        WORK: (arr) => work(arr)

    };
    matrix.forEach(arr => {
        let command = arr[0];
        commandExecutor[command](arr.slice(1));
    });

    function addTruck(arr) {
        let plateNumber = arr[0];
        let tyres = arr[1];
        if (!trucks[plateNumber]) {
            trucks[plateNumber] = {
                'tyres': tyres,
                'totalDistance': 0
            };
        }
    }

    function addTyre(arr) {
        let newTyres = arr[0];
        backUpTyres.push(newTyres);
    }

    function work(arr) {
        let plateNumber = arr[0];
        if (!trucks[plateNumber]) {
            return;
        }
        let distance = arr[1];
        let truckTyres = trucks[plateNumber].tyres;
        
        if ((distance / 1000) > Math.min(...truckTyres)) {
            trucks[plateNumber].tyres = backUpTyres.shift();
            truckTyres = trucks[plateNumber].tyres;
            if (distance / 1000 > Math.min(...truckTyres)) {
                return;
            }
        }
        travelDistance(plateNumber, distance);
    }



    for (let truck of Object.entries(trucks)) {
        console.log(`Truck ${truck[0]} has traveled ${truck[1].totalDistance}.`);
    }
    console.log(`You have ${backUpTyres.length} sets of tires left.`);


    function travelDistance(plateNumber, distance) {
     trucks[plateNumber].tyres=   trucks[plateNumber].tyres.map((t) => {
            return t-=distance/1000;
        });
        
        trucks[plateNumber].totalDistance += distance;

    }
}

trucks([
    ["NEWTRUCK", "C1111AA", [7, 7, 7, 7, 7, 7, 7, 7]],
    ["NEWTRUCK", "C2222AA", [5, 5, 5, 5, 5, 5, 5, 5]],
    ["NEWTIRES", [8, 8, 8, 8, 8, 8, 8, 8]],
    ["NEWTIRES", [4, 4, 4, 4, 4, 4, 4, 4]],
    ["NEWTIRES", [5, 5, 5, 5, 5, 5, 5, 5]],
    ["WORK", "C1111AA", 7700],
    ["WORK", "C2222AA", 6000],
    ["WORK", "C1111AA", 3000],
]);