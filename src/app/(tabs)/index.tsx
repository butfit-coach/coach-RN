import { Box } from "@/components/ui/box";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import WorkoutCard from "@/components/WorkoutCard";
import { useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Dimensions } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function WorkoutScreen() {
	const [isPaused, setIsPaused] = useState<boolean>(false);

	const handlePress = () => {
		console.log("card");
	};

	return (
		<Box className="justify-center h-full">
			<VStack space="sm" className="h-full px-4 py-4">
				<Card variant="outline">
					<Text>Hello</Text>
				</Card>
				<Card variant="outline">
					<Text>Hello</Text>
				</Card>
				<WorkoutCard
					date={new Date()}
					title="Workout 1"
					description="Description 1"
					onPress={handlePress}
				/>
			</VStack>
		</Box>
	);
}
