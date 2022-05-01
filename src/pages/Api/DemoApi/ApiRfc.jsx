import React, { useEffect, useState } from 'react'
import axiosIntance from '../../../services/api/axiosInstance'

export default function ApiRfc() {
    const [arrTask, setArrTask] = useState([]);
    const [search, setSearch] = useState('');

    const getAllTask = async () => {
        try {
            let result = await axiosIntance.get('api/ToDoList/GetAllTask');
            if (result.status === 200) {
                setArrTask(result.data)
                return;
            }
            alert(`Error: ${result.status} - Bad request`)
        } catch (error) {
            console.log({ error })
        }
    };

    const handleSearch = async () => {
        try {
            let result = await axiosIntance.get(`api/ToDoList/GetTask?taskName=${search}`);
            console.log('search',{result})
            if (result.status === 200) {
                setArrTask([result.data]);
                return;
            }
            setArrTask([]);
        } catch (error) {

        }
    }

    useEffect(() => {
        getAllTask();
    }, []);


    return (
        <div className='container'>
            <h3 className='text-center display-4'>To do list</h3>
            {/* Search */}
            <div className="form-group">
                <label htmlFor="search">Search</label>
                <input type="text" id="search" className="form-control" value={search} onChange={(evt) => {
                    const { value } = evt.target;
                    setSearch(value);
                }} />
                <button className=" btn btn-success mt-3" onClick={handleSearch}>Search</button>
            </div>

            <div className='d-flex justify-content-center'>
                <table className='table w-50 text-center'>
                    <tbody>

                        {arrTask.filter(task => !task.status).map((task, index) => {
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
                        {arrTask.filter(task => task.status).map((task, index) => {
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
    )
}
