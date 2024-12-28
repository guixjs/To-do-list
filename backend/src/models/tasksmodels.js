//FUNÇÕES QUE INTERAGEM COM O BANCO DE DADOS
const connection = require('./conection')

const getAll = async()=>{
    const tasks = await connection.execute('SELECT * FROM  tasks')
    return tasks[0]
}

const addTask = async (task)=>{
    const {titulo,descricao} = task

    const dataUTC = new Date(Date.now()).toUTCString()

    const [createdTask] = await connection.execute
    ('INSERT INTO tasks(titulo, status,dt_criacao,descricao)VALUES (?,?,?,?)',[titulo,'pendente',dataUTC,descricao])
    return {insertId: createdTask.insertId}
}

const deletarTask = async(id) => {
    const [removedTask] = await connection.execute('DELETE FROM tasks WHERE id = ?',[id])
    return removedTask
}

const updateTask = async(id,task)=>{
    const {titulo, status} = task
    const query = 'UPDATE tasks SET titulo =?, status = ? WHERE id = ?'
    const [updatedTask] = await connection.execute(query, [titulo,status, id])
    return updateTask
}

module.exports = {
    getAll,
    addTask,
    deletarTask,
    updateTask
}