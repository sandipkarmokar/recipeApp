import { useState } from 'react';
import './App.css';

const App = () => {
    const url = `https://forkify-api.herokuapp.com/api/search?q=${query}`;
    const [query, setQuery] = useState('');
    return <div>App</div>;
};

export default App;
