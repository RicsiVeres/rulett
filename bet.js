let x = document.getElementsByTagName("button");
let x5 = document.querySelector("#zseton");
let nyertesszam = document.querySelector(".nyertesSz");
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
let FelsoSor = [ ];
let KozepsoSor = [ ];
let AlsoSor = [ ];
let ElsoOszlop = [ ];
let MasodikOszlop = [ ];
let HarmadikOszlop = [ ];

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
    zseton -= kijeloltbet;
    ElsoOszlop.push(kijeloltbet)
    penz();
}
function masodik12(item) {
    zseton -= kijeloltbet;
    MasodikOszlop.push(kijeloltbet)
    penz();
}
function harmadik(item) {
    zseton -= kijeloltbet;
    HarmadikOszlop.push(kijeloltbet)
    penz();
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
    zseton -= kijeloltbet;
    FelsoSor.push(kijeloltbet)
    penz();
}
function kozepsosor(item) {
    zseton -= kijeloltbet;
    KozepsoSor.push(kijeloltbet)
    penz();
}
function alsosor(item) {
    //AlsoSor
    zseton -= kijeloltbet;
    AlsoSor.push(kijeloltbet)
    penz();
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

penz()

function FelsoSorraFelrakottBet() {
    let felrakotbet = 0;
    if (FelsoSor.length > 0) {
        for (let i = 3; i <= 36; i+=3) {
            if (i == nyertesszam) {
                FelsoSor.forEach(element => {
                    felrakotbet = felrakotbet + element *1;
                });
                zseton = zseton + felrakotbet*2;
                console.log("win!");
                penz();
            }
        }
    }
}
function KozepsoSorraFelrakottBet() {
    let felrakotbet = 0;
    if (KozepsoSor.length > 0) {
        for (let i = 2; i <= 35; i+=3) {
            if (i == nyertesszam) {
                KozepsoSor.forEach(element => {
                    felrakotbet = felrakotbet + element *1;
                });
                zseton = zseton + felrakotbet*2;
                console.log("win!");
                penz();
            }
        }    
    }
}
function AlsoSorraFelrakottBet() {
    let felrakotbet = 0;
    if (AlsoSor.length > 0) {
        for (let i = 1; i <= 34; i+=3) {
            if (i == nyertesszam) {
                AlsoSor.forEach(element => {
                    felrakotbet = felrakotbet + element *1;
                });
                zseton = zseton + felrakotbet*2;
                console.log("win!");
                penz();
            }
        }    
    }
    
}
function ElsoOszlopraFelrakottBet() {
    let felrakotbet = 0;
    if (ElsoOszlop.length > 0) {
        for (let i = 1; i <= 12; i++) {
            if (i == nyertesszam) {
                ElsoOszlop.forEach(element => {
                    felrakotbet = felrakotbet + element *1;
                });
                zseton = zseton + felrakotbet*2;
                console.log("win!");
                penz();
            }
        }    
    }
}
function MasodikOszlopraFelrakottBet() {
    let felrakotbet = 0;
    if (MasodikOszlop.length > 0) {
        for (let i = 13; i <= 24; i++) {
            if (i == nyertesszam) {
                MasodikOszlop.forEach(element => {
                    felrakotbet = felrakotbet + element *1;
                });
                zseton = zseton + felrakotbet*2;
                console.log("win!");
                penz();
            }
        }    
    }
}
function HarmadikOszlopraFelrakottBet() {
    let felrakotbet = 0;
    if (HarmadikOszlop.length > 0) {
        for (let i = 25; i <= 36; i++) {
            if (i == nyertesszam) {
                HarmadikOszlop.forEach(element => {
                    felrakotbet = felrakotbet + element *1;
                });
                zseton = zseton + felrakotbet*2;
                console.log("win!");
                penz();
            }
        }    
    }
}
function SzamokraFelrakottBet() {
    let felrakotbet = 0;
    if (d[nyertesszam].length > 0 && d[nyertesszam] != 0) {
        console.log("Megnyerted!", 
        d[nyertesszam].forEach(element => {
            felrakotbet = felrakotbet + element *1;
            zseton = zseton + felrakotbet*36;
            penz(); 
        }),
        console.log("Profit:",felrakotbet*36),
        console.log(felrakotbet),
        );
    }else{
        console.log("Bukta");
    }
}




function vissza(item) {
   // nyerte();
   SzamokraFelrakottBet();
   FelsoSorraFelrakottBet();
   KozepsoSorraFelrakottBet();
   AlsoSorraFelrakottBet();
   ElsoOszlopraFelrakottBet();
   MasodikOszlopraFelrakottBet();
   HarmadikOszlopraFelrakottBet();
}