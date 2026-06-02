import { StyleSheet } from "react-native";

export default function createStyles(colors) {
  return StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 20,
    paddingBottom: 34,
  },
  headerCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 22,
    borderRadius: 8,
    padding: 16,
    backgroundColor: colors.surfaceStrong,
  },
  avatar: {
    alignItems: "center",
    justifyContent: "center",
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#EF4444",
  },
  headerInfo: {
    flex: 1,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "900",
  },
  subtitle: {
    marginTop: 4,
    color: "#D1D5DB",
    fontSize: 14,
  },
  section: {
    marginBottom: 22,
  },
  sectionTitle: {
    marginBottom: 12,
    color: colors.text,
    fontSize: 20,
    fontWeight: "900",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 10,
    borderRadius: 8,
    padding: 14,
    backgroundColor: colors.surface,
  },
  rowIcon: {
    alignItems: "center",
    justifyContent: "center",
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: colors.accentSoft,
  },
  rowText: {
    flex: 1,
  },
  rowTitle: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "900",
  },
  rowValue: {
    marginTop: 4,
    color: colors.textSoft,
    fontSize: 13,
    lineHeight: 18,
  },
  planCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 14,
    marginBottom: 22,
    borderRadius: 8,
    padding: 16,
    backgroundColor: colors.surface,
  },
  planLabel: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  planTitle: {
    marginTop: 6,
    color: colors.text,
    fontSize: 22,
    fontWeight: "900",
  },
  planText: {
    marginTop: 6,
    color: colors.textSoft,
    fontSize: 14,
    lineHeight: 20,
  },
  planBadge: {
    alignItems: "center",
    justifyContent: "center",
    width: 52,
    height: 52,
    borderRadius: 8,
    backgroundColor: colors.accentSoft,
  },
  paymentCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderRadius: 8,
    padding: 14,
    backgroundColor: colors.surface,
  },
  paymentIcon: {
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: colors.surfaceAlt,
  },
  });
}
