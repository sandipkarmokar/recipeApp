import './App.css';

const [query, setQuery] = useState('');

const url = `https://forkify-api.herokuapp.com/api/search?q=${query}`;

const App = () => {
    return <div>App</div>;
};

export default App;
