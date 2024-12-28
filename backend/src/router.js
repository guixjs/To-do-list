const express = require('express')
const taskController = require('./controllers/taskcontroller')
const router = express.Router()

router.get('/tasks', taskController.getAll)
router.post('/tasks', taskController.addTask)

module.exports = router