let t = document.querySelector(".timetoend");
let end = new Date(2025, 6, 1, 13, 20);
let now = new Date();
function datedif(first, second) {
    // const diffinms = first.getTime()-second.getTime();
    // console.log(diffinms);
    // return [Math.floor(diffinms/)];
    return new Date(first.getFullYear()-second.getFullYear(), 
                    first.getMonth()-second.getMonth(),
                    first.getDate()-second.getDate()-1,
                    first.getHours()-second.getHours(),
                    first.getMinutes()-second.getMinutes(),
                    first.getSeconds()-second.getSeconds())
}
function getstrdate(data) {
    return `${data.getDate()}:${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
}
function getstrdate_str(data) {
    return `${data[2]}:${data[3]}:${data[4]}:${data[5]}`
}
console.log(getstrdate(now));
console.log(getstrdate(end));
// let difdate = datedif(end, now);
// console.log(getstrdate(datedif(end, now)));


let ul = document.querySelector(".days");
function getli(number, value){
    return `<li class="day">
            <div class="day-info">
                <h3>Day ${number}</h3>
            </div>
            <progress max="100" value="${value}" class="day-progress"></progress>
        </li>` 
}
function getprocentday(data) {
    // let finish = new Date(data.getFullYear(), data.getMonth(), data.getDay()+1, 0, 0, 0);
    // let dif = datedif(finish, data);
    let secs = data.getHours()*60*60+data.getMinutes()*60+data.getSeconds();
    return secs/24/60/60*100;
}
let monthdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function update() {
    now = new Date();//Date(2025, 5, 30, 0, 6);
    ul.innerHTML = "";
    for (let i = 0; i < ((end.getMonth()==now.getMonth()) ? end.getDate()-now.getDate()+1 : end.getDate()+monthdays[now.getMonth()]+1-now.getDate()); ++i){
        if (i != 0){
            ul.innerHTML += getli(i+1, 0);
        } else {
            // console.log(getprocentday(now));
            ul.innerHTML += getli(i+1, getprocentday(now));
        }
    }
    // console.log(datedif(end, now));
    t.textContent = getstrdate(datedif(end, now)) //+ " - " + getstrdate(now)
}

setInterval(function() {
    update();
}, 100);
