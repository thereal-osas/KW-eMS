import React from "react";
import Img3 from "../assets/HOD3.jpg";
import Img2 from "../assets/HOD2.jpg";
import Img4 from "../assets/HOD4.jpg";
import cook from "../assets/Abdulganiyu-Cook-Olododo.jpg";

function Reps() {
	return (
		<div>
			<p className="text-xl font-semibold underline underline-offset-1 p-4 text-center">
				HOUSE OF REPS CANDIDATES
			</p>
			<div className=" mx-auto w-fit grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
				<div className="max-w-[280px] flex flex-col justify-center gap-3">
					<img
						className=""
						src={cook}
						alt="Image1"
					/>
					<div className="border-2 text-center">
						<p className="font-semibold">Abdulganiyu Cook Olododo</p>
						<p className="font-semibold">APC</p>
					</div>
				</div>
				<div className="max-w-[280px] flex flex-col justify-center gap-3">
					<img
						className=""
						src={Img2}
						alt="Image2"
					/>
					<div className="border-2 text-center">
						<p className="font-semibold"> Consectetur Adipisicing </p>
						<p className="font-semibold">Tyop</p>
					</div>
				</div>
				<div className="max-w-[280px] flex flex-col justify-center gap-3">
					<img
						className=""
						src={Img3}
						alt="Image4"
					/>
					<div className="border-2 text-center">
						<p className="font-semibold"> Consectetur Adipisicing </p>
						<p className="font-semibold">Tyop</p>
					</div>
				</div>
				<div className="max-w-[280px] flex flex-col justify-center gap-3">
					<img
						className=""
						src={Img4}
						alt="Image4"
					/>
					<div className="border-2 text-center">
						<p className="font-semibold"> Consectetur Adipisicing </p>
						<p className="font-semibold">Tyop</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Reps;
