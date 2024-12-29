
const validarBody = (request,response,next) => {
    const {body} = request

    if(body.titulo === undefined){
       return response.status(400).json({message: 'O título é obrigatório'})
    }
    if(body.titulo === ''){
      return response.status(400).json({message: 'O título não pode ser vazio'})
    }

    next()
}

module.exports ={
    validarBody
}