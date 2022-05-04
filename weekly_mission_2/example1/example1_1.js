
console.log("Js Object")
//objeto de js
const woopa_obj = {
    name: "Woopa",
    mission: "Node JS",
    age: "12",
    color: "pink"
}
console.log(woopa_obj)
console.log("\nOOP")
//Crear una clase
class Ajolonauta{
    constructor(name,mission,age,color){
        this.name = name
        this.mission = mission
        this.age = age
        this.color = color
    }

    sayHello(){
        return `${this.name} says: Hey! Hello explorer :)`
    }
}
console.log(Ajolonauta)

const woopa = new Ajolonauta("Woopa","Node JS", 18, "Pink") //Instanciar un objeto llamado 'woopa'
console.log(woopa) // Imprimimos nuestro objeto POO
console.log(woopa.sayHello) // Imprimimos propiedades de la funcion

const wooper = new Ajolonauta("Wooper","Java", 10, "Blue") //Instanciamos un nuevo objeto llamado 'wooper'
console.log(woopa) // Imprimimos nuestro nuevo objeto POO
console.log(wooper.sayHello()) // Ejecutamos e imprimimos la funcion