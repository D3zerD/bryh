import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(persist(
  (set) => ({
    input: '',
    result: 0,
    history: [],

    setInput: (value) => set({ input: value }),
    clearInput: () => set({ input: '' }),
    
    calculate: () => set((state) => {
      try {
        const newResult = eval(state.input);
        const newHistory = [...state.history, `${state.input} = ${newResult}`];
        return { result: newResult, history: newHistory, input: '' };
      } catch {
        return { result: 'Ошибка', input: '' };
      }
    }),
    
    clearHistory: () => set({ history: [] }),
  }),
  {
    name: 'calculator-storage',
    getStorage: () => localStorage,
  }
));

export default useStore;
