import React from 'react';
import { BerryList } from "./BerryList.jsx";
import { useBerries } from "../hooks/useBerries";
import {primaryColor} from "../data/constants";

export function BerryListView({ data: berryList = []}) {   
    // const { berries: berryList} = useBerries();
    return (
        <React.Fragment>
            <section id={'berries'} style={{ maxWidth: "992px", margin: "0 auto"}}>
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
                <BerryList berries={berryList} />
            </section>
        </React.Fragment>
    );
}
