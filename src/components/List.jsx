import React from "react";
import Element from "./Element";

import { connect } from "react-redux";

const List = ({ rates }) => {
	const ratesElements = rates.map((rate) => (
		<Element key={rate.id} {...rate} />
	));
	return <ul>{ratesElements}</ul>;
};

const connectReduxStateToProps = (store) => ({
	rates: store.rates,
});

const ListConsumer = connect(connectReduxStateToProps)(List);

export default ListConsumer;
