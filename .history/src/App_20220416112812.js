import { useState } from 'react';
import './App.css';

const url = `https://forkify-api.herokuapp.com/api/search?q=${query}`;

const App = () => {
    const [query, setQuery] = useState('');
    return <div>App</div>;
};

export default App;
