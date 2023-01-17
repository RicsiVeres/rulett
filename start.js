const ido = document.getElementById('leftido');
let varakozoido = 10;
let lefttime = varakozoido;
ido.innerHTML = lefttime;

let frag = true;
require('./app');
require('./bet');
function katt() {
    let time = setInterval(() => {
        if (lefttime <= varakozoido && lefttime > 0 ) {
            lefttime--;
            ido.innerHTML = lefttime;
        }
        console.log(lefttime);
        if (lefttime == 0) {
            porget()
        }
    }, 1000);
}
function start() {
    if (frag) {
        katt()
        console.log("started!");
        frag = false;   
    }

}




