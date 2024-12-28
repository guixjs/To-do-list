//FUNÇÕES QUE INTERAGEM COM O BANCO DE DADOS
const connection = require('./conection')

const getAll = async()=>{
    const tasks = await connection.execute('SELECT * FROM  tasks')
    return tasks[0]
}

const addTask = async (task)=>{
    const {titulo,descricao} = task

    const dataUTC = new Date(Date.now()).toUTCString()

    const createdTask = await connection.execute
    ('INSERT INTO tasks(titulo, status,dt_criacao,descricao)VALUES (?,?,?,?)',[titulo,'pendente',dataUTC,descricao])
    return createdTask[0]
}

module.exports = {
    getAll,
    addTask
}