const express = require('express');
const Router = require('express').Router;

const app = express();

const router = Router();

const todos = [];
/*
{
    id: number
    description: string
    completed: boolean
}
*/

//routes
router.get("/api/v1/todos", (req, res, next) => {
    
    res.status(200).json(todos);
});

router.post("/api/v1/todos", (req, res, next) => {
    const todo = req.body; //req.body, req.headers, req.params
  
    if (todo.description === undefined || todo.completed === undefined) {
        return res.status(400).send();
    }
    todos.push(todo);

    res.status(201).send();
});

app.use(express.json());
app.use(router);

const port = 3000;

app.listen(port, () => {
    console.log(`Server started successfully on port ${port}`);
});