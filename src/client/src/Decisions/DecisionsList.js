import React from 'react';
import Decision from './Decision';
const DecisionsList = ({ decisions }) => {
    return (
        <div style={{display: "flex", flexWrap:"wrap"}}>
            {decisions && decisions.map(d => <div key={d.time} style={{margin: "5px" }}><Decision decision={d} /></div>)}
        </div>
    );
}
export default DecisionsList;