import React from 'react';
import './AddList.scss';
import { connect } from 'react-redux';
import { addList } from '../../redux/actions/tasks/tasks';

class AddListComponent extends React.Component {
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
    const {addList, tasks} = this.props;
    if(this.state.title && this.state.title.length > 0) {
      addList(tasks, this.state.title);
      this.setState({ title: ''});
      this.showAddTask(false);
    }
  }

  onKeyboardPressHandler(event) {
    if(event.code === 'Enter') {
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
    const { tasks } = this.props; 
    return(
      <div className="tasks add-task">
        { 
          this.state.show ?
          <div>
            <input type="text" placeholder="Enter a task for this title" 
              onChange={(event) => {this.onChangeHandler(event)}}
              onKeyPress={(event) => {this.onKeyboardPressHandler(event)}}
              value={this.state.title}/>
            <div className="button-container">
              <button onClick={() => {this.addTaskHandler()}}>
                <i className="fa fa-plus"></i>Add list
              </button>
              <button className="close" onClick={()=>{this.showAddTask(false)}}>
                <i className="fa fa-times"></i> 
              </button>
            </div>
          </div> :
          <div>
            <button onClick={()=>{this.showAddTask(true)}}>
              <i className="fa fa-plus"></i> 
              { tasks.length === 0 ? 'Add a list': 'Add another list' }
            </button>
          </div>
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addList: (currentIndex, title) => dispatch(addList(currentIndex, title)),
})

export default connect(undefined, mapDispatchToProps)(AddListComponent);
