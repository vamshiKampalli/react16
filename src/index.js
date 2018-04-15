import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// import About from './components/About';
import Profile from './components/Profile';

const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={Profile} />
        </div>
    </Router>
)

ReactDOM.render(<App/>, document.getElementById('myapp'))

// console.log('React 16 with webpack 4 Configured');
