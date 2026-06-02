import { createContext, useContext, useMemo, useState } from "react";

import { filmes } from "../data/catalogo";

const AppContext = createContext(null);

const lightColors = {
  isDark: false,
  background: "#F8FAFC",
  surface: "#FFFFFF",
  surfaceAlt: "#F3F4F6",
  surfaceStrong: "#111827",
  text: "#111827",
  textSoft: "#6B7280",
  textMuted: "#9CA3AF",
  border: "#E5E7EB",
  accent: "#EF4444",
  accentSoft: "#FEE2E2",
  accentText: "#991B1B",
  warning: "#F59E0B",
  warningSoft: "#FEF3C7",
  warningText: "#92400E",
  overlay: "rgba(17, 24, 39, 0.42)",
  navInactive: "#64748B",
  shadow: "#000000",
};

const darkColors = {
  isDark: true,
  background: "#020617",
  surface: "#0F172A",
  surfaceAlt: "#1E293B",
  surfaceStrong: "#111827",
  text: "#F8FAFC",
  textSoft: "#CBD5E1",
  textMuted: "#94A3B8",
  border: "#334155",
  accent: "#F87171",
  accentSoft: "#3F1D28",
  accentText: "#FCA5A5",
  warning: "#FDE68A",
  warningSoft: "#3B2F12",
  warningText: "#FDE68A",
  overlay: "rgba(2, 6, 23, 0.58)",
  navInactive: "#94A3B8",
  shadow: "#000000",
};

const favoritosIniciais = [1, 3, 5];

export function AppProvider({ children }) {
  const [modoEscuro, setModoEscuro] = useState(false);
  const [favoritoIds, setFavoritoIds] = useState(favoritosIniciais);

  const value = useMemo(() => {
    const colors = modoEscuro ? darkColors : lightColors;
    const favoritos = filmes.filter((filme) => favoritoIds.includes(filme.id));

    const isFavorite = (filmeId) => favoritoIds.includes(filmeId);

    const toggleFavorite = (filmeId) => {
      setFavoritoIds((idsAtuais) => {
        if (idsAtuais.includes(filmeId)) {
          return idsAtuais.filter((id) => id !== filmeId);
        }

        return [...idsAtuais, filmeId];
      });
    };

    return {
      colors,
      favoritoIds,
      favoritos,
      isFavorite,
      modoEscuro,
      setModoEscuro,
      toggleFavorite,
    };
  }, [favoritoIds, modoEscuro]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext precisa estar dentro de AppProvider");
  }

  return context;
}
