  const user_1 = {
  name: "Artur",
  age: 15,
  hobbies: ["nadar", "correr", "sair"]
}
  const user_2 = {
  name: "Joao",
  age: 19,
  hobbies: ["jogar", "comer", "dormir"]
}
function saudacao(user){
  console.log(`Olá, ${user.name}, sei que seus hobbies são: ${user.hobbies.join(", ")}`)
  if(user.age >= 18){
    console.log("Você pode dirigir para fazer seus hobbies")
  }
  else{
    console.log("Infelizmente você não pode dirigir, faça o uso de transporte publico")
  }
}

saudacao(user_1)
saudacao(user_2)