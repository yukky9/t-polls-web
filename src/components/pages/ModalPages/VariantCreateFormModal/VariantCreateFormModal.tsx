import React from "react";
import CloseButton from "../../../atoms/IconButton/CloseButton/CloseButton";
import PatternCreatePollsForm from "../../../organisms/CreatePollsForm/PatternCreatePollsForm";
import { useSearchParams } from "react-router-dom";

const VariantCreateFormModal = () => {
	const search = window.location.search;
	const params = new URLSearchParams(search);
	return (
		<div className="p-10">
			<a href="/">
				<CloseButton />
			</a>
			<PatternCreatePollsForm
				templateId={Number.parseInt(params.get("id") ?? "0")}
			/>
		</div>
	);
};

export default VariantCreateFormModal;
