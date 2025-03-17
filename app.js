let time = 9 * 24 * 60 * 60

const days = document.querySelector("#days")
const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")

setInterval(() => {
    days.innerHTML = (Math.floor(time / (24 * 60 * 60))).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    hours.innerHTML = (Math.floor(time / (60 * 60)) % 24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    minutes.innerHTML = (Math.floor(time / (60)) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    seconds.innerHTML = (time % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    time-=1
}, 1000)