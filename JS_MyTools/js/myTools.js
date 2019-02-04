function escapeChars(str) {
    return str.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
//    Sort object
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

function sortByTwoCriteria(a,b){
    let sorted = obj.sort((a, b) => {
        if (countA > countB) return -1; //descending order
        if (countA < countB) return 1;
        if (a < b) return -1; //ascending order
        if (a > b) return 1;
        return 0;
    });
}

function compareArrays(array, arr) {
    let hasEquals = array.length === arr.length && array.every((value, index) => value === arr[index]);
}

function executeCommand(commands) {
    let commandExecuter = {             //obj of annonimous functions
        breeze: (value) => breeze(value),
        gale: (value) => gale(value),
        smog: (value) => smog(value)
    };//command

    for (let row of commands) {
        let [command, value] = row.split(' ');

        commandExecuter[command](value);
    }
}

function regexExec(str){
let exec;
    while ((exec = regex.exec(str)) != null) {
        result = result.replace(exec[0], "");
    }
}