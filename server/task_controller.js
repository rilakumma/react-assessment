module.exports = {
    getTasks: (req, res) =>{
        req.app.get('db').get_tasks().then(tasks=>{
            res.status(200).send(tasks);
            console.log('---tasks',tasks);
        })
    },
    addTask: (req,res)=>{
        req.app.get('db').add_task({title: req.body.task.title, description: req.body.task.description}).then(tasks=>{
            res.status(200).json(tasks);
            console.log('---addtask', tasks);
        })
    },
    deleteTask: (res,req)=>{
        req.app.get('db').delete_task({id: req.params.id}).then(tasks=>{
            res.status(200).json(tasks);
        })
    }
}