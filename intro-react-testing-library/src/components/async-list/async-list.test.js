import React from "react";
import { render, screen } from "@testing-library/react";

import AsyncList from "./async-list";

test("show the food data", async () => {
	render(<AsyncList />);

	const hamburger = await screen.findByText(/Hamburger/i);

	expect(hamburger).toBeInTheDocument();

	//example without the variable, directly the await sentence
	expect(await screen.findByText(/pizza/i)).toBeInTheDocument();

	expect(await screen.findByText(/taco/i)).toBeInTheDocument();
});
