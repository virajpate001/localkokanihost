// src/context/OwnerAuthContext.js
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  ownerLogin, ownerLogout, ownerSignup, getCurrentOwner,
} from "@/lib/services/authService";

const OwnerAuthContext = createContext(null);

export function OwnerAuthProvider({ children }) {
  const [owner, setOwner] = useState(null);
  const [ownerProfile, setOwnerProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    getCurrentOwner()
      .then((result) => {
        if (!mounted) return;
        if (result) {
          setOwner(result.user);
          setOwnerProfile(result.profile);
        }
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const signup = async ({ fullName, email, mobile, whatsapp, password }) => {
    const result = await ownerSignup({ fullName, email, mobile, whatsapp, password });
    if (result.error) {
      const err = new Error(result.error);
      err.code = result.error;
      throw err;
    }
    setOwner(result.user);
    return result.user;
  };

  const login = async (email, password) => {
    const result = await ownerLogin(email, password);
    if (result.error) {
      const err = new Error(result.error);
      err.code = result.error;
      throw err;
    }
    setOwner(result.user);
    setOwnerProfile(result.profile);
    return result.user;
  };

  const logout = async () => {
    await ownerLogout();
    setOwner(null);
    setOwnerProfile(null);
  };

  return (
    <OwnerAuthContext.Provider value={{ owner, ownerProfile, loading, signup, login, logout }}>
      {children}
    </OwnerAuthContext.Provider>
  );
}

export function useOwnerAuth() {
  const context = useContext(OwnerAuthContext);
  if (!context) throw new Error("useOwnerAuth must be used within an OwnerAuthProvider");
  return context;
}
