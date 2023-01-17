let x = document.getElementsByTagName("button");
let x5 = document.querySelector("#zseton");
let nyertesszam = document.querySelector(".nyertesSz");
let zseton = 5100;
let kijeloltbet = 100;


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
function penz(tomb) {
    if (zseton - kijeloltbet >= 0) {
        zseton -= kijeloltbet;
        x5.innerHTML = zseton;
        tomb.push(kijeloltbet)
    }
}
function paros() {
    penz(Even);
}
function paratlan(item) {
    penz(Odd);
}

function egyto18(item) {
    penz(To18);
}
function nulla(item) {
    penz(DNulla);
}
function tizenkilencto36(item) {
    penz(To36);
}
function elso12(item) {
    penz(ElsoOszlop);
}
function masodik12(item) {
    penz(MasodikOszlop);
}
function harmadik(item) {
    penz(HarmadikOszlop);
}
function reds(item) {
    penz(Piros);
}
function blacks(item) {
    penz(Fekete);
}

function felsosor(item) {
    penz(FelsoSor);
}
function kozepsosor(item) {
    penz(KozepsoSor);
}
function alsosor(item) {
    penz(AlsoSor);
}


function szam(item) {
    penz(d[item.innerText]);
}
function kivalasztottBet(item) {
    kijeloltbet = item.innerText;
    console.log("Kijelolve: ",kijeloltbet);
}

//penz()
function allfekete(params) {
    let feketek = [6,15,24,33,2,8,11,17,20,26,29,35,4,10,13,22,28,31];
    let felrakotbet = 0;
    feketek.forEach(i => {
        if (nyertesszam == i) {
            Fekete.forEach(element => {
                felrakotbet = felrakotbet + element *1;
            });
            zseton = zseton + felrakotbet*2;
            console.log("win!");
            x5.innerHTML = zseton;
            
        }
    });
    Fekete = [ ];
}
function allpiros(params) {
    let pirosak = [3,9,12,18,21,27,30,36,5,14,23,32,1,7,16,19,25,34];
    let felrakotbet = 0;
    pirosak.forEach(i => {
        if (nyertesszam == i) {
            Piros.forEach(element => {
                felrakotbet = felrakotbet + element *1;
            });
            zseton = zseton + felrakotbet*2;
            console.log("win!");
            x5.innerHTML = zseton;
        }
    });
    Piros = [ ];
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
                x5.innerHTML = zseton;
            }
        }
    }
    To36 = [ ];
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
                x5.innerHTML = zseton;
            }
        }
    }
    Odd = [ ];
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
                x5.innerHTML = zseton;
            }
        }
    }
    Even = [ ];
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
                x5.innerHTML = zseton;
            }
        }
    }
    To18 = [ ];
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
                x5.innerHTML = zseton;
            }
        }
    }
    FelsoSor = [ ];
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
                x5.innerHTML = zseton;
            }
        }    
    }
    KozepsoSor = [ ];
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
                x5.innerHTML = zseton;
            }
        }    
    }
    AlsoSor = [ ];
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
                x5.innerHTML = zseton;
            }
        }    
    }
    ElsoOszlop = [ ];
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
                x5.innerHTML = zseton;
            }
        }    
    }
    MasodikOszlop = [ ];
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
                x5.innerHTML = zseton;
            }
        }    
    }
    HarmadikOszlop =[ ];
}
function SzamokraFelrakottBet() {
    let felrakotbet = 0;
    try {
        if (d[nyertesszam].length > 0 && d[nyertesszam] != 0) {
            d[nyertesszam].forEach(element => {
                felrakotbet = felrakotbet + element *1;
                zseton = zseton + felrakotbet*36;
            }),
            console.log("Profit:",felrakotbet*36),
            console.log(felrakotbet)
        }else{
            console.log("Bukta fqgqge");
        }
    } catch (error) {
        console.log(error);
    }
    
    d = [ ];
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
            x5.innerHTML = zseton;
        }
    }
    DNulla = [];
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