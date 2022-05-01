import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/searchBar';
import ListView from './components/listView';
import RecipeShow from './components/recipeShow';

const App = () => {
    const [query, setQuery] = useState('');
    const [recipeList, setRecipeList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [recipeId, setRecipeId] = useState('');
    const [recipeData, setRecipeData] = useState([]);

    console.log(recipeList);

    const url = `https://forkify-api.herokuapp.com/api/search?q=${query}`;
    const recipeUrl = `https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`;

    const fetchData = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(url);
            const data = await response.json();
            setRecipeList(data);
            setIsLoading(true);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setRecipeData(data);
            } catch (error) {}
        };
    }, [recipeId]);

    return (
        <div className="app">
            <div className="app-container">
                <SearchBar
                    query={query}
                    setQuery={setQuery}
                    fetchData={fetchData}
                ></SearchBar>
                <div className="recipe-modal">
                    {isLoading ? (
                        <>
                            <ListView
                                recipeList={recipeList.recipes}
                            ></ListView>
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
