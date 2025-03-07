import { Box } from "@/components/ui/box";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import WorkoutCard from "@/components/WorkoutCard";
import { useState } from "react";
import { Dimensions } from "react-native";
import { useRouter } from "expo-router";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function WorkoutScreen() {
	const [isPaused, setIsPaused] = useState<boolean>(false);
	const router = useRouter();

	const handlePress = () => {
		router.push({
			pathname: "/(workout)/info",
			params: {
				id: 2,
				date: "2025-03-02",
				title: "Workout 2",
				description: "Description 2",
			},
		});
	};

	return (
		<Box className="justify-center h-full">
			<VStack space="sm" className="h-full px-4 py-4">
				<WorkoutCard
					id={3}
					key={3}
					date={new Date("2025-03-04")}
					title="Workout 3"
					description="Description 3"
					onPress={handlePress}
				/>
				<WorkoutCard
					id={2}
					key={2}
					date={new Date("2025-03-03")}
					title="Workout 2"
					description="Description 2"
					onPress={handlePress}
				/>
				<WorkoutCard
					id={1}
					key={1}
					date={new Date("2025-03-02")}
					title="Workout 1"
					description="Description 1"
					onPress={handlePress}
				/>
			</VStack>
		</Box>
	);
}
