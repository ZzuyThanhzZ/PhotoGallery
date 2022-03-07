import {useEffect, useContext} from 'react'
import './App.css';
import Header from './components/Header/Header'
import Item from './components/Item'
import PhotoContext from './context/PhotoContext'

let searchTerm;

function App() {

  const {runSearch} = useContext(PhotoContext);

  const handleSubmit = (e, searchInput) => {
    e.preventDefault();
    window.location.hash = `${searchInput}`;
    searchTerm = searchInput
    runSearch(searchInput)
  }

  return (
    <div className="App container">
      <Header handleSubmit={handleSubmit} />
      <Item searchTerm={window.location.hash.replace('#', '') || 'pet'}/>
    </div>
  );
}

export default App;
