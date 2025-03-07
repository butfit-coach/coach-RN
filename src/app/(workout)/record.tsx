import ExerciseRecord from "@/components/ExerciseRecord/ExerciseRecord";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { useLocalSearchParams } from "expo-router";
import { Keyboard, Pressable, ScrollView } from "react-native";

export default function WorkoutRecordScreen() {
	const { id, date, title, description } = useLocalSearchParams();
	console.log("record", id, date, title, description);

	return (
		<ScrollView
			contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
			keyboardShouldPersistTaps="handled"
		>
			<Pressable onPress={Keyboard.dismiss} className="flex-1">
				<Box className="py-4 px-4 h-full">
					<Text>운동 기록 상세 {id}</Text>
					<VStack className="mt-8" space="sm">
						<ExerciseRecord title="풀업" />
						<ExerciseRecord title="풀업" />
						<ExerciseRecord title="풀업" />
					</VStack>
				</Box>
			</Pressable>
		</ScrollView>
	);
}
