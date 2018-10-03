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
      return {form: {open: !state.form.open}}
    })
  };

  render() {
    let form = null;
    if (this.state.form.open){
      form = (
        <form className='form'>
          <input type='text'/>
        </form>
      )
    }
    return (
      <div style={this.state.style}>
        <div className='dot'
             onClick={this.onClick}>
          Hello
        </div>
        {form}
      </div>
    )
  }
}

export default PictureDot;