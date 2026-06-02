import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  content: {
    padding: 20,
    paddingBottom: 32,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  eyebrow: {
    color: "#EF4444",
    fontSize: 13,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  title: {
    color: "#17202A",
    fontSize: 32,
    fontWeight: "800",
  },
  headerIcon: {
    alignItems: "center",
    justifyContent: "center",
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },
  hero: {
    height: 260,
    marginBottom: 18,
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "#111827",
  },
  heroImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  heroImageStyle: {
    opacity: 0.72,
  },
  heroOverlay: {
    padding: 18,
    backgroundColor: "rgba(17, 24, 39, 0.42)",
  },
  heroLabel: {
    marginBottom: 8,
    color: "#FCA5A5",
    fontSize: 12,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  heroTitle: {
    marginBottom: 8,
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "900",
  },
  heroDescription: {
    marginBottom: 12,
    color: "#E5E7EB",
    fontSize: 14,
    lineHeight: 20,
  },
  heroMeta: {
    flexDirection: "row",
    gap: 8,
  },
  heroPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: "rgba(255, 255, 255, 0.18)",
  },
  heroPillText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
  },
  statsGrid: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    minHeight: 94,
    justifyContent: "center",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#FFFFFF",
  },
  statValue: {
    marginTop: 8,
    color: "#111827",
    fontSize: 22,
    fontWeight: "900",
  },
  statLabel: {
    color: "#6B7280",
    fontSize: 12,
    fontWeight: "700",
  },
  sectionHeader: {
    marginBottom: 12,
    marginTop: 2,
  },
  sectionTitle: {
    color: "#111827",
    fontSize: 20,
    fontWeight: "900",
  },
  categoryList: {
    gap: 12,
    paddingBottom: 20,
  },
  categoryCard: {
    width: 138,
    minHeight: 116,
    justifyContent: "space-between",
    borderRadius: 8,
    padding: 14,
    backgroundColor: "#FFFFFF",
  },
  categoryName: {
    color: "#111827",
    fontSize: 15,
    fontWeight: "900",
  },
  categoryTotal: {
    color: "#6B7280",
    fontSize: 12,
    fontWeight: "700",
  },
  watchList: {
    gap: 12,
    paddingBottom: 20,
  },
  watchCard: {
    width: 132,
  },
  watchPoster: {
    width: "100%",
    height: 178,
    borderRadius: 8,
    backgroundColor: "#E5E7EB",
  },
  watchTitle: {
    minHeight: 38,
    marginTop: 8,
    color: "#111827",
    fontSize: 13,
    fontWeight: "800",
  },
  progressTrack: {
    height: 5,
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: "#E5E7EB",
  },
  progressFill: {
    height: "100%",
    borderRadius: 8,
    backgroundColor: "#EF4444",
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
    width: 96,
    minHeight: 142,
    backgroundColor: "#E5E7EB",
  },
  info: {
    flex: 1,
    justifyContent: "center",
    padding: 14,
  },
  movieTitle: {
    marginBottom: 6,
    color: "#111827",
    fontSize: 18,
    fontWeight: "800",
  },
  movieMeta: {
    marginBottom: 12,
    color: "#6B7280",
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  badge: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#FEF3C7",
    color: "#92400E",
    fontSize: 13,
    fontWeight: "700",
  },
  duration: {
    color: "#4B5563",
    fontSize: 13,
  },
});

export default styles;
