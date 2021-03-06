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
        function addZero(num) {
            if(num <= 9) {
                return "0" + num;
            } else return num;
        };
        
        seconds.textContent = t.seconds;
        minutes.textContent = t.minutes;
        hours.textContent = t.hours;
    if(t.total <= 0) {
        clearInterval(timeInterval);
        seconds.textContent = "00";
        minutes.textContent = "00";
        hours.textContent = "00";
    }
    }
};
setClock("timer", deadLine);


// Modal window
let more = document.querySelector(".more"),
    overlay = document.querySelector(".overlay"),
    close = document.querySelector(".popup-close"),
    inf = document.querySelector(".info");
    


inf.addEventListener("click", function() {
    if(event.target && event.target.classList.contains("description-btn")) { 
        overlay.style.display = "block";
         this.classList.add("more-splash");
         document.body.style.overflow = "hidden";
    }
});

more.addEventListener("click", function () {
    overlay.style.display = "block";
    this.classList.add("more-splash");
    document.body.style.overflow = "hidden";
});
close.addEventListener("click", function() {
    overlay.style.display = "none";
    more.classList.remove("more-splash");
    document.body.style.overflow = "";
});





});
