import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import { IoFootball } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggle } from "../redux/appSlice";

export default function Navmenu() {
	const dispatch = useDispatch();

	return (
		<div className=" text-right">
			<Menu
				as="div"
				className="relative inline-block text-left">
				<div>
					<Menu.Button className="inline-flex w-full justify-center items-center rounded-md  sm:text-sm font-semibold sm:font-medium text-black  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
						Candidates
						<ChevronDownIcon
							className="ml-2 -mr-1 h-5 w-5  text-black "
							aria-hidden="true"
						/>
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95">
					<Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						<div className="px-1 py-1">
							<Menu.Item>
								{({ active }) => (
									<Link
										onClick={() => dispatch(toggle())}
										to="candidates/presidential"
										className={`${
											active ? "bg-blue-500 text-white" : "text-gray-900"
										} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
										Presidential
									</Link>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<Link
										onClick={() => dispatch(toggle())}
										to="candidates/gubernatorial"
										className={`${
											active ? "bg-blue-500 text-white" : "text-gray-900"
										} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
										Gubernatorial
									</Link>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<Link
										onClick={() => dispatch(toggle())}
										to="candidates/senatorial"
										className={`${
											active ? "bg-blue-500 text-white" : "text-gray-900"
										} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
										Senatorial
									</Link>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<Link
										onClick={() => dispatch(toggle())}
										to="candidates/house_of_reps"
										className={`${
											active ? "bg-blue-500 text-white" : "text-gray-900"
										} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
										House of Reps
									</Link>
								)}
							</Menu.Item>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
}
