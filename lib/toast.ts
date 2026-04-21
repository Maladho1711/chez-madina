"use client";

import { create } from "zustand";

interface ToastState {
  message: string;
  visible: boolean;
  show: (msg: string) => void;
}

let toastTimer: ReturnType<typeof setTimeout> | null = null;

export const useToast = create<ToastState>((set) => ({
  message: "",
  visible: false,
  show: (msg) => {
    set({ message: msg, visible: true });
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => set({ visible: false }), 2200);
  },
}));
