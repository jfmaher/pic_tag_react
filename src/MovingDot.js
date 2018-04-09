import React, { Component } from 'react';
import './MovingDot.css'

class MovingDot extends Component{
    render(){
        return (
            <div draggable="true" className='dot'>
                Hello
            </div>
        )
    }
}

export default MovingDot;
