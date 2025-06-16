import React from 'react';

export const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is the main landing page of the application.</p>
            <a href="#/components" className="link_404">
                  Go to Components Page
                </a>
        </div>
    );
}
