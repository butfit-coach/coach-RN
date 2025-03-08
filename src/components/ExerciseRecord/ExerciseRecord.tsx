import { useState } from "react";
import { Box } from "../ui/box";
import { Button, ButtonText } from "../ui/button";
import { Text } from "../ui/text";
import { VStack } from "../ui/vstack";
import SetRecord from "./SetRecord";
import { generateUUID } from "@/utils";

export interface SetRecord {
	id: string;
	setNumber: number;
	weight?: number;
	count?: number;
}

interface Props {
	title: string;
}

export default function ExerciseRecord({ title }: Props) {
	const [setRecords, setSetRecords] = useState<SetRecord[]>([
		{
			id: generateUUID(),
			setNumber: 1,
			weight: 0,
			count: 0,
		},
		{
			id: generateUUID(),
			setNumber: 2,
			weight: 0,
			count: 0,
		},
		{
			id: generateUUID(),
			setNumber: 3,
			weight: 0,
			count: 0,
		},
	]);

	const handlePressAddSet = () => {
		setSetRecords([
			...setRecords,
			{
				id: generateUUID(),
				setNumber: setRecords.length + 1,
				weight: 0,
				count: 0,
			},
		]);
	};

	const handleChangeSetRecord = (id: string, setRecord: SetRecord) => {
		setSetRecords(
			setRecords.map((prevSetRecord) => (prevSetRecord.id === id ? setRecord : prevSetRecord))
		);
	};

	const handlePressDelete = (id: string) => {
		if (setRecords.length === 1) return;

		setSetRecords(setRecords.filter((setRecord) => setRecord.id !== id));
	};

	return (
		<Box className="w-full border-gray-300 rounded-lg p-4 shadow-lg bg-white flex items-center justify-center px-4 py-4">
			<VStack space="sm" className="w-full">
				<Box className="w-full border border-gray-200 h-12 rounded-md flex items-center justify-center">
					<Text>{title}</Text>
				</Box>
				{setRecords.map((setRecord, index) => (
					<SetRecord
						key={setRecord.id}
						{...setRecord}
						setNumber={index + 1}
						onDelete={handlePressDelete}
						onChange={handleChangeSetRecord}
					/>
				))}
				<Button className="w-full h-12" onPress={handlePressAddSet}>
					<ButtonText>세트 추가</ButtonText>
				</Button>
			</VStack>
		</Box>
	);
}
