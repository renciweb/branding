import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router } from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop'
import Theme from './Theme'
import { MuiThemeProvider } from '@material-ui/core/styles'
import WebFont from 'webfontloader'
WebFont.load({
    google: {
        families: ['Arvo:300,400,700', 'Roboto:300,400,700', 'Open+Sans:300,400,700', 'sans-serif']
    }
})

ReactDOM.render(
    <Router basename={ '/branding' }>
        <ScrollToTop>
            <MuiThemeProvider theme={ Theme }>
                <App />
            </MuiThemeProvider>
        </ScrollToTop>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
