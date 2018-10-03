import React, {Component} from 'react';
import './MovingDot.css'
import './Form.css'

class PictureDot extends Component{
  constructor(props) {
    super(props);
    this.state = {
      form: {
        open: false,
        name: ''
      },
      style: {
        position: 'absolute',
        top: props.y,
        left: props.x
      }
    };
  }

  onClick = (ev) => {
    this.setState((state, props) => {
      return {form: {open: !this.state.form.open}}
    })
  };

  render() {
    let form = null;
    if (this.state.form.open){
      form = (
        <div className='form'>Form Div</div>
      )
    }
    return (
      <div style={this.state.style}
           className='dot'
           onClick={this.onClick}>
        {form}
        Hello
      </div>
    )
  }
}

export default PictureDot;