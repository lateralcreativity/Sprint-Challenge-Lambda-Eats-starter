import React from 'react';
import Nav from './Nav';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <>
        <Nav />
        <div className="top-content">
            <header>
                <h1>Your favorite food, delivered while coding.</h1>
                <Link to='/pizza'>
                    <button>Pizza?</button>
                </Link>
            </header>
        </div>
        </>
    )
}