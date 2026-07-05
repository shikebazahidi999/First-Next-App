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
			route: "/",
			id: 2,
		},
		{
			name: "Contact",
			route: "/Contact",
			id: 3,
		},
		{
			name: "Workers",
			route: "/products",
			id: 4,
		},
	];

	return (
		<div className="h-fit w-full bg-gray-50/10 fixed text-yellow-200 flex justify-between p-4 border-b">
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
