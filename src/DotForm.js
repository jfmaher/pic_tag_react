import './DotForm.css';
import React, {Component} from 'react';

class DotForm extends Component{
  constructor(props){
    super();
    this.state = props.data;
  }

  onInput = (ev) => {
    let value, name, updated_state;
    value = ev.target.value;
    name = ev.target.name;
    updated_state = this.state;
    updated_state[name] = value;
    this.setState({...this.state, updated_state})
  };

  render() {
    return (
        <form className='form'>
          {Object.keys(this.state).map((name) => (
            <input key={name} name={name} value={this.state[name]} onChange={this.onInput}/>
          ))}
        </form>
      )
  }
}

export default DotForm;