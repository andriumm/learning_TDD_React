import react, { useState } from "react";

import React from "react";

export default function Counter() {
	const [counts, setCounts] = useState(0);
	return (
		<div>
			<button onClick={() => setCounts(counts + 1)}>Click</button>
			<p>Clicked times: {counts}</p>
		</div>
	);
}
