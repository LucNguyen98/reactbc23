import React, { Component } from "react";

export default class Login extends Component {
  handleLogin = () => {
    console.log('login');
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;

    if (username === 'cybersoft' && password === 'cybersoft') {
      // alert('Login success');
      // this.props.history.push('/profile');


      //replace: Thay đổi route hiện tại thành route khác
      this.props.history.replace('/profile');
      localStorage.setItem('username', username)
    }
    else {
      alert('Tài khoản hoặc mật khẩu không đúng')
    }
  }
  render() {
    return (
      <div className="container">
        <h3>Login</h3>
        <div class="form-group">
          <label for="">User name</label>
          <input type="text" name="" id="username" class="form-control" />
        </div>

        <div class="form-group">
          <label for="">Password</label>
          <input type="password" name="" id="password" class="form-control" />
        </div>
        <div class="form-group">
          <button className="btn btn-success" onClick={() => {
            this.handleLogin()
          }}>Login</button>
        </div>
        <button className="btn btn-danger" onClick={() => {
          this.props.history.goBack()
        }}>Trở về</button>
      </div>
    );
  }
}
