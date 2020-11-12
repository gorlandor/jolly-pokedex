import React from 'react';
import {BerryLink} from "./BerryLink.jsx";
import { secondaryColor } from '../data/constants';

export function BerryList({ berries }) {
    const berrySprite = id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/${id}.png`;
    return (
        <ol>
            {berries.map(function(berry, i) {
                const berryName = berry.name.concat(' berry');
                const id = `items/${berry.name}-berry`;
                return (
                    <li key={i} style={{ borderBottom: `1px solid ${secondaryColor}` }}>
                        <BerryLink
                            berryLink={berry.url}
                            berryName={berryName}
                            imageSource={berrySprite(id)}
                            imageAltText={berryName.concat(' image')}
                        />
                    </li>
                );
            })}
        </ol>
    );
}

