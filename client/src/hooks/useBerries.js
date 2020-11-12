import React, { useEffect, useState } from 'react';
import { getBerries } from '../data/berries';

export function useBerries() {
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