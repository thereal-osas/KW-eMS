import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";
import Logo from "../assets/Logo.PNG";

function Footer() {
	return (
		<section className="text-xs sm:text-base flex flex-col bg-[#edf2ff] items-center my-10">
			<div className=" md:hidden flex mb-8 ">
				<img
					className="h-12"
					src={Logo}
					alt=""
				/>
			</div>
			<div className="grid grid-cols-3 gap-4 w-full px-2 md:px-12 md:grid-cols-4">
				<div className=" hidden md:flex ">
					<img
						className="h-12"
						src={Logo}
						alt=""
					/>
				</div>
				<div className="flex flex-col gap-4 text-center">
					<p className="font-semibold text-lg sm:text-xl">Company</p>
					<p>About Us</p>
					<p>Careers</p>
					<p>Contact</p>
					<p>Affliate Program</p>
				</div>
				<div className="flex flex-col gap-4 text-center">
					<p className="font-semibold text-lg sm:text-xl ">Help</p>
					<p>Blog</p>
					<p>FAQs</p>
					<p>Report a bug</p>
					<p>Customer Care</p>
				</div>
				<div className="flex flex-col gap-4 text-center">
					<p className="font-semibold text-lg sm:text-xl">Legal</p>
					<p>Cookie Policy</p>
					<p>Privacy Policy</p>
					<p>Terms of Service</p>
					<p>Compliance</p>
				</div>
			</div>
			<div className="text-center flex  md:flex-row items-center justify-around w-full flex-col gap-2 mt-20">
				<div className="text-lg font-semibold sm:text-xl">
					<span>(c) Copyright 2023. All right reserved.</span>
				</div>
				<div className=" text-lg font-semibold sm:text-xl">
					Terms of Service <span className="px-3">|</span>Privacy Policy
				</div>
				<div className="flex flex-row gap-4">
					<button className="hover:scale-110 duration-500 text-white bg-black h-8 w-8 flex items-center justify-center rounded-full">
						<BsTwitter size={15} />
					</button>
					<button className="hover:scale-110 duration-500 text-white bg-black h-8 w-8 flex items-center justify-center rounded-full">
						<AiOutlineInstagram size={15} />
					</button>
					<button className="hover:scale-110 duration-500 text-white bg-black h-8 w-8 flex items-center justify-center rounded-full">
						<BsFacebook size={15} />
					</button>
					<button className="hover:scale-110 duration-500 text-white bg-black h-8 w-8 flex items-center justify-center rounded-full">
						<BsLinkedin size={15} />
					</button>
				</div>
			</div>
		</section>
	);
}

export default Footer;
