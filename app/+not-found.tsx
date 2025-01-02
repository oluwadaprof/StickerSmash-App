import { Link, Stack } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{ title: 'Oops! Not found'}} />
    <View style={styles.container}>
      <Text style={styles.text}>404 Screen.</Text>
      <Link href={"/(tabs)/index"} style={styles.button}>Go to Home screen</Link>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  text: {
    color: "white",
  },
  button: {
    fontSize: 20,
    color: "#fff",
    textDecorationLine: "underline",
  },
});
