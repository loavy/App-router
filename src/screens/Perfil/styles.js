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
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 18,
    borderRadius: 8,
    padding: 16,
    backgroundColor: colors.surface,
  },
  avatar: {
    alignItems: "center",
    justifyContent: "center",
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: colors.surfaceStrong,
  },
  avatarText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "900",
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    color: colors.text,
    fontSize: 22,
    fontWeight: "900",
  },
  email: {
    marginTop: 4,
    color: colors.textSoft,
    fontSize: 14,
  },
  memberBadge: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 6,
    marginTop: 10,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: colors.accentSoft,
  },
  memberText: {
    color: colors.accentText,
    fontSize: 12,
    fontWeight: "800",
  },
  statsGrid: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 22,
  },
  statCard: {
    flex: 1,
    minHeight: 88,
    justifyContent: "center",
    borderRadius: 8,
    padding: 12,
    backgroundColor: colors.surface,
  },
  statValue: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "900",
  },
  statLabel: {
    marginTop: 4,
    color: colors.textSoft,
    fontSize: 12,
    fontWeight: "800",
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
  preferenceGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  preferenceChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 9,
    backgroundColor: colors.surface,
  },
  preferenceText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "800",
  },
  favoriteCard: {
    flexDirection: "row",
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: colors.surface,
  },
  poster: {
    width: 108,
    minHeight: 158,
    backgroundColor: colors.border,
  },
  favoriteInfo: {
    flex: 1,
    justifyContent: "center",
    padding: 14,
  },
  emptyFavorite: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 130,
    borderRadius: 8,
    padding: 18,
    backgroundColor: colors.surface,
  },
  emptyFavoriteText: {
    marginTop: 8,
    color: colors.textSoft,
    fontSize: 14,
    fontWeight: "800",
  },
  movieTitle: {
    marginBottom: 6,
    color: colors.text,
    fontSize: 18,
    fontWeight: "900",
  },
  movieMeta: {
    marginBottom: 10,
    color: colors.accent,
    fontSize: 13,
    fontWeight: "800",
  },
  movieDescription: {
    color: colors.textSoft,
    fontSize: 13,
    lineHeight: 19,
  },
  achievementList: {
    gap: 10,
  },
  achievement: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderRadius: 8,
    padding: 14,
    backgroundColor: colors.surface,
  },
  achievementTitle: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "900",
  },
  achievementText: {
    marginTop: 3,
    color: colors.textSoft,
    fontSize: 13,
  },
  });
}
