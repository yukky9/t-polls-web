import React, { useState } from "react";
import FirstStatisticsFormButton from "../../../../atoms/Button/StatisticsFormButtons/FirstStatisticsFormButton/FirstStatisticsFormButton";
import CategoryDiagram from "../../../../molecules/Diagramms/CategoryDiagram/CategoryDiagram";
import closeBt from "../../../../../assets/closeOutlined.png";
import Modal from "react-modal";
import SecondForm from "../../../../organisms/ModalLayouts/StatisticsForm/SecondForm/SecondForm";

type props = {
	rating: { name: string; rating: 1 | 2 | 3 | 4 | 5 }[];
};

const FirstForm = (props: props) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const openModal = () => {
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

	const modalContent = (
		<div className="grid grid-cols-1">
			<button onClick={closeModal}>
				<img className="m-0.5 w-5 h-5" alt="closeBt" src={closeBt} />
			</button>
			<SecondForm />
		</div>
	);

	return (
		<div className="grid grid-cols-1 gap-24">
			<div className="text-center">
				<CategoryDiagram
					data={props.rating.map((v, i) => {
						return {
							id: i,
							category: v.name,
							rating: v.rating,
						};
					})}
				/>
			</div>
			<div className="text-center">
				<button onClick={openModal}>
					<FirstStatisticsFormButton children="Далее" />
				</button>
			</div>
			<Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
				{modalContent}
			</Modal>
		</div>
	);
};

export default FirstForm;
