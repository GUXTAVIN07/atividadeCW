let array1 = [1, 3, 6, 8, 9, 4];
const listarDados = array1.forEach((elemento)=>{
    console.log(elemento * 2)
})
console.log(typeof listarDados)

const multiplicarPorCinco = array1.map((elemento)=>{
  return elemento * 5

})
console.log( typeof multiplicarPorCinco)

const maisdois = multiplicarPorCinco.map((elemento)=>{

       return elemento + 2
})
console.log(maisdois)


