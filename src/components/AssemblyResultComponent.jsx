import React from "react";
import { FiArrowDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import Data from "../Data/HOA";

function AssemblyResultComponent({ data }) {
	const Test = (arr) => {
		return arr.map((a) => (a === "" ? 0 : a));
	};
	const string = data;

	const LGA = Data.filter((a) => a.LGA === string.toUpperCase());
	const Result = LGA.map((a) => [
		a.APC,
		a.PDP,
		a.Lp,
		a.NNPP,
		a.SDP,
		a.Accredited_Voters,
		a.Registered_Voters,
	]);
	const APC_RESULT = Result.map((a) => a[0]);
	const PDP_RESULT = Result.map((a) => a[1]);
	const LP_RESULT = Result.map((a) => a[2]);
	const NNPP_RESULT = Result.map((a) => a[3]);
	const SDP_RESULT = Result.map((a) => a[4]);
	const ACCREDITED = Result.map((a) => a[5]);
	const REGISTERED = Result.map((a) => a[6]);

	const APC_TEST = Test(APC_RESULT);
	const PDP_TEST = Test(PDP_RESULT);
	const LP_TEST = Test(LP_RESULT);
	const NNPP_TEST = Test(NNPP_RESULT);
	const SDP_TEST = Test(SDP_RESULT);

	const PollingTest = Result.map((a) => {
		if (a[0] && a[1]) {
			return 1;
		} else return 0;
	});
	const CompleteUnit = PollingTest.reduce((acc, cur) => acc + cur);

	const Apc = APC_TEST.reduce((acc, cur) => acc + cur);
	const Pdp = PDP_TEST.reduce((acc, cur) => acc + cur);
	const Lp = LP_TEST.reduce((acc, cur) => acc + cur);
	const Nnpp = NNPP_TEST.reduce((acc, cur) => acc + cur);
	const Sdp = SDP_TEST.reduce((acc, cur) => acc + cur);
	const Accre = ACCREDITED.reduce((acc, cur) => acc + cur);
	const Regis = REGISTERED.reduce((acc, cur) => acc + cur);
	console.log(isNaN(Lp));

	const Total = Apc + Pdp + Lp + Nnpp + Sdp;

	const APCwidth = (Apc / Total) * 100;
	const PDPwidth = (Pdp / Total) * 100;
	const LPwidth = (Lp / Total) * 100;
	const NNPPwidth = (Nnpp / Total) * 100;
	const SDPwidth = (Sdp / Total) * 100;

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
					{Apc === 0 ? (
						<span className="flex">
							0<span>%</span>
						</span>
					) : (
						<span className="flex">
							{APCwidth.toFixed(1)}
							<span>%</span>
						</span>
					)}
					<div className="w-24  rounded-full h-2 bg-gray-600">
						<div
							className="bg-green-600 h-2 rounded-full"
							style={{ width: Apc ? APCwidth : 0 }}></div>
					</div>
				</div>
				<span className="w-1/5 text-end">{Apc}</span>
			</div>
			<div className="flex justify-between p-4 border-b-[0.1px] border-gray-300">
				<span className="w-[15%]">PDP</span>
				<div className="w-3/5 flex items-center justify-end gap-3">
					{Pdp === 0 ? (
						<span className="flex">
							0<span>%</span>
						</span>
					) : (
						<span className="flex">
							{PDPwidth.toFixed(1)}
							<span>%</span>
						</span>
					)}
					<div className="w-24  rounded-full h-2 bg-gray-600">
						<div
							className="bg-blue-600 h-2 rounded-full"
							style={{ width: Pdp ? PDPwidth : 0 }}></div>
					</div>
				</div>
				<span className="w-1/5 text-end">{Pdp}</span>
			</div>
			<div className="flex justify-between p-4 border-b-[0.1px] border-gray-300">
				<span className="w-[15%]">LP</span>
				<div className="w-3/5 flex items-center justify-end gap-3">
					{Lp === 0 || isNaN(Lp) ? (
						<span className="flex">
							0<span>%</span>
						</span>
					) : (
						<span className="flex">
							{LPwidth.toFixed(1)}
							<span>%</span>
						</span>
					)}
					<div className="w-24  rounded-full h-2 bg-gray-600">
						<div
							className="bg-red-600 h-2 rounded-full"
							style={{ width: Lp === 0 || isNaN(Lp) ? 0 : LPwidth }}></div>
					</div>
				</div>
				<span className="w-1/5 text-end">{Lp === 0 || isNaN(Lp) ? 0 : Lp}</span>
			</div>
			<div className="flex justify-between p-4 border-b-[0.1px] border-gray-300">
				<span className="w-[15%]">NNPP</span>
				<div className="w-3/5 flex items-center justify-end gap-3">
					{Nnpp === 0 ? (
						<span className="flex">
							0<span>%</span>
						</span>
					) : (
						<span className="flex">
							{NNPPwidth.toFixed(1)}
							<span>%</span>
						</span>
					)}
					<div className="w-24  rounded-full h-2 bg-gray-600">
						<div
							className="bg-orange-600 h-2 rounded-full"
							style={{ width: Nnpp ? NNPPwidth : 0 }}></div>
					</div>
				</div>
				<span className="w-1/5 text-end">{Nnpp}</span>
			</div>
			<div className="flex justify-between p-4 border-b-[0.1px] border-gray-300">
				<span className="w-[15%]">SDP</span>
				<div className="w-3/5 flex items-center justify-end gap-3">
					{Sdp === 0 ? (
						<span className="flex">
							0<span>%</span>
						</span>
					) : (
						<span className="flex">
							{SDPwidth.toFixed(1)}
							<span>%</span>
						</span>
					)}
					<div className="w-24  rounded-full h-2 bg-gray-600">
						<div
							className="bg-orange-600 h-2 rounded-full"
							style={{ width: Sdp ? SDPwidth : 0 }}></div>
					</div>
				</div>
				<span className="w-1/5 text-end">{Sdp}</span>
			</div>
			<button className="flex w-full  gap-3 items-center justify-center text-sm font-medium text-blue-500 p-5 border-b-[0.1px] border-gray-300">
				<span>Scroll down for more</span>
				<FiArrowDown size={25} />
			</button>
			{/* Scroll */}

			<div className="flex flex-col gap-3 justify-center text-xs font-medium text-gray-500 p-4 border-b-[0.1px] border-gray-300">
				<div className="flex gap-2">
					<span>Accredited Voters</span>
					<span>:</span> <span>{Accre}</span>
				</div>
				<div className="flex gap-2">
					<span>Registered Voters</span>
					<span>:</span> <span>{Regis}</span>
				</div>
				<div className="flex gap-2">
					<span>Updated</span>
					<span>:</span> <span>Wed 01 March 2023, 2:45:20</span>
				</div>
				<div>{`Results from ${CompleteUnit} out 0f ${Result.length} Polling Units`}</div>
			</div>

			<Link
				className="w-full  justify-center flex text-sm font-medium text-blue-500 p-5 border-b-[0.1px] border-gray-300"
				to={`/results/kwara/roa/${data}`}>
				View Result Details
			</Link>
		</section>
	);
}

export default AssemblyResultComponent;
