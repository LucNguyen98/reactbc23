import React, { Component } from "react";
import { connect } from "react-redux";

class TangGIamSoLuong extends Component {
  render() {
    return (
      <div className="container d-flex">
        <button
          className="btn btn-outline-dark"
          onClick={() => {
            this.props.tangGiamSoLuong(-1);
          }}
        >
          -
        </button>
        <p className="px-3">{this.props.number}</p>
        <button
          className="btn btn-outline-dark"
          onClick={() => {
            this.props.tangGiamSoLuong(1);
          }}
        >
          +
        </button>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    number: rootReducer.stateNumber,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tangGiamSoLuong: (soLuong = 0) => {
      const action = {
        type: "TANG_GIAM_SO_LUONG",
        soLuong,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TangGIamSoLuong);
