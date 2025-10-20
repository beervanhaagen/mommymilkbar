import { Pressable, Text } from "react-native";
export function Button({ title, onPress }: { title: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={{ backgroundColor: "#2F7DFF", paddingVertical: 14, paddingHorizontal: 20, borderRadius: 12 }}>
      <Text style={{ color: "white", fontWeight: "700" }}>{title}</Text>
    </Pressable>
  );
}
