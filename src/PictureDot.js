import React from 'react';
import MovingDot from './MovingDot'
import DotForm from './DotForm'
import './MovingDot.css'

class PictureDot extends MovingDot{
  constructor(props) {
    super(props);
    this.name = props.name;
    this.state = {
      form: {
        open: false,
        form_data: props.form
      },
      style: {
        position: 'absolute',
        top: props.y,
        left: props.x
      }
    };
  }

  onClick = (ev) => {
    this.setState({form: {...this.state.form, open: !this.state.form.open}
    })
  };

  render() {
    let form = null;
    if (this.state.form.open){
      form = (
        <DotForm data={this.state.form.form_data}/>
      )
    }
    return (
      <div style={this.state.style}>
        <div className='dot'
             draggable
             onDragStart={(e) => this.onDragStart(e, this.name)}
             onClick={this.onClick}>
          Hello
        </div>
        {form}
      </div>
    )
  }
}

export default PictureDot;