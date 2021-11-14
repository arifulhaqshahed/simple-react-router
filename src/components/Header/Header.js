import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Header = (to) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/friends">Friends</Link>
            <Link to="/about">About</Link>
        </nav>
    );
};

export default Header;