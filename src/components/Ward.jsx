import React from "react";
import Data from "../Data/Kwara";

function Ward({ name }) {
	const Ward = Data.filter((a) => a.Ward === name);
	return (
		<section className="overflow-x-scroll mb-10 relative  whitespace-nowrap  customscroll ">
			<div className="font-extrabold text-2xl sticky top-0 left-0 right-0 text-center pb-6">
				{name} WARD
			</div>
			<div className=" ward_title flex justify-between   text-sm gap-10 mb-3">
				<div className="flex gap-10   ">
					<div className="font-extrabold pl-0.5">S/N</div>
					<div className=" w-[240px]  font-extrabold   ">POLLING UNIT</div>
				</div>

				<div className="text-center min-w-[50px] ">APC</div>
				<div className="text-center min-w-[50px] ">LP</div>
				<div className="text-center min-w-[50px] ">NNPP</div>
				<div className="text-center min-w-[50px] ">PDP</div>

				<div className="text-center min-w-[100px] ">Total Votes</div>
				<div className=" min-w-[100px] ">Accredited Voters</div>
				<div className=" min-w-[100px]  ">Registered Voters</div>
				<div className="text-center min-w-[100px]  "></div>
			</div>
			<div className="flex flex-col gap-3  mb-5 ">
				{Ward.map((a, b) => (
					<div
						key={b}
						className="ward_title text-sm    flex justify-between gap-10   pb-2">
						<div className="flex gap-10   ">
							<div className="px-2">{b + 1}</div>
							<div className="overflow-hidden   w-[240px] font-extrabold ">
								{a["PU-Name"]}
							</div>
						</div>

						<div className="text-center min-w-[50px]">{a.APC}</div>

						<div className="text-center min-w-[50px]">{a.LP}</div>
						<div className="text-center min-w-[50px]">{a.NNPP}</div>
						<div className="text-center min-w-[50px]">{a.PDP}</div>

						<div className="text-center min-w-[100px]">
							{a.LP + a.NNPP + a.PDP + a.APC}
						</div>
						<div className="text-center min-w-[100px] ">
							{a.Accredited_Voters}
						</div>
						<div className="text-center min-w-[100px]  ">
							{a.Registered_Voters}
						</div>
						<div className="text-center min-w-[100px]  "></div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Ward;
