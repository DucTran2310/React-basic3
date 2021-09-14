import React from 'react';
import GlobalStyle from './globalStyles';
import { Footer, Navbar } from './components';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import Home from './pages/HomePage/Home';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <Router>
            <GlobalStyle />
            <ScrollToTop />
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
