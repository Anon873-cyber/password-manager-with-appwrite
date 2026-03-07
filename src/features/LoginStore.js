import { create } from "zustand";

const loginStore = create((set) => ({

    loginStatus: false,
    userData: null,
    login: (userData) =>
        set({ loginStatus: true, userData: userData }),
    Logout: () =>
        set({ loginStatus: false, userData: null }),

}));

export default loginStore;

