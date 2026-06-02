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
  header: {
    marginBottom: 18,
  },
  title: {
    color: "#111827",
    fontSize: 32,
    fontWeight: "900",
  },
  subtitle: {
    marginTop: 6,
    color: "#6B7280",
    fontSize: 15,
    lineHeight: 21,
  },
  planCard: {
    marginBottom: 14,
    borderRadius: 8,
    padding: 18,
    backgroundColor: "#FFFFFF",
  },
  planCardFeatured: {
    backgroundColor: "#111827",
  },
  planHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
  },
  planName: {
    color: "#111827",
    fontSize: 22,
    fontWeight: "900",
  },
  planTagline: {
    marginTop: 4,
    color: "#6B7280",
    fontSize: 13,
    fontWeight: "700",
  },
  recommendedBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: "#EF4444",
  },
  recommendedText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "900",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 18,
  },
  price: {
    color: "#111827",
    fontSize: 34,
    fontWeight: "900",
  },
  period: {
    marginBottom: 6,
    marginLeft: 4,
    color: "#6B7280",
    fontSize: 14,
    fontWeight: "800",
  },
  benefitList: {
    gap: 10,
    marginTop: 18,
  },
  benefitRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  benefitText: {
    color: "#374151",
    fontSize: 14,
    fontWeight: "700",
  },
  featuredText: {
    color: "#FFFFFF",
  },
  featuredMuted: {
    color: "#D1D5DB",
  },
});

export default styles;
