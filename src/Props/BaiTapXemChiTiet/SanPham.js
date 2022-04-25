//rcc

import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { phone, themGioHang } = this.props;
    return (
      <div className="card">
        <img src={phone.hinhAnh} alt="..." className="w-full" height={300} />
        <div className="card-body">
          <p>{phone.tenSP}</p>
          <p>{phone.giaBan.toLocaleString()}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              this.props.xemChiTiet(phone);
            }}
          >
            Xem chi tiết
          </button>
          <button
            className="btn btn-danger ml-2"
            onClick={() => themGioHang(phone)}
          >
            <i className="fa fa-shopping-cart"></i>
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
