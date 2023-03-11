import React from "react";
import { useParams } from "react-router-dom";
import Data from "../Data/Presidential";

function PresidentialDetails() {
	const { name } = useParams();
	const item = Data.find((a) => a.party === name);
	console.log(item);
	return (
		<>
			<section className="max-w-3xl border-2 p-8 gap-8 mt-8 mx-auto shadow-md flex flex-col md:flex-row">
				<div className="w-80 mx-auto">
					<img
						className="h-72 w-60 flex justify-center items-center rounded-full"
						src={item.image}
						alt={item.name}
					/>
				</div>
				<div className="w-fit">
					<div className=" text-sm xs:text-lg text-gray-800 font-semibold">
						<p className="text-xl font-semibold text-blue-800/80">
							{item.name}
						</p>
						<div className="flex text-center gap-2">
							<span>Political Party </span> <span>:</span>
							<p className="font-semibold">
								{item.Fparty} ({item.party})
							</p>
						</div>
						<div className="flex gap-2 font-semibold ">
							<span>Age</span> <span>:</span> <span>{item.age}</span>
						</div>
					</div>
					<div className="text-lg text-gray-800">{item.about}</div>
				</div>
			</section>
			;
		</>
	);
}

export default PresidentialDetails;
