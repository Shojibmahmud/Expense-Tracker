import React from "react";

interface Expense {
	id: number;
	description: string;
	amount: number;
	category: string;
}

interface props {
	expenses: Expense[];
	onDelete: (id: number) => void;
}

const ExpenseTable = ({ expenses, onDelete }: props) => {
	if (expenses.length === 0) return null;

	return (
		<div>
			<table className="table table-bordered">
				<thead>
					<tr>
						<td>Description</td>
						<td>Amount</td>
						<td>Category</td>
						<td>Action</td>
					</tr>
				</thead>
				<tbody>
					{expenses.map((expense) => (
						<tr key={expense.id}>
							<td>{expense.description} </td>
							<td>{expense.amount} </td>
							<td> {expense.category} </td>
							<td>
								<button
									className="btn btn-outline-danger"
									onClick={() => onDelete(expense.id)}>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
				<tfoot>
					<tr>
						<td>Total</td>
						<td>
							{" "}
							€{expenses.reduce((acc, expense) => expense.amount + acc, 0)}{" "}
						</td>
						<td></td>
						<td></td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
};

export default ExpenseTable;
