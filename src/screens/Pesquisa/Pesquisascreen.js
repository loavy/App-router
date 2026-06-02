import { Ionicons } from "@expo/vector-icons";
import { useMemo, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

import { categorias, filmes } from "../../data/catalogo";
import styles from "./styles";

export default function Pesquisa({ navigation }) {
  const [busca, setBusca] = useState("");

  const resultados = useMemo(() => {
    const termo = busca.trim().toLowerCase();

    if (!termo) {
      return filmes;
    }

    return filmes.filter((filme) => {
      const conteudo = `${filme.titulo} ${filme.genero} ${filme.ano}`.toLowerCase();
      return conteudo.includes(termo);
    });
  }, [busca]);

  const abrirDetalhes = (filme) => {
    navigation.navigate("Detalhes", {
      screen: "Descricao",
      params: { filmeId: filme.id },
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Pesquisa</Text>
      <Text style={styles.subtitle}>Encontre filmes por nome, genero ou ano.</Text>

      <View style={styles.searchBox}>
        <Ionicons name="search-outline" size={22} color="#6B7280" />
        <TextInput
          value={busca}
          onChangeText={setBusca}
          placeholder="Busque por filme ou genero"
          placeholderTextColor="#9CA3AF"
          autoCorrect={false}
          style={styles.input}
        />
        {busca.length > 0 && (
          <Pressable onPress={() => setBusca("")} style={styles.clearButton}>
            <Ionicons name="close-circle" size={22} color="#9CA3AF" />
          </Pressable>
        )}
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
      >
        {categorias.map((categoria) => (
          <View key={categoria.nome} style={styles.categoryChip}>
            <Ionicons name={categoria.icone} size={17} color="#EF4444" />
            <Text style={styles.categoryText}>{categoria.nome}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.resultHeader}>
        <Text style={styles.sectionTitle}>Resultados</Text>
        <Text style={styles.resultCount}>{resultados.length} encontrados</Text>
      </View>

      {resultados.length === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons name="film-outline" size={36} color="#9CA3AF" />
          <Text style={styles.emptyTitle}>Nada encontrado</Text>
          <Text style={styles.emptyText}>Tente buscar outro titulo ou genero.</Text>
        </View>
      ) : (
        resultados.map((filme) => (
          <Pressable
            key={filme.id}
            style={styles.resultCard}
            onPress={() => abrirDetalhes(filme)}
          >
            <Image source={{ uri: filme.imagem }} style={styles.poster} />
            <View style={styles.info}>
              <Text style={styles.movieTitle}>{filme.titulo}</Text>
              <Text style={styles.movieMeta}>
                {filme.genero} - {filme.ano} - {filme.duracao}
              </Text>
              <View style={styles.row}>
                <View style={styles.ratingBadge}>
                  <Ionicons name="star" size={14} color="#F59E0B" />
                  <Text style={styles.ratingText}>{filme.nota}</Text>
                </View>
                <Text style={styles.ageText}>{filme.classificacao}</Text>
              </View>
            </View>
          </Pressable>
        ))
      )}
    </ScrollView>
  );
}
