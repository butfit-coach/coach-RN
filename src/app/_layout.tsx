import { Stack, useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { colors } from "@/styles/colors";

export default function RootLayout() {
	const { id, date, title, description } = useGlobalSearchParams();

	return (
		<GluestackUIProvider>
			<Stack
				screenOptions={{
					headerTitle: `${title}-${date}`,
					headerBackButtonDisplayMode: "minimal",
					headerStyle: {
						backgroundColor: colors.green[100],
					},
					headerTintColor: "#fff",
					headerTitleStyle: {
						fontWeight: "bold",
					},
				}}
			>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="(workout)" />
			</Stack>
		</GluestackUIProvider>
	);
}
