
let produtos = [
    { nome: "camiseta", categoria: "Roupas"},
    { nome: "celular", categoria: "eletronicos"},

];

let precos = [
    { nome: "camiseta", preco: 20},
    { nome: "celular", preco: 500},

];

[{ nome: "camiseta", categoria: "Roupas",}]

console.log(precos[1].preco)
console.log(produtos[0].nome)

//att01
const combinarProdutos = (products, prices) => {
    return products.map((products)=> {

        let precoProduto = prices.find((price)=>price.nome === products.nome)
        

        return {
            nome: products.nome,
            categoria: products.categoria,
            preco: precoProduto.preco
        }
    })
}
combinarProdutos(produtos, precos)
console.log(combinarProdutos(produtos, precos))

//att02
const buscarprodutoPorCategoria = (categoria, arrayProdutos) => {
    // console.log('dentro da funçao: ',categoria)
    // console.log('dentro da funçao: ',arrayProdutos)
    return arrayProdutos.filter((produtos)=> produtos.categoria === categoria)
     
};
filtracategoria("eletronico", produtos)
console.log(filtracategoria('eletronicos', produtos))

//att03
let quantidade = [3, 1];
const precoTotal = (arrayProdutos, arrayquantidades) =>{
    // console.log('Dentro da função: ', arrayprodutos)
    //console.log('dentro da função: ',arrayquantidades)

    return arrayProdutos.map((produtos)=>{
        let precovenda = produtos.preco
        console.log(precovenda)
        return{
            nome: produtos.nome,
            prec: produtos.preco,
            valorTotal: precovenda,

        
        }
    })
}

precoTotal(intens, quantidade)
