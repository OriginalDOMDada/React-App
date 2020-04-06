import React from 'react';
import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
import { useTheme, makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
    root: {
      background: 'white',
      borderRadius: 3,
    //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      height: 50,
      padding: '0 30px',
      borderBottom: '4px solid black',
      '& .MuiIconButton-root': {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: '3px solid black',
        padding: '0',
        minWidth: '20px',
        margin: '0 5px',
        '& span': {
            width: '20px',
            height: '20px',
            padding: '0',
        }
      }
    },
  });

export default function WindowHeader() {
    // props costuctor... 
    // console.log(theme.palette);
    const theme = useTheme();
    const classes = useStyles();
    // console.log(theme.palette);
    return (
        <div className="window_header">
            <Box className={classes.root} bgcolor={theme.palette.primary.main} display="flex" flexDirection="row" justifyContent="center">
                <Box style={{ position: 'absolute', left: '0' }}>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <CloseIcon />
                    </IconButton>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <AddIcon />
                    </IconButton>
                </Box>
                <Box letterSpacing={3} fontWeight={600} m={1} fontSize={22} fontFamily="Poppins" display="flex" alignItems="center">
                    About
                </Box>
            </Box>
        </div>
    );
}
