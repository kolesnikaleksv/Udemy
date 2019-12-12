
let 
    newLi = document.createElement("li"),
    menu = document.querySelector(".menu"),
    li = document.getElementsByClassName("menu-item"),
    body = document.querySelector("body"),
    title = document.getElementById("title"),
    adv = document.querySelectorAll(".adv"),
    column = document.querySelectorAll(".column"),
    question = prompt("Как вы относитесь к технике apple ?",""),
     propt = document.querySelector(".prompt"); 



  
newLi.classList.add("menu-item");
newLi.innerHTML = "Пятый пункт";
menu.appendChild(newLi);
menu.insertBefore(li[2], li[1]);
//body.style.background = "url(img/apple_true.jpg) center no-repeat";
title.innerHTML = "Мы продаем только подлинную технику Apple";
column[1].removeChild(adv[0]);
propt.innerHTML = question;


