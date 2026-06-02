import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useAppContext } from "../context/AppContext";
import Descricao from "../screens/Descricao/Descricaoscreen";
import Trailer from "../screens/Trailer/Trailerscreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { colors } = useAppContext();

  return (
    <Stack.Navigator
      initialRouteName="Descricao"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="Descricao" component={Descricao} />
      <Stack.Screen name="Trailer" component={Trailer} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
