import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import axiosIntance from "../../../services/api/axiosInstance";

export default function ApiReduxHooks() {
    const dispatch = useDispatch();
    const { data, isLoading, error } = useSelector((rootState) => rootState.taskReducer);


    useEffect(() => {
        const getTasks = async () => {
            try {
                dispatch({ type: 'GET_TASKS_PENDING' })
                let result = await axiosIntance.get('api/ToDoList/GetAllTask');
                if (result.status === 200) {
                    dispatch({
                        type: 'GET_TASKS_FULFILLED',
                        data: result.data
                    })
                    return;
                }
                dispatch({
                    type: "GET_TASKS_REJECTED",
                    error: result.data
                })

            } catch (error) {
                dispatch({
                    type: "GET_TASKS_REJECTED",
                    error: error.response.data
                })
                console.log({ error })
            }
        };

        getTasks()
    }, []);


    if (isLoading) return <div class="container text-center">
        <span>Loading...</span>
    </div>

    if (error) return <p>{error}</p>

    return <div className='container'>
        <h3 className='text-center display-4'>To do list</h3>
        {/* Search */}
        {/* <div className="form-group">
            <label htmlFor="search">Search</label>
            <input type="text" id="search" className="form-control" value={search} onChange={(evt) => {
                const { value } = evt.target;
                setSearch(value);
            }} />
            <button className=" btn btn-success mt-3" onClick={handleSearch}>Search</button>
        </div> */}

        <div className='d-flex justify-content-center'>
            <table className='table w-50 text-center'>
                <tbody>

                    {data.filter(task => !task.status).map((task, index) => {
                        return (
                            <tr key={index + ''}>
                                <td>{task.taskName}</td>
                                <td>
                                    <span className="badge badge-danger">incomplete</span>
                                    <span className="fa fa-times ml-2 text-danger" style={{ fontSize: 25 }}></span>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
                <tfoot>
                    {data.filter(task => task.status).map((task, index) => {
                        return (
                            <tr key={index + ''}>
                                <td>{task.taskName}</td>
                                <td>
                                    <span className="badge badge-success">complete</span>
                                    <span className="fa fa-check ml-2 text-success" style={{ fontSize: 25 }}></span>
                                </td>
                            </tr>
                        )
                    })}
                </tfoot>
            </table>
        </div>
    </div>
}
