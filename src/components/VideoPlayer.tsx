import { useRef } from "react";
import { useVideoPlayer, VideoSource, VideoView } from "expo-video";
import { Button, Dimensions, StyleSheet, View } from "react-native";
import { useEvent } from "expo";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function VideoPlayer() {
	//const videoSource =
	//	"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
	const assetId = require("./77a071c3-c139-409c-bb6c-cfc00a09a9a2.mp4");

	const videoSource: VideoSource = {
		assetId,
		metadata: {
			title: "Test1",
			artist: "Test2",
		},
	};

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
			<View style={styles.controlsContainer}>
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
			</View>
		</View>
	);
}

// Later on in your styles..

const styles = StyleSheet.create({
	contentContainer: {
		flex: 1,
		padding: 10,
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 50,
	},
	video: {
		width: 350,
		height: 275,
	},
	controlsContainer: {
		padding: 10,
	},
});
