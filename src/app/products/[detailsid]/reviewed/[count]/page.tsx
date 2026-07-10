import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
	title: "time clicked",
};
async function Count({
	params,
}: {
	params: Promise<{ detailsid: number; count: number }>;
}) {
	const { detailsid, count } = await params;
	return (
		<div className="flex items-center justify-center bg-linear-60 from-black via-gray-950 to-black min-h-screen w-full">
			<div className="h-fit w-fit text-yellow-200 border p-5 rounded-2xl">
				Welcome dear to the reviwed page you have reviwed information
				{detailsid} about three times you have added so here you can see all the
				make sure you are seeing the page that we are sugusting for you so try
				to make this chabce better and smarter so try the best for yourself so
				how can get mor iformation
			</div>
		</div>
	);
}

export default Count;
