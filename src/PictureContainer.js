import React, {Component} from 'react'
import './PictureContainer.css'

class PictureContainer extends Component{
  constructor(props){
    super(props);
    this.state = {'dots': []}
  }

  onDragOver = (ev) => {
    ev.preventDefault();
    console.log('hello');
  };

  onDrop = (ev) => {
    ev.preventDefault();
    let dots = this.state.dots;
    dots.push([ev.clientX, ev.clientY]);
    this.setState({
      'dots': dots
    });
    console.log('dropped')
  };

  render(){
    return (
      <div className='target'
           onDragOver={this.onDragOver}
           onDrop={this.onDrop}/>
    )
  }
}

export default PictureContainer