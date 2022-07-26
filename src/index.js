const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function convertToDotDash(sOf2) {
    if (sOf2 == "11") {
        return "-";
    } else if (sOf2 == "10") {
        return ".";
    } else {
        return "";
    }
    }
    function decode(expr) {
       let array1 = expr.match(/.{1,10}/g);
       let result = "";
    for (stringOf10 of array1) {
        console.log(stringOf10);
        if (stringOf10 == "**********") {
            result += " ";
        } else {
        stringOf2Array = stringOf10.match(/.{1,2}/g);
        console.log(stringOf2Array);
        let letter = "";
        for (stringOf2 of stringOf2Array) {
            letter += convertToDotDash(stringOf2);
        }
        console.log(letter);
        result += MORSE_TABLE[letter];
        }
    }
    return result;
    }
    module.exports = {
        decode
    }