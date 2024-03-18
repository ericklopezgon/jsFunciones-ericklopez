// _____ Ejercicio 4.1 _____
// Event listeners

const divs = document.querySelectorAll("#div1, #div2, #div3, #div4")
    divs.forEach (eachDiv => {
        eachDiv.addEventListener("click", function(event) {
            const element = event.target
            backg(element)
    })
} )

//Funciones
const backg = function (element) {
    element.style.backgroundColor = "black"
}

// _____ Ejercicio 4.2 _____
//Variables
const cuadro = document.getElementById("key") 
const savedColors = (color) => {cuadro.style.backgroundColor = color}

// Event listeners
document.addEventListener('keydown', function (event) {
    const pressedKey = event.key
    printColor(pressedKey)
})

//Funciones
const printColor = (pressedKey) => {
    const verifiedKey = pressedKey.toLowerCase()

    if (verifiedKey === "a") {
        savedColors("pink") 
    } else if (verifiedKey === "s") {
        savedColors("orange")
    } else if (verifiedKey === "d") {
        savedColors("cyan")
}}

// _____ Ejercicio 4.3 _____
//Event listener
document.addEventListener('keydown', function (event) {
    const pressedKey = event.key
    divCreate(pressedKey)
})


// Funciones
const divCreate = (pressedKey) => {
    const verifiedKey = pressedKey.toLowerCase()

    if (verifiedKey === "q") {
        createDiv("purple")  
    } else if (verifiedKey === "w") {
        createDiv("gray")
    } else if (verifiedKey === "e") 
        createDiv("brown")
}

const createDiv = function (color) {
    let newDiv = document.createElement("div")
    newDiv.id = "created_div"
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    newDiv.style.marginBottom = '10px';
    document.getElementById('create_div').appendChild(newDiv);
}
