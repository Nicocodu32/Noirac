import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, View, ScrollView, FlatList, Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import CircleButton from "@/components/CircleButton";
import React from 'react';
import { StyleSheet } from "react-native";

export default function Index() {
    const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Image source={images.station_premier_jet} className="flex-1 w-full" resizeMode="contain"/>
      <CircleButton
        navigateTo="lots"
        size={50}
        backgroundColor="#FF6B6B"
        style={styles.floatingButtonLots}
      >
        <Image source={icons.logo_lots} className="size-10 rotate-90" resizeMode="contain"/>
      </CircleButton>
      <CircleButton
        navigateTo="sechoir"
        size={50}
        backgroundColor="#FF6B6B"
        style={styles.floatingButtonSechoir}
      >
        <Image source={icons.logo_sechoir} className="size-10 rotate-90" resizeMode="contain"/>
      </CircleButton>
      <CircleButton
        navigateTo="expeditions"
        size={50}
        backgroundColor="#FF6B6B"
        style={styles.floatingButtonExpeditions}
      >
        <Image source={icons.logo_expeditions} className="size-10 rotate-90" resizeMode="contain"/>
      </CircleButton>
      <CircleButton
        navigateTo="stocks"
        size={50}
        backgroundColor="#FF6B6B"
        style={styles.floatingButtonStocks}
      >
        <Image source={icons.logo_stocks} className="size-10 rotate-90" resizeMode="contain"/>
      </CircleButton>
      <CircleButton
        navigateTo="acheteurs"
        size={50}
        backgroundColor="#FF6B6B"
        style={styles.floatingButtonAcheteurs}
      >
        <Image source={icons.logo_acheteurs} className="size-10 rotate-90" resizeMode="contain"/>
      </CircleButton>
      <CircleButton
        navigateTo="producteurs"
        size={50}
        backgroundColor="#FF6B6B"
        style={styles.floatingButtonProducteurs}
      >
        <Image source={icons.logo_producteurs} className="size-10 rotate-90" resizeMode="contain"/>
      </CircleButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  floatingButtonLots: {
    position: 'absolute',
    bottom: 160,
    right: 200,
  },
  floatingButtonSechoir: {
    position: 'absolute',
    bottom: 406,
    right: 220,
  },
  floatingButtonExpeditions: {
    position: 'absolute',
    bottom: 580,
    right: 70,
  },
  floatingButtonStocks: {
    position: 'absolute',
    bottom: 420,
    right: 100,
  },
  floatingButtonAcheteurs: {
    position: 'absolute',
    bottom: 650,
    right: 100,
  },
  floatingButtonProducteurs: {
    position: 'absolute',
    bottom: 164,
    right: 110,
  },
});

