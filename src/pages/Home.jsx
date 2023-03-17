import React from "react";
import CandidatesWatch from "../components/CandidatesWatch";
import Hero from "../components/Hero";
import InteractiveMap from "../components/InteractiveMap";
import LiveResult from "../components/LiveResult";
import NewsArticles from "../components/NewsArticles";
// import Data from "../Data/Kwara";

function Home() {
	// const OverallStat = Data.map((a) => [
	// 	a.APC,
	// 	a.PDP,
	// 	a.LP,
	// 	a.NNPP,
	// 	a.Accredited_Voters,
	// 	a.Registered_Voters,
	// ]);

	// const ApcData = OverallStat.map((a) => a[0]);
	// const PdpData = OverallStat.map((a) => a[1]);
	// const LpData = OverallStat.map((a) => a[2]);
	// const NnppData = OverallStat.map((a) => a[3]);
	// const AccreditedData = OverallStat.map((a) => a[4]);
	// const RegisteredData = OverallStat.map((a) => a[5]);
	// const ApcTotal = ApcData.reduce((acc, cur) => acc + cur);
	// const PdpTotal = PdpData.reduce((acc, cur) => acc + cur);
	// const LpTotal = LpData.reduce((acc, cur) => acc + cur);
	// const NnppTotal = NnppData.reduce((acc, cur) => acc + cur);
	// const AccreditedTotal = AccreditedData.reduce((acc, cur) => acc + cur);
	// const RegisteredTotal = RegisteredData.reduce((acc, cur) => acc + cur);

	// console.log({
	// 	APC: ApcTotal,
	// 	PDP: PdpTotal,
	// 	LP: LpTotal,
	// 	NNPP: NnppTotal,
	// 	Accredited_Voters: AccreditedTotal,
	// 	Registered_Voters: RegisteredTotal,
	// });

	return (
		<>
			<div className="bg-[#f4f7ff]">
				<Hero />
				<LiveResult />
				<InteractiveMap />
				<CandidatesWatch />
				<NewsArticles />
			</div>
		</>
	);
}

export default Home;
