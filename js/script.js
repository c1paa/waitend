let t = document.querySelector(".timetoend");
let end = new Date(2025, 6, 1, 13, 20);
let now = new Date();
function datedif(first, second) {
    return new Date(first.getFullYear()-second.getFullYear(), 
                    first.getMonth()-second.getMonth(),
                    first.getDate()-second.getDate(),
                    first.getHours()-second.getHours(),
                    first.getMinutes()-second.getMinutes(),
                    first.getSeconds()-second.getSeconds())
}
function getstrdate(data) {
    return `${data.getDate()}:${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
}
console.log(getstrdate(now));
console.log(getstrdate(end));
let difdate = datedif(end, now);
console.log(getstrdate(datedif(end, now)));


let ul = document.querySelector(".days");
function getli(number, value){
    return `<li class="day">
            <div class="day-info">
                <h3>Day${number}</h3>
            </div>
            <progress max="100" value="${value}" class="day-progress"></progress>
        </li>` 
}
function getprocentday(data) {
    let finish = new Date(data.getFullYear(), data.getMonth(), data.getDay()+1, 0, 0, 0);
    let dif = datedif(finish, data);
    let secs = dif.getHours()*60*60+dif.getMinutes()*60+dif.getSeconds();
    return 100-secs/24/60/60*100;
}
function update() {
    now = new Date();
    ul.innerHTML = "";
    for (let i = 0; i < difdate.getDay(); ++i){
        if (i != 0){
            ul.innerHTML += getli(i+1, 0);
        } else {
            ul.innerHTML += getli(i+1, getprocentday(now));
        }
    }
    t.textContent = getstrdate(datedif(end, now))
}

setInterval(function() {
    update();
}, 100);