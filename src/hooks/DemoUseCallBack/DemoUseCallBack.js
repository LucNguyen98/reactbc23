import React, { useCallback, useState } from "react";
import Comment from "./Comment";

export default function DemoUseCallBack() {
  let [like, setLike] = useState(1);
  let [number, setNumber] = useState(1);
  let renderNotify = () => {
    return `Bạn đã thả ${like} ♥ !`;
  };

  const renderNotifyCallback = useCallback(renderNotify, [like]);

  return (
    <div className="m-5">
      <p>Number: {number}</p>
      <button
        className="btn btn-success"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      Like: {like} ♥
      <br />
      <span
        style={{ cursor: "pointer", color: "red", fontSize: 35 }}
        onClick={() => {
          setLike(like + 1);
        }}
      >
        ♥
      </span>
      <br />
      <br />
      <Comment renderNotify={renderNotifyCallback} />
    </div>
  );
}
