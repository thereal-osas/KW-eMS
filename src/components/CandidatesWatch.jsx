import React, { useState } from "react";
import Checkbox from "./Checkbox";
import "../style.css";

function CandidatesWatch() {
	const [isChecked, setIsChecked] = useState(false);

	function handleCheckboxChange() {
		setIsChecked(!isChecked);
	}

	return (
		<>
			<div className="hidden md:block lg:block">
				<div className="mb-32">
					<div>
						<h3 className="text-center text-2xl md:text-3xl font-bold tracking-wider text-[#1748C9]">
							Explore Candidates Watch
						</h3>
						<p className="text-center mt-6 text-sm">
							Access our interactive map to stay updated <br /> with election
							results
						</p>
					</div>
					<div
						id="canwatch"
						className="text-center mt-10 md:mt-20 bg-[#fff] w-3/4 md:w-6/12 mx-auto pt-1.5 pb-10">
						<div className="bg-[#eaf0ff] text-center mx-1.5">
							<h3 className="py-4 text-lg font-semibold">Candidates Watch</h3>
						</div>
						<div className="flex justify-around mt-4">
							<div className="bg-[#fff] shadow-lg py-5 px-10 border-[#e3e3e3] rounded">
								<div className="py-2 px-3 bg-[#c8d6f9] rounded-lg">
									Select Candidate
								</div>
								<div className="border-b-2 border-[#f3f3f3] w-56 mt-12"></div>
								<Checkbox
									label="Atiku Abubakar"
									onChange={handleCheckboxChange}
								/>
								<Checkbox
									label="Bola Ahmed Tinubu"
									onChange={handleCheckboxChange}
								/>
								<Checkbox
									label="Omoyele Sowere"
									onChange={handleCheckboxChange}
								/>
								<Checkbox
									label="Peter Obi"
									onChange={handleCheckboxChange}
								/>
							</div>
							<div className="bg-[#fff] shadow-lg py-5 px-10 border-[#e3e3e3]  rounded">
								<div className="py-2 px-3 bg-[#c8d6f9] rounded-lg">
									Select Election
								</div>
								<div className="border-b-2 border-[#f3f3f3] w-56 mt-12"></div>
								<Checkbox
									label="Presidential"
									onChange={handleCheckboxChange}
								/>
								<Checkbox
									label="Gubernatorial"
									onChange={handleCheckboxChange}
								/>
								<Checkbox
									label="Senatorial"
									onChange={handleCheckboxChange}
								/>
								<Checkbox
									label="House of Representatives"
									onChange={handleCheckboxChange}
								/>
							</div>
						</div>
					</div>
					<div className="text-center mt-10">
						<button className="px-4 py-2 bg-[#336DFF] text-sm text-white font-semibold rounded-lg hover:bg-[#adc5ff] hover:text-[#000] transition ease-in duration-150">
							Track Candidates
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default CandidatesWatch;
