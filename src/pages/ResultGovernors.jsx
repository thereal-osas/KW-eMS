import React from "react";

import Data from "../Data/GuberTempResult";
function ResultGovernors() {
	return (
		<div className="container mx-auto grid grid-cols-1 gap-8 pt-6 sm:grid-cols-2 lg:grid-cols-3">
			{Data.map((a, index) => (
				<section
					key={index}
					className=" bg-white shadow-black/60 shadow-md  h-96 hover:scale-[1.02] duration-200  text-sm px-4 pb-4 rounded-lg ">
					<div className="flex justify-between font-semibold sticky top-0 bg-white  p-4 border-b-[0.1px] border-gray-300">
						<span>{a.LGA}</span>
						<span>2023</span>
					</div>
					<div className="justify-between flex p-4 border-b-[0.1px] border-gray-300">
						<span>Party</span>
						<span>Percentage</span>
						<span>Votes</span>
					</div>

					<div className="flex justify-between p-4 border-b-[0.1px] border-gray-300">
						<span className="w-[15%]">APC</span>
						<div className="w-3/5 flex items-center justify-end  gap-3">
							<>
								{a.Total === 0 ? (
									<span className="flex">
										0<span>%</span>
									</span>
								) : (
									<span className="flex">
										{((a.APC * 100) / a.Total).toFixed(1)}

										<span>%</span>
									</span>
								)}
							</>
							<div className="w-24  rounded-full h-2 bg-gray-600">
								{a.Total > 0 && (
									<div
										className="bg-green-600 h-2 rounded-full"
										style={{
											width: (a.APC * 100) / a.Total,
										}}></div>
								)}
							</div>
						</div>
						<span className="w-1/5 text-end">{a.APC ? a.APC : 0}</span>
					</div>
					<div className="flex justify-between p-4 border-b-[0.1px] border-gray-300">
						<span className="w-[15%]">PDP</span>
						<div className="w-3/5 flex items-center justify-end gap-3">
							<>
								{a.Total === 0 ? (
									<span className="flex">
										0<span>%</span>
									</span>
								) : (
									<span className="flex">
										{((a.PDP * 100) / a.Total).toFixed(1)}

										<span>%</span>
									</span>
								)}
							</>
							<div className="w-24  rounded-full h-2 bg-gray-600">
								{a.Total > 0 && (
									<div
										className="bg-blue-600 h-2 rounded-full"
										style={{
											width: (a.PDP * 100) / a.Total,
										}}></div>
								)}
							</div>
						</div>
						<span className="w-1/5 text-end">{a.PDP ? a.PDP : 0}</span>
					</div>
					<div className="flex justify-between p-4 border-b-[0.1px] border-gray-300">
						<span className="w-[15%]">LP</span>
						<div className="w-3/5 flex items-center justify-end gap-3">
							<>
								{a.Total === 0 ? (
									<span className="flex">
										0<span>%</span>
									</span>
								) : (
									<span className="flex">
										{((a.Lp * 100) / a.Total).toFixed(1)}

										<span>%</span>
									</span>
								)}
							</>
							<div className="w-24  rounded-full h-2 bg-gray-600">
								{a.Total > 0 && (
									<div
										className="bg-red-600 h-2 rounded-full"
										style={{
											width: (a.Lp * 100) / a.Total,
										}}></div>
								)}
							</div>
						</div>
						<span className="w-1/5 text-end">{a.Lp ? a.Lp : 0}</span>
					</div>
					<div className="flex justify-between p-4 border-b-[0.1px] border-gray-300">
						<span className="w-[15%]">NNPP</span>
						<div className="w-3/5 flex items-center justify-end gap-3">
							<>
								{a.Total === 0 ? (
									<span className="flex">
										0<span>%</span>
									</span>
								) : (
									<span className="flex">
										{((a.NNPP * 100) / a.Total).toFixed(1)}

										<span>%</span>
									</span>
								)}
							</>
							<div className="w-24  rounded-full h-2 bg-gray-600">
								{a.Total > 0 && (
									<div
										className="bg-orange-600 h-2 rounded-full"
										style={{
											width: (a.NNPP * 100) / a.Total,
										}}></div>
								)}
							</div>
						</div>
						<span className="w-1/5 text-end">{a.NNPP ? a.NNPP : 0}</span>
					</div>
					<div className="flex justify-between p-4 border-b-[0.1px] border-gray-300">
						<span className="w-[15%]">SDP</span>
						<div className="w-3/5 flex items-center justify-end gap-3">
							<>
								{a.Total === 0 ? (
									<span className="flex">
										0<span>%</span>
									</span>
								) : (
									<span className="flex">
										{((a.SDP * 100) / a.Total).toFixed(1)}

										<span>%</span>
									</span>
								)}
							</>
							<div className="w-24  rounded-full h-2 bg-gray-600">
								{a.Total > 0 && (
									<div
										className="bg-orange-600 h-2 rounded-full"
										style={{
											width: (a.SDP * 100) / a.Total,
										}}></div>
								)}
							</div>
						</div>
						<span className="w-1/5 text-end">{a.SDP ? a.SDP : 0}</span>
					</div>
				</section>
			))}
		</div>
	);
}

export default ResultGovernors;
