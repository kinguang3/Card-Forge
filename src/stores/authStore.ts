import { create } from 'zustand';

export interface User {
  id: string;
  username: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  checkAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: localStorage.getItem('auth-token'),
  isAuthenticated: !!localStorage.getItem('auth-token'),
  isLoading: false,

  login: async (username: string, password: string) => {
    void password;
    set({ isLoading: true });
    try {
      // TODO: 替换为真实 API 调用
      await new Promise((r) => setTimeout(r, 800));
      const user: User = { id: '1', username, email: `${username}@example.com` };
      const token = 'mock-token-' + Date.now();
      localStorage.setItem('auth-token', token);
      set({ user, token, isAuthenticated: true, isLoading: false });
      return true;
    } catch {
      set({ isLoading: false });
      return false;
    }
  },

  register: async (username: string, email: string, password: string) => {
    void password;
    set({ isLoading: true });
    try {
      await new Promise((r) => setTimeout(r, 800));
      const user: User = { id: Date.now().toString(), username, email };
      const token = 'mock-token-' + Date.now();
      localStorage.setItem('auth-token', token);
      set({ user, token, isAuthenticated: true, isLoading: false });
      return true;
    } catch {
      set({ isLoading: false });
      return false;
    }
  },

  logout: () => {
    localStorage.removeItem('auth-token');
    set({ user: null, token: null, isAuthenticated: false });
  },

  checkAuth: () => {
    const token = localStorage.getItem('auth-token');
    if (token) {
      // TODO: 调用 API 验证 token 有效性
      set({ isAuthenticated: true, token });
    } else {
      set({ isAuthenticated: false, token: null, user: null });
    }
  },
}));
