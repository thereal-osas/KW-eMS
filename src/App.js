import React, { lazy, Suspense } from 'react'
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loader from './components/loader'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
// import Gubernatorial from "./pages/Gubernatorial";
import Home from './pages/Home'
import Error from './pages/Error'
import LiveResult from './pages/LiveResult'
import News from './pages/News'
import PresidentialMap from './pages/PresidentialMap'
import GubernatorialDetails from "./components/gubernatorialDetails";
import LGA from "./components/LGA";
// import Presidential from "./pages/Presidential";
// import Reps from "./pages/Reps";
// import Senatorial from "./pages/Senatorial";
const Presidential = lazy(() => import('./pages/Presidential'))
const Gubernatorial = lazy(() => import('./pages/Gubernatorial'))
const Senatorial = lazy(() => import('./pages/Senatorial'))
const Reps = lazy(() => import('./pages/Reps'))
const PresidentialDetails = lazy(() =>
	import("./components/presidentialDetails")
);

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/live_results' element={<LiveResult />} />
          <Route path='/news' element={<News />} />
										 <Route path='/live_results' element={<LiveResult />} />
          <Route path='/candidates'>
            <Route path='presidential' element={<Presidential />} />
            <Route path='senatorial' element={<Senatorial />} />
            <Route path='gubernatorial' element={<Gubernatorial />} />
            <Route path='house_of_reps' element={<Reps />} />
          </Route>
          <Route path='/interactive_map' element={<PresidentialMap />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}

export default App
