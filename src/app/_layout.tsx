import { Stack, useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { colors } from "@/styles/colors";

export default function RootLayout() {
	const { id, date, title, description } = useGlobalSearchParams();

	return (
		<GluestackUIProvider>
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen
					name="(workout)/details/[id]"
					options={{
						headerShown: true,
						headerTitle: `${title}-${date}`,
						// 뒤로가기 타이틀
						headerBackButtonDisplayMode: "minimal",
						// 헤더 스타일
						headerStyle: {
							backgroundColor: colors.green[100],
						},
						// 타이틀 색상
						headerTintColor: "#fff",
						// 타이틀 스타일
						headerTitleStyle: {
							fontWeight: "bold",
						},
						// 배경색
						contentStyle: {
							backgroundColor: colors.white[100],
						},
					}}
				/>
			</Stack>
		</GluestackUIProvider>
	);
}
