function countdown(){
    var now = new Date();
    var evenDate = new Date(2018, 11, 20);

    var currentTime = now.getTime();
    var evenTime = evenDate.getTime();

    var remainingTime = evenTime - currentTime;

    var seconds = Math.floor(remainingTime / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById("days").textContent = days;
    document.getElementById("days").innerText = days;

    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    setTimeout(countdown, 1000);
}

countdown();