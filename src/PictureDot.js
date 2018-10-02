import React, {Component} from 'react';
import './MovingDot.css'

class PictureDot extends Component{
  constructor(props) {
    super(props);
    this.state = {
      style: {
        position: 'absolute',
        top: props.y,
        left: props.x
      }
    };
  }

  render() {
    return (
      <div style={this.state.style} className='dot'>
        Hello
      </div>
    )
  }
}

export default PictureDot;