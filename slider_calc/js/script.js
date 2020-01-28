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

//Form

let message = {
    loading: "Идет загрузка",
    success: "Спасибо что оставили заявку",
    failure: "Что-то пошло не так..."
};

let form = document.querySelector(".main-form"),
    formDown = document.querySelector("#form"),
    input = document.getElementsByTagName("input"),
    statusMessage = document.createElement("div");
    statusMessage.classList.add("status");


function sendForm(elem) {
    elem.addEventListener("submit", function (event) {
       event.preventDefault();
       elem.appendChild(statusMessage);

       let formData = new FormData(elem);

        function postData() {

            return new Promise(function(resolve, reject) {
               let request = new XMLHttpRequest();

                request.open("POST", "server.php");

                request.setRequestHeader("Content-type", "application/json; charset=utf-8");//"application/x-www-form-urlencoded" "application/json; charset=utf-8"

                request.onreadystatechange = function() {
                    if(request.readyState < 4) {
                        resolve();
                    } else if(request.readyState === 4) {
                        if(request.status == 200 && request.status < 300) {
                            resolve();
                        }
                        else {
                        reject();
                        }
                    }

                };
                let obj = {};
                formData.forEach(function(value, key) {
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);
                request.send(json);
            });
        }; // End postData

        function clearInput() {
            for(let i = 0; i < input.length; i++) {
                input[i].value = "";
            }
        }
   
    
        postData(formData)
            .then(() => statusMessage.innerHTML = message.loading)
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.failure)
            .then(clearInput);   
    });
   
}
sendForm(form);
sendForm(formDown);

// Slider

let slideIndex = 1,
    slides = document.querySelectorAll(".slider-item"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    dotsWrap = document.querySelector(".slider-dots"),
    dots = document.querySelectorAll(".dot");

    function showSlides(n) {
        if(slideIndex > 4) {
            slideIndex = 1;
        }
        if(slideIndex < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = "none");
        dots.forEach((item) => item.classList.remove("dot-active"));

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("dot-active");
    }
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener("click", function() {
        plusSlides(-1);
    });

    next.addEventListener("click", function() {
        plusSlides(1);
    });
    dotsWrap.addEventListener("click", function(event) {
        for(let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains("dot") && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    

    });

    //calc
    let persons = document.querySelectorAll(".counter-block-input")[0],
        restDays = document.querySelectorAll(".counter-block-input")[1],
        place = document.getElementById("select"),
        totalValue = document.getElementById("total"),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;
    persons.addEventListener("input", function() {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 300;

        if( persons.value == "" || restDays.value == "") {

            totalValue.innerHTML = 0;
            
        } else {

            
            totalValue.innerHTML = total;


        }
        
    });
    restDays.addEventListener("input", function() {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 300;

        if(persons.value == "" || restDays.value == "") {
            totalValue.innerHTML = 0;           
        } else {
            
            totalValue.innerHTML = total;
        }
        
    });

    place.addEventListener("input", function() {
        if(restDays.value == "" || persons.value == "") {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });


});
