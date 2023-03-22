import React from "react";
import { useParams } from "react-router-dom";
import Data from "../Data/Presidential";

function PresidentialDetails() {
	const { name } = useParams();
	const item = Data.find((a) => a.party === name);
	return (
		<div className="px-6">
			<section className="max-w-3xl  p-8 gap-8 mt-8 mx-auto shadow-md shadow-gray-600  flex flex-col md:flex-row">
				<div className="w-80 mx-auto flex justify-center">
					<img
						className="h-72 w-60 flex justify-center items-center rounded-full"
						src={item.image}
						alt={item.name}
					/>
				</div>
				<div className="w-fit ">
					<div className=" text-xs xs:text-lg text-gray-800 flex gap-2 mb-3 flex-col font-semibold">
						<p className="text-xl font-semibold text-blue-800/80 text-center">
							{item.name}
						</p>
						<div className="flex justify-center gap-2">
							<span>
								<span className="xs:inline hidden">Political</span>
								<span className="pl-1">Party</span>
							</span>
							<span>:</span>
							<p className="font-semibold">
								{item.Fparty} ({item.party})
							</p>
						</div>
						<div className="flex justify-center gap-2 font-semibold ">
							<span>Age</span> <span>:</span> <span>{item.age}</span>
						</div>
					</div>
					<div className="xs:text-lg text-gray-800">{item.about}</div>
				</div>
			</section>
		</div>
	);
}

export default PresidentialDetails;
