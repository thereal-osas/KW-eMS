import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import map from "../assets/Map2 kw.PNG";
import { Link } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

function GubernatorialResult() {
	const data = {
		labels: [
			"APC - 273,424 Votes",
			"PDP - 155,490 Votes",
			"LP - 1,437 Votes",
			"NNPP - 7,824 Votes",
		],
		datasets: [
			{
				label: "% of Votes",
				data: [60.41, 34.5, 0.71, 3.77],
				backgroundColor: ["#356CF9", "#F93535", "#34C759", "#F9AB35"],
				borderColor: ["#356CF9", "#F93535", "#34C759", "#F9AB35"],
				borderWidth: 1,
			},
		],
	};

	const electionStatusReportOptions = {
		cutout: "30%",
		plugins: {
			legend: {
				display: true,
				position: "bottom",
				labels: {
					fontSize: "20px !important",
					boxWidth: 15,
					fontWeight: "bold",
					padding: 20,
				},
			},
		},
		maintainAspectRatio: false,
		responsive: true,
	};

	return (
		<>
			<div className="py-6 md:py-10">
				<div>
					<h3 className="text-center text-2xl md:text-3xl font-extrabold tracking-wider text-[#1748C9]">
						2023 Kwara State Gubernatorial Results
					</h3>
				</div>
				<div className="mt-10 md:mt-30 w-full h-[13rem] md:h-[20rem] mx-auto">
					<Doughnut
						data={data}
						options={electionStatusReportOptions}
					/>
				</div>
				<div className="mt-6 md:mt-10">
					<img
						src={map}
						alt="map"
					/>
				</div>
				<Link
					className="  flex justify-center "
					to="/results/gubernatorial">
					<button className="px-4 py-2 bg-[#336DFF] text-sm  text-white font-semibold rounded-lg hover:bg-[#adc5ff] hover:text-[#000] transition ease-in duration-150">
						View Results Details
					</button>
				</Link>
			</div>
		</>
	);
}

export default GubernatorialResult;
