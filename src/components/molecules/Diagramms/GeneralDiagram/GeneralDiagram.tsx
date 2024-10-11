import React from "react";
import { Pie } from "react-chartjs-2";

type props = {
	rating: number;
};

const GeneralDiagram = (props: props) => {
	const data = {
		labels: ["Удволетворённые клиенты", "Неудволетворённые клиенты"],
		datasets: [
			{
				label: "Удволетворённые клиенты",
				data: [props.rating, 100 - props.rating],
				backgroundColor: ["#4FD1C5", "#f3ba2f"],
			},
		],
	};

	return (
		<div className="w-full h-96 pl-96 pt-20 p-96">
			<Pie data={data} />
		</div>
	);
};

export default GeneralDiagram;
