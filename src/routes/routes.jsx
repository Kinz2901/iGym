import React from 'react'
import AppRoutes from './app.routes'
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

export default function Routes() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppRoutes/>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
