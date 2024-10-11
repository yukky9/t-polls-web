import React, { useState } from "react";
import GeneralDiagram from "../../../../molecules/Diagramms/GeneralDiagram/GeneralDiagram";
import closeBt from "../../../../../assets/closeOutlined.png";
import FirstForm from "../../../../organisms/ModalLayouts/StatisticsForm/FirstForm/FirstForm";
import Modal from "react-modal";
import PrognozCard from "../../../../molecules/Cards/PrognozCard/PrognozCard";

type props = {
	rating: number;
	predict: string;
};

const SecondForm = (props: props) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const closeModal = () => {
		setModalIsOpen(false);
	};

	const modalContent = (
		<div className="grid grid-cols-1">
			<button onClick={closeModal}>
				<img className="m-0.5 w-5 h-5" alt="closeBt" src={closeBt} />
			</button>
			<FirstForm rating={[]} predict={props.predict} />
		</div>
	);
	return (
		<div className="grid grid-cols-1">
			<div className="items-center justify-center flex flex-row">
				<GeneralDiagram rating={props.rating} />
				<PrognozCard
					text={props.predict}
					title="Предположения нейросети"
				/>
			</div>
			<Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
				{modalContent}
			</Modal>
		</div>
	);
};

export default SecondForm;
