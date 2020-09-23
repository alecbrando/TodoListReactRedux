import React from 'react';
import Task from './Task';
import { deleteTask } from '../actions/taskActions';
import { store } from '../store';

class TodoList extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    })
  }

  componentWillUnmount() {
    if(this.unsubscribe){
      this.unsubscribe();
    }
  }

  deleteTask = (id) => {
    store.dispatch(deleteTask(id));
  }

  render() {
    const tasksState = store.getState();
    const tasks = Object.values(tasksState);
    return (
      <ul>
          {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            deleteTask={this.deleteTask}
          />
        ))}
      </ul>
    );
  }
} 

export default TodoList;
