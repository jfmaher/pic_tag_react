import React from 'react';
import MovingDot from './MovingDot'
import './MovingDot.css'

class PictureDot extends MovingDot{
  constructor(props) {
    super(props);
    this.name = props.name;
    this.state = {
      form : {
        value: '',
        display: false
      },
      style: {
        position: 'absolute',
        top: props.y,
        left: props.x
      }
    };
  }

  onInput = (ev) =>{
    let target = ev.target;
    this.setState((state, props) => {
      return {form: {...state.form, value: target.value}}
    })
  }

  onSubmit = (ev) => {
    ev.preventDefault();
  }

  onClick = (ev) => {
    this.setState((state, props) => {
      return {form: {...state.form, display: !state.form.display}}
    });
  }

  render() {
    return (
      <div style={this.state.style}>
        <div className='dot'
             draggable
             onDragStart={(e) => this.onDragStart(e, this.name)}
             onClick={this.onClick}>
          Hello
        </div>
        {this.state.form.display ?
          <form className='form' onSubmit={this.onSubmit}>
            <input key={this.name} name={this.name} value={this.state['form']['value']} onChange={this.onInput}/>
          </form>
        :''}
      </div>
    )
  }
}

export default PictureDot;
