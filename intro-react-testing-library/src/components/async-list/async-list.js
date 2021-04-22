import React, { useEffect, useState } from "react";

const foodList = ["Hamburger", "Pizza", "Tacos"];

const fakeApiCall = () =>
	new Promise((resolve) => setTimeout(resolve(foodList), 2000));

export default function AsyncList() {
	const [foodData, setFoodData] = useState([]);

	useEffect(async () => {
		// fakeApiCall().then((data) => setFoodData(data));
		//refactored to async/await syntax
		const data = await fakeApiCall();
		setFoodData(data);
	}, []);
	return foodData.map((name) => <p key={name}>{name}</p>);
}

// const data = await fakeApiCall();
// setFoodData(data);
