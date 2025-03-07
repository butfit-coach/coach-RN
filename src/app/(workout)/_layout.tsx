import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { useLocalSearchParams } from "expo-router";

export default function WorkoutLayout() {
	const { id, date, title, description } = useLocalSearchParams();

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: colors.green[100],
				sceneStyle: {
					backgroundColor: colors.white[100],
				},
			}}
		>
			<Tabs.Screen
				name="info"
				options={{
					title: "정보",
					headerTitle: "정보",
					tabBarIcon: ({ color, size }) => <FontAwesome name="info" color={color} size={size} />,
				}}
				initialParams={{ id, date, title, description }}
			/>
			<Tabs.Screen
				name="record"
				options={{
					title: "기록",
					headerTitle: "기록",
					tabBarIcon: ({ color, size }) => <FontAwesome name="home" color={color} size={size} />,
				}}
				initialParams={{ id, date, title, description }}
			/>
		</Tabs>
	);
}
