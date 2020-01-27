

// let age = document.getElementById('age');
  
// function showUser(surname, name) {
//     this.value = age.value;
// 	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// }

// showUser("kolesnik", "alex");

class Options {
    constructor(height, width, bg, fontSize, textAlign, text) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        this.text = text;
        this.createElem = function() {
        let div = document.createElement("div");
        div.classList.add("box");
        document.body.appendChild(div);
        div.style.height = this.height + "px";
        div.style.width = this.width + "px";
        div.style.backgroundColor = this.bg;
        div.style.fontSize = this.fontSize + "px";
        div.style.textAlign = this.textAlign;
        div.textContent = this.text;
        }
    }   
};

let divElem = new Options("100","200","red","35", "center", "Yes"),
    newDiv = new Options("200", "500", "blue", "20", "end", "Привет как дела?");
    newD = new Options("100", "300", "yellow", "30", "left", "Я супер крутой програмист!");

console.log(divElem.createElem());
console.log(newDiv.createElem());
console.log(newD.createElem());

