import React, { useEffect, useState } from "react";
import statisticsIcon from "../../../../assets/statistics.png";
import Modal from "react-modal";
import closeBt from "../../../../assets/closeOutlined.png";
import FirstForm from "../../../organisms/ModalLayouts/StatisticsForm/FirstForm/FirstForm";
import ApiService from "../../../../api";

type props = {
	pollId: number;
};

const StatisticsPollsButton = (props: props) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [poll, setPoll] = useState<Poll | undefined>();

	useEffect(() => {
		if (!poll)
			new ApiService().getPoll(props.pollId).then((r) => {
				setPoll(r);
			});
	});

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
			<FirstForm
				rating={
					poll?.criteria.map((val) => {
						return {
							name: val.criteria_name,
							rating: val.csat,
						};
					}) ?? []
				}
				predict={poll?.offer ?? "Нет."}
			/>
		</div>
	);
	return (
		<div>
			<button className="bg-none p-0.5 w-14 h-7">
				<img
					onClick={openModal}
					className="w-5 h-5"
					alt="statisticsIcon"
					src={statisticsIcon}
				/>
			</button>
			<Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
				{modalContent}
			</Modal>
		</div>
	);
};

export default StatisticsPollsButton;
