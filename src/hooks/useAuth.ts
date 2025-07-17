import { useState, useEffect } from 'react';
import { User } from '@/types';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email: string, password: string) => {
    // Demo login logic
    const demoUser: User = {
      id: '1',
      name: email === 'manager@demo.com' ? 'Demo Manager' : 'Demo Student',
      email,
      role: email === 'manager@demo.com' ? 'manager' : 'student',
    };
    
    setUser(demoUser);
    localStorage.setItem('user', JSON.stringify(demoUser));
    return Promise.resolve(demoUser);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
  };
};