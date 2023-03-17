import React from "react";
import { Link } from "react-router-dom";

function TrackResult() {
	return (
		<section className=" ">
			<Link
				to="/results/presidential"
				className="px-8 md:px-16 flex flex-col gap-y-20 mt-10 mb-20 md:my-[7.5rem]">
				<div className="result-card bg-no-repeat bg-cover bg-center h-40  mt-[-40px] mx-auto w-[97%] rounded-[1.625rem] text-white flex justify-end items-end">
					<div className="mr-10 mb-8 font-medium text-2xl">
						Presidential Result
					</div>
				</div>
			</Link>
			<Link
				to="/results/senatorial"
				className="px-8 md:px-16 flex flex-col gap-y-20 mt-10 mb-20 md:my-[7.5rem]">
				<div className="result-card bg-no-repeat bg-cover bg-center h-40  mt-[-40px] mx-auto w-[97%] rounded-[1.625rem] text-white flex justify-end items-end">
					<div className="mr-10 mb-8 font-medium text-2xl">
						Senatorial Result
					</div>
				</div>
			</Link>
			<Link
				to="/results/gubernatorial"
				className="px-8 md:px-16 flex flex-col gap-y-20 mt-10 mb-20 md:my-[7.5rem]">
				<div className="result-card bg-no-repeat bg-cover bg-center h-40  mt-[-40px] mx-auto w-[97%] rounded-[1.625rem] text-white flex justify-end items-end">
					<div className="mr-10 mb-8 font-medium text-2xl">
						Gubernatorial Result
					</div>
				</div>
			</Link>
			<Link
				to="/results/house_of_reps"
				className="px-8 md:px-16 flex flex-col gap-y-20 mt-10 mb-20 md:my-[7.5rem]">
				<div className="result-card bg-no-repeat bg-cover bg-center h-40  mt-[-40px] mx-auto w-[97%] rounded-[1.625rem] text-white flex justify-end items-end">
					<div className="mr-10 mb-8 font-medium text-2xl">
						House of Reps Result
					</div>
				</div>
			</Link>
			<Link
				to="/results/house_of_assembly"
				className="px-8 md:px-16 flex flex-col gap-y-20 mt-10 mb-20 md:my-[7.5rem]">
				<div className="result-card bg-no-repeat bg-cover bg-center h-40  mt-[-40px] mx-auto w-[97%] rounded-[1.625rem] text-white flex justify-end items-end">
					<div className="mr-10 mb-8 font-medium text-2xl">
						House of Assembly Result
					</div>
				</div>
			</Link>
		</section>
	);
}

export default TrackResult;
