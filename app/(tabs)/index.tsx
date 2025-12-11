import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, View, ScrollView, FlatList, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
    const router = useRouter();

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0"/>
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}>
        <Image
          source={images.carte} 
          className="w-24 h-20 mt-14 mb-5 self-center"
        />
        <Button
          onPress={() => router.push("/(tabs)/lots")}
          title="Lots"
          color="#841584"
        />
        <Button
          onPress={() => router.push("/(tabs)/sechoir")}
          title="Séchoir"
          color="#841584"
        />
        <Button
          onPress={() => router.push("/(tabs)/expeditions")}
          title="Expéditions"
          color="#841584"
        />
        <Button
          onPress={() => router.push("/(tabs)/producteurs")}
          title="Producteurs"
          color="#841584"
        />
        <Button
          onPress={() => router.push("/(tabs)/acheteurs")}
          title="Acheteurs"
          color="#841584"
        />
        <Button
          onPress={() => router.push("/(tabs)/stocks")}
          title="Stocks"
          color="#841584"
        />
      </ScrollView>
    </View>
  );
}
