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
  headerCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 14,
    marginBottom: 18,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#111827",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "900",
  },
  subtitle: {
    maxWidth: 230,
    marginTop: 6,
    color: "#D1D5DB",
    fontSize: 14,
    lineHeight: 19,
  },
  heartBadge: {
    alignItems: "center",
    justifyContent: "center",
    width: 54,
    height: 54,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },
  card: {
    flexDirection: "row",
    marginBottom: 14,
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    elevation: 2,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  poster: {
    width: 102,
    minHeight: 160,
    backgroundColor: "#E5E7EB",
  },
  info: {
    flex: 1,
    padding: 14,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 8,
  },
  movieTitle: {
    flex: 1,
    color: "#111827",
    fontSize: 18,
    fontWeight: "900",
  },
  movieMeta: {
    marginTop: 6,
    color: "#EF4444",
    fontSize: 13,
    fontWeight: "800",
  },
  description: {
    marginTop: 10,
    color: "#6B7280",
    fontSize: 13,
    lineHeight: 18,
  },
  badgeRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 12,
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
    fontWeight: "800",
  },
});

export default styles;
