import React, { Component } from 'react'
import Child from './Child';

export default class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            like: 1,
            obj: {
                number: 1
            }
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps(newProps, currentState) {
        // Đây là hàm dùng để tiền xử lúc các giá trị state và props trước khi render
        console.log('getDerivedStateFromProps');
        return currentState // return new state
    }


    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate', { newProps, newState })
        return true
    }



    render() {
        console.log('render')
        return (
            <div>
                <h3>Lifecycle</h3>
                <div className='p-5 bg-dark text-white'>
                    <h3>Parent Component</h3>

                    <p>Number : {this.state.obj.number}</p>

                    <button className="btn btn-outline-primary mr-2" onClick={() => {
                        let newObj = { ...this.state.obj };
                        newObj.number += 1;
                        this.setState({
                            obj: newObj
                        })
                    }}>+</button>
                    <button className="btn btn-outline-primary ml-2" onClick={() => {
                        let newObj = { ...this.state.obj };
                        newObj.number -= 1;
                        this.setState({
                            obj: newObj
                        })
                    }}>-</button>
                    <hr />

                    <h3>Like : {this.state.like}</h3>
                    <button className="btn btn-outline-danger" onClick={() => {
                        this.setState((preState) => ({ like: preState.like + 1 }))
                    }}>like</button>
                    <div className='bg-success p-5'>
                        <Child object={this.state.obj} />
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {

    }
}
