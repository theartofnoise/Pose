import React from "react";

function AudioBtn(props) {
  return (
    <button onClick={props.onClick} className="btn btn-success" role="button" tabIndex="0">
      {props.songTitle}
    </button>
  );
}

export default AudioBtn;
