function hello(name) {
        return "Hola " + name
    }

console.log(hello("Albert"))

function add(x, y = 0) {

    /* if(y == undefined){
        y = 0
    }*/

    return x + y
}

console.log(add(10,10))

const user = {
    name: "Albert",
    lastname: "Gil",
    age: 29,
    adress: {
        country: "Spain",
        city: "Barcelona"
    },

    friends: ["Bernat", "Marcel", "Sergi"],
    active: true,
    sendMail: function() {
        return "Enviando email..."
    }

}

console.log(user)
console.log(user.adress)
console.log(user.adress.city)
console.log(user.sendMail())

const name = "laptop"
const price = 3000

const newProduct = {
    name: name,
    /*name, */
    price: price
    /* price */
}

console.log(newProduct)

/* -------------------- */

const title = document.createElement("h1")
title.innerText = "Hole desde JS"

const button = document.createElement("button")
button.innerHTML = "click"

button.addEventListener("click", function (){
    /*console.log("Hola Mundo")*/
    title.innerText = "Texto actualizado desde JS"
    alert("Se ha realizado un click")
})

document.body.append(title)
document.body.append(button)

function printInfo(user) {

    const {name, age} = user
    console.log(name, age)

    return "<h1>Hola " + user.name + "</h1>"
}

printInfo(user)

console.log(printInfo(user))

document.body.innerHTML = printInfo(user)

/* -------------------- */

console.log(function(){
    return "Empezando..."
}())

const add2 = () => {
    return x * y
}

/*const showText = () => {
    return "Hola Mundo"
}

console.log(showText())*/

const showText = () => "Hola Mundo"
const showNumber = () => 22;
const showBoolean = () => true;
const showArray = () => [1,2,3]
const showObject = () => ({})

console.log(showText())
console.log(showNumber())
console.log(showBoolean())
console.log(showArray())
console.log(showObject())

const background = 'red'
const color = 'white'
const isAuthorized = true

const anonymous = document.createElement("button")

anonymous.innerText = "click me"
anonymous.style = `background: ${isAuthorized ? 'blue' : background}; color: ${color}`

anonymous.addEventListener("click", function(){

    if (isAuthorized) {
        return alert("Está autorizado")
    }

        alert("No está autorizado")
    
})

document.body.append(anonymous)

/* -------------------- */

const names = ['Albert','Bernat','Marcel']
const otherNames = ['Sergi, Marc, Xavi']

/* for (let i = 0; i < names.length; i++) {
    const element = names [i];
    console.log(element)
}*/

names.forEach(function(name) {
    console.log(name)
})

const newNames = names.map(function(name){
    return `Hola ${name}`
})

console.log(names)
console.log(newNames)

const findNames = names.find(function(name) {
    if (name === "Albert"){
        return name
    }
})

console.log(findNames)

const filterNAme = names.filter(function(name) {
    if (name != "Albert"){
        return name
    }
})

console.log(filterNAme)

console.log(names.concat(otherNames))
console.log([...names, ...otherNames])

// https://www.faztweb.com/contenido/javascript-arrays-replit

import {addFunction, multiplyFunction, titleFunction, activeFunction, pointsFunction}
from "./add.js"

console.log(addFunction(10, 20))
console.log(multiplyFunction(10, 20))

console.log(user)

if (user.location){
    console.log(user.location?.city)
}

// https://jsonplaceholder.typicode.com/

let data = fetch("https://jsonplaceholder.typicode.com/posts")
const ul = document.createElement("ul")
const li = document.createElement("li")

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function() {
        console.log("Finaliza la carga")
    })

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(response) {
        return response.json()
    }).then(function(data){
        console.log(data)
        // data.forEach(function(post){
        //     const li = document.createElement("li");
        //     li.innerText = post.title
        //     ul.append(li)
        // });
        // document.body.append(ul)
    })

async function loadData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")

    const dataAwait = await response.json()
    console.log(dataAwait)
    dataAwait.forEach(function(post){
        const li = document.createElement("li");
        li.innerText = post.title
        ul.append(li)
    });
    document.body.append(ul)
}

loadData()

console.log("Línea 2")

