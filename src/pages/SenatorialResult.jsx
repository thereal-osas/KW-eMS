import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import map from '../assets/senate.png'
import { Link } from 'react-router-dom'

ChartJS.register(ArcElement, Tooltip, Legend)

function PresidentialResult() {
  const data = {
    labels: [
      'APC - 78,015 Votes',
      'PDP - 41,443 Votes',
      'LP - 1,947 Votes',
      'NNPP - 3,140 Votes',
    ],
    datasets: [
      {
        label: '% of Votes',
        data: [62.64, 33.28, 1.56, 2.52],
        backgroundColor: ['#356CF9', '#F93535', '#34C759', '#F9AB35'],
        borderColor: ['#356CF9', '#F93535', '#34C759', '#F9AB35'],
        borderWidth: 1,
      },
    ],
  }

  const data2 = {
    labels: ['APC - 109,823 Votes', 'PDP - 69,202 Votes'],
    datasets: [
      {
        label: '% of Votes',
        data: [61.35, 38.65],
        backgroundColor: ['#356CF9', '#F93535'],
        borderColor: ['#356CF9', '#F93535'],
        borderWidth: 1,
      },
    ],
  }

  const data3 = {
    labels: ['APC - 55,966 Votes', 'PDP - 34,950 Votes', 'SDP - 24,215 Votes'],
    datasets: [
      {
        label: '% of Votes',
        data: [48.61, 30.36, 21.03],
        backgroundColor: ['#356CF9', '#F93535', '#aa34c7'],
        borderColor: ['#356CF9', '#F93535', '#aa34c7'],
        borderWidth: 1,
      },
    ],
  }

  const electionStatusReportOptions = {
    cutout: '30%',
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontSize: '20px !important',
          boxWidth: 15,
          fontWeight: 'bold',
          padding: 20,
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  }

  return (
    <>
      <div className='py-6 md:py-10'>
        <div>
          <h3 className='text-center text-2xl md:text-3xl font-extrabold tracking-wider text-[#1748C9]'>
            2023 Senatorial Results
          </h3>
        </div>
        <div className='flex flex-col md:flex-row'>
          <div className='mt-10 md:mt-30 w-full h-[12rem] md:h-[17rem] mx-auto'>
            <h3 className='text-center text-xl font-bold mb-4'>Kwara North</h3>
            <Doughnut data={data} options={electionStatusReportOptions} />
          </div>
          <div className='mt-10 md:mt-30 w-full h-[12rem] md:h-[17rem] mx-auto'>
            <h3 className='text-center text-xl font-bold mb-4'>
              Kwara Central
            </h3>
            <Doughnut data={data2} options={electionStatusReportOptions} />
          </div>
          <div className='mt-10 md:mt-30 w-full h-[12rem] md:h-[17rem] mx-auto'>
            <h3 className='text-center text-xl font-bold mb-4'>Kwara South</h3>
            <Doughnut data={data3} options={electionStatusReportOptions} />
          </div>
        </div>

        <div className='mt-6 md:mt-10'>
          <img src={map} alt='map' />
        </div>
        <Link className='  flex justify-center ' to='/results/senatorial'>
          <button className='px-4 py-2 bg-[#336DFF] text-sm  text-white font-semibold rounded-lg hover:bg-[#adc5ff] hover:text-[#000] transition ease-in duration-150'>
            View Results Details
          </button>
        </Link>
      </div>
    </>
  )
}

export default PresidentialResult
