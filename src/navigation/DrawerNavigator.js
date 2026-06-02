import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import { useAppContext } from "../context/AppContext";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

function AppDrawerContent(props) {
  const { colors } = useAppContext();

  const goToTab = (screen) => {
    props.navigation.navigate("Inicio", { screen });
    props.navigation.closeDrawer();
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ backgroundColor: colors.surface, flexGrow: 1 }}
    >
      <DrawerItem
        label="Conta"
        labelStyle={{ color: colors.text, fontWeight: "800" }}
        icon={({ color, size }) => (
          <Ionicons name="person-circle-outline" color={color} size={size} />
        )}
        activeTintColor={colors.accent}
        inactiveTintColor={colors.text}
        onPress={() => goToTab("Conta")}
      />
      <DrawerItem
        label="Configuracoes"
        labelStyle={{ color: colors.text, fontWeight: "800" }}
        icon={({ color, size }) => (
          <Ionicons name="settings-outline" color={color} size={size} />
        )}
        activeTintColor={colors.accent}
        inactiveTintColor={colors.text}
        onPress={() => goToTab("Configuracoes")}
      />
      <DrawerItem
        label="Assinatura"
        labelStyle={{ color: colors.text, fontWeight: "800" }}
        icon={({ color, size }) => (
          <Ionicons name="card-outline" color={color} size={size} />
        )}
        activeTintColor={colors.accent}
        inactiveTintColor={colors.text}
        onPress={() => goToTab("Assinatura")}
      />
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator() {
  const { colors } = useAppContext();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <AppDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: { backgroundColor: colors.surface },
        headerShown: false,
        sceneStyle: { backgroundColor: colors.background },
      }}
    >
      <Drawer.Screen name="Inicio" component={TabNavigator} />
    </Drawer.Navigator>
  );
}
