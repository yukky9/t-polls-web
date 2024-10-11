import React, { useReducer, useState } from "react";
import QuestionInput from "../../atoms/Input/QuestionInput/QuestionInput";
import FirstCreateFormatButton from "../../atoms/Button/CreateFormatButtons/FirstCreateFormatButton/FirstCreateFormatButton";
import ApiService from "../../../api";
import AddCriteriyInput from "../../atoms/Input/AddCriteriy/AddCriteriyInput";

const CreatePatternForm = () => {
	const [name, setName] = useState("");
	const [criteria, setCriteria] = useState<string[]>([""]);
	const [, forceUpdate] = useReducer((x) => x + 1, 0);

	return (
		<div className="pl-96 p-32 grid grid-cols-1 gap-10">
			<div className="grid grid-cols-1 gap-3 pl-44">
				<div className="grid grid-cols-1 gap-2">
					<div className="font-sans text-xl items-center">
						Название опроса
					</div>
					<QuestionInput
						onChange={(
							event: React.ChangeEvent<HTMLInputElement>
						) => {
							setName(event.currentTarget.value);
						}}
					/>
				</div>
				<div className="grid grid-cols-1 gap-3">
					<div className="grid gap-10">
						Критерии
						<div className="grid grid-cols-1 gap-5">
							{criteria.map((c, index) => {
								return (
									<AddCriteriyInput
										key={index}
										onChange={(
											event: React.ChangeEvent<HTMLInputElement>
										) => {
											const newc = criteria;
											newc[index] =
												event.currentTarget.value;
											setCriteria(newc);
										}}
										onClose={(event) => {
											const newc = criteria;
											newc.splice(index, 1);
											setCriteria(newc);
											forceUpdate();
										}}
									></AddCriteriyInput>
								);
							})}
							<button
								onClick={() => {
									const newc = criteria;
									newc.push("");
									setCriteria(newc);
									forceUpdate();
								}}
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
					</div>
				</div>
			</div>
			<a className="pl-96">
				<FirstCreateFormatButton
					children="Создать"
					onClick={() => {
						new ApiService()
							.createTemplate({
								name: name,
								criteria: criteria,
							})
							.then(() => {
								window.location.href = "/pattern";
							});
					}}
				/>
			</a>
		</div>
	);
};

export default CreatePatternForm;

{
	/* <DopQuestion
							onChange={(
								event: React.ChangeEvent<HTMLInputElement>
							) => {}}
						/>
						<div className="-mt-5">
							<SecondRadioButton
								onChange={(val: boolean) => {}}
							/>
						</div> */
}
