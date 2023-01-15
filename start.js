require('./app');
require('./bet');
let leftTime = 10;
function katt() {
    let time = setInterval(() => {
        porget()
    }, 8000);
    let result = setInterval(() => {
        console.log("result ...");
        vissza();
    }, 15000);
}

function start() {
    katt()
    console.log("started!");
}




