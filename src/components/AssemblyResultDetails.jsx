import React from "react";
import { useParams } from "react-router-dom";
import Data from "../Data/HOA";
import Ward from "./Ward";
function AssemblyResultDetails() {
	const { lga } = useParams();
	const Lga = lga.toUpperCase();
	const Info = Data.filter((a) => a.LGA === Lga);
	const getUniqueValues = (data, type) => {
		let unique = data.map((item) => item[type]);
		// if (type === "colors") {
		// 	unique = unique.flat();
		// }
		return [...new Set(unique)];
	};
	// const TESTS = getUniqueValues(Data, "LGA");
	const Wards = getUniqueValues(Info, "Ward");

	return (
		<div className="flex flex-col ">
			<div className="text-green-500 text-3xl p-4 font-extrabold text-center">
				{Lga} LGA
			</div>
			{Wards.map((a, b) => (
				<Ward
					type="HOA"
					key={b}
					name={a}
				/>
			))}
		</div>
	);
}

export default AssemblyResultDetails;
