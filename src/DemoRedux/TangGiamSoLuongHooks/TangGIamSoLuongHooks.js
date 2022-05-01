import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function TangGIamSoLuongHooks() {
  const number = useSelector((rootState) => rootState.stateNumber);

  const dispatch = useDispatch();

  const tangGiamSoLuong = (soLuong) => {
    const action = {
      type: "TANG_GIAM_SO_LUONG",
      soLuong,
    };
    dispatch(action);
  };

  return (
    <div className="container pt-3">
      <button
        className="btn btn-outline-dark"
        onClick={() => {
          tangGiamSoLuong(-1);
        }}
      >
        -
      </button>
      <span className="mx-2">stateNumber: {number}</span>
      <button
        className="btn btn-outline-dark"
        onClick={() => {
          tangGiamSoLuong(1);
        }}
      >
        +
      </button>
    </div>
  );
}
