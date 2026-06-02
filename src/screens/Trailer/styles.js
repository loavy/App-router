import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111827",
  },
  backButton: {
    position: "absolute",
    top: 18,
    left: 18,
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: "rgba(17, 24, 39, 0.74)",
  },
  preview: {
    flex: 1,
    justifyContent: "center",
  },
  previewImage: {
    opacity: 0.42,
  },
  overlay: {
    alignItems: "center",
    padding: 24,
  },
  playButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 78,
    height: 78,
    marginBottom: 20,
    borderRadius: 39,
    backgroundColor: "#EF4444",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "900",
    textAlign: "center",
  },
  subtitle: {
    maxWidth: 300,
    marginTop: 10,
    color: "#D1D5DB",
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
  },
});

export default styles;
