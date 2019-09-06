import React, { Component } from 'react';
import Input from './input';
class Form extends Component {
  state = {
    data: {},
    errors: {}
  }
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();

  }
  renderButton(label) {
    return (
      <button className="btn btn-primary" disabled={Object.keys(this.state.errors).length === 0 ? false : true}>{label}</button>
    );
  }
  renderInput(name,label,type='text',active=false) {
    const { errors, data } = this.state;
    return (

      <Input active={active} type={type} name={name} label={label} error={errors[name]} value={data[name]} onChange={this.handleChange} />
    );
  }
}

export default Form;