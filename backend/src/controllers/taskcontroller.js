const tasksModels = require('../models/tasksmodels')

const getAll = async(_request,response) => {
    const tasks = await tasksModels.getAll()
    return response.status(200).json(tasks)
}

const addTask = async(request, response)=>{
    const createdTask = await tasksModels.addTask(request.body)
    return response.status(201).json(createdTask)
}

const deletarTask = async(request,response) =>{
    const { id } = request.params
    await tasksModels.deletarTask(id)
    return response.status(204).json()
} 

const updatedTask = async(request,response) =>{
    const { id } = request.params
    await tasksModels.updateTask(id, request.body)
    return response.status(204).json()
} 

module.exports = {
    getAll,
    addTask,
    deletarTask,
    updatedTask
}