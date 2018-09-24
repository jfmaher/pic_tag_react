import React, { Component } from 'react';
import './MovingDot.css'

class MovingDot extends Component{
  onDragStart = (ev, id) => {
    console.log('dragstart: ', id);
    ev.dataTransfer.setData('id', id) // Needs to be used (Firefox)
  };

  render(){
    return (
      <div draggable onDragStart={(e) => this.onDragStart(e, 'dot')} className='dot'>
        Hello
      </div>
    )
  }
}

export default MovingDot;
