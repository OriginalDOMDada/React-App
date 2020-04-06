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
import { connect } from 'react-redux';
import { Rnd } from 'react-rnd';
import { setApp } from '.././reducer/apps/actions';

const AppIcon = props => {
    return (
        <Box>
            {Object.keys(props.apps).map((value, index) => {
                return <Rnd key={index}
                    default={{
                        x: index * 100,
                        y: 130,
                        width: 320,
                        height: 200,   
                    }}
                >
                    <button onClick={() => props.setApp(value)} >
                    {value}
                    </button>
                </Rnd>
            })}
        </Box>
    );
};

function mapStateToProps(state) {
    return {
      apps: state.apps
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
        setApps: () =>  dispatch({type: "SET_APPS"}),
        setApp: (name) =>  {
            dispatch(setApp(name));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppIcon);