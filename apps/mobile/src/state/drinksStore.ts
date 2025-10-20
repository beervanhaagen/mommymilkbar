import { create } from "zustand";
import { persist } from "zustand/middleware";

export type DrinkEntry = { id: string; time: number; standardDrinks: number };

type DrinksState = {
  drinks: DrinkEntry[];
  addDrink: (standardDrinks: number) => void;
  clear: () => void;
};

export const useDrinksStore = create<DrinksState>()(
  persist(
    (set) => ({
      drinks: [],
      addDrink: (standardDrinks) =>
        set((s) => ({
          drinks: [
            { id: Math.random().toString(36).slice(2), time: Date.now(), standardDrinks },
            ...s.drinks
          ]
        })),
      clear: () => set({ drinks: [] })
    }),
    { name: "drinks-store" }
  )
);
