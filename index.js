setInterval(() => {

    let localTime = new Date()
    let time = document.getElementById("time")
    time.innerText = localTime.toLocaleTimeString()
}, 1000);