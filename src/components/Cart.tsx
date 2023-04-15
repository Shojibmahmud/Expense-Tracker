interface Props {
	cartItems: string[];
	onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
	return (
		<div>
			{" "}
			The Fruit Cart
			<ul>
				{" "}
				{cartItems.map((item) => (
					<li key={item}>{item} </li>
				))}{" "}
			</ul>
			<button className="btn btn-danger" onClick={onClear}>
				Clear
			</button>
		</div>
	);
};

export default Cart;
