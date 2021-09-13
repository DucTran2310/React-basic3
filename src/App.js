import React from 'react';
import GlobalStyle from './globalStyles';
import { Navbar } from './components';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import Home from './pages/HomePage/Home';

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Navbar />
            <Switch>
            <Route path='/' exact component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
