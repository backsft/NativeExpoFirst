import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Redirect } from "expo-router";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>

        <Stack screenOptions={{headerShown:false}}/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
