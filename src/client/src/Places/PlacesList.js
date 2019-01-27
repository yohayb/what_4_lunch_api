import React from 'react';
import Place from './Place';
const PlacesList = ({ places }) => {
    return (
        <div style={{display: "flex", flexWrap:"wrap"}}>
            {places && places.map(p => <div key={p.name} style={{margin: "5px" }}><Place place={p} /></div>)}
        </div>
    );
}
export default PlacesList;