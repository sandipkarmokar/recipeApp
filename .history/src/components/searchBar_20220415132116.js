import React from 'react';

const SearchBar = ({ query, setQuery, fetchData }) => {
    return (
        <div className="searchBar">
            <div className="searchBar-container">
                <div className="logo">FooD IT</div>
                <form onSubmit={fetchData} className="search">
                    <input
                        type="text"
                        placeholder="search...."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        </div>
    );
};

export default SearchBar;
