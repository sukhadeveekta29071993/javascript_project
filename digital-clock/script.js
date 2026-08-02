
function updatedClock(){
    let now = new Date();
    let hours = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    hours = hours < 10 ? '0' + hours: hours;
    min = min < 10 ? '0' + min:min;
    sec = sec < 10 ? '0' + sec :sec;

    const currentTimeString = `${hours}:${min}:${sec}`;
    document.getElementById('clock').textContent = currentTimeString

}

setInterval(updatedClock, 1000);

updatedClock();