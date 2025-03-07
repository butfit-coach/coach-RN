import { Box } from "@/components/ui/box";
import { useLocalSearchParams } from "expo-router";
import { VideoSource } from "expo-video";
import { ScrollView } from "react-native";
import ExerciseInfo from "@/components/ExerciseInfo";

export default function WorkoutInfoScreen() {
	const { id, date, title, description } = useLocalSearchParams();
	const videoSrc = require("video/test1.mp4");
	const videoSrc2 = require("video/test2.mp4");

	const videoSource: VideoSource = {
		assetId: videoSrc,
		metadata: {
			title: "Test1",
			artist: "Test2",
		},
	};

	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}>
			<Box className="flex flex-col gap-6 px-4 py-2">
				<ExerciseInfo
					title="첫번째 운동 (운동명)"
					videoSource={videoSource}
					tips={["무게를 멀리 들어주는 느낌!", "허벅지에 살짝 터치하기!"]}
				/>
				<ExerciseInfo
					title="두번째 운동 (운동명)"
					videoSource={videoSrc2}
					tips={["무게를 멀리 들어주는 느낌!", "허벅지에 살짝 터치하기!"]}
				/>
			</Box>
		</ScrollView>
	);
}
