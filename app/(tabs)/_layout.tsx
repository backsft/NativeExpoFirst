import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false ,headerShown:false}}>
      {/* Home Tab */}
      <Tabs.Screen 
        name="index" 
        options={{        
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }} 
      />

      {/* Bookmarks Tab */}
      <Tabs.Screen 
        name="bookmarks" 
        options={{ 
          title: "Bookmarks",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="bookmark" size={size} color={color} />
          ),
        }} 
      />

      {/* Create Tab */}
      <Tabs.Screen 
        name="create" 
        options={{ 
          title: "Create",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="add-circle" size={size} color={"green"} />
          ),
        }} 
      />

      {/* Notifications Tab */}
      <Tabs.Screen 
        name="notifications" 
        options={{ 
          title: "Notifications",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
        }} 
      />

      {/* Profile Tab */}
      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: "Profile",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }} 
      />
    </Tabs>
  );
}
