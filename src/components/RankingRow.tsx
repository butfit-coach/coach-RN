import { Avatar, AvatarFallbackText, AvatarImage } from "@/components/ui/avatar";
import { Box } from "./ui/box";
import { Text } from "./ui/text";

interface Props {
	rank: number;
	name: string;
	weight: number;
	count: number;
}
export default function RankingRow({ rank, name, weight, count }: Props) {
	return (
		<Box className="flex flex-row justify-between border border-gray-200 py-2 px-4 rounded-lg">
			<Box className="flex flex-row items-center gap-2">
				<Text className="text-2xl font-bold">{rank}</Text>
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
