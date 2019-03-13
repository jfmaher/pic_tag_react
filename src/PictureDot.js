import React, {Fragment} from 'react';
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
      },
      dotStyle: {
        backgroundColor: 'aquamarine'
      },
      form: {
        value: '',
        display: false
      }
    };
    if(props.dotStyle)
      this.state['dotStyle'] = this.props.dotStyle;
    if(props.form)
      this.state['form'] = {
        value: props.form.value,
        display: props.form.display
      }
  }

  onDragStart2 = (ev, id) => {
    this.onDragStart(ev, id);
    ev.dataTransfer.setData('form', JSON.stringify(this.state.form));
    ev.dataTransfer.setData('style', JSON.stringify(this.state.dotStyle));
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

  changeColour = (ev) => {
    const value = ev.target.value;
    this.setState({dotStyle:{...this.dotStyle, backgroundColor: value}})
  }

  toggleForm = (ev) => {
    this.setState((state, props) => {
      return {form: {...state.form, display: !state.form.display}}
    });
  }

  render() {
    const colours = ['red', 'yellow', 'aquamarine']
    let colourRadios =[]
    for (let index in colours){
      const colour = colours[index];
      colourRadios.push(
        <div>
          <input type='radio'
                 name='colour'
                 value={colour}
                 onChange={this.changeColour}
                 checked={this.state.dotStyle.backgroundColor == colour}/>
                 <span>{colour}</span>

        </div>
      )
    }
    return (
      <div style={this.state.style}>
        <div className='dot'
             style={this.state.dotStyle}
             draggable
             onDragStart={(e) => this.onDragStart2(e, this.name)}
             onClick={this.toggleForm}>
          Hello
        </div>
        {this.state.form.display ?
          <Fragment>
            <form className='form' onSubmit={this.onSubmit}>
              <input key={this.name} name={this.name} value={this.state['form']['value']} onChange={this.onInput}/>
            </form>
            <div className='form radios'>
              {colourRadios}
            </div>
          </Fragment>
        :''}
      </div>
    )
  }
}

export default PictureDot;
