import { useState } from "react";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Like from "./components/Like";
import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import Updater from "./components/Updater";
import FormComponent from "./components/FormComponent";
import ExpenseTracker from "./components/ExpenseTracker";
import ExpenseTable from "./expense-tracker/components/ExpenseTable";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

/* function App() {
	let items = [
		"Dehli",
		"Dhaka",
		"London",
		"Budapest",
		"Beijing",
		"California",
		"Paris",
	];
	const handleOnSelect = (item: string) => {
		console.log(item);
	};
	return (
		<div>
			{" "}
			<ListGroup
				items={items}
				headings={"Cities"}
				onSelectItem={handleOnSelect}
			/>{" "}
		</div>
	);
} */

/* function App() {
	const [showAlert, setAlert] = useState(false);
	return (
		<div>
			{showAlert && (
				<Alert onClose={() => setAlert(false)}>button has been clicked</Alert>
			)}
			<Buttons onClicked={() => setAlert(true)}>Passing Children</Buttons>
			<Like onTouch={() => console.log("clicked")}></Like>
		</div>
	);
} */

/* function App() {
	 const [items, setItems] = useState(["Apples", "Oranges", "Bananas", "Mango"]);

	// another exercise

	const [game, setGame] = useState({
		id: 11,
		player: {
			name: "Peter",
			level: 5,
		},
	});

	const handleChange = () => {
		setGame({
			...game,
			id: 12,
			player: { ...game.player, name: "Boris", level: 7 },
		});
	};

	return (
		<div>
			<Updater></Updater>
			<NavBar itemCount={items.length}></NavBar>
			<Cart cartItems={items} onClear={() => setItems([])}></Cart>
			<div>
				the Id: {game.id} , <br></br> Name: {game.player.name},<br></br> Level:{" "}
				{game.player.level} <br />
				<button className="btn btn-warning" onClick={handleChange}>
					Next Player
				</button>
			</div>

			{/*  expandable text }
			/*<ExpandableText maxChar={100}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex nostrum ab
				quod cum? Commodi autem quibusdam officia ea ipsam, blanditiis quisquam
				iusto accusantium nobis veritatis ipsa. Enim, animi! Quidem reiciendis
				error aut rerum consequatur, libero delectus commodi asperiores tenetur
				recusandae, a quae! Veniam aliquam at corrupti sunt, labore magni
				dignissimos maxime illo vero hic suscipit nam. Ea possimus illum quas
				distinctio non facere praesentium iusto suscipit nemo temporibus
				assumenda, recusandae libero quae voluptatem atque aspernatur, hic,
				quidem dolorum voluptates? Illum sunt consequuntur cupiditate dolor
				ipsam, laudantium, veritatis fugit laborum ipsa qui quasi, voluptas
				earum dolorum sint laboriosam odio voluptatum ipsum!
			</ExpandableText>

			<FormComponent></FormComponent> 
		</div>
	);

	//Expense Tracker App
	
}*/

function App() {
	const [SelectedCategory, setCategory] = useState("");
	const [Expense_data, setExpense_data] = useState([
		{ id: 1, description: "apple", amount: 34, category: "groceries" },
		{ id: 2, description: "orange", amount: 24, category: "utilites" },
		{ id: 3, description: "fig", amount: 84, category: "groceries" },
		{ id: 4, description: "Mango", amount: 40, category: "entertainment" },
	]);

	const visibleCategory = SelectedCategory
		? Expense_data.filter((e) => e.category === SelectedCategory)
		: Expense_data;
	return (
		<>
			{/* <ExpenseTracker></ExpenseTracker> */}
			<ExpenseForm
				onSubmit={(data) =>
					setExpense_data([
						...Expense_data,
						{ ...data, id: Expense_data.length + 1 },
					])
				}></ExpenseForm>

			<ExpenseFilter
				onSelectCategory={(category) => setCategory(category)}></ExpenseFilter>

			<ExpenseTable
				expenses={visibleCategory}
				onDelete={(id) =>
					setExpense_data(Expense_data.filter((e) => e.id !== id))
				}></ExpenseTable>
		</>
	);
}

export default App;
