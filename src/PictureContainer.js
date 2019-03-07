import React, {Component} from 'react'
import PictureDot from './PictureDot.js'
import './PictureContainer.css'
const uuidv4 = require('uuid/v4');

class PictureContainer extends Component{
  constructor(props){
    super(props);
    this.state = {'dots': []};
    this.containerRef = React.createRef();
  }

  onDragOver = (ev) => {
    ev.preventDefault();
    console.log('hello');
  };

  onDrop = (ev) => {
    ev.preventDefault();
    const id = ev.dataTransfer.getData('id');
    let dots = this.state.dots;
    // Contains dot radius.
    if (id !== 'new') {
      let index = dots.findIndex(([list_id, a, b]) => {
        return list_id === id
      });
      dots.splice(index, 1)
    }

    dots.push([uuidv4(), ev.clientX - this.containerRef.current.offsetLeft - 25, ev.clientY - this.containerRef.current.offsetTop - 25]);
    this.setState({
      'dots': dots
    });
    console.log('dropped');
  };

  render(){
    return (
      <div className='target'
           ref={this.containerRef}
           onDragOver={this.onDragOver}
           onDrop={this.onDrop}>
        { this.state.dots.map(([id, x, y], index) => (
          <PictureDot key={id} name={id} x={x} y={y}/>
        ))}
      </div>
    )
  }
}

export default PictureContainer
