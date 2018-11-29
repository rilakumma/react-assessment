import * as tasks from '../services/tasks';

const INITIAL_STATE = {
    tasks: [],
    loading: false
}

const ADD_TASK = 'UPDATE_TASKS';
const ADD_TASK_PENDING = 'ADD_TASK_PENDING';
const ADD_TASK_FULFILLED = 'ADD_TASK_FULFILLED';

const UPDATE_STATUS ='UPDATE_STATUS';
const UPDATE_STATUS_PENDING = 'UPDATE_STATUS_PENDING';
const UPDATE_STATUS_FULFILLED = 'UPDATE_STATUS_FULFILLED';

const DELETE_TASK = 'DELETE_TASK';
const DELETE_TASK_PENDING = 'DELETE_TASK_PENDING';
const DELETE_TASK_FULFILLED ='DELETE_TASK_FULFILLED';

const GET_TASKS ='GET_TASKS';
const GET_TASKS_PENDING ='GET_TASKS_PENDING';
const GET_TASKS_FULFILLED ='GET_TASKS_FULFILLED';

const EDIT_TASK = 'EDIT_TASK';
const EDIT_TASK_PENDING = 'EDIT_TASK_PENDING';
const EDIT_TASK_FULFILLED = 'EDIT_TASK_FULFILLED';


export default function reducer(state=INITIAL_STATE, action){
    switch(action.type){
        case GET_TASKS_PENDING:
            return Object.assign({}, state, {loading: true});
        case GET_TASKS_FULFILLED:
            return Object.assign({}, state, {loading: false, tasks: action.payload});
        case ADD_TASK_PENDING:
            return Object.assign({}, state, {loading: true});
        case ADD_TASK_FULFILLED:
            return Object.assign({}, state, {tasks:[...action.payload]});
        case DELETE_TASK_PENDING:
            return Object.assign({}, state, {loading: true});
        case DELETE_TASK_FULFILLED:
            return Object.assign({}, state, {tasks: [...action.payload]});
        case UPDATE_STATUS_PENDING:
            return Object.assign({}, state, {loading: true});
        case UPDATE_STATUS_FULFILLED:
            return Object.assign({}, state, {tasks:[...action.payload]});
        case EDIT_TASK_PENDING:
            return Object.assign({}, state, {loading: true});
        case EDIT_TASK_FULFILLED:
            return Object.assign({}, state, {tasks: [...action.payload]});
        default: return state;
    }
}
export function getTasks(){
    return{
        type: GET_TASKS,
        payload: tasks.getTasks()
    }
}

export function addTask(title){
    return{
        type: ADD_TASK,
        payload: tasks.newTask(title)
    }
}

export function completeTask(completed){
    return{
        type: UPDATE_STATUS,
        payload: tasks.completeTask(completed)
    }
}
export function editTask(id, title,description){
    return{
        type: EDIT_TASK,
        payload: tasks.editTask(id,title,description)
    }
}
export function deleteTask(id){
    return{
        type: DELETE_TASK,
        payload: tasks.deleteTask(id)
    }
}