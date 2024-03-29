import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import ProgressBar from '@ramonak/react-progress-bar'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { formatNumber } from '../utils/global'
import map1 from '../assets/map1.svg'
import map2 from '../assets/map2.svg'
import { Link } from 'react-router-dom'

ChartJS.register(ArcElement, Tooltip, Legend)

function PresidentialMap() {
  const Data = [
    {
      id: '4',
      name: 'Bola Ahmed Tinubu',
      party: 'APC',
      about: 'https://en.wikipedia.org/wiki/Bola_Tinubu',
      image:
        'https://live.mrf.io/statics/i/ps/i0.wp.com/www.thisdaylive.com/wp-content/uploads/Tinubu-4-1.jpg?w=909&ssl=1&width=1200&enable=upscale',
    },
    {
      id: '3',
      name: 'Atiku Abubakar',
      party: 'PDP',
      about: 'https://en.wikipedia.org/wiki/Atiku_Abubakar',
      image:
        'https://cdn.punchng.com/wp-content/uploads/2022/06/14035640/Atiku.jpg',
    },
    {
      id: '2',
      name: 'Peter Obi',
      party: 'Labour Party',
      about: 'https://en.wikipedia.org/wiki/Peter_Obi',
      image:
        'https://cdn.punchng.com/wp-content/uploads/2022/12/04063508/Labour-Party-Presidential-Candidate-Peter-Obi.png',
    },
    {
      id: '1',
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
    { name: 'APC', color: '#356CF9', total: 222568, percentage: 60.4 },
    { name: 'PDP', color: '#F93535', total: 114610, percentage: 31.1 },
    { name: 'LP', color: '#34C759', total: 28407, percentage: 7.7 },
    { name: 'NNPP', color: '#F9AB35', total: 2824, percentage: 0.8 },
  ]

  const results = [
    { type: 'Presidential', link: '/presidential' },
    { type: 'Senatorial', link: '/senatorial' },
    { type: 'Gubernatorial', link: '/gubernatorial' },
    { type: 'House of Reps', link: '/house_of_reps' },
    { type: 'House of Assembly', link: '/house_of_assembly' },
  ]

  return (
    <>
      <div className='pt-12 md:pt-[5.5625rem] px-8 md:px-16'>
        <div className='flex flex-col md:flex-row mx-auto md:px-12 justify-between'>
          <div className=''>
            <p className='pb-8 text-center md:text-left'>
              Election Status Report
            </p>
            <div className='w-full md:w-[25.5rem] md:h-[13rem]'>
              <Doughnut data={data} options={electionStatusReportOptions} />
            </div>
          </div>

          <div className=''>
            <p className='pb-8 mt-8 md:mt-0 flex justify-between'>
              Leading Candidates
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
                    className='w-24 md:w-36 md:ml-32'
                  />
                </div>
              ))}
            </div>
          </div>

          {/* <div className=''>
            <p className='pb-8 mt-8 md:mt-0'>Overdue work</p>
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
          </div> */}
        </div>

        <div className='flex flex-col md:flex-row justify-between mt-[3.625rem] mb-[4.25rem]'>
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
            </div>
          </div>

          <div className='mt-4 md:mt-0 md:flex'>
            <div className='bg-[#F3F6FF] flex items-center p-2 rounded-lg text-[#212633] mt-2'>
              <div className='bg-[#F93535] w-4 h-4 rounded-[0.25rem] mr-2'></div>
              Leading Party
            </div>
            <div className='bg-[#F3F6FF] flex items-center p-2 rounded-lg text-[#212633] mt-2 md:ml-2'>
              <div className='bg-[#356CF9] w-4 h-4 rounded-[0.25rem] mr-2'></div>
              Close Second
            </div>
            <div className='bg-[#F3F6FF] flex items-center p-2 rounded-lg text-[#212633] mt-2 md:ml-2'>
              <div className='bg-[#F9AB35] w-4 h-4 rounded-[0.25rem] mr-2'></div>
              Third Party
            </div>
            <div className='bg-[#F3F6FF] flex items-center p-2 rounded-lg text-[#212633] mt-2 md:ml-2'>
              <div className='bg-[#34C759] w-4 h-4 rounded-[0.25rem] mr-2'></div>
              Others
            </div>
          </div>
        </div>
      </div>

      <div className='relative flex justify-center items-center '>
        <img
          src={map1}
          alt='Map'
          className='opacity-50 filter brightness-50 contrast-100'
        />
        <div className='absolute top-0 left-0 flex justify-center items-center'>
          <h3 className='text-2xl text-black font-bold'>Coming soon...</h3>
        </div>
      </div>

      <div className='px-8 md:px-16 flex flex-col md:flex-row flex-wrap justify-between py-[7.4375rem]'>
        {parties.map((party, index) => (
          <div
            key={index}
            className='bg-[rgba(23,72,201,0.4)] md:w-1/5 md:mx-1 md:my-10 px-[1.375rem] pt-[0.375rem] mt-2 md:mt-0 pb-4 rounded-[0.8125rem]'
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

      <div className='relative flex justify-center items-center'>
        <img
          src={map2}
          alt='Interactive map'
          className='opacity-50 filter brightness-50 contrast-100'
        />
        <div className='absolute top-0 left-0 flex justify-center items-center'>
          <h3 className='text-black text-2xl font-bold'>Coming soon...</h3>
        </div>
      </div>

      {/* <div className='bg-[#EAF2FF]'>
        <div className='px-8 md:px-16 py-[4.8125rem]'>
          <p className='font-normal text-lg md:text-xl'>
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

          <div className='flex justify-center md:gap-x-16 mt-10'>
            <div className='flex'>
              <div className='rounded-full bg-[#094094] w-10 h-5 md:w-6 md:h-6 mr-4'></div>
              <div className='flex flex-col'>
                <span className='text-black font-bold'>2 Seats</span>
                <span>Action Progressive Congress (APC)</span>
              </div>
            </div>
            <div className='flex'>
              <div className='rounded-full bg-[#FF0606] w-10 h-5 md:w-6 md:h-6 mr-4'></div>
              <div className='flex flex-col'>
                <span className='text-black font-bold'>1 Seat</span>
                <span>Labour Party (LP)</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className='px-8 md:px-16 flex flex-col gap-y-20 mt-10 mb-20 md:my-[7.5rem]'>
        {results.map((result, index) => (
          <Link
            to={`/results${result.link}`}
            key={index}
            className='result-card bg-no-repeat bg-cover bg-center h-40 md:h-[24.875rem] mx-auto w-[97%] rounded-[1.625rem] text-white flex justify-end items-end'
          >
            <div className='mr-10 mb-8 font-medium text-2xl'>
              {result.type} Result
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default PresidentialMap
