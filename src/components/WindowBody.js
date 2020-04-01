import React, { Component } from 'react';
import Box from '@material-ui/core/Box';

export default class WindowBody extends Component {
    // props costuctor... 
    render () {
        return (
           <Box className="window_body" flex={1} m={1} style={{ border: 'solid 4px black', borderRadius: '10px'}}>
               {/* <WindowHeader></WindowHeader>
               <WindBody></WindBody> */}
           </Box>
        )
    }
}
