import React, { useState } from "react";

const Updater = () => {
	const [details, setDetails] = useState({
		name: "Faizan",
		age: 4,
		gender: "male",
		address: {
			city: "Narayanganj",
			postal: 1430,
		},
	});

	const handleClick = () => {
		setDetails({
			...details,
			age: 8888,
			address: { ...details.address, postal: 19999340 },
		});
	};

	return (
		<div>
			The age is : {details.age} : {details.address.postal} :{" "}
			<button className="btn btn-primary" onClick={handleClick}>
				update
			</button>
		</div>
	);
};

export default Updater;
