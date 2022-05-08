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
