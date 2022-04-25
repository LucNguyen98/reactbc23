import React, { Component } from 'react'
import { connect } from 'react-redux'

class SanPhamRedux extends Component {
    render() {
        const { sanPham, themGioHang } = this.props
        return (
            <div className="card">
                <img src={sanPham.hinhAnh} alt="" />
                <div className="card-body">
                    <p>{sanPham.tenSP}</p>
                    <p>{sanPham.giaBan}</p>
                    <button className="btn btn-danger" onClick={() => {
                        themGioHang(sanPham)
                    }}>Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        themGioHang: (sanPhamClick) => {
            let spGH = { ...sanPhamClick, soLuong: 1 };
            const action = {
                type: 'THEM_GIO_HANG',
                spGH
            };
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(SanPhamRedux)
