import { create } from 'zustand'

const useGlobalStore = create((set) => ({
    title: 0,
    setTitle: () => set((state) => ({ title: state.title })),
}))

export { useGlobalStore }