import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pressable } from "react-native";

import { useAppContext } from "../context/AppContext";
import Assinatura from "../screens/Assinatura/Assinaturascreen";
import Configuracoes from "../screens/Configuracoes/Configuracaoscreen";
import Conta from "../screens/Conta/Contascreen";
import Home from "../screens/Home/Homescreen";
import Favoritos from "../screens/Favoritos/Favoritoscreen";
import Perfil from "../screens/Perfil/Perfilscreen";
import Pesquisa from "../screens/Pesquisa/Pesquisascreen";
import StackNavigator from "./StackNavigator";

const Tab = createBottomTabNavigator();

const hiddenTabOptions = {
  tabBarButton: () => null,
  tabBarItemStyle: { display: "none" },
};

const tabIcons = {
  Home: "home-outline",
  Perfil: "person-outline",
  Favoritos: "heart-outline",
  Pesquisa: "search-outline",
};

export default function TabNavigator() {
  const { colors } = useAppContext();

  return (
    <Tab.Navigator
      screenOptions={({ navigation, route }) => ({
        headerShown: true,
        headerTitle: route.name,
        headerStyle: {
          backgroundColor: colors.surface,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          color: colors.text,
          fontWeight: "900",
        },
        headerLeft: () => (
          <Pressable
            onPress={() => navigation.getParent()?.openDrawer()}
            style={{ marginLeft: 16 }}
          >
            <Ionicons name="menu-outline" size={28} color={colors.text} />
          </Pressable>
        ),
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.navInactive,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
        },
        tabBarLabelStyle: {
          fontWeight: "800",
        },
        tabBarIcon: ({ color, size, focused }) => {
          const iconName = focused
            ? tabIcons[route.name]?.replace("-outline", "")
            : tabIcons[route.name];

          if (!iconName) {
            return null;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Perfil" component={Perfil} />
      <Tab.Screen name="Favoritos" component={Favoritos} />
      <Tab.Screen name="Pesquisa" component={Pesquisa} />
      <Tab.Screen name="Conta" component={Conta} options={hiddenTabOptions} />
      <Tab.Screen name="Configuracoes" component={Configuracoes} options={hiddenTabOptions} />
      <Tab.Screen name="Assinatura" component={Assinatura} options={hiddenTabOptions} />
      <Tab.Screen
        name="Detalhes"
        component={StackNavigator}
        options={hiddenTabOptions}
      />
    </Tab.Navigator>
  );
}
