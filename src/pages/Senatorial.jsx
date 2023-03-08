import React from "react";
import Candidatecard from "../components/Candidate_card";

function Senatorial() {
	const Central = [
		{
			id: "1",
			name: "Saliu Mustapha",
			party: "APC",
			about: "https://en.wikipedia.org/wiki/Saliu_Mustapha",
			image:
				"https://media.premiumtimesng.com/wp-content/files/2022/09/Saliu-Mustapha.jpeg",
		},
		{
			id: "2",
			name: "Bolaji Abdullahi",
			party: "PDP",
			about: "https://en.wikipedia.org/wiki/Bolaji_Abdullahi",

			image:
				"https://dailypost.ng/wp-content/uploads/2021/10/Bolaji-Abdullahi.jpg",
		},
		{
			id: "3",
			name: "Ridwan Apaokagi",
			party: "SDP",
			about: "",
			image:
				"https://www.google.com/url?sa=i&url=https%3A%2F%2Fne-np.facebook.com%2F100087651452477%2Fvideos%2Fdr-ridwanullahi-sallahudeen-apaokagi-aka-quran-ju-owo-lo-the-incoming-senator-kw%2F604249514829276%2F&psig=AOvVaw3s00NyPaflC-uFl041l6uq&ust=1678369321308000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKDz5pG7zP0CFQAAAAAdAAAAABAE",
		},
	];
	const North = [
		{
			id: "1",
			name: "Sulieman Sadiq Umar",
			party: "APC",
			about: "https://en.wikipedia.org/wiki/Suleiman_Sadiq_Umar",
			image:
				"https://odunews.com/wp-content/uploads/2020/06/84A5EBC5-6ECF-41DE-B42B-FDAF6A838A47.jpeg",
		},
		{
			id: "2",
			name: "Isa Adamu Bawa",
			party: "PDP",
			about: "https://en.wikipedia.org/wiki/Bolaji_Abdullahi",

			image: "",
		},
	];
	const South = [
		{
			id: "1",
			name: "Lola Ashiru",
			party: "APC",
			about: "https://en.wikipedia.org/wiki/Lola_Ashiru",
			image:
				"https://1.bp.blogspot.com/-px0ZyuV9pZ8/XU-xc1yQK1I/AAAAAAAAGn4/1_W5d4jHpjslOuxO7Hv_ld_LvkbiRXhvQCLcBGAs/w1200-h630-p-k-no-nu/IMG-20190618-WA0030.jpg",
		},
		{
			id: "2",
			name: "Rafiu Adebayo Ibrahim",
			party: "PDP",
			about: "https://en.wikipedia.org/wiki/Rafiu_Adebayo_Ibrahim",

			image: "",
		},
	];
	return (
		<section>
			<div>
				<p className="text-xl font-semibold underline underline-offset-1 p-4 text-center">
					KWARA CENTRAL SENATORIAL CANDIDATES
				</p>
				<div className=" mx-auto w-fit grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
					{Central.map((item) => (
						<Candidatecard
							key={item.id}
							item={item}
						/>
					))}
				</div>
			</div>
			<div>
				<p className="text-xl font-semibold underline underline-offset-1 p-4 text-center">
					KWARA NORTH SENATORIAL CANDIDATES
				</p>
				<div className=" mx-auto w-fit grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
					{North.map((item) => (
						<Candidatecard
							key={item.id}
							item={item}
						/>
					))}
				</div>
			</div>
			<div>
				<p className="text-xl font-semibold underline underline-offset-1 p-4 text-center">
					KWARA SOUTH SENATORIAL CANDIDATES
				</p>
				<div className=" mx-auto w-fit grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
					{South.map((item) => (
						<Candidatecard
							key={item.id}
							item={item}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default Senatorial;
