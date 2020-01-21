import React, { Component } from "react";

export default class SelectInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onOptionChange(e.target.value);
  }
  render() {
    const optionsList = this.props.options.map(option => (
      <option value={option.id} className="form-control">
        {option.radioName}
      </option>
    ));
    return (
      <div className="form-group">
        <label>
          {this.props.selectInfo.label}
          <select
            className="form-control"
            name={this.props.selectInfo.inputName}
            onChange={this.handleChange}
          >
            {optionsList}
          </select>
        </label>
      </div>
    );
  }
}
