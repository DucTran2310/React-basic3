import React from 'react';
import { Navbar } from './components';
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";

import GlobalStyle from './globalStyles';

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Navbar />
            <Switch>

            </Switch>
        </Router>
    );
}

export default App;
