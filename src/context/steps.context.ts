import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StepsStore {
  step: number;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export const useStepsStore = create<StepsStore>()(
  persist(
    (set) => ({
      step: 1,
      setStep: (step) => set({ step }),
      nextStep: () => set((state) => ({ step: state.step + 1 })),
      prevStep: () => set((state) => ({ step: Math.max(state.step - 1, 1) })),
    }),
    {
      name: "user-steps",
    }
  )
);
