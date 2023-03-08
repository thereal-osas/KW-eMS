import React from "react";

function Candidate_card({ item }) {
	return (
		<div className="max-w-[280px] flex flex-col justify-center gap-3">
			<img
				className=""
				src={item.image}
				alt={item.name}
			/>
			<div className="border-2 text-center">
				{item.about ? (
					<a
						className="font-semibold"
						href={item.about}>
						{item.name}
					</a>
				) : (
					<p className="font-semibold">{item.name}</p>
				)}
				<p className="font-semibold">{item.party}</p>
			</div>
		</div>
	);
}

export default Candidate_card;
