function extractor(string) {
    let subStrLength = string.match(/\d+/)[0];

    let excludeStr = (subStrLength.split('').length);
    
    let str = string.substr(excludeStr, +subStrLength).trim();

    let delimeter = str.slice(-1);

    let matches = str.split(delimeter).filter(s => s !== '');

    var re = new RegExp(`[^${matches[0]}]+`, 'g');

    let bbb = matches[1].match(re).join('').replace(/#/g, ' ');

    console.log(bbb);
}

extractor('47*0-9%&+I2\'m0#a#stu59%d%e&nt#a9t#So00ft%Uni*!+ ');