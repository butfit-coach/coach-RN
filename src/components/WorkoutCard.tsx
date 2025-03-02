import { Card } from "./ui/card";
import { Pressable } from "./ui/pressable";
import { Text } from "./ui/text";

interface Props {
	date: Date;
	title: string;
	description: string;
	onPress: () => void;
}

export default function WorkoutCard({ date, title, description, onPress }: Props) {
	return (
		<Pressable onPress={onPress}>
			{({ pressed }) => (
				<Card variant="outline" className={pressed ? "bg-green-100" : ""}>
					<Text>{date.toLocaleDateString()}</Text>
					<Text>{title}</Text>
					<Text>{description}</Text>
				</Card>
			)}
		</Pressable>
	);
}
