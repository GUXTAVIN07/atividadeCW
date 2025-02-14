const descryptId = (id) =>{
  return parseInt(id, 36)
}


//função responsavel por fazer a requisição a API
const loadCharacter = async () => {
  try {
    //request / response > res
    const res = await fetch(`${Url}/${id}`)
    if(!res.ok){
      throw new error('erro ao carregar o personagem')
    }
    const data = await res.json()
    return data
  } catch (error) {
   console.log(error)
  }
}



const loadALL = async() =>{
   const urlparams = new URLSearchParams(window.location.search)
   console.log(urlparams)
   const idParam = urlparams.get('id')
   console.log(idParam)

   if(!idParam){
    //colocar o usuarió na pagina inicial
    console.log('ID não encontrado na url')
    return
   }

   const idDescrypted = descryptId(idParam)
   console.log(idDescrypted)
   const baseUrl = `https//rickandmortyapi.com/api/character/`
}
loadALL()
