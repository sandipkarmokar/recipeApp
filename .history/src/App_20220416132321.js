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

    console.log(recipeList);

    const url = `https://forkify-api.herokuapp.com/api/search?q=${query}`;
    const recipeUrl = `https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`;

    const fetchData = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(url);
            const data = await response.json();
            setRecipeList(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="app">
            <div className="app-container">
                <SearchBar
                    query={query}
                    setQuery={setQuery}
                    fetchData={fetchData}
                ></SearchBar>
                <div className="recipe-modal">
                    {recipeList ? (
                        <>
                            <ListView></ListView>
                            <RecipeShow></RecipeShow>
                        </>
                    ) : (
                        'hello'
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
