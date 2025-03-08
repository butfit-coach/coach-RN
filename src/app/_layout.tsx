import { Stack, useGlobalSearchParams, usePathname, useRouter } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { colors } from "@/styles/colors";
import { Icon, ArrowLeftIcon } from "@/components/ui/icon";
import { Trophy } from "lucide-react-native";
import { Pressable } from "@/components/ui/pressable";

export default function RootLayout() {
	const { id, date, title, description } = useGlobalSearchParams();
	const pathname = usePathname();
	const router = useRouter();

	const handlePressBackButton = () => {
		if (pathname === "/info") {
			router.back();
		}

		if (pathname === "/record") {
			router.push("/info");
		}

		if (pathname === "/ranking") {
			router.push("/record");
		}
	};

	return (
		<GluestackUIProvider>
			<Stack
				screenOptions={{
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
				<Stack.Screen
					name="(workout)"
					options={{
						headerTitle: `${title}-${date}`,
						headerLeft: () => {
							return (
								<Pressable className="size-8" onPress={handlePressBackButton}>
									{({ pressed }) => (
										<Icon
											as={ArrowLeftIcon}
											className={`w-full h-full text-white ${pressed ? "text-gray-500" : ""}`}
										/>
									)}
								</Pressable>
							);
						},
						headerRight:
							pathname === "/record"
								? () => {
										return (
											<Pressable
												className="size-8"
												onPress={() => {
													router.push("/ranking");
												}}
											>
												{({ pressed }) => (
													<Icon
														as={Trophy}
														className={`w-full h-full text-white ${pressed ? "text-gray-500" : ""}`}
													/>
												)}
											</Pressable>
										);
								  }
								: undefined,
					}}
				/>
			</Stack>
		</GluestackUIProvider>
	);
}
