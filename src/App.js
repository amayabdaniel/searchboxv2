import { getPosts } from './api/axios';
import { useState, useEffect } from "react";
import './App.css';
import Searchbar from './components/Searchbar';

function App() {
  const [ posts, setPosts ] = useState([]);
  const [ searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        getPosts().then(json => {
          setPosts(json)
          return json;
        }).then(json => {
            setSearchResults(json)
        })
      }, [])
      
  return (
    <div className="App">
      <Searchbar placeholder="Enter text..." data={posts}/>
    </div>
  );
}

export default App;
