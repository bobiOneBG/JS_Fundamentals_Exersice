function crossword(matrix) {
    let str = '';
    let commandExecutor = {
        'filterUPPERCASE': (line) => filterUPPERCASE(line),
        'filterLOWERCASE': (line) => filterLOWERCASE(line),
        'filterNUMS': (line) => filterNUMS(line),
        'sortA': (line) => sortA(line),
        'sortZ': (line) => sortZ(line),
        'rotate': (line) => rotate(line),
        'get': (line) => get(line)
    };

    matrix.forEach(line => {
        let command = line[0] + line[1];
        if (line[0] === 'rotate' || line[0] === 'get') {
            command = line[0];
        }
        commandExecutor[command](line);
    });

    function filterUPPERCASE(line) {
        let matches = line[3].match(/[A-Z]/g);
        str += matches[+line[2] - 1];
    }

    function filterLOWERCASE(line) {
        let matches = line[3].match(/[a-z]/g);
        str += matches[+line[2] - 1];
    }

    function filterNUMS(line) {
        let matches = line[3].match(/[0-9]/g);
        str += matches[+line[2] - 1];
    }

    function sortA(line) {
        let sorted = line[3].split('').sort();
        str += sorted[+line[2] - 1];
    }

    function sortZ(line) {
        let sorted = line[3].split('').sort((a, b) => {
            return b.localeCompare(a);
        });

        str += sorted[+line[2] - 1];
    }

    function rotate(line) {
        let stringi = line[3].split('');

        for (let i = 0; i < +line[1] % stringi.length; i++) {
            stringi.unshift(stringi.pop());

        }
        str += stringi[+line[2] - 1];
    }

    function get(line) {
        str += line[2].split('')[+line[1]-1];
    }

    console.log(str);
}

crossword([
    ["filter", "UPPERCASE", 4, "AkIoRpSwOzFdT"],
    ["sort", "A", 3, "AOB"],
    ["sort", "A", 3, "FAILCL"],
    ["sort", "Z", 2, "OUTAGN"],
    ["filter", "UPPERCASE", 2, "01S345U7N"],
    ["rotate", 2, 2, "DAN"],
    ["get", 2, "PING"],
    ["get", 3, "?- 654"]
]);

