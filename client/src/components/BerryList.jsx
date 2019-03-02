import React from 'react';
import { berries1, berries2 } from '../data/berries';

export function BerryList({ berries }) {
  return (
        <ol>
            {berries.map(function(berry, i) {
                return <li key={i}>
                    <a href={berry.url}>{berry.name}</a>
                </li>;
            })}
        </ol>
    );
}
export function BerryListView(props) {
    const berries = berries1.results.concat(berries2.results);
    return (
      <React.Fragment>
        <h2 style={{ color: "royalblue", fontSize: "1.25em", fontFamily: "Arial, Helvetica, sans-serif" }}>Berries</h2>
        <BerryList berries={berries} />
      </React.Fragment>
    );
}
