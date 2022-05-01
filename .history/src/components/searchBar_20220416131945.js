import React from 'react';

const SearchBar = ({ query, setQuery }) => {
    return (
        <div className="searchBar">
            <form className="searchBar-container">
                <input
                    type="text"
                    placeholder="Search for recipe..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
