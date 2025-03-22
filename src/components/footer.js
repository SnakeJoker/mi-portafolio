import React from 'react';

const footer1 = () => {
    return (
        <footer className="bg-dark text-white py-4 mt-5">
            <div className="container text-center mt-3">
                <p className="mb-0">&copy; {new Date().getFullYear()} Snakes's Portfolio. All Rights Reserved.</p>
                <ul className="list-inline mt-2">
                    <li className="list-inline-item">
                        <a href="https://facebook.com" className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">
                            Facebook
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://twitter.com" className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">
                            Twitter
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://linkedin.com" className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default footer1;