import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import App from './app.routes';

const Routes: React.FC = () => (
    <Router>
        <App/>
    </Router>
);

export default Routes;