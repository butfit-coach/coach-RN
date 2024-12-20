import { useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Dimensions } from "react-native";
import YoutubePlayer, { PLAYER_STATES } from "react-native-youtube-iframe";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function WeeklyScreen() {
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const onChangePlaylistStatus = (state: PLAYER_STATES) => {
    if (state === "paused") {
      setIsPaused(true);
    } else {
      setIsPaused(false);
    }
  };

  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={SCREEN_HEIGHT}
        width={SCREEN_WIDTH}
        volume={100}
        play={true}
        videoId={"somthing"}
        onChangeState={onChangePlaylistStatus}
        initialPlayerParams={{ loop: true, start: 3 }}
        webViewStyle={{ opacity: 0.99 }}
        webViewProps={{
          renderToHardwareTextureAndroid: true,
          androidLayerType:
            Platform.OS === "android" && Platform.Version <= 22
              ? "hardware"
              : "none",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});
