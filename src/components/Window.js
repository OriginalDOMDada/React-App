import React, { Component } from 'react';
import WindowBody from '../components/WindowBody';
import WindowHeader from '../components/WindowHeader';
import Box from '@material-ui/core/Box';
import { Rnd } from 'react-rnd';
import Tilt from 'react-tilt';
// dragability
// resize

const divStyle = {
    // background: 'white',
    // border: '4px solid black',
}; 

export default class Window extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 400,
            height: 400
        };
    }
    render () {
        return (
           <Rnd
           size={{ width: this.state.width,  height: this.state.height }}
           onResizeStop={(e, direction, ref, delta, position) => {
            this.setState({
                width: ref.style.width,
                height: ref.style.height
            });
           }}
           style={divStyle}
           >
            <Tilt className="Tilt"
            options={{ 
                max : 3, 
                scale: 1, 
                speed: 100, 
                perspective: 900, 
                reverse: true, 
                easeing: "cubic-bezier(.42,0,.58,1)" 
            }} 
            style={{ height: '100%', width: '100%', background: 'red', border: '4px solid black' }} >
            <Box className="window_body" display="flex" flexDirection="column" style={{minHeight: '100%'}}>
                <WindowHeader></WindowHeader>
                <WindowBody></WindowBody>
            </Box>
            </Tilt>
           </Rnd>
        )
    }
}