import React from "react";
import { employs } from "../../../public/images/informations/employs";

function Products() {
	return (
		<div className="min-h-screen h-full w-full bg-linear-60 from-black via-gray-950 to-black flex items-center flex-col gap-5 p-6  justify-center">
			<h1
				className="text-center mt-24 font-bold text-4xl text-yellow-200
            "
			>
				All of our workers
			</h1>
			<img src="./images/picture1.jpg" alt="" />
			<div className="grid grid-cols-4 gap-8">
				{employs.map((items) => {
					return (
						<div
							className="bg-gray-300/10 h-fit w-fit p-6 text-yellow-200 flex flex-col gap-2 rounded-md border border-yellow-200  hover:shadow-xl hover:shadow-yellow-200 shadow-md shadow-yellow-200 transition-all duration-150 items-center"
							key={items.id}
						>
							<img
								className="h-70 w-70 rounded-full border border-yellow-200 shadow-md shadow-yellow-100 "
								src={items.image}
								alt="🙄"
							/>
							<h1 className="text-2xl font-bold  cursive">
								Name : {items.name}
							</h1>
							<h1 className="text-2xl font-bold  cursive">
								last name : {items.LastName}
							</h1>
							<a href={`/products/${items.id}`}>
								{" "}
								<button className="w-full bg-gray-200/10 p-2 rounded-md border  hover:shadow-md hover:shadow-yellow-200">
									{" "}
									See More Informations
								</button>
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Products;
