import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function Gallery() {
	return (
		<section className="w-full px-2 md:px-0 border-2 border-black h-fit mx-auto  text-black">
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 30000,
					disableOnInteraction: false,
				}}
				pagination={{
					dynamicBullets: true,
					clickable: true,
				}}
				// navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper ">
				<SwiperSlide className="w-2/5 border-2 border-black  ">
					<div className="relative mb-10   ">
						<img
							className=""
							src="https://media.premiumtimesng.com/wp-content/files/2022/10/20220528_233007.jpg"
							alt=""
						/>
						<p className="absolute text-white text-sm bottom-0 bg-black/60 p-2 z-10">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
							veritatis. Saepe veritatis ea fugit quibusdam libero? Veniam
							aspernatur ut impedit!
						</p>
					</div>
				</SwiperSlide>

				<SwiperSlide className="w-2/5 border-2 border-black  ">
					<div className="relative   ">
						<img
							className=""
							src="https://media.premiumtimesng.com/wp-content/files/2022/10/20220528_233007.jpg"
							alt=""
						/>
						<p className="absolute text-white text-sm bottom-0 bg-black/60 p-2 z-10">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
							veritatis. Saepe veritatis ea fugit quibusdam libero? Veniam
							aspernatur ut impedit!
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide className="w-2/5 border-2 border-black  ">
					<div className="relative   ">
						<img
							className=""
							src="https://media.premiumtimesng.com/wp-content/files/2022/10/20220528_233007.jpg"
							alt=""
						/>
						<p className="absolute text-white text-sm bottom-0 bg-black/60 p-2 z-10">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
							veritatis. Saepe veritatis ea fugit quibusdam libero? Veniam
							aspernatur ut impedit!
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide className="w-2/5 border-2 border-black  ">
					<div className="relative   ">
						<img
							className=""
							src="https://media.premiumtimesng.com/wp-content/files/2022/10/20220528_233007.jpg"
							alt=""
						/>
						<p className="absolute text-white text-sm bottom-0 bg-black/60 p-2 z-10">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
							veritatis. Saepe veritatis ea fugit quibusdam libero? Veniam
							aspernatur ut impedit!
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide className="w-2/5 border-2 border-black  ">
					<div className="relative   ">
						<img
							className=""
							src="https://media.premiumtimesng.com/wp-content/files/2022/10/20220528_233007.jpg"
							alt=""
						/>
						<p className="absolute text-white text-sm bottom-0 bg-black/60 p-2 z-10">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
							veritatis. Saepe veritatis ea fugit quibusdam libero? Veniam
							aspernatur ut impedit!
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide className="w-2/5 border-2 border-black  ">
					<div className="relative   ">
						<img
							className=""
							src="https://media.premiumtimesng.com/wp-content/files/2022/10/20220528_233007.jpg"
							alt=""
						/>
						<p className="absolute text-white text-sm bottom-0 bg-black/60 p-2 z-10">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
							veritatis. Saepe veritatis ea fugit quibusdam libero? Veniam
							aspernatur ut impedit!
						</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
}
export default Gallery;
