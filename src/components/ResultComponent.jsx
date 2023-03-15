import React from "react";
import { FiArrowDown } from "react-icons/fi";

function ResultComponent({ data }) {
	const APCwidth = "45%";
	const PDPwidth = "19%";
	const LPwidth = "29%";
	const SDPwidth = "4%";

	return (
		<section className=" bg-white shadow-black/60 shadow-md overflow-y-scroll customscroll h-96 hover:scale-[1.02] duration-200  text-sm px-4 pb-4 rounded-lg ">
			<div className="flex justify-between font-semibold sticky top-0 bg-white  p-4 border-b-[0.1px] border-gray-300">
				<span>{data}</span>
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
					<span>38%</span>
					<div className="w-24  rounded-full h-2 bg-gray-600">
						<div
							className="bg-green-600 h-2 rounded-full"
							style={{ width: APCwidth }}></div>
					</div>
				</div>
				<span className="w-1/5 text-end">29048</span>
			</div>
			<div className="flex justify-between p-4 border-b-[0.1px] border-gray-300">
				<span className="w-[15%]">PDP</span>
				<div className="w-3/5 flex items-center justify-end gap-3">
					<span>19%</span>
					<div className="w-24  rounded-full h-2 bg-gray-600">
						<div
							className="bg-blue-600 h-2 rounded-full"
							style={{ width: PDPwidth }}></div>
					</div>
				</div>
				<span className="w-1/5 text-end">9048</span>
			</div>
			<div className="flex justify-between p-4 border-b-[0.1px] border-gray-300">
				<span className="w-[15%]">LP</span>
				<div className="w-3/5 flex items-center justify-end gap-3">
					<span>29%</span>
					<div className="w-24  rounded-full h-2 bg-gray-600">
						<div
							className="bg-red-600 h-2 rounded-full"
							style={{ width: LPwidth }}></div>
					</div>
				</div>
				<span className="w-1/5 text-end">19048</span>
			</div>
			<div className="flex justify-between p-4 border-b-[0.1px] border-gray-300">
				<span className="w-[15%]">SDP</span>
				<div className="w-3/5 flex items-center justify-end gap-3">
					<span>3%</span>
					<div className="w-24  rounded-full h-2 bg-gray-600">
						<div
							className="bg-orange-600 h-2 rounded-full"
							style={{ width: SDPwidth }}></div>
					</div>
				</div>
				<span className="w-1/5 text-end">204</span>
			</div>
			<button className="flex w-full  gap-3 items-center justify-center text-sm font-medium text-blue-500 p-5 border-b-[0.1px] border-gray-300">
				<span>Scroll down for more</span>
				<FiArrowDown size={25} />
			</button>
			{/* Scroll */}
			<div className="flex  justify-between p-4 border-b-[0.1px] border-gray-300">
				<span className="w-[15%]">NNPP</span>
				<div className="w-3/5 flex items-center justify-end gap-3">
					<span>1%</span>
					<div className="w-24  rounded-full h-2 bg-gray-600">
						<div
							className="bg-red-900 h-2 rounded-full"
							style={{ width: SDPwidth }}></div>
					</div>
				</div>
				<span className="w-1/5 text-end">204</span>
			</div>
			<div className="flex  justify-between p-4 border-b-[0.1px] border-gray-300">
				<span className="w-[15%]">NRM</span>
				<div className="w-3/5 flex items-center justify-end gap-3">
					<span>1%</span>
					<div className="w-24  rounded-full h-2 bg-gray-600">
						<div
							className="bg-red-900 h-2 rounded-full"
							style={{ width: SDPwidth }}></div>
					</div>
				</div>
				<span className="w-1/5 text-end">204</span>
			</div>
			<div className="flex  justify-between p-4 border-b-[0.1px] border-gray-300">
				<span className="w-[15%]">ADP</span>
				<div className="w-3/5 flex items-center justify-end gap-3">
					<span>1%</span>
					<div className="w-24  rounded-full h-2 bg-gray-600">
						<div
							className="bg-red-900 h-2 rounded-full"
							style={{ width: SDPwidth }}></div>
					</div>
				</div>
				<span className="w-1/5 text-end">204</span>
			</div>
			<div className="flex  justify-between p-4 border-b-[0.1px] border-gray-300">
				<span className="w-[15%]">APP</span>
				<div className="w-3/5 flex items-center justify-end gap-3">
					<span>1%</span>
					<div className="w-24  rounded-full h-2 bg-gray-600">
						<div
							className="bg-red-900 h-2 rounded-full"
							style={{ width: SDPwidth }}></div>
					</div>
				</div>
				<span className="w-1/5 text-end">204</span>
			</div>
			<div className="flex  justify-between p-4 border-b-[0.1px] border-gray-300">
				<span className="w-[15%]">APM</span>
				<div className="w-3/5 flex items-center justify-end gap-3">
					<span>1%</span>
					<div className="w-24  rounded-full h-2 bg-gray-600">
						<div
							className="bg-red-900 h-2 rounded-full"
							style={{ width: SDPwidth }}></div>
					</div>
				</div>
				<span className="w-1/5 text-end">204</span>
			</div>
			<div className="flex  justify-between p-4 border-b-[0.1px] border-gray-300">
				<span className="w-[15%]">A</span>
				<div className="w-3/5 flex items-center justify-end gap-3">
					<span>1%</span>
					<div className="w-24  rounded-full h-2 bg-gray-600">
						<div
							className="bg-red-900 h-2 rounded-full"
							style={{ width: SDPwidth }}></div>
					</div>
				</div>
				<span className="w-1/5 text-end">204</span>
			</div>
			<div className="flex  justify-between p-4 border-b-[0.1px] border-gray-300">
				<span className="w-[15%]">BP</span>
				<div className="w-3/5 flex items-center justify-end gap-3">
					<span>1%</span>
					<div className="w-24  rounded-full h-2 bg-gray-600">
						<div
							className="bg-red-900 h-2 rounded-full"
							style={{ width: SDPwidth }}></div>
					</div>
				</div>
				<span className="w-1/5 text-end">204</span>
			</div>
			<div className="flex  justify-between p-4 border-b-[0.1px] border-gray-300">
				<span className="w-[15%]">PRP</span>
				<div className="w-3/5 flex items-center justify-end gap-3">
					<span>1%</span>
					<div className="w-24  rounded-full h-2 bg-gray-600">
						<div
							className="bg-red-900 h-2 rounded-full"
							style={{ width: SDPwidth }}></div>
					</div>
				</div>
				<span className="w-1/5 text-end">204</span>
			</div>
			<div className="flex  justify-between p-4 border-b-[0.1px] border-gray-300">
				<span className="w-[15%]">AAC</span>
				<div className="w-3/5 flex items-center justify-end gap-3">
					<span>1%</span>
					<div className="w-24  rounded-full h-2 bg-gray-600">
						<div
							className="bg-red-900 h-2 rounded-full"
							style={{ width: SDPwidth }}></div>
					</div>
				</div>
				<span className="w-1/5 text-end">204</span>
			</div>
			<div className="flex  justify-between p-4 border-b-[0.1px] border-gray-300">
				<span className="w-[15%]">YPP</span>
				<div className="w-3/5 flex items-center justify-end gap-3">
					<span>1%</span>
					<div className="w-24  rounded-full h-2 bg-gray-600">
						<div
							className="bg-red-900 h-2 rounded-full"
							style={{ width: SDPwidth }}></div>
					</div>
				</div>
				<span className="w-1/5 text-end">204</span>
			</div>
			<div className="flex  justify-between p-4 border-b-[0.1px] border-gray-300">
				<span className="w-[15%]">ZLP</span>
				<div className="w-3/5 flex items-center justify-end gap-3">
					<span>1%</span>
					<div className="w-24  rounded-full h-2 bg-gray-600">
						<div
							className="bg-red-900 h-2 rounded-full"
							style={{ width: SDPwidth }}></div>
					</div>
				</div>
				<span className="w-1/5 text-end">204</span>
			</div>

			<div className="flex flex-col gap-3 justify-center text-xs font-medium text-gray-500 p-4 border-b-[0.1px] border-gray-300">
				<div className="flex gap-2">
					<span>Registered Voters</span>
					<span>:</span> <span>2,678,999</span>
				</div>
				<div className="flex gap-2">
					<span>Updated</span>
					<span>:</span> <span>Wed 01 March 2023, 2:45:20</span>
				</div>
				<div>Results from 16 out 0f 16 LGA</div>
			</div>

			<div></div>
		</section>
	);
}

export default ResultComponent;
