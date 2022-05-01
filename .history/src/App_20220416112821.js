import { useState } from 'react';
import './App.css';

const url = `https://forkify-api.herokuapp.com/api/search?q=${query}`;
const [query, setQuery] = useState('');

const App = () => {
    return <div>App</div>;
};

export default App;
