// src/components/AddWordForm.js
import React, { useState } from 'react';
import useWordStore from '../store';

function AddWordForm() {
  const [word, setWord] = useState('');
  const [translation, setTranslation] = useState('');
  const addWord = useWordStore((state) => state.addWord);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (word.trim() && translation.trim()) {
      addWord(word, translation);
      setWord('');
      setTranslation('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-word-form">
      <input
        type="text"
        placeholder="Введите слово"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <input
        type="text"
        placeholder="Введите перевод"
        value={translation}
        onChange={(e) => setTranslation(e.target.value)}
      />
      <button type="submit">Добавить слово</button>
    </form>
  );
}

export default AddWordForm;