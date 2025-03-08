import RadioButton from "@/components/RadioButton";
import RankingRow from "@/components/RankingRow";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { useState } from "react";
import { ScrollView } from "react-native";

export default function WorkoutRankingScreen() {
	const [selected, setSelected] = useState<"weight" | "count">("weight");

	const handlePress = (value: "weight" | "count") => {
		setSelected(value);
	};

	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}>
			<Box className="flex flex-col py-2 px-4">
				<Box className="pt-4">
					<RadioButton selected={selected} onPress={handlePress} />
				</Box>
				<Box className="flex pt-4">
					<Text className="text-2xl font-bold">
						{selected === "weight" ? "오늘의 무게 기록이에요!" : "오늘의 횟수 기록이에요!"}
					</Text>
				</Box>
				<Box className="flex flex-col">
					{/*<RankingHeader />*/}
					<RankingRow rank={1} name="홍길동" weight={100} count={10} />
				</Box>
			</Box>
		</ScrollView>
	);
}
