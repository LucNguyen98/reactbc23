import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableNguoiDung extends Component {
    render() {
        return (
            <div className='container mt-4'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tài khoản</th>
                            <th>Họ tên</th>
                            <th>Ảnh đại diện</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Loại người dùng</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.mangNguoiDung.map((nguoiDung, index) => (
                            <tr key={index + ''}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    {nguoiDung.taiKhoan}
                                </td>

                                <td>
                                    {nguoiDung.hoTen}
                                </td>
                                <td>
                                    <img src={`https://i.pravatar.cc?u=${nguoiDung.hoTen}`} alt="..." width={50} height={50} />
                                </td>
                                <td>
                                    {nguoiDung.soDienThoai}
                                </td>
                                <td>
                                    {nguoiDung.email}
                                </td>

                                <td>
                                    {nguoiDung.loaiNguoiDung}
                                </td>

                                <td>
                                    <button className="btn btn-danger mr-2" onClick={() => {
                                        const action = {
                                            type: 'XOA_NGUOI_DUNG',
                                            taiKhoan: nguoiDung.taiKhoan
                                        }
                                        this.props.dispatch(action)
                                    }}>Xoá</button>
                                    <button className="btn btn-primary ml-2" onClick={() => {
                                        const action = {
                                            type: 'SUA_NGUOI_DUNG',
                                            nguoiDung
                                        }
                                        this.props.dispatch(action)
                                    }}>Sửa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        )
    }
}
const mapStateToProps = (state) => (
    {
        mangNguoiDung: state.quanLyNguoiDungReducer.mangNguoiDung
    }
)

export default connect(mapStateToProps)(TableNguoiDung)