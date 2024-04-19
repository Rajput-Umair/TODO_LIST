const router = require('express').Router();
const {createTodo} = require('../controllers/todoC')

router.post("/createTodo", createTodo)

module.exports = router