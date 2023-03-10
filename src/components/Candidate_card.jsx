import React from "react";
import { Link } from "react-router-dom";

function Candidate_card({ item }) {
	return (
		<div className="max-w-[280px] flex flex-col items-center hover:scale-105 duration-500 py-3 justify-center bg-gray-600 text-white  shadow-black shadow-md gap-4">
			<img
				className="h-72 w-60 flex justify-center items-center rounded-full"
				src={item.image}
				alt={item.name}
			/>
			<div className=" text-center">
				{item.about ? (
					<Link
						className="font-semibold"
						to={`/candidates/presidential/${item.party}`}>
						{item.name}
					</Link>
				) : (
					<p className="font-semibold">{item.name}</p>
				)}
				<p className="font-semibold">
					{item.Fparty} ({item.party})
				</p>
				<div className="flex gap-2 font-semibold justify-center">
					<span>Age</span> <span>:</span> <span>{item.age}</span>
				</div>
			</div>
		</div>
	);
}

export default Candidate_card;
