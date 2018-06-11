import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
          light: '#B2DFDB',
          main: '#009688',
          dark: '#00695C',
          contrastText: '#fff',
      },
      secondary: {
          light: '#B3E5FC',
          main: '#03A9F4',
          dark: '#01579B',
          contrastText: '#000',
        }
    }
});

ReactDOM.render(
    <CssBaseline>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </CssBaseline>
    , document.getElementById('root')
);
