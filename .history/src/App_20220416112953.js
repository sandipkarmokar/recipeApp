import { useState } from 'react';
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    const url = `https://forkify-api.herokuapp.com/api/search?q=${query}`;
    return <div>App</div>;
};

export default App;
