import React, { Component } from 'react';
import { connect } from 'react-redux';

class BaiTapChonXeRedux extends Component {
    render() {
        return (
            <div className='container'>
                <h3>Bài tập chọn xe</h3>
                <div className='row'>
                    <div className="col-6">
                        <img src={this.props.stateImgCar} alt="car" width={'100%'} />
                    </div>

                    <div className="col-6">
                        <div className="row">
                            <div className="col-3">
                                <button className="btn text-white" style={{
                                    backgroundColor: 'red'
                                }} onClick={() => {
                                    this.props.changeColor('red')
                                }}>Red</button>
                            </div>
                            <div className="col-3">
                                <button className="btn text-white" style={{
                                    backgroundColor: 'black'
                                }} onClick={() => {
                                    this.props.changeColor('black')
                                }}>Black</button>
                            </div>
                            <div className="col-3">
                                <button className="btn text-white" style={{
                                    backgroundColor: 'silver'
                                }} onClick={() => {
                                    this.props.changeColor('silver')
                                }}>Sliver</button>
                            </div>
                            <div className="col-3">
                                <button className="btn text-white" style={{
                                    backgroundColor: 'grey'
                                }} onClick={() => {
                                    this.props.changeColor('grey')
                                }}>Grey</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        stateImgCar: rootReducer.stateImgCar,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeColor: (newColor) => {
            const action = {
                type: 'CHANGE_COLOR',
                newColor
            }
            dispatch(action)
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BaiTapChonXeRedux)