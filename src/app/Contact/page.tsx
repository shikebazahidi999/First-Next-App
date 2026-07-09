import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
	title: "Contact",
	description: "contact page",
};

function contactpage() {
	return (
		<div className=" bg-linear-60 from-green-950 via-green-900 to-green-950 min-h-screen w-full flex justify-center items-center">
			<div className="border-2 flex justify-center animate-bounce items-center border-dashed border-yellow-200 h-90 w-90 p-10 bg-green-950/60 shadow-2xl shadow-green-950 rounded-full">
				<h1 className="text-5xl font-black text-yellow-200">
					welcome to Contact page
				</h1>
			</div>
		</div>
	);
}

export default contactpage;
