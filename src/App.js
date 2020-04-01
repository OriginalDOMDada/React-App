import React from 'react';
// import ReactDOM from 'react-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import configureStore from './shared/redux/configureStore';

import './App.css';

import Window from './components/Window.js';
import AppIcon from './components/AppIcon.js';
import Background from './components/Background.js';
import AppHeader from './components/AppHeader.js';

const store = configureStore(window.initialState);

console.log(store, window.initialState);

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff4400',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: '#ffcc00',
    },
    error: {
      main: '#FF0080'
    },
    warning: {
      main: '#FFFF00'
    },
    info: {
      main: '#0000FF'
    },
    success: {
      main: '#00FF80'
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: 'Poppins, Playfair Display',
    fontWeightRegular: 800,
  },
});



function App() {

  return (
    <div className="App">
      <Provider store={store}>
      <ThemeProvider theme={theme}>

      <AppHeader></AppHeader>
      <AppIcon></AppIcon>
      <Window></Window>
      </ThemeProvider>
      <Background></Background>
      </Provider>
    </div>
  );
}

// ReactDOM.render(<App />, node);

export default App;
