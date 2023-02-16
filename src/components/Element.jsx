import React, { useState } from "react";
import Form from "./Form";

const Element = ({ author, comment, id, rate }) => {
	const [isVisibleForme, setIsVisibleForme] = useState(false);

	const toggleElements = () => setIsVisibleForme((prev) => !prev);

	const formOrButtonElement = isVisibleForme ? (
		<Form
			author={author}
			callback={toggleElements}
			rete={rate}
			id={id}
			comment={comment}
		/>
	) : (
		<button onClick={toggleElements}>Edit</button>
	);
	return (
		<div>
			<li>
				<p>Author: {author}</p>
				<p>Rate: {rate}</p>
				<p>Comment: {comment}</p>
				{formOrButtonElement}
			</li>
		</div>
	);
};

export default Element;
