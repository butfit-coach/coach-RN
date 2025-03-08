import { useState } from "react";
import { Box } from "./ui/box";
import { Pressable } from "./ui/pressable";
import { Text } from "./ui/text";

interface Props {
	selected: "weight" | "count";
	onPress: (value: "weight" | "count") => void;
}

export default function RadioButton({ selected, onPress }: Props) {
	return (
		<Box className="flex flex-row">
			<Pressable onPress={() => onPress("weight")}>
				{({ pressed }) => (
					<Box
						className={`border  border-gray-300 rounded-l-lg p-2 ${pressed ? "bg-gray-100" : ""} ${
							selected === "weight" ? "bg-green-100 border-green-200" : ""
						}`}
					>
						<Text>Weight</Text>
					</Box>
				)}
			</Pressable>
			<Pressable onPress={() => onPress("count")}>
				{({ pressed }) => (
					<Box
						className={`border border-l-0 border-gray-300 rounded-r-lg p-2 ${
							pressed ? "bg-gray-100" : ""
						} ${selected === "count" ? "bg-green-100" : ""}`}
					>
						<Text>Count</Text>
					</Box>
				)}
			</Pressable>
		</Box>
	);
}
