console.log("2. Creación de un objecto con propiedad")

const explorer = {
    name: "Iker",
    age: 21,
    mission: "Node JS",
    stack: ["js", "node", "java", "vue"],
    blog: {
        url: "https://ikermarcor.github.io/my_launchx_blog/",
        posts: 5
    }// Object inside an Object
}

console.log(explorer)

console.log("Accediendo a las propiedades de un objeto")

// Two ways of accessing the value of a key
console.log(explorer.name) 
console.log(explorer["name"])
//---------------------------------
console.log("Ejemplo 3: Creacion de otro objeto con propiedades diferentes")
const cohete = {
    name:"Atlas-Centauro",
    model:"RL-10",
    missions:["json","css","js"],
    velocity:"4,418",
    capacity:{
        cargo:800,
        people:8
    }
}

console.log(cohete.missions[1])
console.log(cohete.capacity.cargo)

//---------------------------------
console.log("Ejemplo 4: Objeto con métodos!")

const ajolonauta = {
    name: "Woopa",
    mission: "Node JS",
    sayHelloToExplorers: function (){
        console.log("Soy el ajolonauta, qué onda!")
    },
    TellMeMore: function (){
        return `Ajolonauta ${this.name} has a mission of ${this.mission}.`
    }
}
console.log("Ajolonauta:")
console.log(ajolonauta)
console.log(ajolonauta.sayHelloToExplorers)
ajolonauta.sayHelloToExplorers()

console.log(ajolonauta.TellMeMore())