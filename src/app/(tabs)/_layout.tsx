import React from "react";
import { colors } from "@/styles/colors";
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
					sceneStyle: {
						backgroundColor: colors.white[100],
					},
				}}
			>
				<Tabs.Screen
					name="index"
					options={{
						title: "Workout",
					}}
				/>
				<Tabs.Screen
					name="exercise"
					options={{
						title: "종목별",
					}}
				/>
			</Tabs>
		</>
	);
}
