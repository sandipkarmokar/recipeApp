import { useState } from 'react';
import './App.css';
import SearchBar from './components/searchBar';
import ListView from './components/listView';
import RecipeShow from './components/recipeShow';

const App = () => {
    const [query, setQuery] = useState('');
    const [recipeList, setRecipeList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [recipeId, setRecipeId] = useState('');

    const url = `https://forkify-api.herokuapp.com/api/search?q=${query}`;
    const recipeUrl = `https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`;

    const fetchData = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(url);
            const data = await response.json();
            setRecipeList(data);
        } catch (error) {}
    };

    return (
        <div className="app">
            <div className="app-container">
                <SearchBar></SearchBar>
                <div className="recipe-modal">
                    <ListView query={query}></ListView>
                    <RecipeShow></RecipeShow>
                </div>
            </div>
        </div>
    );
};

export default App;
