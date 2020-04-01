import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';

// const useStyles = makeStyles(theme => ({
//     root: {
//       flexGrow: 1,
//       backgroundColor: 'black',
//       height: '50px',
//       width: '100%',
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//     },
// }));
// const theme = useTheme();
// const classes = useStyles();
export default function AppHeader() {
    // props costuctor... 
    console.log(useTheme());
    const theme = useTheme();
    // const classes = useStyles();
    // render () {
        // const classes = useStyles();
        return (
            <div>
            <AppBar position="fixed" >
                {theme.palette.primary.main}
                <Box width={1} height="50px" bgcolor="grey.300" p={1} my={0.5}>
            </Box>
            </AppBar>
            </div>
        );
    // }
}