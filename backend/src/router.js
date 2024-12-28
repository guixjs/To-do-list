const express = require('express')
const taskController = require('./controllers/taskcontroller')
const taskMiddlewares = require('./middlewares/taskMiddlewares')

const router = express.Router()

router.get('/tasks', taskController.getAll)
router.post('/tasks', taskMiddlewares.validarBody,taskController.addTask)
router.delete('/tasks/:id', taskController.deletarTask)
router.put('/tasks/:id', taskController.updatedTask)

module.exports = router