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

function decode(expr) {
    const mask = {
        '10' : '.',
        '11' : '-'
    }
    return expr.match(/.{1,10}/g)
                        .map(item => item !== '**********' ? item.match(/.{1,2}/g): [' '])
                        .map(item => item.filter(item => item !== '00')
                        .map(item => mask.hasOwnProperty(item) ? mask[item] : item))
                        .map(item => MORSE_TABLE.hasOwnProperty(item.join('')) ? MORSE_TABLE[item.join('')] : ' ').join('');                      
}

module.exports = {
    decode
}