import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  content: {
    padding: 20,
    paddingBottom: 34,
  },
  backButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 44,
    height: 44,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },
  heroCard: {
    flexDirection: "row",
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },
  poster: {
    width: 130,
    minHeight: 198,
    backgroundColor: "#E5E7EB",
  },
  info: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    color: "#111827",
    fontSize: 24,
    fontWeight: "900",
  },
  meta: {
    marginTop: 8,
    color: "#EF4444",
    fontSize: 13,
    fontWeight: "800",
    lineHeight: 18,
  },
  badgeRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 14,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderRadius: 8,
    paddingHorizontal: 9,
    paddingVertical: 5,
    backgroundColor: "#F3F4F6",
  },
  badgeText: {
    color: "#374151",
    fontSize: 12,
    fontWeight: "900",
  },
  section: {
    marginTop: 22,
  },
  sectionTitle: {
    marginBottom: 10,
    color: "#111827",
    fontSize: 20,
    fontWeight: "900",
  },
  description: {
    color: "#4B5563",
    fontSize: 15,
    lineHeight: 22,
  },
  actionRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 24,
  },
  primaryButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    minHeight: 52,
    borderRadius: 8,
    backgroundColor: "#EF4444",
  },
  primaryText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "900",
  },
  iconButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 52,
    height: 52,
    borderRadius: 8,
    backgroundColor: "#FEE2E2",
  },
});

export default styles;
