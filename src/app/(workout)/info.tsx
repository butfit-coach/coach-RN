import { Box } from "@/components/ui/box";
import { router, useLocalSearchParams } from "expo-router";
import { VideoSource } from "expo-video";
import { ScrollView } from "react-native";
import ExerciseInfo from "@/components/ExerciseInfo";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";

export default function WorkoutInfoScreen() {
	const { id, date, title, description } = useLocalSearchParams();
	const videoSrc = require("video/test1.mp4");
	const videoSrc2 = require("video/test2.mp4");
	const videoSrc3 = require("video/test3.mp4");
	const videoSrc4 = require("video/test4.mp4");

	const videoSource: VideoSource = {
		assetId: videoSrc,
		metadata: {
			title: "Test1",
			artist: "Test2",
		},
	};

	const handlePress = () => {
		router.push("/record");
	};

	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}>
			<Box className="flex flex-col gap-6 px-4 py-2">
				<Box className="flex flex-row justify-between items-center pt-4">
					<Text className="text-2xl font-bold">오늘의 운동 목록이에요!</Text>
					<Button
						className="bg-green-500"
						onPress={handlePress}
						size="xs"
						variant="solid"
						action="primary"
					>
						<ButtonText>기록하러 가기!</ButtonText>
					</Button>
				</Box>
				<ExerciseInfo
					title="첫번째 운동 (운동명)"
					videoSource={videoSource}
					tips={["무게를 멀리 들어주는 느낌!", "허벅지에 살짝 터치하기!"]}
				/>
				<ExerciseInfo
					title="두번째 운동 (운동명)"
					videoSource={videoSrc2}
					tips={["푸시푸시!", "영차 영차!"]}
				/>
				<ExerciseInfo
					title="세번째 운동 (운동명)"
					videoSource={videoSrc3}
					tips={["읏차 읏차!", "영차 영차!"]}
				/>
				<ExerciseInfo
					title="네번째 운동 (운동명)"
					videoSource={videoSrc4}
					tips={["지긋이 눌러주기!"]}
				/>
			</Box>
		</ScrollView>
	);
}
