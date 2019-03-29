//user values
var minute = document.getElementById("minute");
var second = document.getElementById("second");

//buttons
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var up = document.getElementById("up");
var down = document.getElementById("down");


function restrict(number) {
    if(number > 99) {
        return number = 99;
    }
    else if(number > 10){
        return parseInt(number, 10);
    }
    else 
    return number;
}

var padding = (set) => {
    return set.padStart(2, "0");
}

second.value = padding(second.value);

minute.addEventListener("change", () => {
    minute.value = padding(minute.value);
    minute.value = restrict(minute.value);
});

function downMinute(minute) {
    if (minute.value > 0) {
        return minute.value--;
    }
}

function upMinute(minute) {
    return minute.value++;
}

var interval;

function Timer(minute) {    

    minute.setAttribute("readonly", "");

    interval = setInterval(function() {

        var min = Number.parseInt(minute.value);
        var sec =  Number.parseInt(second.value);

        if(min === 0 && sec === 0) clearInterval(interval);
        else if(sec === 0) {
            min -= 1;
            sec = 59;
        }
        else {
            sec -= 1;
        }

        minute.value = min;
        minute.value = padding(minute.value);
        second.value = sec;
        second.value = padding(second.value);

    },1000);
};

function stopTime() {
    clearInterval(interval);
}

function resetTime(minute, second) {    
    minute.removeAttribute("readonly");
    minute.value = 0;
    minute.value = padding(minute.value);
    second.value = 0;
    second.value = padding(second.value);
}


start.addEventListener("click", () => {
    Timer(minute);
});

stop.addEventListener("click", () => {
    stopTime();
});

reset.addEventListener("click", function () {
    stopTime();
    resetTime(minute, second);
})

up.addEventListener("click", function () {
    upMinute(minute);
    minute.value = padding(minute.value);
});

down.addEventListener("click", function() { 
    downMinute(minute);
    minute.value = padding(minute.value);
});

