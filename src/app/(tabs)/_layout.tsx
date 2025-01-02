import { colors } from "@/src/styles/colors";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
  return (
    <>
      {/* 안드로이드 배너 색상 맞추기 위해 사용*/}
      <StatusBar style="light" backgroundColor={colors.green[100]} />
      <Tabs
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.green[100],
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarActiveTintColor: colors.green[100],
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "주간 운동",
          }}
        />
        <Tabs.Screen
          name="previous"
          options={{
            title: "지난 운동 기록",
          }}
        />
        <Tabs.Screen
          name="exercise"
          options={{
            title: "동작 별 기록",
          }}
        />
      </Tabs>
    </>
  );
}
