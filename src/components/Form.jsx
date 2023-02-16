import React, { useState } from "react";
import { connect } from "react-redux";
import { addRate, editRate } from "./actions/appActions";

const Form = ({
	addRate,
	author = "",
	comment = "",
	callback,
	editRate,
	id,
	rate = "",
}) => {
	const [authorInput, setAuthorInput] = useState(author);
	const [commentImput, setCommentInput] = useState(comment);
	const [rateInput, setRateInput] = useState(rate);

	const handleChangeAuthor = (e) => setAuthorInput(e.target.value);
	const handleChangeRate = (e) => setRateInput(e.target.value);
	const handleChangeComment = (e) => setCommentInput(e.target.value);

	const handleOnSubmit = (e) => {
		e.preventDefault();

		if (!authorInput.length) {
			return alert("Author name is required");
		}

		const rateObject = {
			author: authorInput,
			comment: commentImput,
			callback,
			id,
			rate: Number(rateInput),
		};

		id ? editRate(rateObject) : addRate(rateObject);

		if (id) callback();
	};

	return (
		<form onSubmit={handleOnSubmit} action=''>
			<div>
				<label htmlFor=''>
					Author:
					<input
						placeholder='Author name'
						onChange={handleChangeAuthor}
						type='text'
						value={authorInput}
					/>
				</label>
			</div>
			<div>
				<label>
					Rate:
					<input
						placeholder='From 1 to 10'
						onChange={handleChangeRate}
						type='number'
						value={rateInput}
						min='1'
						max='10'
					/>
				</label>
			</div>
			<div>
				<label>
					Comment:
					<input
						onChange={handleChangeComment}
						type='text'
						value={commentImput}
					/>
				</label>
			</div>
			<button type='submit'>{id ? "Edit" : "Add"}</button>
		</form>
	);
};

const connectActionToProps = {
	addRate,
	editRate,
};

const FormConsumer = connect(null, connectActionToProps)(Form);

export default FormConsumer;
