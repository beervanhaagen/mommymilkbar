import { Text, View } from "react-native";
import { useDrinksStore } from "../../src/state/drinksStore";
import { hoursUntilSafe } from "@calc/safeTime";
export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF8EF", alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 22, fontWeight: "700" }}>{(() => {
        const drinks = useDrinksStore.getState().drinks;
        const hoursSince = drinks.length ? (Date.now() - drinks[0].time) / 1000 / 60 / 60 : 0;
        const total = drinks.reduce((sum, d) => sum + d.standardDrinks, 0);
        const rem = hoursUntilSafe(total, hoursSince);
        return rem === 0 ? "Safe now" : `Safe in ${rem.toFixed(1)}h`;
      })()}</Text>
    </View>
  );
}
