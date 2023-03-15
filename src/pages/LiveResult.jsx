import React, { useState } from "react";
import ResultComponent from "../components/ResultComponent";
import Kwara from "../Data/LGA";

function LiveResult() {
	const [current, setcurrent] = useState([...Kwara]);
	const handleChange = (e) => {
		if (e.target.value === "all") {
			setcurrent(Kwara);
		} else {
			setcurrent([e.target.value]);
		}
	};
	return (
		<section>
			<div className="text-xl xs:text-2xl font-semibold text-center p-6">
				<p>Kwara State Results</p>
			</div>
			<div className=" container flex md:flex-row flex-col items-center gap-6 justify-around mx-auto px-6">
				<div className="flex gap-4 items-center">
					<label htmlFor="lga">Select LGA</label>
					<select
						onChange={handleChange}
						id="lga"
						className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  w-60 px-2.5 py-1  ">
						<option value="all">All LGA</option>

						{Kwara.map((a, c) => (
							<option
								key={c}
								value={a}>
								{a}
							</option>
						))}
					</select>
				</div>
			</div>
			<div className="container mx-auto    gap-8  p-8 flex flex-wrap justify-around">
				{current.map((a, b) => (
					<ResultComponent
						key={b}
						data={a}
					/>
				))}
			</div>
		</section>
	);
}

export default LiveResult;
