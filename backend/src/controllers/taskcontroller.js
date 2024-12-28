const tasksModels = require('../models/tasksmodels')

const getAll = async(_request,response) => {
    const tasks = await tasksModels.getAll()
    return response.status(200).json(tasks)
}

const addTask = async(request, response)=>{
    const createdTask = await tasksModels.addTask(request.body)
    return response.status(201).json(createdTask)
}

module.exports = {
    getAll,
    addTask,
}