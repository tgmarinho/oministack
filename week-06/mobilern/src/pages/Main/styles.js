import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    paddingHorizontal: 30
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 4,
    paddingHorizontal: 20,
    marginTop: 30
  },

  button: {
    height: 48,
    borderRadius: 4,
    fontSize: 16,
    paddingHorizontal: 20,
    marginTop: 30,
    backgroundColor: "#7159c1",
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#FFF"
  },

  logo: {
    alignSelf: "center"
  }
});

export default styles;
