import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask, getTasks, deleteTask, completeTask} from '../../ducks/reducer';
import './Tasks.css';
import { Link } from 'react-router-dom';

class Tasks extends Component {
    constructor(){
        super();
        this.state={
                title: '',
                description: '',
                completed: false,
                tasks: []
        }
    }
            componentDidMount(){
                this.props.getTasks();
            }

            updateTitle(val){
                this.setState({
                    title: val
                })
                // console.log(this.state.title)
            }
            updateDesc(val){
                this.setState({
                    description: val
                })
            }

    render() {
        const showTasks = this.props.tasks.map(task=>{
            return(
                <div className={task.completed === true ? 'completed' : 'task'} key={task.id}>
                    <Link to={`/editmode/${task.id}`} className='tasklink'><p>{task.title}</p></Link>
                    <div>
                    <button className='complete' onClick={()=>this.props.completeTask(task.id, true)}>Complete</button>
                    <div className='delete' onClick={()=>this.props.deleteTask(task.id)}>&times;</div>
                    </div>
                </div>
            )
        })
        return (
            <div className='todolist'>
                <div className='todobox'>
                <h1>TO-DO:</h1>
                <input className='input' placeholder='title' type='text' onChange={e => this.updateTitle(e.target.value)} />
                {/* <input className= 'input' placeholder='description' type='text' onChange={e=> this.updateDesc(e.target.value)} /> */}
                <button className='todobtn' onClick={()=>this.props.addTask(this.state.title)}>Add new To-do</button>
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
export default connect(mapStateToProps, { addTask, getTasks, deleteTask, completeTask })(Tasks);