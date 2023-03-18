let usaEl = document.getElementById("usa")
let indiaEl = document.getElementById("india")
let europeEl = document.getElementById("china")
    //  d = new Date()
    // let alarm = document.getElementById("time").value;
    // let alarmhour = alarm.split(":")[0]
    // let alarmmin = alarm.split(":")[1]
    // console.log(alarmhour)


function updateTime() {
    let d = new Date()
    usaEl.innerText = d.toLocaleString('en-US', { timeZone: 'America/New_York' }).split(", ")[1]
    indiaEl.innerText = d.toLocaleString(undefined, { timeZone: 'Asia/kolkata' }).split(", ")[1]
    europeEl.innerText = d.toLocaleString(undefined, {
        timeZone: 'Europe/Paris'
    }).split(", ")[1]
    let alarm = document.getElementById("time").value;
    let alarmhour = alarm.split(":")[0]
    let alarmmin = alarm.split(":")[1]

    console.log(d.getHours(), alarmhour)
    console.log(d.getMinutes(), alarmmin)
    if (d.getHours() == alarmhour && d.getMinutes() == alarmmin) {
        console.log("Alarm is ringing")
        let audiourl = "me phir bhi f2.mp3"
        var audio = new Audio(audiourl);
        audio.play();
    }
}
setInterval(updateTime, 1000)

// let alarm = document.getElementById("appt")
//     // const min = document.getElementById("mm1")
// let alarmhour = alarm.value.split(":")[0]
// let alarmmin = alarm.value.split(":")[1]
// console.log(alarmhour)

// if (d.getHours() == alarmhour && d.getMinutes() == alarmmin) {
//     console.log("Alarm is ringing")
//     let audiourl = "C:\Users\AKSHAYA\Projects\worldClock\me phir bhi f2.mp3"
//     var audio = new Audio(audiourl);
//     audio.play();
// }