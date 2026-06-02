import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

import { favoritos } from "../../data/catalogo";
import styles from "./styles";

export default function Favoritos({ navigation }) {
  const abrirDetalhes = (filme) => {
    navigation.navigate("Detalhes", {
      screen: "Descricao",
      params: { filmeId: filme.id },
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerCard}>
        <View>
          <Text style={styles.title}>Favoritos</Text>
          <Text style={styles.subtitle}>{favoritos.length} filmes salvos para assistir de novo</Text>
        </View>
        <View style={styles.heartBadge}>
          <Ionicons name="heart" size={26} color="#EF4444" />
        </View>
      </View>

      {favoritos.map((filme) => (
        <Pressable
          key={filme.id}
          style={styles.card}
          onPress={() => abrirDetalhes(filme)}
        >
          <Image source={{ uri: filme.imagem }} style={styles.poster} />
          <View style={styles.info}>
            <View style={styles.topRow}>
              <Text style={styles.movieTitle}>{filme.titulo}</Text>
              <Ionicons name="heart" size={20} color="#EF4444" />
            </View>
            <Text style={styles.movieMeta}>
              {filme.genero} - {filme.ano} - {filme.duracao}
            </Text>
            <Text style={styles.description}>{filme.destaque}</Text>
            <View style={styles.badgeRow}>
              <View style={styles.badge}>
                <Ionicons name="star" size={14} color="#F59E0B" />
                <Text style={styles.badgeText}>{filme.nota}</Text>
              </View>
              <View style={styles.badge}>
                <Ionicons name="ticket-outline" size={14} color="#6B7280" />
                <Text style={styles.badgeText}>{filme.classificacao}</Text>
              </View>
            </View>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}
