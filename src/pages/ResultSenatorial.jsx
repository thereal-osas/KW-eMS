import React from "react";

function ResultSenatorial() {
	return (
		<div className="text-center flex flex-col gap-6  text-3xl font-extrabold p-10">
			<section className=" bg-white shadow-black/60 shadow-md overflow-y-scroll customscroll  hover:scale-[1.02] duration-200  text-sm px-4 pb-4 rounded-lg ">
				<div className="flex justify-between font-semibold sticky top-0 bg-white  p-4 border-b-[0.1px] border-gray-300">
					<span>Kwara North</span>
					<span>2023</span>
				</div>
				<div className="justify-between flex p-4 border-b-[0.1px] border-gray-300">
					<span>Party</span>
					<span className="sm:pr-16">Percentage</span>
					<span>Votes</span>
				</div>

				<div className="flex justify-between p-4 border-b-[0.1px] border-gray-300">
					<span className="justify-start flex w-[15%]">APC</span>
					<div className="w-3/5 flex items-center justify-center  gap-3">
						<span className="flex">
							62.64
							<span>%</span>
						</span>
						<div className="w-24  rounded-full h-2 bg-gray-600">
							<div
								className="bg-green-600 h-2 rounded-full"
								style={{ width: 62.64 }}></div>
						</div>
					</div>
					<span className="w-1/5 text-end">78,015</span>
				</div>
				<div className="flex justify-between p-4 border-b-[0.1px] border-gray-300">
					<span className="justify-start flex w-[15%]">PDP</span>
					<div className="w-3/5 flex items-center justify-center gap-3">
						<span className="flex">
							33.28
							<span>%</span>
						</span>
						<div className="w-24  rounded-full h-2 bg-gray-600">
							<div
								className="bg-blue-600 h-2 rounded-full"
								style={{ width: 33.28 }}></div>
						</div>
					</div>
					<span className="w-1/5 text-end">41,443</span>
				</div>

				<div className="flex justify-between p-4 border-b-[0.1px] border-gray-300">
					<span className="justify-start flex w-[15%]">NNPP</span>
					<div className="w-3/5 flex items-center justify-center gap-3 ">
						<span className="flex">
							2.52
							<span>%</span>
						</span>
						<div className="w-24  rounded-full h-2 bg-gray-600">
							<div
								className="bg-orange-600 h-2 rounded-full"
								style={{ width: 2.52 }}></div>
						</div>
					</div>
					<span className="w-1/5 text-end">3,140</span>
				</div>
				<div className="flex justify-between p-4 border-b-[0.1px] border-gray-300">
					<span className="justify-start flex w-[15%]">LP</span>
					<div className="w-3/5 flex items-center justify-center gap-3 ">
						<span className="flex">
							1.56
							<span>%</span>
						</span>
						<div className="w-24  rounded-full h-2 bg-gray-600">
							<div
								className="bg-orange-600 h-2 rounded-full"
								style={{ width: 1.56 }}></div>
						</div>
					</div>
					<span className="w-1/5 text-end">1,947</span>
				</div>
			</section>
			<section className=" bg-white shadow-black/60 shadow-md overflow-y-scroll customscroll  hover:scale-[1.02] duration-200  text-sm px-4 pb-4 rounded-lg ">
				<div className="flex justify-between font-semibold sticky top-0 bg-white  p-4 border-b-[0.1px] border-gray-300">
					<span>Kwara Central</span>
					<span>2023</span>
				</div>
				<div className="justify-between flex p-4 border-b-[0.1px] border-gray-300">
					<span>Party</span>
					<span className="sm:pr-16">Percentage</span>
					<span>Votes</span>
				</div>

				<div className="flex justify-between p-4 border-b-[0.1px] border-gray-300">
					<span className="justify-start flex w-[15%]">APC</span>
					<div className="w-3/5 flex items-center justify-center  gap-3">
						<span className="flex">
							61.35
							<span>%</span>
						</span>
						<div className="w-24  rounded-full h-2 bg-gray-600">
							<div
								className="bg-green-600 h-2 rounded-full"
								style={{ width: 61.35 }}></div>
						</div>
					</div>
					<span className="w-1/5 text-end">109,823</span>
				</div>
				<div className="flex justify-between p-4 border-b-[0.1px] border-gray-300">
					<span className="justify-start flex w-[15%]">PDP</span>
					<div className="w-3/5 flex items-center justify-center gap-3">
						<span className="flex">
							38.65
							<span>%</span>
						</span>
						<div className="w-24  rounded-full h-2 bg-gray-600">
							<div
								className="bg-blue-600 h-2 rounded-full"
								style={{ width: 38.65 }}></div>
						</div>
					</div>
					<span className="w-1/5 text-end">69,202</span>
				</div>
			</section>
			<section className=" bg-white shadow-black/60 shadow-md overflow-y-scroll customscroll  hover:scale-[1.02] duration-200  text-sm px-4 pb-4 rounded-lg ">
				<div className="flex justify-between font-semibold sticky top-0 bg-white  p-4 border-b-[0.1px] border-gray-300">
					<span>Kwara South</span>
					<span>2023</span>
				</div>
				<div className="justify-between flex p-4 border-b-[0.1px] border-gray-300">
					<span>Party</span>
					<span className="sm:pr-16">Percentage</span>
					<span>Votes</span>
				</div>

				<div className="flex justify-between p-4 border-b-[0.1px] border-gray-300">
					<span className="justify-start flex w-[15%]">APC</span>
					<div className="w-3/5 flex items-center justify-center  gap-3">
						<span className="flex">
							48.61
							<span>%</span>
						</span>
						<div className="w-24  rounded-full h-2 bg-gray-600">
							<div
								className="bg-green-600 h-2 rounded-full"
								style={{ width: 48.61 }}></div>
						</div>
					</div>
					<span className="w-1/5 text-end">55,966</span>
				</div>
				<div className="flex justify-between p-4 border-b-[0.1px] border-gray-300">
					<span className="justify-start flex w-[15%]">PDP</span>
					<div className="w-3/5 flex items-center justify-center gap-3">
						<span className="flex">
							30.36
							<span>%</span>
						</span>
						<div className="w-24  rounded-full h-2 bg-gray-600">
							<div
								className="bg-blue-600 h-2 rounded-full"
								style={{ width: 30.36 }}></div>
						</div>
					</div>
					<span className="w-1/5 text-end">34,950</span>
				</div>

				<div className="flex justify-between p-4 border-b-[0.1px] border-gray-300">
					<span className="justify-start flex w-[15%]">SDP</span>
					<div className="w-3/5 flex items-center justify-center gap-3 ">
						<span className="flex">
							21.03
							<span>%</span>
						</span>
						<div className="w-24  rounded-full h-2 bg-gray-600">
							<div
								className="bg-orange-600 h-2 rounded-full"
								style={{ width: 21.03 }}></div>
						</div>
					</div>
					<span className="w-1/5 text-end">24,215</span>
				</div>
			</section>
		</div>
	);
}

export default ResultSenatorial;
