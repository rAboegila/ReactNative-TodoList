import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Router from "./src/Routes";

export default function App({ navigation }) {
  
  return (
    <SafeAreaProvider>
      <Router />
    </SafeAreaProvider>
  );
}
