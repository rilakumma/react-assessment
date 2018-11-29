import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import { editTask, deleteTask, completeTask } from '../../ducks/reducer';
import './EditMode.css';

class EditMode extends Component {
    constructor(){
        super();
        this.state={
            title: '',
            description: ''
        }
    }
    updateTitle(value){
        console.log(value)
        this.setState({
            title: value
        })
        
    }
    updateDesc(value){
        this.setState({
            description: value
        })
    }
    cancelBtn(){

    }
    render() {
        console.log('props',this.props)
        console.log('params',this.props.match.params.id)
        const getTask = this.props.tasks.filter(task=> task.id === parseInt(this.props.match.params.id ))
        console.log('gettask',getTask)
        console.log('prevstate.....', this.prevState);
        console.log('newstate....', this.state.title);
        const showTask = getTask.map(task=>{
            return <div className='edittask' key={task.id}>
                <input className='titleedit' value={task.title} onChange={e=> this.updateTitle(e.target.value)} />
                <input className='descedit' value={task.description} onChange={e=> this.updateDesc(e.target.value)} />
                <div className='buttons'>
                <button onClick={()=> this.props.completeTask(task.id, true)} className='completebtn'>Complete</button>
                <button className='completebtn'>Cancel</button>
                <button onClick={()=> this.props.deleteTask(task.id)} className='deletebtn'>Delete</button>
                <button onClick={()=>this.props.editTask(task.id, this.state.title, this.state.description)} className='save'>Save</button>
                </div>
            </div>
        })
        
        return (
            <div className='editcontainer'>
                <Link to='/' className='goback'>Back to Tasks</Link>
                {showTask}
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        tasks: state.tasks
    }
}
export default connect(mapStateToProps, { editTask, deleteTask, completeTask })(EditMode);