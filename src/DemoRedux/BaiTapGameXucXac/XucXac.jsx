import React, { Component } from 'react'
import { connect } from 'react-redux'

export class XucXac extends Component {
    render() {
        return (
            <div className='container text-center'>
                <div className="row">
                    <div className="col-4">
                        <button className="btn btn-success" onClick={() => {
                            const action = {
                                type: 'DAT_CUOC',
                                banChon: true
                            }
                            this.props.dispatch(action)
                        }}>
                            <div className="display-4 p-5 text-white bg-success">Tài</div>
                        </button>
                    </div>
                    <div className="col-4">
                        {this.props.mangXucXac.map((xx, index) => (
                            <img key={index + ''} src={xx.hinhAnh} alt="..." width={50} height={50} />
                        ))}

                        <br />

                        <div className='display-4 text-danger mt-3'>
                            <span>
                                {this.props.tongDiem > 11 ? 'Tài' : 'Xỉu'} - {this.props.tongDiem}
                            </span>
                        </div>
                    </div>
                    <div className="col-4" onClick={() => {
                        const action = {
                            type: 'DAT_CUOC',
                            banChon: false
                        }
                        this.props.dispatch(action)
                    }}>
                        <button className="btn btn-success">
                            <div className="display-4 p-5 text-white bg-success">Xỉu</div>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    mangXucXac: state.gameXucXacReducer.mangXucXac,
    tongDiem: state.gameXucXacReducer.tongDiem || 0,
})


export default connect(mapStateToProps)(XucXac)

/*
Có 2 cách dispatch : 
 1. Sử dụng this.props.dispatch -> phải connect redux
 2. Định nghĩa hàm mapDispatchToProps
*/