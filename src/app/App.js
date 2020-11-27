import React from 'react';
import './App.scss';
import { DragDropContext } from 'react-beautiful-dnd';
import TasksComponent from '../components/tasks/Tasks';
import AddListComponent from '../components/addList/AddList';
import { connect } from 'react-redux';
import { removeTask, removeTaskItem, appendTaskItem } from '../redux/actions/tasks/tasks';

class App extends React.Component {

  onDragEnd = (result) => {
    const { tasks, removeTaskItem, appendTaskItem } = this.props;
    const { source, destination } = result;
    if(!source || !destination) {
      return;
    }
    const sourceData = tasks[source.droppableId].items[source.index];
    removeTaskItem(source.droppableId, source.index);
    if(source.droppableId !== destination.droppableId) {
      appendTaskItem(destination.droppableId, destination.index, sourceData)
    }
    if(source.droppableId === destination.droppableId) {
      appendTaskItem(source.droppableId, destination.index, sourceData)
    }
  }

  render() {
    const { tasks, removeTask } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="tasks-container">
          {tasks.map((task, index) => (<TasksComponent key={index} id={index} {...task} removeTask={removeTask}/>))}
          <AddListComponent tasks={tasks}/>
        </div>
      </DragDropContext>
    )
  }
}

const mapStateToProps = (state) => {
  const { tasks } = state;
  return { ...tasks }
}

const mapDispatchToProps = dispatch => ({
  removeTask: (taskIndex) => dispatch(removeTask(taskIndex)),
  removeTaskItem: (taskIndex, itemIndex) => dispatch(removeTaskItem(taskIndex, itemIndex)),
  appendTaskItem: (taskIndex, itemIndex, task) => dispatch(appendTaskItem(taskIndex, itemIndex, task)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

