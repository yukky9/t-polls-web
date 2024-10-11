import React from "react";
import deleteBt from "../../../../assets/Vector.png";

type props = {
	id: number;
};

const DeletePatternButton = (props: props) => {
	return (
		<div>
			<button>
				<img className="w-4 h-4" alt="closeBt" src={deleteBt} />
			</button>
		</div>
	);
};

export default DeletePatternButton;
