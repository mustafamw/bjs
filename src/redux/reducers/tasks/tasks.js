import {
  GET_TASKS,
  REMOVE_TASK_ITEM,
  APPEND_TASK_ITEM,
  ADD_LIST,
  ADD_TASK,
  REMOVE_TASK,
} from '../../actions/actionTypes';

const initState = {
  tasks: [
    { 
      title: 'Development', 
      items: 
      [
        { 
          title: 'Hello World' 
        }
      ] 
    }, 
    { 
      title: 'Testing', 
      items: [] 
    }, 
    { 
      title: 'Live', 
      items: [] 
    }
  ],
  id: 0
};

const tasks = (state = initState, action) => {
  const { type, taskIndex, itemIndex, task, title } = action;
  const id = state.id + 1;
  switch (type) {
    case GET_TASKS:
      return {
        ...state,
        id
      };
    case REMOVE_TASK_ITEM:
      state.tasks[taskIndex].items.splice(itemIndex, 1);
      return {
        ...state,
        id
      };
    case APPEND_TASK_ITEM:
      state.tasks[taskIndex].items.splice(itemIndex, 0, task);
      return {
        ...state,
        id
      };
    case ADD_TASK:
      state.tasks[taskIndex].items.push({
        title
      });
      return {
        ...state,
        id
      };
    case ADD_LIST:
      state.tasks.push({
        title,
        items: []
      })
      return {
        ...state,
        id
      };
    case REMOVE_TASK:
      state.tasks.splice(taskIndex, 1);
      return {
        ...state,
        id
      };
    default:
      return {
        ...state,
      };
  }
}

export default tasks;