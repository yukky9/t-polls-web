import React, { useReducer, useState } from "react";
import QuestionInput from "../../atoms/Input/QuestionInput/QuestionInput";
import Description from "../../atoms/Input/Description/Description";
import SecondRadioButton from "../../atoms/RadioButtons/SecondRadioButton";
import addVariants from "../../../assets/Plus.png";
import DopQuestion from "../../atoms/Input/DopQuestion/DopQuestion";
import FirstCreateFormatButton from "../../atoms/Button/CreateFormatButtons/FirstCreateFormatButton/FirstCreateFormatButton";
import ApiService from "../../../api";
import AddCriteriyInput from "../../atoms/Input/AddCriteriy/AddCriteriyInput";
import AddVariants from "../../atoms/IconButton/AddVariants/AddVariants";

const CreatePollsForm = () => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [specialQuestion, setSpecialQuestion] = useState("");
	const [specialAnswer, setSpecialAnswer] = useState(false);
	const [criteria, setCriteria] = useState([""]);
	const [, forceUpdate] = useReducer((x) => x + 1, 0);

	const onChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		index: number
	) => {
		const newc = criteria;
		newc[index] = event.currentTarget.value;
		setCriteria(newc);
		forceUpdate();
	};

	const onClick = () => {
		const newc = criteria;
		newc.push("");
		setCriteria(newc);
		forceUpdate();
	};

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
					<div className="grid gap-3">
						<Description
							onChange={(
								event: React.ChangeEvent<HTMLInputElement>
							) => {
								setDescription(event.currentTarget.value);
							}}
						/>
						<DopQuestion
							onChange={(
								event: React.ChangeEvent<HTMLInputElement>
							) => {
								setSpecialQuestion(event.currentTarget.value);
							}}
						/>
						<DopQuestion
							onChange={function (
								event: React.ChangeEvent<HTMLInputElement>
							): void {}}
						/>
						<div className="flex gap-3 items-center">
							<label className="text-xl">Правильный ответ</label>
							<SecondRadioButton
								onChange={(val: boolean) => {
									setSpecialAnswer(val);
								}}
							/>
						</div>
						<label
							htmlFor="base-input"
							className="block mb-2 text-xl font-medium text-gray-900 dark:text-black"
						>
							Добавить критерий
						</label>
						<div className="grid grid-cols-1 gap-5">
							<div className=" grid grid-cols-1 gap-3">
								<button
									onClick={onClick}
									className="bg-gray-300 rounded-xl p-0.5 w-96 h-7 pl-44"
								>
									<img
										className="w-5 h-5"
										src={addVariants}
										alt="add icon"
									/>
								</button>
								{criteria.map((c, index) => {
									return (
										<AddCriteriyInput
											key={index}
											onChange={(e) => onChange(e, index)}
											onClose={(event) => {
												const newc = criteria;
												newc.splice(index, 1);
												setCriteria(newc);
												forceUpdate();
											}}
										></AddCriteriyInput>
									);
								})}
							</div>
						</div>
						<AddCriteriyInput
							onChange={() => {}}
							onClose={() => {}}
						/>
					</div>
				</div>
			</div>
			<a className="pl-96">
				<FirstCreateFormatButton
					children="Создать"
					onClick={(e) => {
						new ApiService()
							.createOnePoll({
								name: name,
								description: description,
								criteria: criteria,
								question: specialQuestion,
								answer: specialAnswer,
							})
							.then(() => {
								window.location.href = "/";
							});
					}}
				/>
			</a>
		</div>
	);
};

export default CreatePollsForm;
