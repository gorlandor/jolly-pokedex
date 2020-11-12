import React from 'react';

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