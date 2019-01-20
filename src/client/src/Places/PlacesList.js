import React from 'react';
import Place from './Place';
const PlacesList = ({ places }) => {
    return (
        <div>
            {places.map(p => <div style={{margin: "5px" }}><Place place={p} /></div>)}
        </div>
    );
}
export default PlacesList;