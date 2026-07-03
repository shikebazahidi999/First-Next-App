import React from "react";

function page() {
	return (
		<div className=" bg-linear-60 from-black via-gray-950 to-black min-h-screen w-full flex justify-center items-center">
			<div className="border-2 animate-bounce transition-all duration-500 flex justify-center items-center border-dashed border-yellow-200 h-60 w-fit p-10 bg-black/90 shadow-2xl shadow-black rounded-2xl">
				<h1 className="text-5xl font-black text-yellow-200">
					welcome to about page
				</h1>
			</div>
		</div>
	);
}

export default page;
