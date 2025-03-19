import { Pressable, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello</Text>

        <TouchableOpacity onPress={()=>alert("you touch me")}> <Text>Touch me</Text></TouchableOpacity>

        <Pressable onPress={()=>alert("you Pressed me")}> <Text>Press me</Text></Pressable>

    </View>
  );
}
