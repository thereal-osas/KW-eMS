import React from "react";
import Gallery from "../components/Gallery";

function News() {
	return (
		<>
			<section className="flex flex-col gap-4 md:flex-row container mx-auto pt-10">
				<div className="md:w-1/2 w-full">
					<Gallery />
					<div className="flex mt-8 md:mt-2 flex-col lg:flex-row gap-2 items-center">
						<div className="lg:w-3/5 text-sm lg:text-base">
							<p className="font-semibold">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							</p>
							<p className="text-green-800/90">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Dolorem, facilis alias totam magni saepe, esse labore maxime
								repellendus minus provident, accusantium eaque nisi ad sit?
							</p>
						</div>
						<img
							className="lg:w-2/5 h-fit"
							src="https://plus.unsplash.com/premium_photo-1661769554757-daedeca66fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
							alt=""
						/>
					</div>
				</div>
				<div className="md:w-1/2 w-full">
					<div className="flex flex-col-reverse lg:flex-row gap-2 text-sm bg-black text-white">
						<p className="lg:w-2/5 p-2 ">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
							explicabo accusantium reprehenderit perferendis quidem maxime
							explicabo accusantium reprehenderit perferendis quidem maxime
							temporibus amet hic similique assumenda. Corporis, voluptates.
						</p>
						<div className="relative lg:w-3/5 h-fit p-2 inline-block  ">
							<img
								className=""
								src="https://media.premiumtimesng.com/wp-content/files/2022/10/20220528_233007.jpg"
								alt=""
							/>
							<p className="absolute text-white text-sm bottom-0 bg-black/60 p-2 z-10">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
							</p>
						</div>
					</div>
					<div className="flex flex-col-reverse lg:flex-row gap-2 text-sm bg-black text-white">
						<p className="lg:w-2/5 p-2 ">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
							explicabo accusantium reprehenderit perferendis quidem maxime
							explicabo accusantium reprehenderit perferendis quidem maxime
							temporibus amet hic similique assumenda. Corporis, voluptates.
						</p>
						<div className="relative lg:w-3/5 h-fit p-2 inline-block  ">
							<img
								className=""
								src="https://media.premiumtimesng.com/wp-content/files/2022/10/20220528_233007.jpg"
								alt=""
							/>
							<p className="absolute text-white text-sm bottom-0 bg-black/60 p-2 z-10">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
							</p>
						</div>
					</div>
					<div className="flex flex-row-reverse gap-2 items-center mt-6">
						<div className="w-3/5 flex flex-col gap-4">
							<p className="font-semibold">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							</p>
							<div className="flex justify-between text-sm font-semibold text-gray-700 pt-2 ">
								<span>By Caleb</span>
								<span>Feb 5,2023</span>
							</div>
							<p className="text-green-800/90">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Dolorem, facilis alias totam magni saepe, esse labore maxime
								repellendus minus provident, accusantium eaque nisi ad sit?
							</p>
						</div>
						<img
							className="w-2/5 h-fit"
							src="https://images.unsplash.com/photo-1677668802610-1a3eb78f1560?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
							alt=""
						/>
					</div>
				</div>
			</section>
			<section className="flex gap-4 flex-col lg:flex-row px-4 mt-8">
				<div className="w-full lg:w-3/5 ">
					<p className="font-semibold underline hidden lg:flex p-2 ">
						Latest News
					</p>
					<main className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-2 text-sm">
						<div>
							<div className="relative   ">
								<img
									className=""
									src="https://media.premiumtimesng.com/wp-content/files/2022/10/20220528_233007.jpg"
									alt=""
								/>
								<p className="absolute text-white text-sm bottom-0 bg-black/60 p-2 z-10">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Nostrum, veritatis. Saepe veritatis ea fugit quibusdam libero?
									Veniam aspernatur ut impedit!
								</p>
							</div>
							<div className=" px-2 rounded-b-xl">
								<div className="flex justify-between text-sm font-semibold px-4 pt-2 ">
									<span>By Caleb</span>
									<span>Feb 5,2023</span>
								</div>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Dolorem accusantium accusamus aspernatur, ex eaque excepturi
									blanditiis, ipsa dicta temporibus, provident laborum quas cum
									fuga amet consequuntur libero dolore assumenda voluptates
									quisquam autem hic magnam aliquid! Libero et quas animi
									adipisci.
								</p>
							</div>
						</div>
						<div>
							<div className="relative   ">
								<img
									className=""
									src="https://media.premiumtimesng.com/wp-content/files/2022/10/20220528_233007.jpg"
									alt=""
								/>
								<p className="absolute text-white text-sm bottom-0 bg-black/60 p-2 z-10">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Nostrum, veritatis. Saepe veritatis ea fugit quibusdam libero?
									Veniam aspernatur ut impedit!
								</p>
							</div>
							<div className=" px-2 rounded-b-xl">
								<div className="flex justify-between text-sm font-semibold px-4 pt-2 ">
									<span>By Caleb</span>
									<span>Feb 5,2023</span>
								</div>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Dolorem accusantium accusamus aspernatur, ex eaque excepturi
									blanditiis, ipsa dicta temporibus, provident laborum quas cum
									fuga amet consequuntur libero dolore assumenda voluptates
									quisquam autem hic magnam aliquid! Libero et quas animi
									adipisci.
								</p>
							</div>
						</div>
						<div>
							<div className="relative   ">
								<img
									className=""
									src="https://media.premiumtimesng.com/wp-content/files/2022/10/20220528_233007.jpg"
									alt=""
								/>
								<p className="absolute text-white text-sm bottom-0 bg-black/60 p-2 z-10">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Nostrum, veritatis. Saepe veritatis ea fugit quibusdam libero?
									Veniam aspernatur ut impedit!
								</p>
							</div>
							<div className=" px-2 rounded-b-xl">
								<div className="flex justify-between text-sm font-semibold px-4 pt-2 ">
									<span>By Caleb</span>
									<span>Feb 5,2023</span>
								</div>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Dolorem accusantium accusamus aspernatur, ex eaque excepturi
									blanditiis, ipsa dicta temporibus, provident laborum quas cum
									fuga amet consequuntur libero dolore assumenda voluptates
									quisquam autem hic magnam aliquid! Libero et quas animi
									adipisci.
								</p>
							</div>
						</div>
						<div>
							<div className="relative   ">
								<img
									className=""
									src="https://media.premiumtimesng.com/wp-content/files/2022/10/20220528_233007.jpg"
									alt=""
								/>
								<p className="absolute text-white text-sm bottom-0 bg-black/60 p-2 z-10">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Nostrum, veritatis. Saepe veritatis ea fugit quibusdam libero?
									Veniam aspernatur ut impedit!
								</p>
							</div>
							<div className=" px-2 rounded-b-xl">
								<div className="flex justify-between text-sm font-semibold px-4 pt-2 ">
									<span>By Caleb</span>
									<span>Feb 5,2023</span>
								</div>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Dolorem accusantium accusamus aspernatur, ex eaque excepturi
									blanditiis, ipsa dicta temporibus, provident laborum quas cum
									fuga amet consequuntur libero dolore assumenda voluptates
									quisquam autem hic magnam aliquid! Libero et quas animi
									adipisci.
								</p>
							</div>
						</div>
						<div>
							<div className="relative   ">
								<img
									className=""
									src="https://media.premiumtimesng.com/wp-content/files/2022/10/20220528_233007.jpg"
									alt=""
								/>
								<p className="absolute text-white text-sm bottom-0 bg-black/60 p-2 z-10">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Nostrum, veritatis. Saepe veritatis ea fugit quibusdam libero?
									Veniam aspernatur ut impedit!
								</p>
							</div>
							<div className=" px-2 rounded-b-xl">
								<div className="flex justify-between text-sm font-semibold px-4 pt-2 ">
									<span>By Caleb</span>
									<span>Feb 5,2023</span>
								</div>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Dolorem accusantium accusamus aspernatur, ex eaque excepturi
									blanditiis, ipsa dicta temporibus, provident laborum quas cum
									fuga amet consequuntur libero dolore assumenda voluptates
									quisquam autem hic magnam aliquid! Libero et quas animi
									adipisci.
								</p>
							</div>
						</div>
						<div>
							<div className="relative   ">
								<img
									className=""
									src="https://media.premiumtimesng.com/wp-content/files/2022/10/20220528_233007.jpg"
									alt=""
								/>
								<p className="absolute text-white text-sm bottom-0 bg-black/60 p-2 z-10">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Nostrum, veritatis. Saepe veritatis ea fugit quibusdam libero?
									Veniam aspernatur ut impedit!
								</p>
							</div>
							<div className=" px-2 rounded-b-xl">
								<div className="flex justify-between text-sm font-semibold px-4 pt-2 ">
									<span>By Caleb</span>
									<span>Feb 5,2023</span>
								</div>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Dolorem accusantium accusamus aspernatur, ex eaque excepturi
									blanditiis, ipsa dicta temporibus, provident laborum quas cum
									fuga amet consequuntur libero dolore assumenda voluptates
									quisquam autem hic magnam aliquid! Libero et quas animi
									adipisci.
								</p>
							</div>
						</div>
						<div>
							<div className="relative   ">
								<img
									className=""
									src="https://media.premiumtimesng.com/wp-content/files/2022/10/20220528_233007.jpg"
									alt=""
								/>
								<p className="absolute text-white text-sm bottom-0 bg-black/60 p-2 z-10">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Nostrum, veritatis. Saepe veritatis ea fugit quibusdam libero?
									Veniam aspernatur ut impedit!
								</p>
							</div>
							<div className=" px-2 rounded-b-xl">
								<div className="flex justify-between text-sm font-semibold px-4 pt-2 ">
									<span>By Caleb</span>
									<span>Feb 5,2023</span>
								</div>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Dolorem accusantium accusamus aspernatur, ex eaque excepturi
									blanditiis, ipsa dicta temporibus, provident laborum quas cum
									fuga amet consequuntur libero dolore assumenda voluptates
									quisquam autem hic magnam aliquid! Libero et quas animi
									adipisci.
								</p>
							</div>
						</div>
						<div>
							<div className="relative   ">
								<img
									className=""
									src="https://media.premiumtimesng.com/wp-content/files/2022/10/20220528_233007.jpg"
									alt=""
								/>
								<p className="absolute text-white text-sm bottom-0 bg-black/60 p-2 z-10">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Nostrum, veritatis. Saepe veritatis ea fugit quibusdam libero?
									Veniam aspernatur ut impedit!
								</p>
							</div>
							<div className=" px-2 rounded-b-xl">
								<div className="flex justify-between text-sm font-semibold px-4 pt-2 ">
									<span>By Caleb</span>
									<span>Feb 5,2023</span>
								</div>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Dolorem accusantium accusamus aspernatur, ex eaque excepturi
									blanditiis, ipsa dicta temporibus, provident laborum quas cum
									fuga amet consequuntur libero dolore assumenda voluptates
									quisquam autem hic magnam aliquid! Libero et quas animi
									adipisci.
								</p>
							</div>
						</div>
					</main>
				</div>
				<p className="font-semibold underline lg:hidden flex  ">
					Trending Headlines
				</p>

				<div className="lg:w-2/5 w-full lg:flex flex-col grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-2  md:gap-2">
					<p className="font-semibold underline hidden lg:flex  ">
						Trending Headlines
					</p>
					<div className=" lg:border-none border-2 rounded-xl px-3 border-black">
						<h3>Lorem ipsum dolor sit amet consectetur.</h3>
						<p className="text-green-500">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Doloremque, corporis est adipisci deleniti atque deserunt ad
							blanditiis sapiente eaque earum.
						</p>
						<div className="flex justify-between">
							<span>By Caleb</span>
							<span>Feb 5,2023</span>
						</div>
					</div>
					<hr className="border-black border-1 lg:flex hidden " />
					<div className=" lg:border-none border-2 rounded-xl px-3 border-black">
						<h3>Lorem ipsum dolor sit amet consectetur.</h3>
						<p className="text-green-500">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Doloremque, corporis est adipisci deleniti atque deserunt ad
							blanditiis sapiente eaque earum.
						</p>
						<div className="flex justify-between">
							<span>By Caleb</span>
							<span>Feb 5,2023</span>
						</div>
					</div>
					<hr className="border-black border-1 lg:flex hidden " />
					<div className=" lg:border-none border-2 rounded-xl px-3 border-black">
						<h3>Lorem ipsum dolor sit amet consectetur.</h3>
						<p className="text-green-500">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Doloremque, corporis est adipisci deleniti atque deserunt ad
							blanditiis sapiente eaque earum.
						</p>
						<div className="flex justify-between">
							<span>By Caleb</span>
							<span>Feb 5,2023</span>
						</div>
					</div>
					<hr className="border-black border-1 lg:flex hidden " />
					<div className=" lg:border-none border-2 rounded-xl px-3 border-black">
						<h3>Lorem ipsum dolor sit amet consectetur.</h3>
						<p className="text-green-500">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Doloremque, corporis est adipisci deleniti atque deserunt ad
							blanditiis sapiente eaque earum.
						</p>
						<div className="flex justify-between">
							<span>By Caleb</span>
							<span>Feb 5,2023</span>
						</div>
					</div>
					<hr className="border-black border-1 lg:flex hidden " />
					<div className=" lg:border-none border-2 rounded-xl px-3 border-black">
						<h3>Lorem ipsum dolor sit amet consectetur.</h3>
						<p className="text-green-500">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Doloremque, corporis est adipisci deleniti atque deserunt ad
							blanditiis sapiente eaque earum.
						</p>
						<div className="flex justify-between">
							<span>By Caleb</span>
							<span>Feb 5,2023</span>
						</div>
					</div>
					<hr className="border-black border-1 lg:flex hidden " />
					<div className=" lg:border-none border-2 rounded-xl px-3 border-black">
						<h3>Lorem ipsum dolor sit amet consectetur.</h3>
						<p className="text-green-500">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Doloremque, corporis est adipisci deleniti atque deserunt ad
							blanditiis sapiente eaque earum.
						</p>
						<div className="flex justify-between">
							<span>By Caleb</span>
							<span>Feb 5,2023</span>
						</div>
					</div>
					<hr className="border-black border-1 lg:flex hidden " />
					<div className=" lg:border-none border-2 rounded-xl px-3 border-black">
						<h3>Lorem ipsum dolor sit amet consectetur.</h3>
						<p className="text-green-500">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Doloremque, corporis est adipisci deleniti atque deserunt ad
							blanditiis sapiente eaque earum.
						</p>
						<div className="flex justify-between">
							<span>By Caleb</span>
							<span>Feb 5,2023</span>
						</div>
					</div>
					<hr className="border-black border-1 lg:flex hidden " />
				</div>
			</section>
		</>
	);
}

export default News;
