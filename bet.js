let x = document.getElementsByTagName("button");
let x5 = document.querySelector("#zseton");
let kijeloltbet = 25;
let zseton = 5000;
function penz() {
    x5.innerHTML = zseton;
}

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
    console.log(d);
}
function paros(item) {
    for (let i = 0; i < x.length; i++) {
        if (x[i].innerText % 2 === 0) {
            console.log(x[i].innerText);
        }
    }
}
function paratlan(item) {
    for (let i = 0; i < x.length; i++) {
        if (x[i].innerText % 2 !== 0 && x[i].innerText < 37) {
            console.log(x[i].innerText);
        }
    }
}

function egyto18(item) {
    for (let i = 0; i < x.length; i++) {
        if (x[i].innerText < 19) {
            console.log(x[i].innerText);
        }
    }
}
function tizenkilencto36(item) {
    for (let i = 0; i < x.length; i++) {
        if (18 < x[i].innerText && x[i].innerText < 37) {
            console.log(x[i].innerText);
        }
    }
}
function elso12(item) {
    for (let i = 0; i < x.length; i++) {
        if (0 < x[i].innerText && x[i].innerText < 13) {
            console.log(x[i].innerText);
        }
    }
}
function masodik12(item) {
    for (let i = 0; i < x.length; i++) {
        if (12 < x[i].innerText && x[i].innerText < 25) {
            console.log(x[i].innerText);
        }
    }
}
function harmadik(item) {
    for (let i = 0; i < x.length; i++) {
        if (24 < x[i].innerText && x[i].innerText < 37) {
            console.log(x[i].innerText);
        }
    }
}
function reds(item) {
    let pirosak = [3,9,12,18,21,27,30,36,5,14,23,32,1,7,16,19,25,34]
    pirosak.forEach(element => {
        console.log(element);
    });
}
function blacks(item) {
    let feketek = [6,15,24,33,2,8,11,17,20,26,29,35,4,10,13,22,28,31]
    feketek.forEach(element => {
        console.log(element);
    });
}

function felsosor(item) {
    for (let i = 1; i < 13; i++) {
        console.log(x[i]);
    }
}
function kozepsosor(item) {
    for (let i = 13; i < 25; i++) {
        console.log(x[i]);
    }
}
function alsosor(item) {
    for (let i = 25; i < 37; i++) {
        console.log(x[i]);
    }
}
function nulla(item) {
    console.log(item.innerText);
}

function szam(item) {
    console.log(item.innerText);
    zseton -= kijeloltbet;
    d[item.innerText].push(kijeloltbet)
    penz();
}
function kivalasztottBet(item) {
    kijeloltbet = item.innerText;
    console.log(kijeloltbet);
}
function vissza(item) {
    log()
}
penz()