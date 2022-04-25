import React, { useState } from 'react'

export default function ApiRfc() {
    const [arrTask, setArrTask] = useState([]);
    return (
        <div className='container'>
            {/* <button className='btn btn-success' onClick={() => {
        this.getAllTaskApi();
    }}>Get all task</button> */}
            <h3 className='text-center display-4'>To do list</h3>
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
