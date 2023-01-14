let x = document.getElementsByTagName("button");
let x5 = document.querySelector("#zseton");
let nyertesszam = document.querySelector(".nyertesSz");
let kijeloltbet = 100;
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
let To18 = [ ];
let To36 = [ ];
let Even = [ ];
let Odd = [ ];
let DNulla = [ ];
let Fekete = [ ];
let Piros = [ ];

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
    zseton -= kijeloltbet;
    Even.push(kijeloltbet)
    penz();
}
function paratlan(item) {
    zseton -= kijeloltbet;
    Odd.push(kijeloltbet)
    penz();
}

function egyto18(item) {
    zseton -= kijeloltbet;
    To18.push(kijeloltbet)
    penz();
}
function nulla(item) {
    zseton -= kijeloltbet;
    DNulla.push(kijeloltbet)
    penz();
}
function tizenkilencto36(item) {
    zseton -= kijeloltbet;
    To36.push(kijeloltbet)
    penz();
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
    zseton -= kijeloltbet;
    Piros.push(kijeloltbet)
    penz();
}
function blacks(item) {
    zseton -= kijeloltbet;
    Fekete.push(kijeloltbet)
    penz();
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
function allfekete(params) {
    let feketek = [6,15,24,33,2,8,11,17,20,26,29,35,4,10,13,22,28,31];
    let felrakotbet = 0;
    feketek.forEach(i => {
        if (nyertesszam == i) {
            Piros.forEach(element => {
                felrakotbet = felrakotbet + element *1;
            });
            zseton = zseton + felrakotbet*2;
            console.log("win!");
            penz();
        }
    });
}
function allpiros(params) {
    let pirosak = [3,9,12,18,21,27,30,36,5,14,23,32,1,7,16,19,25,34];
    let felrakotbet = 0;
    pirosak.forEach(i => {
        if (nyertesszam == i) {
            Fekete.forEach(element => {
                felrakotbet = felrakotbet + element *1;
            });
            zseton = zseton + felrakotbet*2;
            console.log("win!");
            penz();
        }
    });
}

function to36() {
    let felrakotbet = 0;
    if (To36.length > 0) {
        for (let i = 19; i <= 36; i++) {
            if (i == nyertesszam) {
                To36.forEach(element => {
                    felrakotbet = felrakotbet + element *1;
                });
                zseton = zseton + felrakotbet*2;
                console.log("win!");
                penz();
            }
        }
    }
}
function odd() {
    let felrakotbet = 0;
    if (Odd.length > 0) {
        for (let i = 1; i <= 36; i+=2) {
            console.log(i);
            if (i == nyertesszam) {
                Odd.forEach(element => {
                    felrakotbet = felrakotbet + element *1;
                });
                zseton = zseton + felrakotbet*2;
                console.log("win!");
                penz();
            }
        }
    }
}
function even() {
    let felrakotbet = 0;
    if (Even.length > 0) {
        for (let i = 1; i % 2 == 0; i++) {
            console.log(i);
            if (i == nyertesszam) {
                Even.forEach(element => {
                    felrakotbet = felrakotbet + element *1;
                });
                zseton = zseton + felrakotbet*2;
                console.log("win!");
                penz();
            }
        }
    }
}
function to18() {
    let felrakotbet = 0;
    if (To18.length > 0) {
        for (let i = 1; i <= 18; i++) {
            if (i == nyertesszam) {
                To18.forEach(element => {
                    felrakotbet = felrakotbet + element *1;
                });
                zseton = zseton + felrakotbet*2;
                console.log("win!");
                penz();
            }
        }
    }
}
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
function zerro() {
    let felrakotbet = 0;
    if (DNulla.length > 0) {
        if (nyertesszam == 0) {
            DNulla.forEach(element => {
                felrakotbet = felrakotbet + element *1;
            });
            zseton = zseton + felrakotbet*40;
            console.log("win!");
            penz();
        }
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
   to18();
   to36();
   even();
   odd();
   zerro();
   allpiros();
   allfekete();
}