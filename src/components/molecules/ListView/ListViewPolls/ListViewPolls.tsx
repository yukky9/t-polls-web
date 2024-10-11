import React from "react";
import StatisticsPollsButton from "../../../atoms/IconButton/StatisticsPollsButton/StatisticsPollsButton";

type RowProps = {
	theme: string;
	date: any;
	count: number;
	percent: number;
	pollId: number;
};

const ListViewPolls = ({ theme, date, count, percent, pollId }: RowProps) => {
	return (
		<ul className="list-none font-light text-gray-600">
			<div className="flex justify-between items-center gap-10">
				<li>{theme}</li>
				<li className="mr-20">{date}</li>
				<div className="flex gap-20">
					<li className="mr-16 ml-1">{count}</li>
					<li className="ml-16 mr-1">{percent}</li>
				</div>
				<StatisticsPollsButton pollId={pollId} />
			</div>
		</ul>
	);
};

export default ListViewPolls;
