import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

import { useAppContext } from "../../context/AppContext";
import { filmes } from "../../data/catalogo";
import createStyles from "./styles";

export default function Descricao({ navigation, route }) {
  const { colors, isFavorite, toggleFavorite } = useAppContext();
  const styles = createStyles(colors);
  const filme = filmes.find((item) => item.id === route.params?.filmeId) ?? filmes[0];
  const favoritado = isFavorite(filme.id);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color={colors.text} />
      </Pressable>

      <View style={styles.heroCard}>
        <Image source={{ uri: filme.imagem }} style={styles.poster} />
        <View style={styles.info}>
          <Text style={styles.title}>{filme.titulo}</Text>
          <Text style={styles.meta}>
            {filme.genero} - {filme.ano} - {filme.duracao}
          </Text>
          <View style={styles.badgeRow}>
            <View style={styles.badge}>
              <Ionicons name="star" size={14} color="#F59E0B" />
              <Text style={styles.badgeText}>{filme.nota}</Text>
            </View>
            <View style={styles.badge}>
              <Ionicons name="ticket-outline" size={14} color={colors.textSoft} />
              <Text style={styles.badgeText}>{filme.classificacao}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Descricao</Text>
        <Text style={styles.description}>{filme.destaque}</Text>
      </View>

      <View style={styles.actionRow}>
        <Pressable
          style={styles.primaryButton}
          onPress={() => navigation.navigate("Trailer", { filmeId: filme.id })}
        >
          <Ionicons name="play" size={20} color="#FFFFFF" />
          <Text style={styles.primaryText}>Ver trailer</Text>
        </Pressable>
        <Pressable style={styles.iconButton} onPress={() => toggleFavorite(filme.id)}>
          <Ionicons
            name={favoritado ? "heart" : "heart-outline"}
            size={22}
            color={colors.accent}
          />
        </Pressable>
      </View>
    </ScrollView>
  );
}
