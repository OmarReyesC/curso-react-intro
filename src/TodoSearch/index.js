import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext);

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