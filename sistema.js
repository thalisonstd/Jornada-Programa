const usuario = {
  nome: "Thalison",
  idade: 23,
  hobbies: ["jogar","comer","sair" ]

}
function saudação(){
  console.log(`Olá, ${usuario.nome}, sei que seus hobbies são: ${usuario.hobbies}`)
  if(usuario.idade >= 18){
    console.log("Você pode dirigir para fazer seus hobbies")
  }
  else{
    console.log("Infelizmente você não pode dirigir, faça o uso de transporte publico")
  }
}

saudação()