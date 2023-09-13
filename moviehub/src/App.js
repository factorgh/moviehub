import { useEffect, useState } from 'react';
import './App.css';
import Box from './components/Box';
import Menu from './components/Menu';
import MoviesList from './components/MoviesList';
import Error from './components/Error';
import MovieDetails from './components/MovieDetails';

const style = {
  display: "flex",
  justifyContent: "center",
}


function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('back');
  const [error, setError] = useState('');
  const [loading, SetLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleClick=(id)=>{
    setSelectedId(id);
}

  function handleCancel() {
    setSelectedId(null);
  }

  useEffect(function () {
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        SetLoading(true);
        const res = await fetch(`http://www.omdbapi.com/?apikey=12a93dfa&s=${query}`,{signal:controller.signal});
        if (!res) throw new Error('no movies found');
        const data = await res.json();
        console.log(data.Search);
        if (query.length > 3) {
          setMovies(data.Search);
          SetLoading(false);
        }
      } catch (err) {
        console.log(err.message)
        setError(err.message);
      }
     }
  
  

    if (query.length > 3) {
      fetchMovies();
    }
    return function () {
      controller.abort();
    }
  },[query])

  return (
    <div className="App">
    <Menu query={query} setQuery={setQuery} movies={movies} />
      <div style={style}>
        {!movies ? <Error message={error} />:<Box><MoviesList selectedId={selectedId}  handleCancel={handleCancel} movies={movies} handleClick={handleClick}  loading={loading} /></Box>}
        {!selectedId?"":
          <Box>
          <MovieDetails selectedId={selectedId} handleCancel={handleCancel} />
       </Box>
       }  
      </div>
      
    </div>
  );
}

export default App;
