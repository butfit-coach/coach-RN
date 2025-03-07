import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Icon, InfoIcon } from "@/components/ui/icon";

interface Props {
	label: string;
}

export default function Tip({ label }: Props) {
	return (
		<Box className="flex flex-row">
			<Box className="flex flex-row items-center gap-1 rounded-3xl border border-blue-200 p-1 pr-2">
				<Icon as={InfoIcon} className="text-blue-500" />
				<Text className="text-xs font-bold text-blue-500">{label}</Text>
			</Box>
			<Box className="flex-1" />
		</Box>
	);
}
