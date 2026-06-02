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
    gap: 14,
    marginBottom: 22,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#111827",
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
    color: "#111827",
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
    backgroundColor: "#FFFFFF",
  },
  rowIcon: {
    alignItems: "center",
    justifyContent: "center",
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: "#FEE2E2",
  },
  rowText: {
    flex: 1,
  },
  rowTitle: {
    color: "#111827",
    fontSize: 15,
    fontWeight: "900",
  },
  rowValue: {
    marginTop: 4,
    color: "#6B7280",
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
    backgroundColor: "#FFFFFF",
  },
  planLabel: {
    color: "#EF4444",
    fontSize: 12,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  planTitle: {
    marginTop: 6,
    color: "#111827",
    fontSize: 22,
    fontWeight: "900",
  },
  planText: {
    marginTop: 6,
    color: "#6B7280",
    fontSize: 14,
    lineHeight: 20,
  },
  planBadge: {
    alignItems: "center",
    justifyContent: "center",
    width: 52,
    height: 52,
    borderRadius: 8,
    backgroundColor: "#FEE2E2",
  },
  paymentCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderRadius: 8,
    padding: 14,
    backgroundColor: "#FFFFFF",
  },
  paymentIcon: {
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: "#F3F4F6",
  },
});

export default styles;
