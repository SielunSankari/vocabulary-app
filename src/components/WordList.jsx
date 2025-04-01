// src/components/WordList.js
import React from 'react';
import useWordStore from '../store';
import WordCard from './WordCard';

function WordList() {
  const words = useWordStore((state) => state.words);

  return (
    <div className="word-list">
      <h2>Список слов:</h2>
      {words.length > 0 ? (
        words.map((word) => <WordCard key={word.id} word={word} />)
      ) : (
        <p>Список слов пуст.</p>
      )}
    </div>
  );
}

export default WordList;