import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";

export default function WorkoutInfoScreen() {
	const { id, date, title, description } = useLocalSearchParams();

	console.log("info", id, date, title, description);

	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}>
			<Box>
				<Text>운동 정보 상세 {id}</Text>
				<Text>{date}</Text>
				<Text>{title}</Text>
				<Text>{description}</Text>
			</Box>
		</ScrollView>
	);
}
