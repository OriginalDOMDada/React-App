import React from 'react';
import { connect } from 'react-redux';
import Window from './../Window.js'

const WindowContainer = props => {
    // const stuff = useSelector(state => state.apps);
    console.log( props);
    const filter = Object.entries(props.apps).filter(value => {
        return value[1].status;
    });
    return (
        <div className="nigga">
            {
                filter.map((value, index) => {
                    return <Window key={index}> </Window>
                })
            }
        </div>
    );
}

function mapStateToProps(state) {
    return {
      apps: state.apps
    };
}

export default connect(mapStateToProps)(WindowContainer);