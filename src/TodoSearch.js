import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
    const [searchValue, setSearchValue] = React.useState('');

    console.log('Los usuarios buscan ' + searchValue);

    return (
        <input placeholder="Pasear a Oreo" className='TodoSearch' 
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value);
            }}
        />
    );
}

export { TodoSearch };