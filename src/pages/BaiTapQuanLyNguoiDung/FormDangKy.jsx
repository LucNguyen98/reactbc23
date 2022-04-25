import React, { Component } from 'react'
import { connect } from 'react-redux';

class FormDangKy extends Component {

    state = {
        value: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            email: '',
            soDienThoai: '',
            loaiNguoiDung: 'NguoiDung'
        },
        error: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            email: '',
            soDienThoai: '',
        }
    }

    handleChangeInput = (evt) => {
        let { id, value } = evt.target;

        let dataType = evt.target.getAttribute('data-type');

        let newValue = { ...this.state.value };
        let newError = { ...this.state.error };
        newValue[id] = value;

        let messError = '';

        if (value === '') {
            messError = id + ' không được bỏ trống'
        }

        switch (dataType) {
            case 'email': {
                let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                if (!regexEmail.test(value)) {
                    messError = 'email không đúng định dạng'
                }
            }
                break;

            case 'phone':
                let regexPhone = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
                if (!regexPhone.test(value)) {
                    messError = 'số điện thoại không đúng định dạng'
                }
                break;
            default:
                break;
        }

        newError[id] = messError;


        this.setState({
            value: newValue,
            error: newError
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault(); // hàm chặn sự kiện reload của browser

        let { value, error } = this.state;

        for (const key in error) {
            if (error[key] !== '') {
                alert(key + 'chưa hợp lệ');
                return;
            }
        }

        for (const key in value) {
            if (value[key] === '') {
                alert(key + 'chưa hợp lệ');
                return;
            }
        }


        const action = {
            type: 'DANG_KY',
            nguoiDung: value

        }

        this.props.dispatch(action)
    }

    //Hướng giải quyết: Thay vì dữ liệu follow từ props => chuyển dữ liệu sang state.value

    // static getDerivedStateFromProps(newProps, currentState) {
    //     // Đây là hàm dùng để tiền xử lúc các giá trị state và props trước khi render
    //     if (currentState.value.taiKhoan !== newProps.nguoiDungSua.taiKhoan) {
    //         currentState.value = { ...newProps.nguoiDungSua };
    //     }
    //     return currentState // return new state
    // }

    UNSAFE_componentWillReceiveProps(newProps) {
        //Nó chỉ chạy khi props thay đổi (khi bấm nút sửa), không chạy khi state thay đổi

        this.setState({
            value: newProps.nguoiDungSua
        })
    }

    render() {
        let { taiKhoan, hoTen, soDienThoai, email, loaiNguoiDung } = this.state.value
        return (
            <form className='container' onSubmit={this.handleSubmit}>
                <div className="card">
                    <div className="card-header bg-dark">
                        <h3 className='text-white'>Thông tin người dùng</h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <p>Tài khoản</p>
                                    <input value={taiKhoan} type="text" className="form-control" id="taiKhoan" name="taiKhoan" onChange={this.handleChangeInput} />
                                    <p className='text-danger pt-2'>{this.state.error['taiKhoan']}</p>
                                </div>
                                <div className="form-group">
                                    <p>Họ tên</p>
                                    <input value={hoTen} type="text" className="form-control" id="hoTen" name="hoTen" onChange={this.handleChangeInput} />
                                    <p className='text-danger pt-2'>{this.state.error['hoTen']}</p>
                                </div>
                                <div className="form-group">
                                    <p>Email</p>
                                    <input value={email} data-type='email' type="email" className="form-control" id="email" name="email" onChange={this.handleChangeInput} />
                                    <p className='text-danger pt-2'>{this.state.error['email']}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <p>Mật khẩu</p>
                                    <input type="password" className="form-control" id="matKhau" name="matKhau" onChange={this.handleChangeInput} />
                                    <p className='text-danger pt-2'>{this.state.error['matKhau']}</p>
                                </div>
                                <div className="form-group">
                                    <p>Số điện thoại</p>
                                    <input value={soDienThoai} data-type='phone' type="text" className="form-control" id="soDienThoai" name="soDienThoai" onChange={this.handleChangeInput} />
                                    <p className='text-danger pt-2'>{this.state.error['soDienThoai']}</p>
                                </div>
                                <div className="form-group">
                                    <p>Loại người dùng</p>
                                    <select name="loaiNguoiDung" id="loaiNguoiDung" className='form-control' onChange={this.handleChangeInput}>
                                        <option value="NguoiDung">Người dùng</option>
                                        <option value="QuanTri">Quản trị</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-muted">
                        <button type='submit' className="btn btn-success">Đăng ký</button>
                        <button type='button' className="btn btn-primary ml-2" onClick={() => {
                            const action = {
                                type: 'CAP_NHAT_THONG_TIN',
                                nguoiDungCapNhat: this.state.value
                            }
                            this.props.dispatch(action)
                        }}>Cập nhật</button>
                    </div>
                </div>
            </form>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        nguoiDungSua: state.quanLyNguoiDungReducer.nguoiDungSua
    }
}


export default connect(mapStateToProps)(FormDangKy)