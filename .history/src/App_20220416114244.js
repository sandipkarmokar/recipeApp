import { useState } from 'react';
import './App.css';
import SearchBar from './components/searchBar';

const App = () => {
    const [query, setQuery] = useState('');
    const [recipeList, setRecipeList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [recipeId, setRecipeId] = useState('');

    const url = `https://forkify-api.herokuapp.com/api/search?q=${query}`;
    const recipeUrl = `https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`;

    return (
        <div className="app">
            <div className="app-container">
                <SearchBar></SearchBar>
            </div>
        </div>
    );
};

export default App;
