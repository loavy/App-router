import 'react-native-gesture-handler';

import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useMemo } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { AppProvider, useAppContext } from './src/context/AppContext';
import DrawerNavigator from './src/navigation/DrawerNavigator';

function AppContent() {
  const { colors, modoEscuro } = useAppContext();

  const navigationTheme = useMemo(() => {
    const baseTheme = modoEscuro ? DarkTheme : DefaultTheme;

    return {
      ...baseTheme,
      colors: {
        ...baseTheme.colors,
        background: colors.background,
        border: colors.border,
        card: colors.surface,
        primary: colors.accent,
        text: colors.text,
      },
    };
  }, [colors, modoEscuro]);

  return (
    <NavigationContainer theme={navigationTheme}>
      <DrawerNavigator />
      <StatusBar style={modoEscuro ? "light" : "dark"} />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AppProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppContent />
      </GestureHandlerRootView>
    </AppProvider>
  );
}
