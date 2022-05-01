import React, { Component } from 'react'
import axiosIntance from '../../../services/api/axiosInstance'

export default class ApiRcc extends Component {

    state = {
        arrTask: []
    }

    getAllTaskApi = async () => {
        // let promise = axiosIntance.get('ToDoList/GetAllTask');

        // promise.then(result => {
        //     if (result.status === 200) {
        //         this.setState({
        //             arrTask: result.data
        //         });
        //         return;
        //     }

        //     alert(`Error: ${result.status} - Bad request`)

        // });

        // promise.catch((error) => {
        //     console.log(error)
        // })

        try {
            let result = await axiosIntance.get('api/ToDoList/GetAllTask');
            if (result.status === 200) {
                this.setState({
                    arrTask: result.data
                });
                return;
            }
            alert(`Error: ${result.status} - Bad request`)
        } catch (error) {
            console.log({ error })
        }
    }

    componentDidMount() {
        this.getAllTaskApi()
    }

    render() {
        return (
            <div className='container'>
                {/* <button className='btn btn-success' onClick={() => {
                    this.getAllTaskApi();
                }}>Get all task</button> */}
                <h3 className='text-center display-4'>To do list</h3>
                <div className='d-flex justify-content-center'>
                    <table className='table w-50 text-center'>
                        <tbody>

                            {this.state.arrTask.filter(task => !task.status).map((task, index) => {
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
                            {this.state.arrTask.filter(task => task.status).map((task, index) => {
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
}
