import React from 'react';
import './AddTask.scss';
import { connect } from 'react-redux';
import { addTask } from '../../redux/actions/tasks/tasks';

class AddTaskComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      title: '',
    }
  }

  onChangeHandler(event) {
    const title = event.target.value;
    if(title && title.length > 0) {
      this.setState({title})
    }
  }

  addTaskHandler() {
    const {tasksId, items, addTask} = this.props;
    if(this.state.title && this.state.title.length > 0) {
      addTask(tasksId, items.length, this.state.title);
      this.setState({ title: ''});
    }
  }

  onKeyboardPressHandler(event) {
    if(event.code === 'Enter') {
      event.preventDefault();
      this.addTaskHandler();
      return;
    }
  }

  showAddTask(show) {
    this.setState({
      show
    })
  }

  render() {
    const { items } = this.props; 
    return(
      <div className="add-task">
        { 
          this.state.show ?
          <div>
            <textarea placeholder="Enter a task for this title" 
              onChange={(event) => {this.onChangeHandler(event)}}
              onKeyDown={(event) => {this.onKeyboardPressHandler(event)}}
              value={this.state.title}>
              </textarea>
            <div className="button-container">
              <button onClick={() => {this.addTaskHandler()}}>
                <i className="fa fa-plus"></i>Add task
              </button>
              <button className="close" onClick={()=>{this.showAddTask(false)}}>
                <i className="fa fa-times"></i> 
              </button>
            </div>
          </div> :
          <div>
            <button onClick={()=>{this.showAddTask(true)}}>
              <i className="fa fa-plus"></i> 
              { items.length === 0 ? 'Add a task': 'Add another task' }
            </button>
          </div>
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addTask: (taskIndex, currentIndex, title) => dispatch(addTask(taskIndex, currentIndex, title)),
})

export default connect(undefined, mapDispatchToProps)(AddTaskComponent);
