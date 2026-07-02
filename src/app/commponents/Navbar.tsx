import Link from "next/link";
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
			route: "/page",
			id: 2,
		},
		{
			name: "Contact",
			route: "/contact",
			id: 3,
		},
	];

	return (
		<div className="h-fit w-full bg-red-950 text-yellow-200 flex justify-between p-3">
			<h1 className="text-2xl font-bold">SH project</h1>
			<div className="flex gap-4 text-xl">
				{buttons.map((btn) => {
					return (
						<a key={btn.id} className="hover:text-white" href={btn.route}>
							{btn.name}
						</a>
					);
				})}
			</div>
		</div>
	);
}

export default Navbar;
