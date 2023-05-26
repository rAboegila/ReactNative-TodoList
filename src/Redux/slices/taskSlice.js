import { createSlice } from "@reduxjs/toolkit";
import { filters } from "../../Shared/types";
import { Data } from "../../Shared/data";
const initialState = {
  taskList: Data,
  filteredTasks: Data,
  filter: filters.ACTIVE,
};
const addTaskReducer = (state, action) => {
  state.taskList = [action.payload, ...state.taskList];
};
const removeTaskReducer = (state, action) => {
  const index = state.taskList.indexOf(action.payload);
  state.taskList.splice(index, 1);
};
const filterTasksReducer = (state, action) => {
  state.filter = action.payload;
  if (state.filter !== filters.ALL) {
    state.filteredTasks = state.taskList.filter(
      (task) => state.filter === filters.ALL || task.status === state.filter
    );
  } else state.filteredTasks = state.taskList;
};
const updateStatusReducer = (state, action) => {
  const updatedTasks = state.taskList.map((task) => {
    if (task.id === action.payload.task.id) {
      return { ...task, status: action.payload.newStatus };
    } else {
      return task;
    }
  });
  state.taskList = updatedTasks;
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    taskAdded: addTaskReducer,
    taskRemoved: removeTaskReducer,
    filterApplied: filterTasksReducer,
    taskStatusUpdated: updateStatusReducer,
  },
});

export const { taskAdded, taskRemoved, filterApplied, taskStatusUpdated } =
  taskSlice.actions;
export const getTasks = (state) => state.tasks.taskList;
export const getFilteredTasks = (state) => state.tasks.filteredTasks;
export const getFilter = (state) => state.tasks.filter;
export const getNumTasks = (state) => state.tasks.taskList.length;
export const getNumFilteredTasks = (state) => state.tasks.filteredTasks.length;

export default taskSlice.reducer;
