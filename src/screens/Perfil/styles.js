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
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 18,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  avatar: {
    alignItems: "center",
    justifyContent: "center",
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: "#111827",
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
    color: "#111827",
    fontSize: 22,
    fontWeight: "900",
  },
  email: {
    marginTop: 4,
    color: "#6B7280",
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
    backgroundColor: "#FEE2E2",
  },
  memberText: {
    color: "#991B1B",
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
    backgroundColor: "#FFFFFF",
  },
  statValue: {
    color: "#111827",
    fontSize: 24,
    fontWeight: "900",
  },
  statLabel: {
    marginTop: 4,
    color: "#6B7280",
    fontSize: 12,
    fontWeight: "800",
  },
  section: {
    marginBottom: 22,
  },
  sectionTitle: {
    marginBottom: 12,
    color: "#111827",
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
    backgroundColor: "#FFFFFF",
  },
  preferenceText: {
    color: "#111827",
    fontSize: 14,
    fontWeight: "800",
  },
  favoriteCard: {
    flexDirection: "row",
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },
  poster: {
    width: 108,
    minHeight: 158,
    backgroundColor: "#E5E7EB",
  },
  favoriteInfo: {
    flex: 1,
    justifyContent: "center",
    padding: 14,
  },
  movieTitle: {
    marginBottom: 6,
    color: "#111827",
    fontSize: 18,
    fontWeight: "900",
  },
  movieMeta: {
    marginBottom: 10,
    color: "#EF4444",
    fontSize: 13,
    fontWeight: "800",
  },
  movieDescription: {
    color: "#6B7280",
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
    backgroundColor: "#FFFFFF",
  },
  achievementTitle: {
    color: "#111827",
    fontSize: 15,
    fontWeight: "900",
  },
  achievementText: {
    marginTop: 3,
    color: "#6B7280",
    fontSize: 13,
  },
});

export default styles;
