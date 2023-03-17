import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import ProgressBar from '@ramonak/react-progress-bar'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { formatNumber } from '../utils/global'

ChartJS.register(ArcElement, Tooltip, Legend)

function PresidentialMap() {
  const Data = [
    {
      id: '1',
      name: 'Bola Ahmed Tinubu',
      party: 'APC',
      about: 'https://en.wikipedia.org/wiki/Bola_Tinubu',
      image:
        'https://live.mrf.io/statics/i/ps/i0.wp.com/www.thisdaylive.com/wp-content/uploads/Tinubu-4-1.jpg?w=909&ssl=1&width=1200&enable=upscale',
    },
    {
      id: '2',
      name: 'Atiku Abubakar',
      party: 'PDP',
      about: 'https://en.wikipedia.org/wiki/Atiku_Abubakar',
      image:
        'https://cdn.punchng.com/wp-content/uploads/2022/06/14035640/Atiku.jpg',
    },
    {
      id: '3',
      name: 'Peter Obi',
      party: 'Labour Party',
      about: 'https://en.wikipedia.org/wiki/Peter_Obi',
      image:
        'https://cdn.punchng.com/wp-content/uploads/2022/12/04063508/Labour-Party-Presidential-Candidate-Peter-Obi.png',
    },
    {
      id: '4',
      name: 'Rabiu Kwankwaso',
      party: 'NNPP',
      about: 'https://en.wikipedia.org/wiki/Rabiu_Kwankwaso',
      image:
        'https://media.premiumtimesng.com/wp-content/files/2022/09/Rabiu-Kwankwaso-636x419-1.jpg',
    },
  ]

  const data = {
    labels: ['Done', 'Failed', 'Accredited', 'Processing'],
    datasets: [
      {
        label: '# of Votes',
        data: [25, 25, 25, 25],
        backgroundColor: ['#34C759', '#F93535', '#356CF9', '#F9AB35'],
        borderColor: ['#34C759', '#F93535', '#356CF9', '#F9AB35'],
        borderWidth: 1,
      },
    ],
  }

  const electionStatusReportOptions = {
    cutout: '80%',
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  }

  const parties = [
    { name: 'PDP', color: '#F93535', total: 243400, percentage: 45 },
    { name: 'APC', color: '#F9AB35', total: 27503, percentage: 15 },
    { name: 'LP', color: '#356CF9', total: 23400, percentage: 18 },
    { name: 'AA', color: '#34C759', total: 12700, percentage: 1 },
    { name: 'NNPP', color: '#34C759', total: 1680, percentage: 20 },
  ]

  const results = [
    { type: 'Presidential', link: '/presidential' },
    { type: 'Senatorial', link: '/senatorial' },
    { type: 'Gubernatorial', link: '/gubernatorial' },
    { type: 'House of reps', link: '/house-of-reps' },
  ]

  return (
    <>
      <div className='container grid grid-cols-3 pt-[5.5625rem] gap-x-14'>
        <div className=''>
          <p className='pb-8'>Election Status Report</p>
          <div className='w-full h-[13.5rem]'>
            <Doughnut data={data} options={electionStatusReportOptions} />
          </div>
        </div>
        <div className=''>
          <p className='pb-8 flex justify-between'>
            Leading Candidates
            <button className='text-[#356CF9] flex items-center'>
              See All
              <svg
                width='17'
                height='16'
                viewBox='0 0 17 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M6.34164 2.64645C6.5369 2.45118 6.85348 2.45118 7.04874 2.64645L12.0487 7.64645C12.244 7.84171 12.244 8.15829 12.0487 8.35355L7.04874 13.3536C6.85348 13.5488 6.5369 13.5488 6.34164 13.3536C6.14637 13.1583 6.14637 12.8417 6.34164 12.6464L10.9881 8L6.34164 3.35355C6.14637 3.15829 6.14637 2.84171 6.34164 2.64645Z'
                  fill='#356CF9'
                  stroke='#356CF9'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </p>

          <div className='flex flex-col gap-y-6'>
            {Data.map((candidate, index) => (
              <div key={index} className='flex items-center'>
                <img
                  className='w-[48px] h-[48px] object-cover rounded-full mr-3'
                  src={candidate.image}
                  alt={candidate.name}
                />
                <div className='flex flex-col grow'>
                  <span className='text-[#212633] font-medium'>
                    {candidate.name}
                  </span>
                  <span className='text-[#8E9ABB] font-medium'>
                    7/10 job done
                  </span>
                </div>
                <ProgressBar
                  height='32px'
                  borderRadius='24px'
                  bgColor='#6498FB'
                  baseBgColor='#E2E9FC'
                  labelAlignment='center'
                  completed={Number(candidate.id) * 20}
                  className='w-20'
                />
              </div>
            ))}
          </div>
        </div>
        <div className=''>
          <p className='pb-8'>Overdue work</p>
          <div className='flex flex-col gap-y-5'>
            <div className='flex items-center gap-x-2'>
              <div className='w-[4.60125rem] h-[4.60125rem] flex items-center'>
                <CircularProgressbar
                  value={38}
                  text={`${38}%`}
                  styles={buildStyles({
                    pathColor: '#F93535',
                    textColor: '#212633',
                    trailColor: '#F3F6FF',
                  })}
                />
              </div>

              <span className='text-[#F93535] text-[3.5625rem] align-middle'>
                06
              </span>

              <div className='flex flex-col'>
                <div>Overdue work</div>
                <div>
                  More than <span className='text-[#356CF9]'>32</span> jobs in
                  progress
                </div>
              </div>
            </div>
            <div className='flex items-center gap-x-2'>
              <div className='w-[4.60125rem] h-[4.60125rem] flex items-center'>
                <CircularProgressbar
                  value={62}
                  text={`${62}%`}
                  styles={buildStyles({
                    pathColor: '#F9AB35',
                    textColor: '#212633',
                    trailColor: '#F3F6FF',
                  })}
                />
              </div>

              <span className='text-[#F9AB35] text-[3.5625rem] align-middle'>
                19
              </span>

              <div className='flex flex-col'>
                <div>Work finished late</div>
                <div>
                  More than <span className='text-[#356CF9]'>32</span> jobs in
                  progress
                </div>
              </div>
            </div>
            <div className='border-t border-[#E2E9FC] pt-6 text-[#434A5E]'>
              0 jobs created with no time
            </div>
          </div>
        </div>
        <div className='col-span-3 flex justify-between mt-[3.625rem] mb-[4.25rem]'>
          <div className='flex items-center'>
            Local Government Area
            <div className='relative w-fit'>
              <select className='appearance-none bg-[#F3F6FF] p-2 pr-7 rounded-lg ml-4'>
                <option value='ilorin-west'>Ilorin West</option>
                <option value='ilorin-east'>Ilorin East</option>
                <option value='ilorin-south'>Ilorin South</option>
                <option value='asaa'>Asa</option>
                <option value='baruten'>Baruten</option>
                <option value='ede'>Ede</option>
                <option value='ede-north'>Ede North</option>
                <option value='efe'>Efe</option>
                <option value='ilejemeje'>Ilejemeje</option>
              </select>
              <svg
                className='absolute right-2 top-1/2 -translate-y-1/2'
                width='17'
                height='16'
                viewBox='0 0 17 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M13.7154 5.64645C13.9106 5.84171 13.9106 6.15829 13.7154 6.35355L8.71537 11.3536C8.52011 11.5488 8.20353 11.5488 8.00826 11.3536L3.00826 6.35355C2.813 6.15829 2.813 5.84171 3.00826 5.64645C3.20353 5.45118 3.52011 5.45118 3.71537 5.64645L8.36182 10.2929L13.0083 5.64645C13.2035 5.45118 13.5201 5.45118 13.7154 5.64645Z'
                  fill='#356CF9'
                  stroke='#356CF9'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </div>

          <div className='flex items-center gap-x-4'>
            <div className='bg-[#F3F6FF] flex items-center p-2 rounded-lg text-[#212633]'>
              <div className='bg-[#F93535] w-4 h-4 rounded-[0.25rem] mr-2'></div>
              Leading Party
            </div>
            <div className='bg-[#F3F6FF] flex items-center p-2 rounded-lg text-[#212633]'>
              <div className='bg-[#356CF9] w-4 h-4 rounded-[0.25rem] mr-2'></div>
              Close Second
            </div>
            <div className='bg-[#F3F6FF] flex items-center p-2 rounded-lg text-[#212633]'>
              <div className='bg-[#F9AB35] w-4 h-4 rounded-[0.25rem] mr-2'></div>
              Third Party
            </div>
            <div className='bg-[#F3F6FF] flex items-center p-2 rounded-lg text-[#212633]'>
              <div className='bg-[#34C759] w-4 h-4 rounded-[0.25rem] mr-2'></div>
              Others
            </div>
          </div>
        </div>
      </div>

      <div className=' flex justify-center items-center h-[646px] bg-blue-200'>
        MAP COMING SOON
      </div>

      <div className='container grid grid-cols-4 gap-[3.635rem] py-[7.4375rem]'>
        {parties.map((party, index) => (
          <div
            key={index}
            className='bg-[rgba(23,72,201,0.4)] px-[1.375rem] pt-[0.375rem] pb-4 rounded-[0.8125rem]'
          >
            <div className='flex items-center bg-[#F3F6FF] py-1 px-2 w-fit rounded-lg text-[#212633] font-normal mb-2'>
              <div
                className='w-4 h-4 rounded-[0.25rem] mr-2'
                style={{ backgroundColor: party.color }}
              ></div>
              {party.name}
            </div>

            <CircularProgressbar
              className='w-[10.625rem] h-[10.625rem]'
              value={party.percentage}
              text={`${party.percentage}%`}
              strokeWidth={30}
              styles={buildStyles({
                strokeLinecap: 'butt',
                pathColor: party.color,
                textColor: party.color,
                trailColor: '#F3F6FF',
                textSize: '0.9rem',
              })}
            />

            <div className='flex justify-end text-white text-2xl'>
              {formatNumber(party.total)}
            </div>
          </div>
        ))}
      </div>

      <div className=' flex justify-center items-center h-[646px] bg-blue-200'>
        MAP COMING SOON
      </div>

      <div className='bg-[#EAF2FF]'>
        <div className='container py-[4.8125rem]'>
          <p className='font-normal text-2xl'>
            The Independent National Electoral Commission, INEC, has announced
            the result of the National Assembly election in Kwara North
            Senatorial District election. According to the result released by
            INEC in Ilorin on Monday, the serving APC candidate for the
            Senatorial district, Sadiq Umar, won the election by 78,015
            votes.The PDP candidate, Adamu Bawa, scored 41,443 votes The NNPP
            candidate, Baba Kolo Jiyah, got 3,140 votes with Labour Party
            candidate, Moses Rebecca scoring 1,947 in the National Assembly
            election
            <br />
            <br />
            The Collation/ Returning Officer for Kwara Central Senatorial
            District, Professor Salih Abubakar of the English Department ,
            University of Ilorin made the declaration at the INEC Collation
            Center, Ilorin.
          </p>

          <div className='flex justify-center gap-x-16 mt-10'>
            <div className='flex'>
              <div className='rounded-full bg-[#094094] w-12 h-12 mr-4'></div>
              <div className='flex flex-col'>
                <span className='text-black font-bold'>2 Seats</span>
                <span>Action Progressive Congress (APC)</span>
              </div>
            </div>
            <div className='flex'>
              <div className='rounded-full bg-[#FF0606] w-12 h-12 mr-4'></div>
              <div className='flex flex-col'>
                <span className='text-black font-bold'>1 Seat</span>
                <span>Labour Party (LP)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-y-20 my-[7.5rem]'>
        {results.map((result, index) => (
          <div
            key={index}
            className='result-card bg-no-repeat bg-cover bg-center h-[24.875rem] mx-auto w-[97%] rounded-[1.625rem] text-white flex justify-end items-end'
          >
            <div className='mr-10 mb-8 font-medium text-[3.5625rem]'>
              {result.type} Result
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default PresidentialMap
