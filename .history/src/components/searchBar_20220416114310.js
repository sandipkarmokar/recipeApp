import React from 'react';

const SearchBar = () => {
    return (
        <div className="searchBar">
            <form className="searchBar-container">
                <input type="text" />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
