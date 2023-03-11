import React from "react";
import Candidatecard from "../components/Candidate_card";

function Presidential() {
	const Data = [
		{
			category: "presidential",
			id: "21",
			party: "APC",
			age: "  70",

			Fparty: "All Progressives Congress",
			name: "Bola Ahmed Tinubu",
			about: `Bola Ahmed Adekunle Tinubu (born 29 March 1952) is a Nigerian accountant and politician who served as the Governor of Lagos State from 1999 to 2007 and Senator for Lagos West during the brief Third Republic. In June 2022, he was chosen as the All Progressives Congress nominee in the 2023 Nigerian presidential election.

			Tinubu spent his early life in southwestern Nigeria and later moved to United States where he studied Accounting at Chicago State University. He returned to Nigeria in the early 1980s and was employed by Mobil Nigeria as an accountant, before entering politics as a Lagos West senatorial candidate in 1992 under the banner of the Social Democratic Party. After dictator Sani Abacha dissolved the Senate in 1993, Tinubu became an activist campaigning for the return of democracy as a part of the National Democratic Coalition movement. Although he was forced into exile in 1994, Tinubu returned after Abacha’s 1998 death triggered the beginning of the transition to the Fourth Republic.
			
			In the first post-transition Lagos State gubernatorial election, Tinubu won by a wide margin as a member of the Alliance for Democracy over the Peoples Democratic Party’s Dapo Sarumi and the All People’s Party’s Nosirudeen Kekere-Ekun. Four years later, he won re-election to a second term over the PDP’s Funsho Williams by a reduced margin. Tinubu’s two terms were marked by attempts at modernizing the city of Lagos and his feuds with the PDP-controlled federal government. After leaving office in 2007, he since played a key role in the formation of the All Progressives Congress in 2013. Long and controversial, Tinubu’s career has been plagued by accusations of corruption and questions about the veracity of his personal history
			
			`,
			image:
				"https://elections.civichive.org/wp-content/uploads/2022/11/BAT-1024x1024.jpg",
		},
		{
			category: "presidential",
			id: "22",
			age: "  75",

			Fparty: "Peoples Democratic Party",
			name: "Atiku Abubakar",
			party: "PDP",
			about: `Atiku Abubakar GCON (born 25 November 1946) is a Nigerian politician and businessman who served as the vice president of Nigeria from 1999 to 2007 during the presidency of Olusegun Obasanjo. He ran as governor of Adamawa State in 1990, 1997 and later, in 1998, being elected before becoming Olusegun Obasanjo’s running mate during the 1999 presidential election and re-elected in 2003.

			Atiku Abubakar has unsuccessfully contested five times for the Office of President of Nigeria in 1993, 2007, 2011, 2015 and 2019. In 1993, he contested the Social Democratic Party presidential primaries losing to Moshood Abiola and Baba Gana Kingibe. He was a presidential candidate of the Action Congress in the 2007 presidential election coming in third to Umaru Yar’Adua of the PDP and Muhammadu Buhari of the ANPP. He contested the presidential primaries of the People’s Democratic Party during the 2011 presidential election losing out to incumbent President Goodluck Jonathan.
			
			Read More`,
			image:
				"https://elections.civichive.org/wp-content/uploads/2022/10/Atiku.jpg",
		},
		{
			category: "presidential",
			id: "23",
			age: "  61",

			Fparty: "Labour Party",
			name: "Peter Gregory Obi",
			party: "LP",
			about: `Peter Gregory Obi CON (born 19 July 1961) is a Nigerian businessman and politician who served as governor of Anambra from March to November 2006, February to May 2007, and from June 2007 to March 2014. In May 2022, he became the Labour Party candidate for President of Nigeria in the 2023 presidential election.

			Born in Onitsha in 1961, Obi graduated from the University of Nigeria in 1984. Afterwards, he entered business and banking, eventually rising to hold several high-ranking executive positions at banks. By the early 2000s, Obi was the chairman of Fidelity Bank before leaving the position to enter politics. Obi ran for governor in 2003, as a member of the All Progressives Grand Alliance but his main opponent was unlawfully declared victor. After three years of legal battles, Obi was declared the winner in 2006 and assumed office in March 2006.`,
			image:
				"https://elections.civichive.org/wp-content/uploads/2022/10/Peter-obi.jpg",
		},
		{
			category: "presidential",
			id: "24",
			age: "  66",

			Fparty: "New Nigeria People’s Party",
			name: "Rabiu Musa Kwankwaso",
			party: "NNPP",
			about: `Rabi’u Musa Kwankwaso, FNSE, FNIQS (born 21 October 1956) is a Nigerian politician who was the Governor of Kano state from 1999 to 2003 and 2011 to 2015. After he lost his re-election in 2003, he was appointed the first Minister of Defence of the Fourth Republic with no prior military background from 2003 to 2007, under the administration of former president Olusegun Obasanjo. He was later elected to the Senate in 2015, serving one term under the platform of the All Progressives Congress (APC) representing Kano Central Senatorial District.

			He is currently the national leader of the New Nigeria Peoples Party Kwankwaso enjoys widespread support in Kano and north-western Nigeria; he has been viewed as a charismatic populist.In 2011, he was re-elected governor of the state and went on to join the All Progressives Congress (APC) in 2014. In 2015, Kwankwaso unsuccessfully contested the presidential primaries nomination under the opposition All Progressive Congress, but lost to Muhammad Buhari. In 2018, he returned to People’s Democratic Party (PDP) and contested the presidential primaries losing out to Atiku Abubakar. Rabiu Musa Kwankwaso, has been confirmed as the presidential candidate of the New Nigeria Peoples Party (NNPP) for the 2023 general elections.
			
			`,
			image:
				"https://elections.civichive.org/wp-content/uploads/2022/11/Rabiu-1024x1024.jpg",
		},
		{
			category: "presidential",
			id: "1",
			name: "Hamza Al-Mustapha",
			party: "AA",
			age: "62",
			Fparty: "Action Alliance",
			about: `Hamza Al-Mustapha (born 27 July 1960) is a former Nigerian Army major and intelligence officer who served as Chief Security Officer. He enrolled at the Nigerian Defence Academy in Kaduna and was commissioned into the Nigerian Army in 1983.

			Al-Mustapha joined the army and was trained as an intelligence operative. He was involved in at least two investigations of coup attempts. He was appointed Chief Security Officer to the Head of State (CSOHS) with a Special Strike Force Unit during Abacha’s military regime (17 November 1993 – 8 June 1998). Other security outfits at the time were the Office of the National Security Adviser under Ismaila Gwarzo, the Directorate of Military Intelligence, the State Security Service and the National Intelligence Agency.
			
			All of these units engaged in extrajudicial killings of people seen as threats to the regime. After being appointed Chief Security Officer, Al-Mustapha established a number of small security outfits recruited from the military and other security organizations and trained in Israel and Korea.`,
			image:
				"https://elections.civichive.org/wp-content/uploads/2022/12/Al-Mustapha-Hamza-AA.jpg",
		},
		{
			category: "presidential",
			id: "2",
			name: "Yabagi Sani",
			party: "ADP",
			age: "68",

			Fparty: "Action Democratic Party",
			about: `Yabagi Yusuf Sani, known mostly as (YYSani or Jakardan Nupe) meaning Ambassador of Nupe, (born 1 July 1957) is a Nigerian politician, Energy and Crude oil expert and is the current National Chairman of The Action Democratic Party (ADP). He was a presidential candidate in the 2019 Nigerian general election. Yabagi started as an administrative officer-depot chief in (PPMC Depot) Kano in 1980 under Nigerian National Petroleum Corporation.

			Sani began his political ambitions in 1991, he was also a founding member of (ANPP), and member board of trustees of All Nigeria Peoples Party (ANP).
			
			In 1999, Sani was the candidate of All Peoples Party (APP) in Niger State for the governorship election, he was also the financial secretary of the then Nigeria Liberal Convention (NLC/NRC), he was the North Central presidential coordinator of Alhaji Bashir Tofa in 1993. In 2021, Engr. Yabagi Yusuf Sani of the Action Democratic Party (ADP) emerged as the new national chairman of IPAC, taking over from Dr Leonard Nzenwa. Mgbudem Maxwell from Accord Party (AP) was elected Deputy National Chairman of the Council, while Alhaji Yusuf Dantalle of the Allied People’s Movement (APM) emerged as the National Secretary. He was declared as the ADP presidential standard-bearer at the Special National Convention of the party on Tuesday, May 31, 2022, in Abuja, Nigeria.
			
			The Chairman, ADP Electoral Panel, Mr. Tasiru Abdulrahman, said that Sani was chosen by consensus. He confirmed that Sani was chosen after he was screened and confirmed to have met all necessary requirements for the 2023 presidential election.
			
			`,
			image:
				"https://elections.civichive.org/wp-content/uploads/2022/12/Sani-Yabagi-Yusuf-ADP.jpg",
		},
		{
			category: "presidential",
			id: "3",
			name: "Nnamdi Charles Osita",
			party: "APP",
			age: "49",

			Fparty: "Action Peoples Party",
			about: ``,
			image: "",
		},
		{
			category: "presidential",
			id: "4",
			name: "Omoyele Sowore",
			party: "AAC",
			age: " 51",

			Fparty: "African Action Congress",
			about: `Yele Sowore is from Ese-Odo, Ondo State in South West Nigeria. Sowore was born in the Niger Delta region of the country (comprising six states in the South-South region, Ondo, Abia and Imo State) where he was also raised in a polygamous home with sixteen children. At 12, he learned to ride a motorcycle so that he could go to the lake to go fishing for food for his entire family every morning before going to school. Sowore’s passion and desire for media were propelled during the military rule in Nigeria.

			Sowore studied Geography and Planning at the University of Lagos from 1989 to 1995 with his academic program extended by two extra years after being expelled twice for political reasons and student activism. He was the President of the University of Lagos Student Union Government between 1992 and 1994 where he was involved in anti-cultism and anti-corruption advocacy. Sowore holds a master’s degree in Public Administration from Columbia University.
			
			`,
			image:
				"https://elections.civichive.org/wp-content/uploads/2022/10/Sowore.jpg",
		},
		{
			category: "presidential",
			id: "5",
			name: "Kachikwu Dumebi",
			party: "ADC",
			age: "48",

			Fparty: "Action Democratic Congress",
			about: `Dumebi Kachikwu is an entrepreneur, politician, businessman and also a well-loved philanthropist. He is also a media entrepreneur – Chairman of Roots Television Nigeria. Dumebi Kachikwu has built a long and prosperous career as a businessman within numerous sectors, mainly media/telecommunications, agriculture, and construction.

			He leads Netlink Technologies and regularly collaborates with other leading companies within the tech industry in order to drive technological advancement and accessibility to people from all over the world. Born on December 20, He attended the University of Benin Demonstration Secondary Scho`,
			image:
				"https://elections.civichive.org/wp-content/uploads/2022/12/Kachikwu-Dumebi-ADC.jpg",
		},
		{
			category: "presidential",
			id: "6",
			name: "Umeadi Peter Nnanna Chukwud",
			party: "APGA",
			age: "67",

			Fparty: "All Progressive Grand Alliance",
			about: `Peter Umeadi is a party chieftain, politician and a former Chief Judge of Anambra state judiciary. Umeadi, a Professor of Law at the University of Nigeria, Nsukka.

			Following his retirement as the state’s Chief Judge in March 2019, Umeadi, a Professor of Law at the University of Nigeria, joined the party in his Nri Ward II in Anaocha, Anambra.
			
			He has the capacity, sense of history, humility and self-effacement to reconcile and weld ethnic groups together.`,
			image:
				"https://elections.civichive.org/wp-content/uploads/2022/12/Umeadi-Peter-Nnanna-Chukwudi-APGA.jpg",
		},
		{
			category: "presidential",
			id: "7",
			name: "Ojei Princess Chichi",
			party: "APM",
			age: " 44",

			Fparty: "Allied Peoples Movement",
			about: `Princess Chichi Ojei, a prominent Delta-born politician and astute administrator.

			Ojei who schooled both in Nigeria and overseas, is a corporate finance specialist and the executive director of Nuel Ojei Holdings.
			
			`,
			image:
				"https://elections.civichive.org/wp-content/uploads/2022/12/Ojei-Princess-Chichi-APM.jpg",
		},
		{
			category: "presidential",
			id: "8",
			name: "Adenuga Sunday Oluwafemi",
			party: "BP",
			age: " 48",

			Fparty: "Boot Party",
			about: `Mr Sunday Adenuga (Sonny, as he is fondly called) is a businessman and a Risk and Control Leader and Expert from Ogun state, South West Nigeria.

			Sonny has led successful change adopting technology to deliver social justice where required. Sonny’s academic qualifications include among others, diploma and degrees in Mathematics; Statistics; and Project Management as well as other professional qualifications.
			
			Sonny’s goal for running for the office of the president is to develop Nigerians and Nigeria. In the past years, Sunday Adenuga have been working to create a leadership framework that will bring the best out of Nigerians.
			
			`,
			image:
				"https://elections.civichive.org/wp-content/uploads/2022/12/Adenuga-Sunday-Oluwafemi-BP.jpg",
		},
		{
			category: "presidential",
			id: "9",
			name: "Osakwe Felix Johnson",
			party: "NRM",
			age: "  57",

			Fparty: "National Rescue Movement",
			about: `Felix Johnson Osakwe is from Ukwuani Local government of Delta State. He is a classic and talented Clergyman, Respected Diplomat, Humanitarian Ambassador and a successful business personality in Nigeria and beyond.

			Felix Johnson Osakwe studied Legal and Criminal Justice at Ashworth University Atlanta, Georgia USA. He further obtained Bachelor’s Degree In Theology (B.Th) and Masters Degree In Theology (M.Th) from Freedom University And Theological Seminary USA. He was Confirmed with a Honorary Doctorate Degree (PHD) Philanthropic Management from Freedom University And Theological Seminary USA. And a Honorary Doctorate Degree (PHD) Doctor Of Divinity And Public Administration from Highstone International University USA.
			
			He serves as the Director of Executive Affairs, UPF Nigeria, where he engages actively with critical stakeholders and duty bearers in social, economic and political spaces within and outside Nigeria, lending his diplomatic skills and expertise to peace brokerage and crisis management, intersecting corporate excellence with social good.
			`,
			image:
				"https://elections.civichive.org/wp-content/uploads/2022/12/Osakwe-Felix-Johnson-NRM.jpg",
		},
		{
			category: "presidential",
			id: "10",
			name: "Kola Abiola",
			party: "PRP",
			age: "  60",

			Fparty: "People's Redemption Party ",
			about: `Abdul-Lateef Kola Abiola, born July 1, 1962, better known as Kola Abiola, is a Nigerian politician. He is the presidential candidate of the Peoples’ Redemption Party (PRP).

			Kola Abiola was born in Abeokuta, Ogun State, where he grew up with his siblings. On April 14, 2022, he declared his intention to contest the 2023 presidential race under the platform of the People’s Redemption Party, PRP.
			
			Kola Abiola went to Berkeley and then Colorado State University, where he obtained a Bachelor’s degree in Finance and an MBA in Business Administration.
			`,
			image:
				"https://elections.civichive.org/wp-content/uploads/2022/12/Abiola-Latifu-Kolawole-PRP.jpg",
		},
		{
			category: "presidential",
			id: "11",
			name: "Adebayo Adewole Ebenezer",
			party: "SDP",
			age: "  50",

			Fparty: "Social Democratic Party ",
			about: `Adewole Adebayo (born 8 January 1972) is a Nigerian Lawyer and Founder of KAFTAN TV. He is currently running for President of Nigeria under the Social Democratic Party (Nigeria). Adewole Adebayo began his legal career as a litigation lawyer at Tunji Abayomi and Co in Lagos, Nigeria.

			After two years of legal practice, he founded his own law firm, Adewole Adebayo & Co., House of Law, in 2002. In 2016, Adewole Adebayo established KAFTAN TV. Adebayo sponsors nearly 2,000 young Nigerians in Nigerian and foreign tertiary institutions, in addition to numerous people he has financially empowered across the country. Adebayo is a public affairs commentator who provides advice on national issues on occasion and participates in Nigerian politics as a member of the Third Force.
			
			On January 15, 2022, Adewole Adebayo declared his intention to run for the office of the Nigerian president. He is running for president of Nigeria in the 2023 Nigerian general election under the Social Democratic Party (Nigeria).
			`,
			image:
				"https://elections.civichive.org/wp-content/uploads/2022/12/ADEWOLE-ADEBAYO-SDP.jpg",
		},
		{
			category: "presidential",
			id: "12",
			name: "Ado-Ibrahim Abdulmalik",
			party: "YPP",
			age: "  58",

			Fparty: "Young Progressives Party",
			about: `Ado-Ibrahim Abdulmalik is a Nigerian born business and politician who is a Kogi Prince and the founder of Bicernergy. He is the presidential candidate under YPP.

			He studied in the US and the UK where his area of study was mainly Automobiles. Prince Malik, educated at a private school in England, graduated from a British military academy, and is the holder of a master’s degree in marketing from the University of Southern California.
			
			
			`,
			image:
				"https://elections.civichive.org/wp-content/uploads/2022/12/Ado-Ibrahim-Abdulmalik-YPP.jpg",
		},
		{
			category: "presidential",
			id: "13",
			name: "Imumolen I. Christopher",
			party: "A",
			age: "  38",

			Fparty: "Accord ",
			about: `
			Christopher Irene Imumolen (born 5 September 1983) is the Addo of Abaji, an educationist, a university professor, a serial entrepreneur, a business mogul and a Nigerian Politician. He is the founder of Joint Professional Training and Support International Limited (JPTS) and UNIC Foundation, a non-profit, non-governmental organization. He is a presidential candidate on the platform of the Accord Party, ahead of the 2023 Nigerian presidential elections.
			
			Imumolen is an indigene of Esan West, Ekpoma in Edo State. He started his work career as a Plant Engineer at BOC Gases Nigeria Plc in February 2005. He is President of the Onshore Offshore Oil and Gas Professional and was also appointed as the Senior Technical Adviser to the Akwa-Ibom state government on Oil and Gas matters, he was also the Technical Safety Consultant to NAPECO Kuwait. He is the Founder of Global Wealth System- a business network system setup to empowering entrepreneurs globally with over 450,000 Membership.
			
			On February 8, 2022, it was reported that Imumolen launched a two billion naira education scholarship trust fund for entertainers in the entertainment industry of Nigeria. Musicians Small Doctor and B-Red were among the beneficiaries of the scheme.
			
			According to news report, he described the trust fund as “a promise to help the well-placed celebrities in a better perception for their millions followers, which will, in turn spur them to begin to believe in education as a sure way to nation building”.
			
			In 2019, Imumolen, through his empowerment program supported over 6000 Nigerians with Financial Grant for Businesses between One thousand Dollars to Ten Thousand Dollars each. He followed up with the release of over 200 inmates who were detained for bailable offenses.
			`,
			image:
				"https://elections.civichive.org/wp-content/uploads/2022/12/Imumolen-Irene-Christopher-Accord.jpg",
		},
		{
			category: "presidential",
			id: "14",
			name: "Nwanyanwu Daniel Daberechukwu",
			party: "ZLP",
			age: "  62",

			Fparty: "Zenith Labour Party",
			about: `Dan Nwanyanwu mni, OFR (born 23 November 1959 ) is a Nigerian politician, businessman and lawyer who was chairman of the Labour Party (LP) from 2004 until 2014. He worked with Union Bank between 1979-1993 and during his appointment, held several roles within the National Union of Banks, Insurance and Financial Institutions Employees (NUBIFIE), rising to the role of National Treasurer and subsequently National President from 1989. The latter appointment automatically made him a member of the National Executive Council of the Nigeria Labour Congress (NLC).

			In 1992, he attended the National Institute for Policy and Strategic Studies, Kuru, Jos and was awarded “Member of the National Institute” (mni). In February 1993, he resigned his appointment with the Union Bank of Nigeria to enable him to finish the programme. He finished his law Degree in 1998 and proceeded to the Nigerian Law School, eventually being called to the Nigerian Bar in the year 2000. He earned a master’s degree in Law (LL.M) in University of Lagos and did his pupilage under the close supervision of Frederick Rotimi Williams in the Chief Rotimi Williams Chambers.
			
			In 2004, Nwanyanwu was drafted to lead the” Party for Social Democracy” (PSD) formed by the Nigerian Labour Congress, which led to his emergence as its National Chairman in a well-attended convention. The party was later renamed ‘Labour Party’ to reflect its new ideals.
			
			He started from scratch to organize and lead a political party hitherto unknown and at the expiration of his first term, he was re-elected in December 2009 as the party’s National Chairman at a Convention held in Abuja. Under his leadership, the LP secured governorship of Ondo State, with Olusegun Mimiko.
			
			
			`,
			image:
				"https://elections.civichive.org/wp-content/uploads/2022/12/Nwanyanwu-Daniel-Daberechukwu-ZLP.jpg",
		},
	];

	return (
		<>
			<p className="text-xl font-semibold underline underline-offset-1 p-4 text-center">
				PRESIDENTIAL CANDIDATES
			</p>
			<div className=" mx-auto w-fit grid grid-cols-1 gap-12 sm:gap-4 px-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
				{Data.map((item) => (
					<Candidatecard
						key={item.id}
						item={item}
					/>
				))}
			</div>
		</>
	);
}

export default Presidential;
