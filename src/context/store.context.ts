import { create } from "zustand";

// contexto para el manejo de toast en pila
interface Toast {
  id: number;
  message: string;
  type: "success" | "error";
}

interface ToastStore {
  toasts: Toast[];
  showToast: (message: string, type: Toast["type"]) => void;
  hideToast: (id: number) => void;
}

let idCounter = 0;

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  showToast: (message, type) =>
    set((state) => {
      const newToast: Toast = {
        id: ++idCounter,
        message,
        type,
      };

      const updatedToasts = [...state.toasts, newToast].slice(0, 3); 

      return { toasts: updatedToasts };
    }),
  hideToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
}));
