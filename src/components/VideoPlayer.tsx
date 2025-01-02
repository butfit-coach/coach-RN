import { useRef } from "react";
import { Dimensions, StyleSheet } from "react-native";
import Video, { VideoRef } from "react-native-video";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function VideoPlayer() {
  const videoRef = useRef<VideoRef>(null);
  const videoSource = require("../../assets/video/77a071c3-c139-409c-bb6c-cfc00a09a9a2.mp4");

  return (
    <Video
      source={videoSource}
      ref={videoRef}
      style={styles.backgroundVideo} // Callback when remote video is buffering
      onBuffer={() => {}}
      // Callback when video cannot be loaded
      onError={() => {}}
    />
  );
}

// Later on in your styles..
const styles = StyleSheet.create({
  backgroundVideo: {
    width: SCREEN_WIDTH,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
