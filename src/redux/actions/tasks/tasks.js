import {
  GET_TASKS,
  REMOVE_TASK_ITEM,
  APPEND_TASK_ITEM,
  ADD_LIST,
  ADD_TASK,
  REMOVE_TASK,
} from '../../actions/actionTypes';

export const getTasks = () => ({
  type: GET_TASKS,
});

export const removeTaskItem = (taskIndex, itemIndex) => ({
  type: REMOVE_TASK_ITEM,
  taskIndex, 
  itemIndex,
});

export const appendTaskItem = (taskIndex, itemIndex, task) => ({
  type: APPEND_TASK_ITEM,
  taskIndex, 
  itemIndex,
  task,
});

export const addTask = (taskIndex, itemIndex, title) => ({
  type: ADD_TASK,
  taskIndex,
  itemIndex,
  title,
});

export const addList = (taskIndex, title) => ({
  type: ADD_LIST,
  taskIndex,
  title,
});

export const removeTask = (taskIndex) => ({
  type: REMOVE_TASK,
  taskIndex,
});