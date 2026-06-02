import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";

import { useAppContext } from "../../context/AppContext";
import { planos } from "../../data/catalogo";
import createStyles from "./styles";

export default function Assinatura() {
  const { colors } = useAppContext();
  const styles = createStyles(colors);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Assinatura</Text>
        <Text style={styles.subtitle}>Escolha um plano quando quiser continuar assistindo.</Text>
      </View>

      {planos.map((plano) => {
        const recomendado = plano.nome === "Plus";

        return (
          <View
            key={plano.nome}
            style={[styles.planCard, recomendado && styles.planCardFeatured]}
          >
            <View style={styles.planHeader}>
              <View>
                <Text style={[styles.planName, recomendado && styles.featuredText]}>
                  {plano.nome}
                </Text>
                <Text style={[styles.planTagline, recomendado && styles.featuredMuted]}>
                  {plano.destaque}
                </Text>
              </View>
              {recomendado && (
                <View style={styles.recommendedBadge}>
                  <Ionicons name="star" size={14} color="#FFFFFF" />
                  <Text style={styles.recommendedText}>Popular</Text>
                </View>
              )}
            </View>

            <View style={styles.priceRow}>
              <Text style={[styles.price, recomendado && styles.featuredText]}>
                {plano.preco}
              </Text>
              <Text style={[styles.period, recomendado && styles.featuredMuted]}>
                {plano.periodo}
              </Text>
            </View>

            <View style={styles.benefitList}>
              {plano.beneficios.map((beneficio) => (
                <View key={beneficio} style={styles.benefitRow}>
                  <Ionicons
                    name="checkmark-circle"
                    size={18}
                    color={recomendado ? "#FFFFFF" : colors.accent}
                  />
                  <Text style={[styles.benefitText, recomendado && styles.featuredMuted]}>
                    {beneficio}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}
