import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Person = ({ person, deletePerson }) => {
    return (
        <div style={{margin: '10px', fontSize: '18px'}}>
            <DeleteIcon style={{verticalAlign: 'middle', cursor: 'pointer'}} onClick={() => deletePerson(person.name)} />
            {person.name}
        </div>
       
    );
}

export default Person;