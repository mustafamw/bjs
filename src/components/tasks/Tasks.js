import React from 'react';
import './Tasks.scss';
import TaskComponent from '../task/Task';
import { Droppable } from 'react-beautiful-dnd';
import AddTaskComponent from '../addTask/AddTask';

class TasksComponent extends React.Component {

  removeTask(tasksId) {
    const { removeTask } = this.props;
    removeTask(tasksId);
  }

  render() {
    const { title, items, id: tasksId } = this.props;
    const task = items.map((task, index) => (<TaskComponent key={index} tasksId={tasksId} id={index} {...task}/>))
    return (
      <div className="tasks">
        <i className="fa fa-trash remove-list" onClick={() => {this.removeTask(tasksId)}}></i>
        <h3 className="title">{title}</h3>
        <Droppable droppableId={`${tasksId}`}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}>
              {task}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <AddTaskComponent tasksId={tasksId} items={items}/>
      </div>
    )
  }
}

export default TasksComponent;

