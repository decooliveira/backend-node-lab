const Router = require('express').Router;
const controller = require('../controllers/TodoController');
const router = Router();
const todos = [];


//routes
router.get("/api/v1/todos", controller.getTodos);

router.post("/api/v1/todos", controller.createTodo);

router.put("/api/v1/todos/:id", controller.updateTodo);

router.delete("/api/v1/todos/:id", controller.deleteTodo);

module.exports = router;