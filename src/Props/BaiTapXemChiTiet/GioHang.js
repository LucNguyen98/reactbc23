import React, { Component } from "react";

export default class GioHang extends Component {
  renderGioHang = () =>
    this.props.gioHang.map((item) => (
      <tr key={item.maSP}>
        <td>{item.maSP}</td>
        <td>{item.tenSP}</td>
        <td>
          <img src={item.hinhAnh} alt="..." width={50} height={50} />
        </td>
        <td>{item.giaBan}</td>
        <td>
          <button
            className="btn btn-primary mr-2"
            onClick={() => {
              this.props.tangGiamSoLuong(item.maSP, 1);
            }}
          >
            +
          </button>
          {item.soLuong}
          <button
            className="btn btn-primary ml-2"
            onClick={() => {
              this.props.tangGiamSoLuong(item.maSP, -1);
            }}
          >
            -
          </button>
        </td>
        <td>{item.soLuong * item.giaBan}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.xoaGioHang(item.maSP);
            }}
          >
            Xoá
          </button>
        </td>
      </tr>
    ));

  render() {
    return (
      <div>
        <div className="text-right">
          <span style={{ cursor: "pointer" }}>
            <i className="fa fa-shopping-cart"></i>
          </span>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Mã sản phẩm</th>
              <th>Tên sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Giá bán</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
        </table>
      </div>
    );
  }
}
