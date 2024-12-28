
const validarBody = (request,response,next) => {
    const {body} = request

    if(body.title === undefined){
       return esponse.status(400).json({message: 'O título é obrigatório'})
    }
    if(body.title === ''){
      return response.status(400).json({message: 'O título não pode ser vazio'})
    }

    next()
}

module.exports ={
    validarBody
}