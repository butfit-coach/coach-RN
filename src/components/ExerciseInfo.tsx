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
		<Box className="flex flex-col gap-2">
			<Text className="text-xl font-bold">{title}</Text>
			<VideoPlayer videoSource={videoSource} />
			<Box className="flex flex-col gap-2">
				{tips?.map((tip) => (
					<Tip key={tip} label={tip} />
				))}
			</Box>
		</Box>
	);
}
