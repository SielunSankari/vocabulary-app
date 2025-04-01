import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { nanoid } from 'nanoid';

const useWordStore = create(
  persist(
    (set) => ({
      words: [],
      addWord: (word, translation) =>
        set((state) => ({
          words: [...state.words, { id: nanoid(), word, translation }],
        })),
      editWord: (id, updatedWord, updatedTranslation) =>
        set((state) => ({
          words: state.words.map((w) =>
            w.id === id ? { ...w, word: updatedWord, translation: updatedTranslation } : w
          ),
        })),
      deleteWord: (id) =>
        set((state) => ({
          words: state.words.filter((w) => w.id !== id),
        })),
    }),
    {
      name: 'word-storage',
    }
  )
);

export default useWordStore;