window.addEventListener("DOMContentLoaded", function() {

"use strict";
let tab = document.querySelectorAll(".info-header-tab"),
    info = document.querySelector(".info-header"),
    tabContent = document.querySelectorAll(".info-tabcontent");


   function hideTabContent(a) {
       for(let i = a; i < tabContent.length; i++) {
           tabContent[i].classList.remove("show");
           tabContent[i].classList.add("hide");
       }
   }
   hideTabContent(1);

   function showTabContent(b) {
      
     if(tabContent[b].classList.contains("hide")) {
        tabContent[b].classList.remove("hide");
        tabContent[b].classList.add("show");
        }
    }
   
    info.addEventListener('click', function(event) {
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
    // timer
    let deadLine = "2020-1-10";
function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    
    let seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor(t/(1000*60*60));
        if (t <= 0) {
            hours = "00";
            seconds = "00";
            minutes = "00";
        }
        if (hours <= 9) {
            hours = "0" + hours;
        }
        if(minutes <= 9) {
            minutes = "0" + minutes;
        }
        if(seconds <= 9) {
            seconds = "0" + seconds;
        }
    return {
        "total" : t,
        "seconds" : seconds,
        "minutes" : minutes,
        "hours" : hours
    };
}
function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector(".hours"),
        minutes = timer.querySelector(".minutes"),
        seconds = timer.querySelector(".seconds"),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        let t = getTimeRemaining(endtime);
        seconds.textContent = t.seconds;
        minutes.textContent = t.minutes;
        hours.textContent = t.hours;
    if(t.total <= 0) {
        clearInterval(timeInterval);
    }
    }
};
setClock("timer", deadLine);

});

// modal window
let 