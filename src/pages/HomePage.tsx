import React from 'react';
import { Link } from "react-router-dom";

export const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is the main landing page of the application.</p>
            <Link to="/components">Go to Components Page</Link>
        </div>
    );
}
