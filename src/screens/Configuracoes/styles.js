import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  containerDark: {
    backgroundColor: "#020617",
  },
  content: {
    padding: 20,
    paddingBottom: 34,
  },
  headerCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  headerCardDark: {
    borderWidth: 1,
    borderColor: "#334155",
    backgroundColor: "#0F172A",
  },
  iconBox: {
    alignItems: "center",
    justifyContent: "center",
    width: 54,
    height: 54,
    borderRadius: 8,
    backgroundColor: "#FEE2E2",
  },
  iconBoxDark: {
    backgroundColor: "#1E293B",
  },
  headerText: {
    flex: 1,
  },
  title: {
    color: "#111827",
    fontSize: 20,
    fontWeight: "900",
  },
  titleDark: {
    color: "#FFFFFF",
  },
  subtitle: {
    marginTop: 4,
    color: "#6B7280",
    fontSize: 13,
    fontWeight: "700",
  },
  subtitleDark: {
    color: "#CBD5E1",
  },
  previewCard: {
    marginTop: 18,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  previewCardDark: {
    borderWidth: 1,
    borderColor: "#334155",
    backgroundColor: "#0F172A",
  },
  previewHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  previewLabel: {
    color: "#111827",
    fontSize: 16,
    fontWeight: "900",
  },
  previewLabelDark: {
    color: "#FFFFFF",
  },
  statusBadge: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: "#FEE2E2",
  },
  statusBadgeDark: {
    backgroundColor: "#1E293B",
  },
  statusText: {
    color: "#991B1B",
    fontSize: 12,
    fontWeight: "900",
  },
  statusTextDark: {
    color: "#FDE68A",
  },
  previewPanel: {
    flexDirection: "row",
    gap: 12,
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#F8FAFC",
  },
  previewPanelDark: {
    backgroundColor: "#111827",
  },
  previewPoster: {
    width: 78,
    height: 106,
    borderRadius: 8,
    backgroundColor: "#E5E7EB",
  },
  previewPosterDark: {
    backgroundColor: "#334155",
  },
  previewTextBox: {
    flex: 1,
    justifyContent: "center",
  },
  previewLine: {
    height: 11,
    borderRadius: 8,
    opacity: 0.9,
  },
  previewLineSmall: {
    height: 9,
    marginTop: 10,
    opacity: 0.72,
  },
  previewPills: {
    flexDirection: "row",
    gap: 8,
    marginTop: 16,
  },
  previewPill: {
    width: 52,
    height: 24,
    borderRadius: 8,
    backgroundColor: "#FEE2E2",
  },
  previewPillDark: {
    backgroundColor: "#334155",
  },
  noteCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 18,
    borderRadius: 8,
    padding: 14,
    backgroundColor: "#FFFFFF",
  },
  noteCardDark: {
    borderWidth: 1,
    borderColor: "#334155",
    backgroundColor: "#0F172A",
  },
  noteText: {
    flex: 1,
    color: "#4B5563",
    fontSize: 13,
    lineHeight: 19,
  },
  noteTextDark: {
    color: "#CBD5E1",
  },
});

export default styles;
