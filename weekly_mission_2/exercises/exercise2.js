const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "CDMX",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

console.log("Ejercicio 2.1")
explorers.forEach(explorer => console.log(explorer.name))

console.log("\nEjercicio 2.2")
explorers.forEach(explorer => console.log(explorer.stack))

console.log("\nEjercicio 2.3")
const explorer_stack_list = explorers.map(my_explorer_in_list => my_explorer_in_list.stack)
console.log(explorer_stack_list)

console.log("\nEjercicio 2.4")
const explorers_with_js = explorers.filter(my_explorer_in_list => my_explorer_in_list.stack.includes("js"))
console.log(explorers_with_js)

console.log("\nEjercicio 2.5")
const first_explorer_in_cdmx = explorers.find(my_explorer_in_list => my_explorer_in_list.city === "CDMX")
console.log(first_explorer_in_cdmx)

console.log("\nEjercicio 2.6")
const all_exercises = explorers.reduce((acc, my_explorer_in_list) => acc + my_explorer_in_list.exercises_completed, 0)
console.log(all_exercises)

console.log("\nEjercicio 2.7")
const some_exercise_finished = explorers.some(my_explorer_in_list => my_explorer_in_list.missions.frontend.exercisesFinished === true)
console.log(some_exercise_finished)

console.log("\nEjercicio 2.8")
const every_exercise_finished = explorers.every(my_explorer_in_list => my_explorer_in_list.missions.onboarding.isFinished === true)
console.log(every_exercise_finished)
