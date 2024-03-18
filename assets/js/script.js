// _____ Ejercicio 3 _____
//Event listeners

const ele = document.getElementById("ele1")
    ele.addEventListener("click", function() {
    pintarYellow('yellow');
})

//Funciones

let pintarYellow = function (color = "green") {
    ele.style.backgroundColor = color;
}

pintarYellow()



