import React from "react";
import Candidatecard from "../components/Candidate_card";

function Gubernatorial() {
	const Data = [
		{
			id: "1",
			name: "AbdulRahman AbdulRazaq",
			party: "APC",
			about: "https://en.wikipedia.org/wiki/AbdulRahman_AbdulRazaq",
			image:
				"https://i0.wp.com/www.blueprint.ng/wp-content/uploads/2021/12/d5e96133-abdulrahman-abdulrazaq-4.jpg?fit=800%2C533&ssl=1",
		},
		{
			id: "2",
			name: "Shuaib Yaman Abdullahi",
			party: "PDP",
			about: "",

			image:
				"https://www.icirnigeria.org/wp-content/uploads/2022/05/IMG-20220525-WA0133-320x209.jpg",
		},
		{
			id: "3",
			name: "Hakeem Lawal",
			party: "SDP",
			about: "",
			image:
				"https://nation-media-assets.storage.googleapis.com/wp-content/uploads/2022/09/21045757/Hakeem-Oladimeji-Lawal.jpg",
		},
		{
			id: "4",
			name: "Oba AbdulRaheem",
			party: "NNPP",
			about: "",
			image:
				"https://independent.ng/wp-content/uploads/Shuaibu-Oba-Abdulraheem.jpeg",
		},
	];

	return (
		<>
			<p className="text-xl font-semibold underline underline-offset-1 p-4 text-center">
				GUBERNATORIAL CANDIDATES
			</p>
			<div className=" mx-auto w-fit grid grid-cols-1 gap-12 sm:gap-4 px-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
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

export default Gubernatorial;
