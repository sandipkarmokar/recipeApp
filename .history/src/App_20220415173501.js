import { useEffect, useStata, useState } from 'react';
import ListView from './components/listView';
import SearchBar from './components/searchBar';
import RecipeShow from './components/recipeShow';
import './App.css';

function App() {
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [recipeIngredients, setRecipeIngredients] = useState([]);
    const [recipeList, setRecipeList] = useState([]);
    const [recipeId, setRecipeId] = useState();
    const [recipe, setRecipe] = useState([]);

    const url = `https://forkify-api.herokuapp.com/api/search?q=${query}`;
    const urlRecipe = `https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`;

    const fetchData = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(url);
            const data = await response.json();
            setRecipeList(data.recipes);
            setIsLoading(false);
            setQuery('');
        } catch (error) {
            console.log(error);
        }
    };

    const fetchRecipe = async () => {
        try {
            const response = await fetch(urlRecipe);
            const data = await response.json();
            setRecipe(data);
            console.log(recipe, recipeId);
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
                <div className="app-modal">
                    <ListView
                        recipeList={recipeList}
                        setRecipeId={setRecipeId}
                        fetchRecipe={fetchRecipe}
                    ></ListView>
                    {recipe ? <RecipeShow></RecipeShow> 
}

export default App;
