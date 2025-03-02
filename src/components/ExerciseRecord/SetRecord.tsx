import { Box } from "../ui/box";
import { Input, InputField } from "@/components/ui/input";
import { Text } from "../ui/text";
import { Icon, TrashIcon } from "../ui/icon";
import { Pressable } from "../ui/pressable";
import { SetRecord as SetRecordType } from "./ExerciseRecord";

interface Props {
	id: string;
	setNumber?: number;
	weight?: number;
	count?: number;
	onDelete?: (id: string) => void;
	onChange?: (id: string, setRecord: SetRecordType) => void;
}

export default function SetRecord({
	id,
	setNumber = 1,
	weight = 0,
	count = 0,
	onDelete,
	onChange,
}: Props) {
	const handlePressDelete = () => {
		onDelete?.(id);
	};

	const handleChangeWeight = (text: string) => {
		if (isNaN(Number(text))) return;

		onChange?.(id, {
			id,
			setNumber,
			weight: Number(text),
			count,
		});
	};

	const handleChangeCount = (text: string) => {
		if (isNaN(Number(text))) return;

		onChange?.(id, {
			id,
			setNumber,
			weight,
			count: Number(text),
		});
	};

	return (
		<Box className="w-full border border-gray-200 h-12 rounded-md flex flex-row justify-between items-center px-7">
			<Text>{setNumber}세트</Text>
			<Box className="flex flex-row items-center gap-2">
				<Input className="w-16" size="md" variant="outline">
					<InputField
						value={weight?.toString()}
						onChangeText={handleChangeWeight}
						keyboardType="decimal-pad"
						placeholder=""
					/>
				</Input>
				<Text>kg</Text>
			</Box>
			<Box className="flex flex-row items-center gap-2">
				<Input className="w-16" size="md" variant="outline">
					<InputField
						value={count?.toString()}
						onChangeText={handleChangeCount}
						keyboardType="decimal-pad"
						placeholder=""
					/>
				</Input>
				<Text>회</Text>
			</Box>
			<Pressable onPress={handlePressDelete}>
				{({ pressed }) => (
					<Icon as={TrashIcon} size="sm" className={pressed ? "text-gray-500" : ""} />
				)}
			</Pressable>
		</Box>
	);
}
