const btnAdd = document.querySelector("#add");
const btnRemove = document.querySelector("#remove");
const addX = document.querySelector("#addX");
const removeX = document.querySelector("#removeX");
const tet = document.querySelector("#tet");
const db = document.querySelector("#db");
const ul = document.querySelector(".ul");

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const btn10 = document.querySelector(".btn10");
const btn11 = document.querySelector(".btn11");
const btn12 = document.querySelector(".btn12");
const btn13 = document.querySelector(".btn13");
const btn14 = document.querySelector(".btn14");
const btn15 = document.querySelector(".btn15");
const btn16 = document.querySelector(".btn16");
const btn17 = document.querySelector(".btn17");
const btn18 = document.querySelector(".btn18");
const btn19 = document.querySelector(".btn19");
const btn20 = document.querySelector(".btn20");
const btn21 = document.querySelector(".btn21");
const btn22 = document.querySelector(".btn22");
const btn23= document.querySelector(".btn23");
const btn24= document.querySelector(".btn24");
const btn25= document.querySelector(".btn25");
const btn26= document.querySelector(".btn26");
const btn27= document.querySelector(".btn27");
const btn28= document.querySelector(".btn28");
const btn29= document.querySelector(".btn29");
const btn30= document.querySelector(".btn30");
const btn31= document.querySelector(".btn31");
const btn32= document.querySelector(".btn32");
const btn33= document.querySelector(".btn33");
const btn34= document.querySelector(".btn34");
const btn35= document.querySelector(".btn35");
const btn36= document.querySelector(".btn36");
const btn0= document.querySelector(".btncolorg");


let maxBet = 1000;
let bet = 0;
let szorzo = 1;
let Maxszorzo = 5;

let rakotttetek = [
    
];

function betnums() {
    btn1.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 1,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn1.addEventListener("wheel", () =>{
        for (let i = 0; i < rakotttetek.length; i++) {
            if (rakotttetek[i].teterteke === 1 && rakotttetek.length < 0) {
                delete rakotttetek[i]
                log();
            }
        }
        
    })
    btn2.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 2,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn3.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 3,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn4.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 4,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn5.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 5,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn6.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 6,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn7.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 7,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn8.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 8,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn9.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 9,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn10.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 10,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn11.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 11,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn12.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 12,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn13.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 13,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn14.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 14,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn15.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 15,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn16.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 16,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn17.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 17,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn18.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 18,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn19.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 19,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn20.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 20,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn21.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 21,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn22.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 22,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn23.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 23,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn24.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 24,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn25.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 25,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn26.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 26,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn27.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 27,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn28.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 28,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn29.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 29,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn30.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 30,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn31.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 31,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn32.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 32,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn33.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 33,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn35.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 35,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn36.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 36,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
    btn0.addEventListener("click", () =>{
        if (bet > 0) {
            rakotttetek.push({
                teterteke: 0,
                darab: szorzo,
                mennyiseg: bet
            });
        }
        log();
    })
}
betnums();
function log() {
    rakotttetek.forEach(i => {
        console.log(i);
    });
}
log();

btnAdd.addEventListener("click", () =>{
    if (bet >= 0 && bet < maxBet) {
        console.log("add");
        bet += 100;
        tet.innerHTML = bet;
    }
})
btnRemove.addEventListener("click", () =>{
    if (bet > 0 && bet <= maxBet) {
        console.log("remove");
        bet -= 100;
        tet.innerHTML = bet;
    }
})
addX.addEventListener("click", () =>{
    if (szorzo >= 1 && szorzo < Maxszorzo) {
        console.log("addX");
        szorzo += 1;
        db.innerHTML = szorzo;
    }
})
removeX.addEventListener("click", () =>{
    if (szorzo > 1 && szorzo <= Maxszorzo) {
        console.log("removeX");
        szorzo -= 1;
        db.innerHTML = szorzo;
    }
})


