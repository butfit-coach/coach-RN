import Tip from "./Tip";
import { Box } from "./ui/box";
import { Text } from "./ui/text";
import VideoPlayer from "@/components/VideoPlayer";
import { VideoSource } from "expo-video";

interface Props {
	title: string;
	videoSource: VideoSource;
	tips?: string[];
}

export default function ExerciseInfo({ title, videoSource, tips }: Props) {
	return (
		<Box className="flex flex-col gap-2 border border-gray-300 rounded-lg p-4 shadow-lg bg-white">
			<Text className="text-xl font-bold">{title}</Text>
			<VideoPlayer videoSource={videoSource} />
			<Box className="flex flex-row gap-2">
				<Box className="flex-1">
					<Text className="text-sm">
						<Text className="font-bold">무게 : </Text>
						시작 라운드를 채울 수 있는 무게부터 10% 씩 증가
					</Text>
					<Text className="text-sm">
						<Text className="font-bold">횟수 : </Text>
						5,6.. 개
					</Text>
				</Box>
				<Box className="flex-1 flex flex-col gap-2">
					{tips?.map((tip) => (
						<Tip key={tip} label={tip} />
					))}
				</Box>
			</Box>
		</Box>
	);
}
