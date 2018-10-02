import React, {Component} from 'react'
import PictureDot from './PictureDot.js'
import './PictureContainer.css'

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
    let dots = this.state.dots;
    dots.push([ev.clientX - this.containerRef.current.offsetLeft, ev.clientY - this.containerRef.current.offsetTop]);
    this.setState({
      'dots': dots
    });
    console.log('dropped')
  };

  render(){
    return (
      <div className='target'
           ref={this.containerRef}
           onDragOver={this.onDragOver}
           onDrop={this.onDrop}>
        { this.state.dots.map(([x, y], index) => (
          <PictureDot key={index} x={x} y={y}/>
        ))}
      </div>
    )
  }
}

export default PictureContainer