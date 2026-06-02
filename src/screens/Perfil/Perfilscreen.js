import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, Text, View } from "react-native";

import { favoritos, filmes } from "../../data/catalogo";
import styles from "./styles";

export default function Perfil() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>ML</Text>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Matheus Lopes</Text>
          <Text style={styles.email}>matheus@appcine.com</Text>
          <View style={styles.memberBadge}>
            <Ionicons name="ribbon-outline" size={15} color="#EF4444" />
            <Text style={styles.memberText}>Membro Plus desde 2026</Text>
          </View>
        </View>
      </View>

      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>126</Text>
          <Text style={styles.statLabel}>Assistidos</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{favoritos.length}</Text>
          <Text style={styles.statLabel}>Favoritos</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>38h</Text>
          <Text style={styles.statLabel}>Este mes</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferencias</Text>
        <View style={styles.preferenceGrid}>
          {["Ficcao", "Animacao", "Drama", "Aventura"].map((item) => (
            <View key={item} style={styles.preferenceChip}>
              <Ionicons name="checkmark-circle" size={16} color="#EF4444" />
              <Text style={styles.preferenceText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ultimo favorito</Text>
        <View style={styles.favoriteCard}>
          <Image source={{ uri: filmes[0].imagem }} style={styles.poster} />
          <View style={styles.favoriteInfo}>
            <Text style={styles.movieTitle}>{filmes[0].titulo}</Text>
            <Text style={styles.movieMeta}>{filmes[0].genero}</Text>
            <Text style={styles.movieDescription}>{filmes[0].destaque}</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Conquistas</Text>
        <View style={styles.achievementList}>
          <View style={styles.achievement}>
            <Ionicons name="star-outline" size={22} color="#F59E0B" />
            <View>
              <Text style={styles.achievementTitle}>Maratona de fim de semana</Text>
              <Text style={styles.achievementText}>5 filmes assistidos em 2 dias</Text>
            </View>
          </View>
          <View style={styles.achievement}>
            <Ionicons name="heart-outline" size={22} color="#EF4444" />
            <View>
              <Text style={styles.achievementTitle}>Curador de favoritos</Text>
              <Text style={styles.achievementText}>Lista de favoritos atualizada</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
