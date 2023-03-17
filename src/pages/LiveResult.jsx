import React, { useState } from "react";
import ResultComponent from "../components/ResultComponent";
import Kwara from "../Data/LGA";

function LiveResult() {
	const [current, setcurrent] = useState([...Kwara]);
	const [year, setyear] = useState("2023");

	const handleChange = (e) => {
		if (e.target.value === "all") {
			setcurrent(Kwara);
		} else {
			setcurrent([e.target.value]);
		}
	};
	const handleYearChange = (e) => {
		setyear(e.target.value);
		console.log(year);
	};
	return (
		<section>
			<div className="text-xl xs:text-2xl font-semibold text-center p-6">
				<p>Kwara State Results</p>
			</div>
			<div className=" container flex md:flex-row flex-col items-center gap-6 justify-around mx-auto px-6">
				<div className="flex xs:flex-row flex-col gap-3 items-center">
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
				<div className="flex xs:flex-row flex-col gap-3 items-center">
					<label htmlFor="year">Select Year</label>
					<select
						onChange={handleYearChange}
						id="year"
						className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  w-60 px-2.5 py-1  ">
						<option value="2023">2023</option>
						<option value="2019">2019</option>
						<option value="2015">2015</option>
						<option value="2011">2011</option>
						<option value="2006">2006</option>
					</select>
				</div>
			</div>
			{year !== "2023" ? (
				<p className="text-blue-600 text-2xl font-extrabold text-center p-12">
					{" "}
					No data for this selected year{" "}
				</p>
			) : (
				<div className="container mx-auto    gap-8  p-8 flex flex-wrap justify-around">
					{current.map((a, b) => (
						<ResultComponent
							key={b}
							data={a}
						/>
					))}
				</div>
			)}
		</section>
	);
}

export default LiveResult;
