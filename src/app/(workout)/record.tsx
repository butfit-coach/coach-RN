import ExerciseRecord from "@/components/ExerciseRecord/ExerciseRecord";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
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
				<Box className="py-2 px-4 h-full">
					<Box className="flex flex-row pt-4 items-center justify-between">
						<Text className="text-2xl font-bold">오늘의 운동 기록</Text>
						<Button className="bg-green-500" size="sm" variant="solid" action="primary">
							<ButtonText>저장</ButtonText>
						</Button>
					</Box>
					<VStack className="mt-5" space="sm">
						<ExerciseRecord title="풀업" />
						<ExerciseRecord title="풀업" />
						<ExerciseRecord title="풀업" />
					</VStack>
				</Box>
			</Pressable>
		</ScrollView>
	);
}
