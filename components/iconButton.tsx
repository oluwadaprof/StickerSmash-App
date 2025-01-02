import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text, StyleSheet } from "react-native";

type Props = {
  onPress: () => void;
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
};

export default function IconButton({ onPress, icon, label }: Props) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={{ color: "#fff" }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  IconButtonLabel: {
    color: "#fff",
    marginTop: 12,
  },
});
