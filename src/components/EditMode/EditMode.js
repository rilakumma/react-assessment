import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import { editTask, deleteTask, completeTask } from '../../ducks/reducer';
import './EditMode.css';

class EditMode extends Component {
    constructor(){
        super();
        this.state={
            id: 0,
            title: '',
            description: ''
        }
    }
    componentDidMount(){
        sessionStorage.setItem('taskID', parseInt(this.props.match.params.id));
        const currentID = sessionStorage.getItem('taskID');
        console.log(currentID)
        
        const taskID = this.props.tasks.findIndex((val)=> val.id === parseInt(this.props.match.params.id));
        // const taskID = this.props.tasks.findIndex((val)=> val.id === parseInt(currentID));

        this.props.tasks[taskID] && 
        this.setState({
            id: this.props.tasks[taskID].id,
            title: this.props.tasks[taskID].title,
            description: this.props.tasks[taskID].description
        })
        
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

    cancelBtn(prevState){
        if(prevState){
        this.refs.editinputbox.value = prevState.title;
        this.refs.editdescbox.value= prevState.description;
        }
    }

    render() {
        
        console.log('session storage', sessionStorage.getItem('taskID'))
        
        const {id, title, description} = this.state;
        return (
            <div className='editcontainer'>
                <Link to='/' className='goback'>Back to Tasks</Link>

                        <div className='edittask' >
                        <p>title</p>
                        <input className='titleedit' value={this.state.title} onChange={e=> this.updateTitle(e.target.value)} ref='editinputbox' />
                        <p>description</p>
                        <input className='descedit' value={this.state.description} onChange={e=> this.updateDesc(e.target.value)} ref='editdescbox' />
                        <div className='buttons'>
                        <button onClick={()=> this.props.completeTask(id, true)} className='completebtn'>Complete</button>
                        <button className='completebtn' onClick={()=> this.cancelBtn()}>Cancel</button>
                        <Link to='/'><button onClick={()=> this.props.deleteTask(id)} className='deletebtn'>Delete</button></Link>
                        <Link to='/'><button onClick={()=>this.props.editTask(id, title, description)} className='save'>Save</button></Link>
                        </div>
                    
            </div>
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