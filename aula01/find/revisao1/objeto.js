const array = [3, 4, 5, 6,];
const objeto = {
    //pares -> chave: valor
    0: 3,
    1: 4,
    2: 5,
    3: 6,
};
console.log(array[2])
console.log(objeto[2])

//coleção de objetos
const data = {
    pessoa1: {
    nome: 'joe',
    idade: 32,
    //[0:1,1:2]
    endereco: [
        {
            tipo: 'residencial',
            rua: "Rua A",
            cidade: "Maceio"
        },
    ],
  },
    pessoa2: {

    },
};

//idade de Joe
console.log(data.pessoa1.nome)
//Endereco comercial de maria
console.log(data.pessoa2.endereco[1])
//listem todos os enderecos de maria
console.log(
    data.pessoa2.endereco.array.forEach((end)=>{
        console.console.log(end.tipo);
        
    })
);
