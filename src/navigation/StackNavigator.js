import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Descricao from "../screens/Descricao/Descricaoscreen";
import Trailer from "../screens/Trailer/Trailerscreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Descricao"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#F4F8F7" },
      }}
    >
      <Stack.Screen name="Descricao" component={Descricao} />
      <Stack.Screen name="Trailer" component={Trailer} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
