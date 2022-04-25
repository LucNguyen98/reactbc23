import React, { Component } from "react";
import { Prompt } from "react-router-dom";

export default class Register extends Component {

  state = {
    status: true
  }
  handleSubmit = () => {
    this.setState({
      status: false
    })
  }
  render() {
    return (
      <div className="container">
        <h3>Đăng ký</h3>
        <div class="form-group">
          <label for="taiKhoan">Tài khoản</label>
          <input type="text" id="taiKhoan" class="form-control" />
        </div>

        <div class="form-group">
          <label for="">Mật khẩu</label>
          <input type="text" id="matKhau" class="form-control" />
        </div>

        <div class="form-group">
          <button className="btn btn-success" onClick={() => this.handleSubmit()}>Đăng ký</button>
        </div>
        <Prompt when={this.state.status} message={location => ('Bạn muốn rời khỏi trang?')} />
      </div>
    );
  }
}
