import React from 'react';
import './Task.scss';
import { Draggable } from 'react-beautiful-dnd';
import 'font-awesome/css/font-awesome.min.css';
import { connect } from 'react-redux';
import { removeTaskItem } from '../../redux/actions/tasks/tasks';

class TaskComponent extends React.Component {

  removeTask(taskIndex, currentIndex) {
    const { removeTaskItem } = this.props;
    removeTaskItem(taskIndex, currentIndex);
  }

  render() {
    const { title, tasksId, id } = this.props; 
    return (
      <Draggable
        draggableId={`${tasksId}-${id}`}
        index={id}>
        {(provided, snapshot) => (
          <div
            className={`task ${snapshot.isDragging ? 'isDragging' : '' }`}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}>
            {title}
            <i className="fa fa-trash" onClick={() => {this.removeTask(tasksId, id)}}></i>
          </div>
        )}
      </Draggable>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  removeTaskItem: (taskIndex, currentIndex) => dispatch(removeTaskItem(taskIndex, currentIndex)),
})

export default connect(undefined, mapDispatchToProps)(TaskComponent);

