import React from "react";
import Candidatecard from "../components/Candidate_card";
import Data from "../Data/Presidential";

function Presidential() {
	return (
		<>
			<p className="text-xl font-semibold underline underline-offset-1 p-4 text-center">
				PRESIDENTIAL CANDIDATES
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

export default Presidential
