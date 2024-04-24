import { StatusBar } from "expo-status-bar";
import React from "react";
import Navigation from "./Src/NavigationType/Navigation";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Navigation />
    </SafeAreaView>
  );
}
