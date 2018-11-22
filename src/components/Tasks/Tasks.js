import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../ducks/reducer';
import axios from 'axios';
import './Tasks.css';

class Tasks extends Component {
    constructor(){
        super();
        this.state={
            task: {
                title: '',
                description: '',
                completed: false
            },
            tasks: []
        }
        this.updateStatus = this.updateStatus.bind(this);
        this.newTask = this.newTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }
    componentDidMount(){
        axios.get('/api/tasks').then(res=>{
            console.log(res.data)
            this.props.addTask(res.data);
            this.setState({
                tasks: res.data
            })
        })
    }
    updateTitle(val){
        this.setState({
            task: {...this.state.task, title: val}
        })
        console.log(this.state.task)
    }
    updateDesc(val){
        this.setState({
            task: {...this.state.task, description: val}
        })
        console.log(this.state.task)
    }
    updateStatus(prevState){
        this.setState({
            task: {...this.state.task, completed: !prevState}
        })
        console.log(this.state.task)
    }
    newTask(){
        axios.post('/api/tasks', {task: this.state.task}).then(res=>{
            console.log(res.data);
            this.props.addTask(res.data);
        })
        this.componentDidMount();
    }
    deleteTask(id){
        axios.delete(`/api/tasks/${id}`).then(res=>{
            console.log(res.data);
        })
    }

    render() {
        const showTasks = this.state.tasks.map(task=>{
            return(
                <div className={this.state.tasks.completed ? 'completed' : 'task'}>
                    <p>{task.title}</p>
                    <div>
                    <button className='complete' onClick={this.updateStatus}>Complete</button>
                    <span className='delete' onClick={this.deleteTask(task.id)}>&times;</span>
                    </div>
                </div>
            )
        })
        return (
            <div className='todolist'>
                <div className='todobox'>
                <h1>TO-DO:</h1>
                <input className='input' placeholder='title' type='text' onChange={e => this.updateTitle(e.target.value)} />
                <input className= 'input' placeholder='description' type='text' onChange={e=> this.updateDesc(e.target.value)} />
                <button className='todobtn' onClick={this.newTask}>Add new To-do</button>
                </div>


                <div className='showtasks'>
                    {showTasks}
                </div>
            </div>
        );
    }
}
function mapStateToProps(state){
    console.log(state)
    return{
        tasks: state.tasks
    }
}
export default connect(mapStateToProps, { addTask })(Tasks);