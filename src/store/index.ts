import { create } from 'zustand'

const useGlobalStore = create((set) => ({
    title: 'Home',
    setTitle: (title) => set(() => ({ title })),
}))

export { useGlobalStore }