const INITIAL_STATE = {
    tasks: []
}

const UPDATE_TASKS = 'UPDATE_TASKS';



export default function reducer(state=INITIAL_STATE, action){
    switch(action.type){
        case UPDATE_TASKS:
        return {...state, tasks: [...action.payload]};
        default: return state;
    }
}

export function addTask(task){
    return{
        type: UPDATE_TASKS,
        payload: task
    }
}