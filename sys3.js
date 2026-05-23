const user_1 = {
  name: "Alexandre",
  age: 39,
  hobbie: ["caminhar", "comer"],
  job: "Advogado"
}

const user_2 = {
  name: "Fabio",
  age: 12,
  hobbie: ["jogar", "correr"],
  job: "Motorista"
}
const user_3 = {
  name: "José",
  age: 45,
  hobbie: ["assistir tv", "pescar"],
  job: "Policial"
}

function explain(user){
  console.log(`Olá ${user.name}, verifiquei que possui ${user.age} anos e seus hobbies são ${user.hobbie.join(", ")}`)
  if(user.age >= 18){
    console.log(`Você já é maior de idade, pode se tornar ${user.job}`)
  }
  else{
    console.log(`Você ainda é menor de idade, não pode se tornar ${user.job} ainda, continue estudando!`)
  }
}

explain(user_2)