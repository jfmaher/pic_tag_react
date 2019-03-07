import React from 'react';
import MovingDot from './MovingDot'
import request from 'request'
import './MovingDot.css'

class PictureDot extends MovingDot{
  constructor(props) {
    super(props);
    this.name = props.name;
    this.state = {
      style: {
        position: 'absolute',
        top: props.y,
        left: props.x
      }
    };
    if(props.form)
      this.state['form'] = {
        value: props.form.value,
        display: props.form.display
      }
    else
      this.state['form'] = {
        value: '',
        display: false
      }
  }

  onDragStart2 = (ev, id) => {
    this.onDragStart(ev, id);
    ev.dataTransfer.setData('form', JSON.stringify(this.state.form));
  }

  onInput = (ev) =>{
    let target = ev.target;
    this.setState((state, props) => {
      return {form: {...state.form, value: target.value}}
    })
  }

  onSubmit = (ev) => {
    ev.preventDefault();
    const payload = {
      top: this.state.style.top,
      left: this.state.style.left,
      value: this.state.form.value
    }
    request.post({url: 'http://localhost:5000/new-button', json: payload}, (data) =>
    console.log('sent dot'));
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
             onDragStart={(e) => this.onDragStart2(e, this.name)}
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
