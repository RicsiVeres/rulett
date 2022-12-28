let x = document.getElementsByTagName("button");
let x5 = document.querySelector("#zseton");
let kijeloltbet = 25;
let zseton = 5000;

const haromto1 = [3,6,9,12,15,10,21,24,27,30,33,36];
const kettoto1 = [2,5,8,11,14,17,20,23,26,29,32,35];
const egyto1 = [1,4,7,10,13,16,19,22,25,28,31,34];

const egyst12 = [1,2,3,4,5,6,7,8,9,10,11,12];
const kettond12 = [13,14,15,16,17,18,19,20,21,22,23,24];
const haromrd12 = [25,26,27,28,29,30,31,32,33,34,35,36];

const egy18 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
const tizenkilenctoharminchat = [19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];

function penz() {
    x5.innerHTML = zseton;
}

let d2haromto1 = [];
let d2kettoto1 = [];
let d2egyto1 = [];
let d21to18 = [];
let d219to36 = [];
let d2ist12 = [];
let d22nd12 = [];
let d23rd12 = [];
let d2even = [];
let d2odd = [];
let d2red = [];
let d2black = [];

let d23to1 = [];
let d22to1 = [];
let d21to1 = [];

let zerro = [];



let d = {
    0:[],
    1:[],
    2:[],
    3:[],
    4:[],
    5:[],
    6:[],
    7:[],
    8:[],
    9:[],
    10:[],
    11:[],
    12:[],
    13:[],
    14:[],
    15:[],
    16:[],
    17:[],
    18:[],
    19:[],
    20:[],
    21:[],
    22:[],
    23:[],
    24:[],
    25:[],
    26:[],
    27:[],
    28:[],
    29:[],
    30:[],
    31:[],
    32:[],
    33:[],
    34:[],
    35:[],
    36:[],

};
function log() {
    console.log(
        d, 
        d2even,
        d2odd,
        d21to18,
        d219to36,
        d2ist12,
        d22nd12,
        d23rd12,
        d2red,
        d2black,
        d23to1,
        d22to1,
        d21to1,
        zerro);
}
function paros(item) {
    for (let i = 1; i < 37; i++) {
        if (x[i].innerText % 2 === 0) {
            console.log(x[i].innerText);
            d2even[x[i].innerText] = kijeloltbet;
        }
    }
}
function paratlan(item) {
    for (let i = 0; i < 36; i++) {
        if (x[i].innerText % 2 !== 0 && x[i].innerText < 37) {
            console.log(x[i].innerText);
            d2odd[x[i].innerText] = kijeloltbet;
        }
    }
}

function egyto18(item) {
    for (let i = 0; i < x.length; i++) {
        if (x[i].innerText < 19) {
            console.log(x[i].innerText);
            d21to18[x[i].innerText] = kijeloltbet;
        }
    }
}
function tizenkilencto36(item) {
    for (let i = 0; i < x.length; i++) {
        if (18 < x[i].innerText && x[i].innerText < 37) {
            console.log(x[i].innerText);
            d219to36[x[i].innerText] = kijeloltbet;
        }
    }
}
function elso12(item) {
    for (let i = 0; i < x.length; i++) {
        if (0 < x[i].innerText && x[i].innerText < 13) {
            console.log(x[i].innerText);
            d2ist12[x[i].innerText] = kijeloltbet;
        }
    }
}
function masodik12(item) {
    for (let i = 0; i < x.length; i++) {
        if (12 < x[i].innerText && x[i].innerText < 25) {
            console.log(x[i].innerText);
            d22nd12[x[i].innerText] = kijeloltbet;
        }
    }
}
function harmadik(item) {
    for (let i = 0; i < x.length; i++) {
        if (24 < x[i].innerText && x[i].innerText < 37) {
            console.log(x[i].innerText);
            d23rd12[x[i].innerText] = kijeloltbet;
        }
    }
}
function reds(item) {
    let pirosak = [3,9,12,18,21,27,30,36,5,14,23,32,1,7,16,19,25,34]
    pirosak.forEach(element => {
        console.log(element);
        d2red.push(element);
    });
}
function blacks(item) {
    let feketek = [6,15,24,33,2,8,11,17,20,26,29,35,4,10,13,22,28,31]
    feketek.forEach(element => {
        console.log(element);
        d2black.push(element);
    });
}

function felsosor(item) {
    for (let i = 1; i < 13; i++) {
        console.log(x[i].innerText);
        d23to1.push(x[i].innerText);
    }
}
function kozepsosor(item) {
    for (let i = 13; i < 25; i++) {
        console.log(x[i].innerText);
        d22to1.push(x[i].innerText);
    }
}
function alsosor(item) {
    for (let i = 25; i < 37; i++) {
        console.log(x[i]);
        d21to1.push(x[i].innerText);
    }
}
function nulla(item) {
    console.log(item.innerText);
    zerro.push(kijeloltbet)
}

function szam(item) {
    console.log(item.innerText);
    zseton -= kijeloltbet;
    d[item.innerText].push(kijeloltbet)
    penz();
}
function kivalasztottBet(item) {
    kijeloltbet = item.innerText;
    console.log("Kijelolve: ",kijeloltbet);
}
function vissza(item) {
    log()
}
penz()