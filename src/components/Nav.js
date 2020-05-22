import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <h2>Lambda Eats</h2>
            <NavLink to={`/`}>
                <button className="home">Home</button>
            </NavLink>
        </div>
    )
}