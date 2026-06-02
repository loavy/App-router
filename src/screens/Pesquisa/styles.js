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
  title: {
    color: "#111827",
    fontSize: 32,
    fontWeight: "900",
  },
  subtitle: {
    marginTop: 6,
    marginBottom: 18,
    color: "#6B7280",
    fontSize: 15,
    lineHeight: 21,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    height: 54,
    borderRadius: 8,
    paddingHorizontal: 14,
    backgroundColor: "#FFFFFF",
  },
  input: {
    flex: 1,
    color: "#111827",
    fontSize: 16,
  },
  clearButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
  },
  categoryList: {
    gap: 10,
    paddingVertical: 18,
  },
  categoryChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 9,
    backgroundColor: "#FFFFFF",
  },
  categoryText: {
    color: "#111827",
    fontSize: 13,
    fontWeight: "800",
  },
  resultHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  sectionTitle: {
    color: "#111827",
    fontSize: 20,
    fontWeight: "900",
  },
  resultCount: {
    color: "#6B7280",
    fontSize: 13,
    fontWeight: "800",
  },
  resultCard: {
    flexDirection: "row",
    marginBottom: 12,
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },
  poster: {
    width: 86,
    minHeight: 126,
    backgroundColor: "#E5E7EB",
  },
  info: {
    flex: 1,
    justifyContent: "center",
    padding: 13,
  },
  movieTitle: {
    color: "#111827",
    fontSize: 17,
    fontWeight: "900",
  },
  movieMeta: {
    marginTop: 6,
    color: "#6B7280",
    fontSize: 13,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },
  ratingBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderRadius: 8,
    paddingHorizontal: 9,
    paddingVertical: 5,
    backgroundColor: "#FEF3C7",
  },
  ratingText: {
    color: "#92400E",
    fontSize: 12,
    fontWeight: "900",
  },
  ageText: {
    color: "#4B5563",
    fontSize: 12,
    fontWeight: "800",
  },
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 220,
    borderRadius: 8,
    padding: 24,
    backgroundColor: "#FFFFFF",
  },
  emptyTitle: {
    marginTop: 10,
    color: "#111827",
    fontSize: 18,
    fontWeight: "900",
  },
  emptyText: {
    marginTop: 6,
    color: "#6B7280",
    textAlign: "center",
  },
});

export default styles;
