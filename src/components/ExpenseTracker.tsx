import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SetStateAction, useState } from "react";

const schema = z.object({
	description: z
		.string()
		.min(3)
		.nonempty({ message: "The Description field is required" }),
	amount: z.number({ invalid_type_error: "AMOUNT field is required" }).min(1),
	category: z.string().nonempty({ message: "This field is required" }),
});
type FormData = z.infer<typeof schema>;

const ExpenseTracker = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({ resolver: zodResolver(schema) });

	const [selectedOption, setSelectedOption] = useState("");
	const handleChange = (event: {
		target: { value: SetStateAction<string> };
	}) => {
		setSelectedOption(event.target.value);
	};
	const onSubmit = (data: FieldValues) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-3">
				<label htmlFor="description" className="form-lebel">
					Description
				</label>
				<input
					{...register("description")}
					id="description"
					className="form-control"
					type="text"></input>
				{errors.description && (
					<p className="text-danger">{errors.description.message}</p>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="amount" className="form-lebel">
					Amount
				</label>
				<input
					{...register("amount", { valueAsNumber: true })}
					id="amount"
					type="number"
					className="form-control"
				/>
				{errors.amount && (
					<p className="text-danger">{errors.amount.message}</p>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="category" className="form-lebel">
					Category
				</label>
				<select
					value={selectedOption}
					onChange={handleChange}
					className="form-select form-select-lg mb-3"
					aria-label=".form-select-lg example">
					<option value=""></option>
					<option value="1">Groceries</option>
					<option value="2">Utilities</option>
					<option value="3">Entertainment</option>
				</select>
			</div>

			<button className="btn btn-primary" type="submit">
				Submit
			</button>
			<div className="mb-3">
				<select
					className="form-select form-select-lg mb-3"
					aria-label=".form-select-lg example">
					<option selected>All Categories</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</select>
			</div>

			<div>
				<table className="table">
					<thead>
						<tr>
							<th>Description</th>
							<th>Amount</th>
							<th>Category</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Rice</td>
							<td>Utilities</td>
							<td>Entertainment</td>
							<td>
								<button className="btn btn-danger">Delete</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</form>
	);
};

export default ExpenseTracker;
