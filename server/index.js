const express = require('express');
const bodyParser = require('body-parser');
// const massive = require('massive');
// require('dotenv').config();

// const taskController = require('./task_controller');

const app = express();
app.use(bodyParser.json());

// massive(process.env.CONNECTION_STRING).then(database=>{
//     app.set('db', database);
// }).catch(error =>{
//     console.log('Error with massive', error);
// })

app.listen(4000, ()=>{
    console.log('Server is listening on port 4000');
})

// app.get('/api/tasks', taskController.getTasks);
// app.get('/api/tasks/:id', taskController.getTask);
// app.post('/api/tasks', taskController.addTask);
// app.delete('/api/tasks/:id', taskController.deleteTask);
// app.patch('/api/tasks/:id', taskController.completeTask);