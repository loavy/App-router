import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

import { filmes } from "../../data/catalogo";
import styles from "./styles";

export default function Descricao({ navigation, route }) {
  const filme = filmes.find((item) => item.id === route.params?.filmeId) ?? filmes[0];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#111827" />
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
              <Ionicons name="ticket-outline" size={14} color="#6B7280" />
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
        <View style={styles.iconButton}>
          <Ionicons name="heart-outline" size={22} color="#EF4444" />
        </View>
      </View>
    </ScrollView>
  );
}
