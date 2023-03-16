import React from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navmenu from './Navmenu'
import Logo from "../assets/Logo.PNG";
import { useDispatch, useSelector } from "react-redux";
import { toggle, toggleOff } from "../redux/appSlice";

function Navbar() {
  const dispatch = useDispatch()

	const { navOpen } = useSelector((state) => state.app);
  const Toggle = () => {
    setOpen(!Open)
  }

	return (
		<section className="mb-12">
			<main className=" fixed top-0 left-0 right-0 bg-[#edf2ff] z-[60] ">
				<div className="justify-between px-4 py-2 flex w-full">
					<img
						className="h-8"
						src={Logo}
						alt=""
					/>
					<div className="hidden space-x-6 sm:flex items-center">
						<Link
							onClick={() => dispatch(toggleOff())}
							className="text-sm font-medium"
							to="/">
							Home
						</Link>
						<Navmenu />
						{/* <Link
							className="text-sm font-medium"
							to="/candidates">
							Candidates
						</Link> */}
						<Link
							onClick={() => dispatch(toggle())}
							className="text-sm font-medium"
							to="/results">
							Election Results
						</Link>
						<Link
							onClick={() => dispatch(toggle())}
							className="text-sm font-medium"
							to="/news">
							News
						</Link>
					</div>
					<button className="bg-[#1748C9] sm:flex hidden text-white px-4 py-1 rounded-2xl">
						Interactive Map
					</button>

					<button
						className="flex sm:hidden duration-1000 "
						onClick={() => dispatch(toggle())}>
						{navOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
					</button>
				</div>
			</main>
			<aside className="sm:hidden">
				<div
					className={`z-50 duration-1000 p-10  fixed top-10 left-0 right-0 bottom-1/3 ${
						navOpen ? "bg-[#f4f7ff] " : " bg-[#f4f7ff] -translate-y-full "
					}`}>
					<div className="flex space-y-10 sm:hidden flex-col justify-center items-center text-black">
						<div className="sm:hidden flex flex-col items-center  justify-around   text-xl font-semibold gap-4">
							<Link
								onClick={() => dispatch(toggle())}
								className=""
								to="/">
								Home
							</Link>
							{/* <Navmenu /> */}
							<Navmenu className="text-white" />

							<Link
								onClick={() => dispatch(toggle())}
								className=""
								to="/results">
								Election Results
							</Link>
							<Link
								onClick={() => dispatch(toggle())}
								className=""
								to="/news">
								News
							</Link>
							<div>
								<button className="bg-[#1748C9] text-white px-4 py-1 rounded-2xl">
									Interactive Map
								</button>
							</div>
						</div>
					</div>
				</div>
			</aside>
		</section>
	);
}

export default Navbar
