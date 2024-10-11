import React from "react";
import QuestionInput from "../../atoms/Input/QuestionInput/QuestionInput";
import Description from "../../atoms/Input/Description/Description";
import SecondRadioButton from "../../atoms/RadioButtons/SecondRadioButton";
import AddVariants from "../../atoms/IconButton/AddVariants/AddVariants";
import FirstCreateFormatButton from "../../atoms/Button/CreateFormatButtons/FirstCreateFormatButton/FirstCreateFormatButton";
import AddCriteriyInput from "../../atoms/Input/AddCriteriy/AddCriteriyInput";

const GeneratePatternForm = () => {
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
						) => {}}
					/>
				</div>
				<div className="grid grid-cols-1 gap-3">
					<div className="grid gap-10">
						<Description
							onChange={(
								event: React.ChangeEvent<HTMLInputElement>
							) => {}}
						/>
						<div className="-mt-5">
							<SecondRadioButton
								onChange={(val: boolean) => {}}
							/>
						</div>
						<div className="grid grid-cols-2 gap-5 -ml-48">
							<AddCriteriyInput
								onChange={(
									event: React.ChangeEvent<HTMLInputElement>
								) => {}}
							/>
							<AddVariants />
						</div>
					</div>
				</div>
			</div>
			<a className="pl-96" href="/pattern">
				<FirstCreateFormatButton children="Создать" />
			</a>
		</div>
	);
};

export default GeneratePatternForm;
