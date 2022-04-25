import React, { Component } from 'react'
import { connect } from 'react-redux'

export class KetQuaTroChoi extends Component {
    render() {
        const { banChon, soBanThang, tongSoBanChoi } = this.props.gameXucXac;
        console.log({ gameXucXac: this.props.gameXucXac })
        return (
            <div className='container text-center'>
                <div>
                    <p className='display-4'>
                        BẠN CHỌN: <span className="text-warning">{banChon ? 'Tài' : 'Xỉu'}</span>
                    </p>
                </div>

                <div>
                    <p className='display-4'>
                        TỔNG SỐ BÀN THẮNG: <span className="text-success">{soBanThang}</span>
                    </p>
                </div>

                <div>
                    <p className='display-4'>
                        TỔNG SỐ BÀN CHƠI: <span className="text-warning">{tongSoBanChoi}</span>
                    </p>
                </div>
                <div>
                    <button className="btn btn-success" onClick={() => this.props.dispatch({
                        type: "PLAY_GAME"
                    })}>
                        <div className="p3 display-4 bg-success text-white">
                            Play game
                        </div>
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    gameXucXac: state.gameXucXacReducer
})


export default connect(mapStateToProps,)(KetQuaTroChoi)