import React from "react";
import Img3 from "../assets/HOD3.jpg";
import Img2 from "../assets/HOD2.jpg";
import Img4 from "../assets/HOD4.jpg";
import cook from "../assets/Abdulganiyu-Cook-Olododo.jpg";
import { Link } from "react-router-dom";

function Reps() {
	return (
		<div>
			<p className="text-xl font-semibold underline underline-offset-1 p-4 text-center">
				HOUSE OF REPS CANDIDATES
			</p>

			<div className=" mx-auto w-fit grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
				<div className="w-[90%] mx-auto xs:max-w-[280px] flex flex-col items-center hover:scale-105 duration-500 py-3 justify-center bg-white text-black text-sm xs:text-base px-4   shadow-lg gap-4">
					<img
						className="xs:h-72 h-60 xs:w-60 w-60 flex justify-center items-center rounded-full"
						src={cook}
						alt="Abdulganiyu Cook Olododo"
					/>

					<div className=" text-center">
						<Link
							className="font-semibold"
							to={`/candidates/reps/apc`}>
							Abdulganiyu Cook Olododo
						</Link>
						<p className="font-semibold">All Progressives Congress (APC)</p>
						<div className="flex gap-2 font-semibold justify-center">
							<span>Age</span> <span>:</span> <span>60</span>
						</div>
					</div>
				</div>
				<div className="w-[90%] mx-auto xs:max-w-[280px] flex flex-col items-center hover:scale-105 duration-500 py-3 justify-center bg-white text-black text-sm xs:text-base px-4   shadow-lg gap-4">
					<img
						className="xs:h-72 h-60 xs:w-60 w-60 flex justify-center items-center rounded-full"
						src={Img2}
						alt="Consectetur Adipisicing"
					/>

					<div className=" text-center">
						<Link
							className="font-semibold"
							to={`/candidates/reps/apc`}>
							Consectetur Adipisicing
						</Link>
						<p className="font-semibold">All Progressives Congress (APC)</p>
						<div className="flex gap-2 font-semibold justify-center">
							<span>Age</span> <span>:</span> <span>60</span>
						</div>
					</div>
				</div>
				<div className="w-[90%] mx-auto xs:max-w-[280px] flex flex-col items-center hover:scale-105 duration-500 py-3 justify-center bg-white text-black text-sm xs:text-base px-4   shadow-lg gap-4">
					<img
						className="xs:h-72 h-60 xs:w-60 w-60 flex justify-center items-center rounded-full"
						src={Img3}
						alt="Consectetur Adipisicing"
					/>

					<div className=" text-center">
						<Link
							className="font-semibold"
							to={`/candidates/reps/apc`}>
							Consectetur Adipisicing
						</Link>
						<p className="font-semibold">All Progressives Congress (APC)</p>
						<div className="flex gap-2 font-semibold justify-center">
							<span>Age</span> <span>:</span> <span>60</span>
						</div>
					</div>
				</div>
				<div className="w-[90%] mx-auto xs:max-w-[280px] flex flex-col items-center hover:scale-105 duration-500 py-3 justify-center bg-white text-black text-sm xs:text-base px-4   shadow-lg gap-4">
					<img
						className="xs:h-72 h-60 xs:w-60 w-60 flex justify-center items-center rounded-full"
						src={Img4}
						alt="Consectetur Adipisicing"
					/>

					<div className=" text-center">
						<Link
							className="font-semibold"
							to={`/candidates/reps/apc`}>
							Consectetur Adipisicing
						</Link>
						<p className="font-semibold">All Progressives Congress (APC)</p>
						<div className="flex gap-2 font-semibold justify-center">
							<span>Age</span> <span>:</span> <span>60</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Reps;
