// name
// winndowName
// svg icon 

// state
//  active
//  focused
//  last focused
// hover

import React from 'react';
import Box from '@material-ui/core/Box';
import { Rnd } from 'react-rnd';

export default function AppIcon() {
    return (
        <Rnd
            default={{
                x: 150,
                y: 130,
                width: 320,
                height: 200,
            }}
        >
            <Box>
                Hello
            </Box>
        </Rnd>
    );
}