import React from "react";
import Candidatecard from "../components/Candidate_card";

function Presidential() {
	const Data = [
		{
			id: "1",
			name: "Bola Ahmed Tinubu",
			party: "APC",
			about: "https://en.wikipedia.org/wiki/Bola_Tinubu",
			image:
				"https://live.mrf.io/statics/i/ps/i0.wp.com/www.thisdaylive.com/wp-content/uploads/Tinubu-4-1.jpg?w=909&ssl=1&width=1200&enable=upscale",
		},
		{
			id: "2",
			name: "Atiku Abubakar",
			party: "PDP",
			about: "https://en.wikipedia.org/wiki/Atiku_Abubakar",
			image:
				"https://cdn.punchng.com/wp-content/uploads/2022/06/14035640/Atiku.jpg",
		},
		{
			id: "3",
			name: "Peter Obi",
			party: "Labour Party",
			about: "https://en.wikipedia.org/wiki/Peter_Obi",
			image:
				"https://cdn.punchng.com/wp-content/uploads/2022/12/04063508/Labour-Party-Presidential-Candidate-Peter-Obi.png",
		},
		{
			id: "4",
			name: "Rabiu Kwankwaso",
			party: "NNPP",
			about: "https://en.wikipedia.org/wiki/Rabiu_Kwankwaso",
			image:
				"https://media.premiumtimesng.com/wp-content/files/2022/09/Rabiu-Kwankwaso-636x419-1.jpg",
		},
	];

	return (
		<>
			<p className="text-xl font-semibold underline underline-offset-1 p-4 text-center">
				PRESIDENTIAL CANDIDATES
			</p>
			<div className=" mx-auto w-fit grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
				{Data.map((item) => (
					<Candidatecard
						key={item.id}
						item={item}
					/>
				))}
			</div>
		</>
	);
}

export default Presidential;
