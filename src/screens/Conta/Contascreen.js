import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";

import { useAppContext } from "../../context/AppContext";
import createStyles from "./styles";

const linhasConta = [
  {
    titulo: "E-mail",
    valor: "matheus@appcine.com",
    icone: "mail-outline",
  },
  {
    titulo: "Telefone",
    valor: "(11) 99999-9999",
    icone: "call-outline",
  },
  {
    titulo: "Seguranca",
    valor: "Senha atualizada recentemente",
    icone: "lock-closed-outline",
  },
];

export default function Conta() {
  const { colors } = useAppContext();
  const styles = createStyles(colors);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerCard}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={34} color="#FFFFFF" />
        </View>
        <View style={styles.headerInfo}>
          <Text style={styles.title}>Conta</Text>
          <Text style={styles.subtitle}>Dados pessoais e plano atual.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dados da conta</Text>
        {linhasConta.map((item) => (
          <View key={item.titulo} style={styles.infoRow}>
            <View style={styles.rowIcon}>
              <Ionicons name={item.icone} size={22} color={colors.accent} />
            </View>
            <View style={styles.rowText}>
              <Text style={styles.rowTitle}>{item.titulo}</Text>
              <Text style={styles.rowValue}>{item.valor}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.planCard}>
        <View>
          <Text style={styles.planLabel}>Plano atual</Text>
          <Text style={styles.planTitle}>Plus mensal</Text>
          <Text style={styles.planText}>2 telas, Full HD e downloads offline.</Text>
        </View>
        <View style={styles.planBadge}>
          <Ionicons name="card-outline" size={24} color={colors.accent} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pagamento</Text>
        <View style={styles.paymentCard}>
          <View style={styles.paymentIcon}>
            <Ionicons name="wallet-outline" size={24} color={colors.text} />
          </View>
          <View style={styles.rowText}>
            <Text style={styles.rowTitle}>Cartao final 0426</Text>
            <Text style={styles.rowValue}>Proxima cobranca: R$ 24,90</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
