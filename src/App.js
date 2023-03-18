import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/loader";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Error from "./pages/Error";
// import LiveResult from "./pages/LiveResult";
// import News from "./pages/News";
import GubernatorialDetails from "./components/gubernatorialDetails";
import LGA from "./components/LGA";
import PresidentialMap from "./pages/PresidentialMap";
// import TrackResult from './pages/TrackResult'
import PresidentialResult from "./pages/PresidentialResult";
import GubernatorialResult from "./pages/GubernatorialResult";
import SenatorialResult from "./pages/SenatorialResult";
import HorResult from "./pages/HorResult";
import HoaResult from "./pages/HoaResult";
import AssemblyResultDetails from "./components/AssemblyResultDetails";

const Presidential = lazy(() => import("./pages/Presidential"));
const Gubernatorial = lazy(() => import("./pages/Gubernatorial"));
const Senatorial = lazy(() => import("./pages/Senatorial"));
const Reps = lazy(() => import("./pages/Reps"));
const PresidentialDetails = lazy(() =>
	import("./components/presidentialDetails")
);
const ResultPresidential = lazy(() => import("./pages/ResultPresidential"));
const ResultSenatorial = lazy(() => import("./pages/ResultSenatorial"));
const ResultGovernors = lazy(() => import("./pages/ResultGovernors"));
const ResultReps = lazy(() => import("./pages/ResultReps"));
const ResultAssembly = lazy(() => import("./pages/ResultAssembly"));

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/presidentialresults"
						element={<PresidentialResult />}
					/>
					<Route
						path="/gubernatorialresults"
						element={<GubernatorialResult />}
					/>
					<Route
						path="/senatorialresults"
						element={<SenatorialResult />}
					/>
					<Route
						path="/horresults"
						element={<HorResult />}
					/>
					<Route
						path="/hoaresults"
						element={<HoaResult />}
					/>
					<Route path="/results">
						{/*  <Route index element={<PresidentialResult />} /> */}

						<Route
							path="presidential"
							element={<ResultPresidential />}
						/>

						<Route
							path="senatorial"
							element={<ResultSenatorial />}
						/>
						<Route
							path="gubernatorial"
							element={<ResultGovernors />}
						/>
						<Route
							path="house_of_reps"
							element={<ResultReps />}
						/>
						<Route
							path="house_of_assembly"
							element={<ResultAssembly />}
						/>
					</Route>
					<Route
						path="/results/kwara/:lga"
						element={<LGA />}
					/>
					<Route
						path="/results/kwara/roa/:lga"
						element={<AssemblyResultDetails />}
					/>
					{/* <Route
						path="/news"
						element={<News />}
					/> */}
					<Route
						path="/candidates/presidential/:name"
						element={<PresidentialDetails />}
					/>
					<Route
						path="/candidates/gubernatorial/:name"
						element={<GubernatorialDetails />}
					/>
					<Route path="/candidates">
						<Route
							path="presidential"
							element={<Presidential />}
						/>
						{/* <Route
							path="presidential"
							element={<Presidential />}>
							
						</Route> */}
						<Route
							path="senatorial"
							element={<Senatorial />}
						/>
						<Route
							path="gubernatorial"
							element={<Gubernatorial />}
						/>
						<Route
							path="house_of_reps"
							element={<Reps />}
						/>
					</Route>
					<Route
						path="/map"
						element={<PresidentialMap />}
					/>
					<Route
						path="*"
						element={<Error />}
					/>
				</Routes>
			</Suspense>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
