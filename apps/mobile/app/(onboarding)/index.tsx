import { Link } from "expo-router";
import { Text, View, Pressable } from "react-native";
export default function OnboardingWelcome() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF8EF", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <Text style={{ fontSize: 32, fontWeight: "800", marginBottom: 8 }}>Welcome to Mommy Milk Bar</Text>
      <Text style={{ fontSize: 16, color: "#555", marginBottom: 24 }}>Plan, log, and feed confidently.</Text>
      <Pressable style={{ backgroundColor: "#2F7DFF", paddingVertical: 16, paddingHorizontal: 24, borderRadius: 12 }}>
        <Link href="/(tabs)" style={{ color: "white", fontSize: 18, fontWeight: "700" }}>Continue</Link>
      </Pressable>
    </View>
  );
}
