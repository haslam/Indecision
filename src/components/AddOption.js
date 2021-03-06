import React from "react";

export default class AddOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        error: undefined
    }
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handlingAddOption(option); 
    this.setState(() => ({ error }));

    e.target.elements.option.value = '';
  }
  render() {
    return (
      <div>
      {this.state.error && <p className="add-option-error">{this.state.error}</p>}
      <form className="add-option" onSubmit={this.handleAddOption}>
        <input className="add-option__input" type="text" name="option"/>
        <button className="button" type="submit">Add option</button>
      </form>
      </div>
    ) 
  }
}