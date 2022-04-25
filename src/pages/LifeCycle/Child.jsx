import React, { Component, PureComponent } from 'react'

// PureComponent : không có lifecycle shouldComponentUpdate(Vì react sẽ tự xử lý nhận biết props thay đổi hay không).
// Lưu ý : Sự nhận biết các props của PureComponent chỉ ở mức shallow compare (Nhận biết props trước khi thay đổi và sau khi thay đổi có giống nhay không ở kiểu dữ liệu primitive value(number,string,boolean,null,undefine))


export default class Child extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
        console.log('constructor child')
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps child')
        return currentState
    }

    // shouldComponentUpdate(newProps, newState) {
    //     //this.props là props hiện tại của component
    //     // newProps là props mới nhận của component trước khi render

    //     if (newProps.number !== this.props.number) {
    //         return true
    //     }
    //     return false
    // }

    render() {
        console.log('render child')
        return (
            <div>
                <h3>Child component</h3>
                <p>Number props: {this.props.object.number}</p>
            </div>
        )
    }
    timeout = null;

    // componentDidMount() {
    //     this.timeout = setInterval(() => {
    //         console.log('hello cybersoft!')
    //     }, 1000)
    // }
    // componentWillUnmount() {
    //     clearInterval(this.timeout)
    // }
}
