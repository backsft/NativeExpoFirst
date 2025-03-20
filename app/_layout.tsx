import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Redirect } from "expo-router";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="index" options={{ title: "Feed" }} />
          <Stack.Screen
            name="notifications"
            options={{ title: "Notifications", headerShown: false }}
          />
        </Stack>
        {/* Ensure users are redirected to tabs */}
        <Redirect href={"/"} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
