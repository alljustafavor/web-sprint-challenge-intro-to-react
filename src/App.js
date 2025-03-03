import React, { useState, useEffect } from 'react';
import { ReactDOM } from 'react';
import axios from 'axios';
import Characters from './components/Character';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([])


  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
      .then(res => {
        setCharacters(res.data)})
      .catch(err => {
        console.log(err)})  
  }, [])


  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1 className="Header">Characters</h1>
        <Characters characters={characters} />
      </div>
    </ThemeProvider>  
  );
}

export default App;
