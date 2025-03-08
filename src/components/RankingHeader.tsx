import { Avatar, AvatarFallbackText, AvatarImage } from "@/components/ui/avatar";
import { Box } from "./ui/box";
import { Text } from "./ui/text";

export default function RankingHeader() {
	return (
		<Box className="flex flex-row justify-between">
			<Box className="flex flex-row items-center gap-2">
				<Text className="text-2xl font-bold">순위</Text>
				<Avatar size="sm">
					<AvatarFallbackText>Jane Doe</AvatarFallbackText>
					<AvatarImage
						source={{
							uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
						}}
					/>
				</Avatar>
				<Text className="text-lg font-bold">{name}</Text>
			</Box>
			<Box className="flex flex-row">
				<Text className="text-lg font-bold">{weight}</Text>
				<Text className="text-lg font-bold">{count}</Text>
			</Box>
		</Box>
	);
}
