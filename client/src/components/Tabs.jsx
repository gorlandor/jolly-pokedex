import React from 'react';
import { Link } from 'react-router-dom';

export function Tabs() {
    return (
        <nav style={{ display: 'flex', justifyContent: 'center' }}>
            <ul>
                <li>
                    <Link to={'/'}>Pokemon</Link>
                </li>
                <li>
                    <Link to={'/berries'}>Berries</Link>
                </li>
            </ul>
        </nav>
    );
}
