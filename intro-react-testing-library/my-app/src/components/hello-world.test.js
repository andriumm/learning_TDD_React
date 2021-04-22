import React from "react";
import HelloWorld from "./hello-world";

import { render, screen } from "@testing-library/react";

test("renders hello world", () => {
	render(<HelloWorld />);
});
