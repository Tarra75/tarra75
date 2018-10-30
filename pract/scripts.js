document.getElementById("a").addEventListener("click", function onClick() {
    this.removeEventListener("click", onClick);

    this.style.backgroundColor = "#004f40";  
}, false);