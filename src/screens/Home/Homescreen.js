import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

import { categorias, continuarAssistindo, filmes, favoritos } from "../../data/catalogo";
import styles from "./styles";

export default function Home({ navigation }) {
  const filmeDestaque = filmes[0];

  const abrirDetalhes = (filme) => {
    navigation.navigate("Detalhes", {
      screen: "Descricao",
      params: { filmeId: filme.id },
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View>
          <Text style={styles.eyebrow}>Boa sessao</Text>
          <Text style={styles.title}>Home</Text>
        </View>
        <View style={styles.headerIcon}>
          <Ionicons name="notifications-outline" size={22} color="#111827" />
        </View>
      </View>

      <Pressable style={styles.hero} onPress={() => abrirDetalhes(filmeDestaque)}>
        <ImageBackground
          source={{ uri: filmeDestaque.imagem }}
          style={styles.heroImage}
          imageStyle={styles.heroImageStyle}
        >
          <View style={styles.heroOverlay}>
            <Text style={styles.heroLabel}>Filme em destaque</Text>
            <Text style={styles.heroTitle}>{filmeDestaque.titulo}</Text>
            <Text style={styles.heroDescription}>{filmeDestaque.destaque}</Text>
            <View style={styles.heroMeta}>
              <View style={styles.heroPill}>
                <Ionicons name="star" size={14} color="#F59E0B" />
                <Text style={styles.heroPillText}>{filmeDestaque.nota}</Text>
              </View>
              <View style={styles.heroPill}>
                <Ionicons name="time-outline" size={14} color="#FFFFFF" />
                <Text style={styles.heroPillText}>{filmeDestaque.duracao}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </Pressable>

      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Ionicons name="film-outline" size={22} color="#EF4444" />
          <Text style={styles.statValue}>{filmes.length}</Text>
          <Text style={styles.statLabel}>Filmes</Text>
        </View>
        <View style={styles.statCard}>
          <Ionicons name="heart-outline" size={22} color="#EF4444" />
          <Text style={styles.statValue}>{favoritos.length}</Text>
          <Text style={styles.statLabel}>Favoritos</Text>
        </View>
        <View style={styles.statCard}>
          <Ionicons name="play-circle-outline" size={22} color="#EF4444" />
          <Text style={styles.statValue}>{continuarAssistindo.length}</Text>
          <Text style={styles.statLabel}>Em pausa</Text>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Categorias</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
      >
        {categorias.map((categoria) => (
          <View key={categoria.nome} style={styles.categoryCard}>
            <Ionicons name={categoria.icone} size={24} color="#EF4444" />
            <Text style={styles.categoryName}>{categoria.nome}</Text>
            <Text style={styles.categoryTotal}>{categoria.total} titulos</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Continue assistindo</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.watchList}
      >
        {continuarAssistindo.map((filme) => (
          <Pressable
            key={filme.id}
            style={styles.watchCard}
            onPress={() => abrirDetalhes(filme)}
          >
            <Image source={{ uri: filme.imagem }} style={styles.watchPoster} />
            <Text style={styles.watchTitle}>{filme.titulo}</Text>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: filme.progresso }]} />
            </View>
          </Pressable>
        ))}
      </ScrollView>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Mais populares</Text>
      </View>
      {filmes.map((filme) => (
        <Pressable
          key={filme.id}
          style={styles.card}
          onPress={() => abrirDetalhes(filme)}
        >
          <Image source={{ uri: filme.imagem }} style={styles.poster} />
          <View style={styles.info}>
            <Text style={styles.movieTitle}>{filme.titulo}</Text>
            <Text style={styles.movieMeta}>
              {filme.genero} - {filme.ano} - {filme.classificacao}
            </Text>
            <View style={styles.row}>
              <Text style={styles.badge}>Nota {filme.nota}</Text>
              <Text style={styles.duration}>{filme.duracao}</Text>
            </View>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}
