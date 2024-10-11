import React, { useState } from "react";
import AddCriteriyInput from "../../Input/AddCriteriy/AddCriteriyInput";

const AddVariants = () => {
	const [counter, setCounter] = useState(0);

	const handleClick = () => {
		setCounter(counter + 1);
		console.log(counter);
	};
	return (
		<div className=" grid grid-cols-1 gap-3">
			{Array.from(Array(counter)).map((c, index) => {
				return (
					<AddCriteriyInput
						key={c}
						onChange={(
							event: React.ChangeEvent<HTMLInputElement>
						) => {}}
					></AddCriteriyInput>
				);
			})}
			<button
				onClick={handleClick}
				className="w-11 h-11 bg-white shadow-xs border border-gray-300 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-500  hover:bg-gray-50"
			>
				<svg
					width="10"
					height="10"
					viewBox="0 0 10 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1.22229 5.0001H8.77785M5.00007 8.77788V1.22232"
						stroke="#101828"
						stroke-width="1.6"
						stroke-linecap="round"
						stroke-linejoin="round"
					></path>
				</svg>
			</button>
		</div>
	);
};

export default AddVariants;
