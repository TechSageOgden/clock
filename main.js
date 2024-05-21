let timeDisplay = document.getElementById('digi-num')
let dateDisplay = document.getElementById('date')


function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format the string with leading zeroes
    const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    timeDisplay.innerText = clockStr;
}

function updateDate() {
    const date = new Date()
    dateDisplay.innerText = date.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
}

updateTime();
updateDate();
setInterval(updateTime, 1000);
setTimeout(updateDate, 1000 * 60 * 60 * 24)