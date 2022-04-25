import React, { Component } from 'react'
import { connect } from 'react-redux'

class GioHangRedux extends Component {


    tinhTongSoLuong = () => this.props.gioHang.reduce((acc, current) => {
        return acc + current?.soLuong
    }, 0);

    tinhTongTien = () => this.props.gioHang.reduce((acc, current) => {
        return acc + (current?.soLuong * current?.giaBan)
    }, 0);


    render() {
        const { gioHang, xoaGioHang } = this.props;
        return (
            <div>
                <div className="text-right">
                    <span className="text-danger font-weight-bold">Giỏ hàng ({this.tinhTongSoLuong()})</span>
                </div>

                <table className='table'>
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Giá bán</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                            <th>

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {gioHang.map((sp, index) => {
                            return (
                                <tr key={index + ''}>
                                    <td>{sp.maSP}</td>
                                    <td>{sp.tenSP}</td>
                                    <td>
                                        <img src={sp.hinhAnh} alt="" width={50} height={50} />
                                    </td>
                                    <td>{sp.giaBan.toLocaleString()} đ</td>
                                    <td>
                                        <button className='btn btn-primary mr-2' onClick={() => {
                                            this.props.tangGiamSoLuong(sp.maSP, -1)
                                        }}>
                                            -
                                        </button>
                                        {sp.soLuong}
                                        <button className='btn btn-primary ml-2' onClick={() => {
                                            this.props.tangGiamSoLuong(sp.maSP, 1)
                                        }}>
                                            +
                                        </button>
                                    </td>
                                    <td>{(sp.soLuong * sp.giaBan).toLocaleString()} đ</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => {
                                            xoaGioHang(sp.maSP)
                                        }}>Xoá</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className="text-right">
                    <span>Tổng tiền: </span>
                    <span className="font-weight-bold">  {this.tinhTongTien().toLocaleString()} đ</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        gioHang: rootReducer.stateGioHang
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSPClick) => {
            const action = {
                type: 'XOA_GIO_HANG',
                maSP: maSPClick
            };
            dispatch(action)
        },
        tangGiamSoLuong: (maSPCLick, soLuong) => {
            const action = {
                type: 'TANG_GIAM_SO_LUONG',
                maSPCLick,
                soLuong
            };
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux)