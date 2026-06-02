import { Text, View } from "react-native";

import { useAppContext } from "../../context/AppContext";
import createStyles from "./styles";

export default function Login() {
  const { colors } = useAppContext();
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
    </View>
  );
}
