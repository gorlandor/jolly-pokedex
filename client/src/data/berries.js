import Axios from 'axios';

export async function getBerries(offset = 0, limit = 50) {
    const url = `https://pokeapi.co/api/v2/berry?offset=${offset}&limit=${limit}`;

    return new Promise(async function(resolve, reject) {
        try {
            const response = await Axios.get(url, {
                headers: new Headers({
                    Accept: 'application/json; charset=utf-8',
                }),
            });

            if (response.status === 200) {
                return resolve(response.data);
            } else {
                return reject({
                    error: new Error(response.statusText),
                    response: response,
                    status: response.status,
                });
            }
        } catch (error) {
            console.warn(error);
            return reject(error);
        }
    });
}

export const berries1 = {
    count: 64,
    next: 'https://pokeapi.co/api/v2/berry/?offset=20&limit=20',
    previous: null,
    results: [
        { name: 'cheri', url: 'https://pokeapi.co/api/v2/berry/1/' },
        { name: 'chesto', url: 'https://pokeapi.co/api/v2/berry/2/' },
        { name: 'pecha', url: 'https://pokeapi.co/api/v2/berry/3/' },
        { name: 'rawst', url: 'https://pokeapi.co/api/v2/berry/4/' },
        { name: 'aspear', url: 'https://pokeapi.co/api/v2/berry/5/' },
        { name: 'leppa', url: 'https://pokeapi.co/api/v2/berry/6/' },
        { name: 'oran', url: 'https://pokeapi.co/api/v2/berry/7/' },
        { name: 'persim', url: 'https://pokeapi.co/api/v2/berry/8/' },
        { name: 'lum', url: 'https://pokeapi.co/api/v2/berry/9/' },
        { name: 'sitrus', url: 'https://pokeapi.co/api/v2/berry/10/' },
        { name: 'figy', url: 'https://pokeapi.co/api/v2/berry/11/' },
        { name: 'wiki', url: 'https://pokeapi.co/api/v2/berry/12/' },
        { name: 'mago', url: 'https://pokeapi.co/api/v2/berry/13/' },
        { name: 'aguav', url: 'https://pokeapi.co/api/v2/berry/14/' },
        { name: 'iapapa', url: 'https://pokeapi.co/api/v2/berry/15/' },
        { name: 'razz', url: 'https://pokeapi.co/api/v2/berry/16/' },
        { name: 'bluk', url: 'https://pokeapi.co/api/v2/berry/17/' },
        { name: 'nanab', url: 'https://pokeapi.co/api/v2/berry/18/' },
        { name: 'wepear', url: 'https://pokeapi.co/api/v2/berry/19/' },
        { name: 'pinap', url: 'https://pokeapi.co/api/v2/berry/20/' },
    ],
};

export const berries2 = {
    count: 64,
    next: 'https://pokeapi.co/api/v2/berry/?offset=40&limit=20',
    previous: 'https://pokeapi.co/api/v2/berry/?offset=0&limit=20',
    results: [
        { name: 'pomeg', url: 'https://pokeapi.co/api/v2/berry/21/' },
        { name: 'kelpsy', url: 'https://pokeapi.co/api/v2/berry/22/' },
        { name: 'qualot', url: 'https://pokeapi.co/api/v2/berry/23/' },
        { name: 'hondew', url: 'https://pokeapi.co/api/v2/berry/24/' },
        { name: 'grepa', url: 'https://pokeapi.co/api/v2/berry/25/' },
        { name: 'tamato', url: 'https://pokeapi.co/api/v2/berry/26/' },
        { name: 'cornn', url: 'https://pokeapi.co/api/v2/berry/27/' },
        { name: 'magost', url: 'https://pokeapi.co/api/v2/berry/28/' },
        { name: 'rabuta', url: 'https://pokeapi.co/api/v2/berry/29/' },
        { name: 'nomel', url: 'https://pokeapi.co/api/v2/berry/30/' },
        { name: 'spelon', url: 'https://pokeapi.co/api/v2/berry/31/' },
        { name: 'pamtre', url: 'https://pokeapi.co/api/v2/berry/32/' },
        { name: 'watmel', url: 'https://pokeapi.co/api/v2/berry/33/' },
        { name: 'durin', url: 'https://pokeapi.co/api/v2/berry/34/' },
        { name: 'belue', url: 'https://pokeapi.co/api/v2/berry/35/' },
        { name: 'occa', url: 'https://pokeapi.co/api/v2/berry/36/' },
        { name: 'passho', url: 'https://pokeapi.co/api/v2/berry/37/' },
        { name: 'wacan', url: 'https://pokeapi.co/api/v2/berry/38/' },
        { name: 'rindo', url: 'https://pokeapi.co/api/v2/berry/39/' },
        { name: 'yache', url: 'https://pokeapi.co/api/v2/berry/40/' },
    ],
};
