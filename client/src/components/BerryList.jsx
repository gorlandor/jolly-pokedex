import React, { useEffect, useState } from 'react';
import { getBerries } from '../data/berries';
import { primaryColor, secondaryColor } from '../data/constants';

export function BerryLink({ berryName, berryLink, imageSource, imageAltText }) {
    return (
        <a
            href={berryLink}
            style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                height: '64px',
                textTransform: 'capitalize',
            }}
        >
            <img src={imageSource} alt={imageAltText} style={{ height: '64px' }} />
            {berryName}
        </a>
    );
}

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

function useBerries() {
    const [berries, setBerries] = useState([]);
    
    async function fetchBerries() {
        const { results: berries } = await getBerries();
        setBerries(berries);
    }

    useEffect(() => {
        
        fetchBerries();

    }, [])

    return { berries, fetchBerries };
}

export function BerryListView(props) {    
    const { berries } = useBerries();    
    return (
        <React.Fragment>
            <section id={'berries'}>
                <h2
                    style={{
                        color: primaryColor,
                        fontSize: '1.375em',
                        fontFamily: 'Arial, Helvetica, sans-serif',
                        borderLeft: `5px solid ${primaryColor}`,
                        paddingLeft: '1em',
                        margin: '0 0 0 8px',
                        height: '2em',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}
                >
                    Berries
                </h2>
                <BerryList berries={berries} />
            </section>
        </React.Fragment>
    );
}
