import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTaskApiAction,
  deleteTaskApiAction,
  doneTaskApiAction,
  getTaskApiAction,
  rejectTaskApiAction,
} from "../../../Redux/actions/toDoListAction";

export default function ToDoListApp() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.toDoListReducer.tasks);

  const taskRef = useRef({ taskName: "" });

  useEffect(() => {
    dispatch(getTaskApiAction);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    taskRef.current[name] = value;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addTaskApiAction(taskRef.current));
  };

  const delTask = (taskName) => {
    dispatch(deleteTaskApiAction(taskName));
  };

  const doneTask = (taskName) => {
    dispatch(doneTaskApiAction(taskName));
  };

  const rejectTask = (taskName) => {
    dispatch(rejectTaskApiAction(taskName));
  };

  return (
    <div className="container">
      {/* <button className='btn btn-success' onClick={() => {
        this.getAllTaskApi();
    }}>Get all task</button> */}
      <h3 className="text-center display-4">To do list</h3>

      <form
        className="d-flex justify-content-center mb-3"
        onSubmit={handleSubmit}
      >
        <div className="input-group w-50">
          <input
            type="text"
            name="taskName"
            id="taskName"
            className="form-control mr-2"
            onChange={handleChange}
          />
          <button className="btn btn-success" type="submit">
            Add Task
          </button>
        </div>
      </form>

      <div className="d-flex justify-content-center">
        <table className="table w-50 text-center">
          <tbody>
            {tasks
              .filter((task) => !task.status)
              .map((task, index) => {
                return (
                  <tr key={index + ""}>
                    <td>{task.taskName}</td>
                    <td>
                      <span className="badge badge-danger">incomplete</span>
                      <span
                        className="fa fa-check ml-2 text-success"
                        style={{ fontSize: 25, cursor: "pointer" }}
                        onClick={() => doneTask(task.taskName)}
                      ></span>
                      <span
                        className="fa fa-trash ml-2 text-danger"
                        style={{ fontSize: 25, cursor: "pointer" }}
                        onClick={() => delTask(task.taskName)}
                      ></span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
          <tfoot>
            {tasks
              .filter((task) => task.status)
              .map((task, index) => {
                return (
                  <tr key={index + ""}>
                    <td>{task.taskName}</td>
                    <td>
                      <span className="badge badge-success">complete</span>
                      <span
                        className="fa fa-undo ml-2 text-warning"
                        style={{ fontSize: 25, cursor: "pointer" }}
                        onClick={() => rejectTask(task.taskName)}
                      ></span>

                      <span
                        className="fa fa-trash ml-2 text-danger"
                        style={{ fontSize: 25, cursor: "pointer" }}
                        onClick={() => delTask(task.taskName)}
                      ></span>
                    </td>
                  </tr>
                );
              })}
          </tfoot>
        </table>
      </div>
    </div>
  );
}
