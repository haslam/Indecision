import React from "react";

const Option = (props) => {
  return (
    <div className="option">
      <p className="option__text">{props.count}. {props.OptionText}</p>
      <button
        className="button button--link" 
        onClick={(e) => {
            props.handleDeleteOption(props.OptionText)
        }}>
        Remove
      </button>
    </div>
  )
}

export default Option
