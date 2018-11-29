import axios from 'axios';

export const getTasks = () => axios.get('https://practiceapi.devmountain.com/api/tasks').then(res => res.data);

export const newTask = (title) => axios.post('https://practiceapi.devmountain.com/api/tasks', {title: title}).then(res=> res.data);

export const deleteTask = (id) => axios.delete(`https://practiceapi.devmountain.com/api/tasks/${id}`).then(res=> res.data);

export const completeTask = (id, completed) => axios.put(`https://practiceapi.devmountain.com/api/tasks/${id}`, {completed: completed}).then(res=> res.data);

export const editTask = (id, title,description)=> axios.patch(`https://practiceapi.devmountain.com/api/tasks/${id}`, {title: title, description: description}).then(res=> res.data);
