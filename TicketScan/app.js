'use strict';
function ticketsScan(str, command) {

    let commandExecuter={
        'name':(str)=>name(str),
        'flight':(str)=>flight(str),
        'company':(str)=>company(str),
        'all':(str)=>all(str)
    };
    commandExecuter[command](str);

    function name(str) {
        let nameRe = /\s{1}[A-Z][a-zA-Z]*-[A-Z][a-zA-Z]*\s{1}|\s{1}[A-Z][a-zA-Z]*-[A-Z][a-zA-Z]*[.]-[A-Z][a-zA-Z]*\s{1}/;

        let passName = nameRe.exec(str);
        passName = passName[0].trim();
        passName=passName.replace(/-/g, ' ');
        console.log(`Mr/Ms, ${passName}, have a nice flight!`);
    }

    function flight(str) {
        let flightRe = /\s[A-Z]{1,3}[\d]{1,5}\s/;
        let flightNum = str.match(flightRe)[0].trim();
        let airportRe = /\s[A-Z]{3}\/[A-Z]{3}\s/;
        let destinations = str.match(airportRe)[0].trim();
        let startDest = destinations.split('/')[0];
        let endDest = destinations.split('/')[1];

        console.log(`Your flight number ${flightNum} is from ${startDest} to ${endDest}.`);
    }

    function company(str) {
        let companyRe = /\-\s[A-Z][a-z]*\*[A-Z][a-z]*\s/;
        let companyName = str.match(companyRe)[0].slice(1).trim().replace('*', ' ');
        console.log(`Have a nice flight with ${companyName}.`);
    }

    function all(str) {
        let nameRe = /\s{1}[A-Z][a-zA-Z]*-[A-Z][a-zA-Z]*\s{1}|\s{1}[A-Z][a-zA-Z]*-[A-Z][a-zA-Z]*[.]-[A-Z][a-zA-Z]*\s{1}/;
        let passName = nameRe.exec(str)[0].trim().replace(/-/g, ' ');

        let flightRe = /\s[A-Z]{1,3}[\d]{1,5}\s/;
        let flightNum = str.match(flightRe)[0].trim();
        let airportRe = /\s[A-Z]{3}\/[A-Z]{3}\s/;
        let destinations = str.match(airportRe)[0].trim();
        let startDest = destinations.split('/')[0];
        let endDest = destinations.split('/')[1];

        let companyRe = /\-\s[A-Z][a-z]*\*[A-Z][a-z]*\s/;
        let companyName = str.match(companyRe)[0].slice(1).trim().replace('*', ' ');

        console.log(`Mr/Ms, ${passName}, your flight number ${flightNum} is from ${startDest} to ${endDest}. Have a nice flight with ${companyName}.`);
    }
}

ticketsScan(' P-Pes.-Ov travels from JSX/JWK - Bulgaria*Airline  X32Q75  F88  from STD00:21 arriving at STA22:43','name');