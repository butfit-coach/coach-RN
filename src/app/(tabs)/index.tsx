import { useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Dimensions } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function WeeklyScreen() {
	const [isPaused, setIsPaused] = useState<boolean>(false);

	return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
