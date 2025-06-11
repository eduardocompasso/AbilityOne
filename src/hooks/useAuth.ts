import { useCallback } from 'react';
import { useStore } from '../store';
import { api } from '../mocks/api';
import type { User } from '../types';

export const useAuth = () => {
  const { user, setUser, isAuthenticated, setIsAuthenticated, clearUser } = useStore();

  const login = useCallback(async (email: string, password: string): Promise<User> => {
    try {
      const userData = await api.login(email, password);
      setUser(userData);
      setIsAuthenticated(true);
      return userData;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }, [setUser, setIsAuthenticated]);

  const register = async (
    email: string,
    password: string,
    userData: { firstName: string; lastName: string }
  ): Promise<User> => {
    try {
      const response = await new Promise<User>((resolve) => {
        setTimeout(() => {
          resolve({
            id: '1',
            email,
            firstName: userData.firstName,
            lastName: userData.lastName,
          });
        }, 1000);
      });

      setUser(response);
      return response;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  const logout = useCallback(async (): Promise<void> => {
    try {
      await api.logout();
      clearUser();
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }, [clearUser]);

  const getProfile = useCallback(async (): Promise<any> => {
    try {
      const userData = await api.getProfile();
      if (userData) {
        setUser(userData);
        setIsAuthenticated(true);
      }
      return userData;
    } catch (error) {
      console.error('Get profile error:', error);
      throw error;
    }
  }, [setUser, setIsAuthenticated]);

  return {
    user,
    isAuthenticated,
    login,
    register,
    logout,
    getProfile,
  };
}; 