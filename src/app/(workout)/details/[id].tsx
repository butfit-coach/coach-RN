import { Text } from "@/components/ui/text";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function WorkoutDetailScreen() {
	const { id, date, title, description } = useLocalSearchParams();

	console.log(id, date, title, description);

	return (
		<View>
			<Text>운동 상세 스크린 333</Text>
			<Text>{id}</Text>
		</View>
	);
}
