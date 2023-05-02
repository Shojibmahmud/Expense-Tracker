import React from "react";

const ExpenseFilter = () => {
	return (
		<div className="mb-3">
			<select
				className="form-select form-select-lg mb-3"
				aria-label=".form-select-lg example">
				<option>All Categories</option>
				<option value="groceries">Groceries</option>
				<option value="utilites">Utilities</option>
				<option value="entertainment">Entertainment</option>
			</select>
		</div>
	);
};

export default ExpenseFilter;
