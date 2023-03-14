import React from "react";
import ResultComponent from "../components/ResultComponent";

function LiveResult() {
	return (
		<section>
			<div className="text-xl xs:text-2xl font-semibold text-center p-6">
				<p>Kwara State Results</p>
			</div>
			<div className=" container flex md:flex-row flex-col items-center gap-6 justify-around mx-auto px-6">
				<div className="flex gap-4 items-center">
					<label htmlFor="countries">Select State</label>
					<select
						id="countries"
						className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  w-60 px-2.5 py-1  ">
						<option>ABUJA FCT</option>
						<option>ABIA</option>
						<option>ADAMAWA</option>
						<option>AKWA IBOM</option>
						<option>ANAMBRA</option>
						<option>BAUCHI</option>
						<option>BAYELSA</option>
						<option>BENUE</option>
						<option>BORNO</option>
						<option>CROSS RIVER</option>
						<option>DELTA</option>
						<option>EBONYI</option>
						<option>EDO</option>
						<option>EKITI</option>
						<option>ENUGU</option>
						<option>GOMBE</option>
						<option>IMO</option>
						<option>JIGAWA</option>
						<option>KADUNA</option>
						<option>KANO</option>
						<option>KATSINA</option>
						<option>KEBBI</option>
						<option>KOGI</option>
						<option selected>KWARA</option>
						<option>LAGOS</option>
						<option>NASSARAWA</option>
						<option>NIGER</option>
						<option>OGUN</option>
						<option>ONDO</option>
						<option>OSUN</option>
						<option>OYO</option>
						<option>PLATEAU</option>
						<option>RIVERS</option>
						<option>SOKOTO</option>
						<option>TARABA</option>
						<option>YOBE</option>
						<option>ZAMFARA</option>
					</select>
				</div>

				<div className="flex items-center">
					<label
						for="simple-search"
						class="sr-only">
						Search
					</label>
					<div className="relative w-full">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg
								aria-hidden="true"
								className="w-5 h-5 text-gray-500 dark:text-gray-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
									clip-rule="evenodd"></path>
							</svg>
						</div>
						<input
							type="text"
							id="simple-search"
							className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg   w-60 pl-10 px-2.5 py-1 placeholder:text-gray-600  "
							placeholder="Search for LGA"
							required
						/>
					</div>
					<button
						type="button"
						className="px-2.5 py-1 rounded-lg ml-2 text-sm font-medium text-white  active:scale-90 duration-500 focus:outline-none  bg-black/80">
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
						</svg>
						<span className="sr-only">Search</span>
					</button>
				</div>
			</div>
			<div className="container mx-auto  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8  p-8 grid">
				<ResultComponent />
				<ResultComponent />
				<ResultComponent />
				<ResultComponent />
				<ResultComponent />
				<ResultComponent />
				<ResultComponent />
				<ResultComponent />
				<ResultComponent />
				<ResultComponent />
				<ResultComponent />
				<ResultComponent />
				<ResultComponent />
				<ResultComponent />
				<ResultComponent />
				<ResultComponent />
			</div>
		</section>
	);
}

export default LiveResult;
