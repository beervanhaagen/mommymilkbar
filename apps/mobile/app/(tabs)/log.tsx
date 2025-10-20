import { Text, View, Pressable } from "react-native";
import { useDrinksStore } from "../../src/state/drinksStore";
export default function Log() {
  const add = useDrinksStore((s)=>s.addDrink);
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF8EF", alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 22, fontWeight: "700" }}>Log a Drink</Text>
          <Pressable onPress={()=>add(1)} style={{ backgroundColor: "#2F7DFF", paddingVertical: 14, paddingHorizontal: 20, borderRadius: 12, marginTop: 12 }}>
        <Text style={{ color: "#fff", fontWeight: "700" }}>Add 1 drink</Text>
      </Pressable>
    </View>
  );
}
