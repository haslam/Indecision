import React from "react";
import AddOptions from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      options: [],
      selectedOption: undefined
    } 
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
  }

  componentDidMount() {
    console.log('ComponentDidMount fires when page loads');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('ComponentDidUpdate fires after props or state changes');
  }
  componentWillUnmount() {
    console.log('ComponentWillUnmount fires when a component goes away/removed/unmounted from the screen.');
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: []}))
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  handlePick() {
    const randPick = Math.floor(Math.random() * this.state.options.length);
    const pick = this.state.options[randPick];
    this.setState(() => ({selectedOption: pick}))
    console.log('first ', this.state.selectedOption);
  }

  handleAddOption(option) {
    if(!option) {
      return 'Enter valid value to add item';
    }
    else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    else {
      this.setState((prevState) => ({ options: prevState.options.concat([option]) }))            
    }    
  }
  handleClearSelectedOption() {
  this.setState(() => ({selectedOption: undefined}))
  console.log(this.state.selectedOption);
  }
  render() {
    const title = "Indecision";
    const subtitle = "Take control of your options";
    return (
      <div>
       <Header title={title} subtitle={subtitle} />
        <div className="container">
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
          />
        <div className="widget">
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
          />
        <AddOptions handlingAddOption={this.handleAddOption} /> 
        </div>
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleSelectedOption={this.handleClearSelectedOption}
         />
       
     </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}
