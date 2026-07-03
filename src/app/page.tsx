import React from "react";

function Home() {
	return (
		<div className=" bg-linear-60 from-red-950 via-red-900 to-red-950 min-h-screen w-full flex justify-center items-center">
			<div className="border-2 flex justify-center items-center border-dashed border-yellow-200 h-60 w-fit p-10 bg-red-950/60 shadow-2xl shadow-red-950 rounded-full">
				<h1 className="text-5xl font-black text-yellow-200">
					welcome to home page
				</h1>
			</div>
		</div>
	);
}

export default Home;
