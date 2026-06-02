import { Ionicons } from "@expo/vector-icons";
import { ImageBackground, Pressable, Text, View } from "react-native";

import { filmes } from "../../data/catalogo";
import styles from "./styles";

export default function Trailer({ navigation, route }) {
  const filme = filmes.find((item) => item.id === route.params?.filmeId) ?? filmes[0];

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
      </Pressable>

      <ImageBackground
        source={{ uri: filme.imagem }}
        style={styles.preview}
        imageStyle={styles.previewImage}
      >
        <View style={styles.overlay}>
          <View style={styles.playButton}>
            <Ionicons name="play" size={34} color="#FFFFFF" />
          </View>
          <Text style={styles.title}>Trailer de {filme.titulo}</Text>
          <Text style={styles.subtitle}>
            Previa do filme disponivel em breve nesta area.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
