// src/components/WordCard.js
import React, { useState } from 'react';
import useWordStore from '../store';

function WordCard({ word }) {
  const [showTranslation, setShowTranslation] = useState(false);
  const deleteWord = useWordStore((state) => state.deleteWord);

  const handleKnow = () => {
   console.log("learn this word");
  };

  const handleDontKnow = () => {
    deleteWord(word.id);
  };

  return (
    <div className="word-card" onClick={() => setShowTranslation(!showTranslation)}>
      <div className="word">{word.word}</div>
      {showTranslation && <div className="translation">{word.translation}</div>}
      <div className="card-buttons">
        <button onClick={(e) => { e.stopPropagation(); handleKnow(); }}>Не знаю</button>
        <button onClick={(e) => { e.stopPropagation(); handleDontKnow(); }}>Знаю</button>
      </div>
    </div>
  );
}

export default WordCard;