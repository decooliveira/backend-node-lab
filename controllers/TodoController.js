class TodoController{

    constructor() {
        this.todos = [];
        this.getTodos = this.getTodos.bind(this);
        this.createTodo = this.createTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }
   
    
    getTodos(req, res) {
        res.status(200).json(this.todos);
    }

     createTodo(req, res) {
        const todo = req.body; //req.body, req.headers, req.params
  
        if (todo.description === undefined || todo.completed === undefined) {
            return res.status(400).send();
        }
        
        this.todos.push(todo);

        res.status(201).send();
    }

     updateTodo(req, res) {
        const id = req.params.id;
        const todo = req.body;
        //get object from array
        const index = this.todos.map(t => t.id === Number(id));

        //update the object
        if (index !== -1) {
            this.todos[index].description = todo.description;
            this.todos[index].completed = todo.completed;
        }

        //return response
        return res.status(200).json(this.todos);
    }

     deleteTodo(req, res) {
        const id = req.params.id;
   
        const index = this.todos.findIndex(t => t.id === Number(id));

        if (index !== -1) {
            
            this.todos.splice(index, 1);
        }
        return res.status(200).json(this.todos);
    }
}

module.exports = new TodoController(); 