// src/App.js
import React from 'react';
import WordList from './components/WordList';
import AddWordForm from './components/AddWordForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <AddWordForm />
      <WordList />
    </div>
  );
}

export default App;