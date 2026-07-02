import React from "react";

function Navbar() {
	const buttons: { name: string; route: string; id: number }[] = [
		{
			name: "About",
			route: "/about",
			id: 1,
		},
		{
			name: "Home",
			route: "/Homet",
			id: 2,
		},
		{
			name: "Contact",
			route: "/contact",
			id: 3,
		},
	];

	return (
		<div>
			<h1>SH project</h1>
			<div>{buttons.map(())}</div>
		</div>
	);
}

export default Navbar;
