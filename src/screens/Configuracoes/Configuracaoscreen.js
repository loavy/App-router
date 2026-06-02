import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Switch, Text, View } from "react-native";

import { useAppContext } from "../../context/AppContext";
import styles from "./styles";

export default function Configuracoes() {
  const { colors, modoEscuro, setModoEscuro } = useAppContext();
  const iconColor = modoEscuro ? colors.warning : colors.accent;
  const primaryText = colors.text;
  const mutedText = colors.textSoft;

  return (
    <ScrollView
      style={[styles.container, modoEscuro && styles.containerDark]}
      contentContainerStyle={styles.content}
    >
      <View style={[styles.headerCard, modoEscuro && styles.headerCardDark]}>
        <View style={[styles.iconBox, modoEscuro && styles.iconBoxDark]}>
          <Ionicons
            name={modoEscuro ? "moon" : "sunny-outline"}
            size={30}
            color={iconColor}
          />
        </View>
        <View style={styles.headerText}>
          <Text style={[styles.title, modoEscuro && styles.titleDark]}>Modo escuro</Text>
          <Text style={[styles.subtitle, modoEscuro && styles.subtitleDark]}>
            {modoEscuro ? "Interface em contraste noturno." : "Interface clara ativa."}
          </Text>
        </View>
        <Switch
          value={modoEscuro}
          onValueChange={setModoEscuro}
          thumbColor={modoEscuro ? "#FDE68A" : "#FFFFFF"}
          trackColor={{ false: "#CBD5E1", true: "#334155" }}
        />
      </View>

      <View style={[styles.previewCard, modoEscuro && styles.previewCardDark]}>
        <View style={styles.previewHeader}>
          <Text style={[styles.previewLabel, modoEscuro && styles.previewLabelDark]}>
            Previa do tema
          </Text>
          <View style={[styles.statusBadge, modoEscuro && styles.statusBadgeDark]}>
            <Text style={[styles.statusText, modoEscuro && styles.statusTextDark]}>
              {modoEscuro ? "Dark" : "Light"}
            </Text>
          </View>
        </View>

        <View style={[styles.previewPanel, modoEscuro && styles.previewPanelDark]}>
          <View style={[styles.previewPoster, modoEscuro && styles.previewPosterDark]} />
          <View style={styles.previewTextBox}>
            <View
              style={[
                styles.previewLine,
                { backgroundColor: primaryText, width: "74%" },
              ]}
            />
            <View
              style={[
                styles.previewLine,
                styles.previewLineSmall,
                { backgroundColor: mutedText, width: "52%" },
              ]}
            />
            <View style={styles.previewPills}>
              <View style={[styles.previewPill, modoEscuro && styles.previewPillDark]} />
              <View style={[styles.previewPill, modoEscuro && styles.previewPillDark]} />
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.noteCard, modoEscuro && styles.noteCardDark]}>
        <Ionicons name="contrast-outline" size={22} color={iconColor} />
        <Text style={[styles.noteText, modoEscuro && styles.noteTextDark]}>
          O ajuste muda a aparencia da app inteira.
        </Text>
      </View>
    </ScrollView>
  );
}
