import * as React from "react";
import { Component } from "react";
import { useState } from "react";
//import { MouseEvent } from "react";

interface properties {
	items: string[];
	headings: string;
	onSelectItem: (item: string) => void;
}

function ListGroup({ items, headings, onSelectItem }: properties) {
	//items = [];

	//Hooks
	const [selectedIndex, setSelectIndex] = useState(-1);

	// for type safety
	//const handleClick = (event: MouseEvent) => console.log(event);
	return (
		<>
			<h1>{headings}</h1>
			{items.length === 0 && <p>The List is empty</p>}
			<ul className="list-group">
				{items.map((city, index) => (
					<li
						className={
							selectedIndex === index
								? "list-group-item active"
								: "list-group-item"
						}
						key={city}
						onClick={() => {
							setSelectIndex(index);
							onSelectItem(city);
						}}>
						{city}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
