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
  title: {
    color: colors.text,
    fontSize: 32,
    fontWeight: "900",
  },
  subtitle: {
    marginTop: 6,
    marginBottom: 18,
    color: colors.textSoft,
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
    backgroundColor: colors.surface,
  },
  input: {
    flex: 1,
    color: colors.text,
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
    backgroundColor: colors.surface,
  },
  categoryText: {
    color: colors.text,
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
    color: colors.text,
    fontSize: 20,
    fontWeight: "900",
  },
  resultCount: {
    color: colors.textSoft,
    fontSize: 13,
    fontWeight: "800",
  },
  resultCard: {
    flexDirection: "row",
    marginBottom: 12,
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: colors.surface,
  },
  poster: {
    width: 86,
    minHeight: 126,
    backgroundColor: colors.border,
  },
  info: {
    flex: 1,
    justifyContent: "center",
    padding: 13,
  },
  movieTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: "900",
  },
  movieMeta: {
    marginTop: 6,
    color: colors.textSoft,
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
    backgroundColor: colors.warningSoft,
  },
  ratingText: {
    color: colors.warningText,
    fontSize: 12,
    fontWeight: "900",
  },
  ageText: {
    color: colors.textSoft,
    fontSize: 12,
    fontWeight: "800",
  },
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 220,
    borderRadius: 8,
    padding: 24,
    backgroundColor: colors.surface,
  },
  emptyTitle: {
    marginTop: 10,
    color: colors.text,
    fontSize: 18,
    fontWeight: "900",
  },
  emptyText: {
    marginTop: 6,
    color: colors.textSoft,
    textAlign: "center",
  },
  });
}
