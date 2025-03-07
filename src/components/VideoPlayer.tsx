import { useRef } from "react";
import { useVideoPlayer, VideoSource, VideoView } from "expo-video";
import { Button, Dimensions, StyleSheet, View } from "react-native";
import { useEvent } from "expo";
import { Text } from "./ui/text";

const {
	width: SCREEN_WIDTH,
	//height: SCREEN_HEIGHT
} = Dimensions.get("window");
const VIDEO_ASPECT_RATIO = 16 / 9;
const VIDEO_PADDING = 10;

interface Props {
	videoSource: VideoSource;
}

export default function VideoPlayer({ videoSource }: Props) {
	if (!videoSource) return <Text>영상이 없습니다.</Text>;

	const player = useVideoPlayer(videoSource, (player) => {
		player.loop = true;
		player.play();
	});
	const { isPlaying } = useEvent(player, "playingChange", { isPlaying: player.playing });

	return (
		<View style={styles.contentContainer}>
			<VideoView
				style={styles.video}
				player={player}
				allowsFullscreen={false}
				allowsPictureInPicture={false}
			/>
			{/*<View style={styles.controlsContainer}>
				<Button
					title={isPlaying ? "Pause" : "Play"}
					onPress={() => {
						if (isPlaying) {
							player.pause();
						} else {
							player.play();
						}
					}}
				/>
			</View>*/}
		</View>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	video: {
		width: "100%",
		height: (SCREEN_WIDTH - 2 * VIDEO_PADDING) / VIDEO_ASPECT_RATIO,
	},
	//controlsContainer: {
	//	padding: 10,
	//},
});
