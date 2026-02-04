import { create } from "zustand";

interface UIState {
  isMobileMenuOpen: boolean;
  isContactFormOpen: boolean;
  activeSection: string;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleMobileMenu: () => void;
  openContactForm: () => void;
  closeContactForm: () => void;
  setActiveSection: (section: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isMobileMenuOpen: false,
  isContactFormOpen: false,
  activeSection: "inicio",
  openMobileMenu: () => set({ isMobileMenuOpen: true }),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  openContactForm: () => set({ isContactFormOpen: true }),
  closeContactForm: () => set({ isContactFormOpen: false }),
  setActiveSection: (section) => set({ activeSection: section }),
}));
