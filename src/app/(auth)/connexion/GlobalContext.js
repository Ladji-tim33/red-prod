import React, { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import axios from "axios";

export let prenom;

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [client, setClient] = useState("");
  const router = useRouter();

  // Fonction de connexion
  const handleLogin = () => {
    axios
      .post("http://localhost:4000/api/auth/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data); // Connexion réussie, vous pouvez gérer le token ici
        const token = response.data.token;
        // Stocker le token dans le local storage
        localStorage.setItem("token", token);
        // Rediriger l'utilisateur vers une autre page par exemple
        router("/home");
      })
      .catch((error) => {
        console.error(error); // Gérer les erreurs ici
        alert("Email ou mot de passe incorrect");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Fonction pour supprimer le token du local storage après la déconnexion
  const handleLogout = () => {
    localStorage.removeItem("token");
    router("/inscription");
  };

  const handleLogoutUser = () => {
    localStorage.removeItem("tokenclient");
    router("/");
  };

  // Fonction pour vérifier si l'utilisateur est connecté
  const isLoggedIn = () => {
    // Vérifie si un token est présent dans le local storage
    const token = localStorage.getItem("token");
    // Si un token est présent, retourne true, sinon retourne false
    return !!token;
  };

  const profileUser = async () => {
    const token = localStorage.getItem("tokenclient");

    if (!token) {
      return;
    }

    try {
      const res = await axiosInstance.get("/authclient/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setClient(res.data);
      // console.log(res.data);
      prenom = res.data.prenom;
      // console.log(client, 'client');
    } catch (error) {
      console.error(error);
    }
  };

  const value = {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleLogout,
    isLoggedIn,
    handleLogoutUser,
    profileUser,
    client,
    setClient,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
