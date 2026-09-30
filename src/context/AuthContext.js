// src/context/AuthContext.js
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { adminLogin, adminLogout, getCurrentAdmin } from "@/lib/services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    getCurrentAdmin()
      .then((admin) => {
        if (mounted) setUser(admin);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const login = async (email, password) => {
    const result = await adminLogin(email, password);
    if (result.error) {
      const err = new Error(result.error);
      err.code = result.error; // keeps existing `error.code === "auth/..."` checks working
      throw err;
    }
    setUser(result.user);
    return result.user;
  };

  const logout = async () => {
    await adminLogout();
    setUser(null);
  };

  const value = { user, loading, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
