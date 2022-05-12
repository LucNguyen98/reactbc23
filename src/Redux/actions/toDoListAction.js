import axiosIntance from "../../services/api/axiosInstance";

export const getTaskApiAction = async (dispatch) => {
  try {
    let result = await axiosIntance.get("api/ToDoList/GetAllTask");
    if (result.status === 200) {
      dispatch({
        type: "GET_TASK_TODO",
        data: result.data,
      });
    }
  } catch (error) {}
};

// Closure function
export const addTaskApiAction = (taskData) => async (dispatch, getState) => {
  try {
    const result = await axiosIntance.post("api/ToDoList/AddTask", taskData);
    if (result.status === 200) dispatch(getTaskApiAction);
  } catch (error) {}
};

export const deleteTaskApiAction = (taskName) => async (dispatch, getState) => {
  try {
    const result = await axiosIntance.delete(
      `api/ToDoList/deleteTask?taskName=${taskName}`
    );
    if (result.status === 200) dispatch(getTaskApiAction);
  } catch (error) {}
};

export const doneTaskApiAction = (taskName) => async (dispatch, getState) => {
  try {
    const result = await axiosIntance.put(
      `api/ToDoList/doneTask?taskName=${taskName}`
    );
    if (result.status === 200) dispatch(getTaskApiAction);
  } catch (error) {}
};

export const rejectTaskApiAction = (taskName) => async (dispatch, getState) => {
  try {
    const result = await axiosIntance.put(
      `api/ToDoList/rejectTask?taskName=${taskName}`
    );
    if (result.status === 200) dispatch(getTaskApiAction);
  } catch (error) {}
};
