import type { NextPage } from "next";
import Head from "next/head";

const rules = [
  "Participation in the competition is exclusively for parishioners of Holy Spirit Church; However general public are more than welcomed to spectate and join the fun.",
  "Participation in all events is compulsory.",
  "Individuals of different age groups are encouraged to participate.",
  "Reporting time for all participants is 9:00 am sharp. The first team to report will receive EARLY BIRD points.",
  "For any particular event, Participants are required to report to the event in charge, on the designated court, at least 15 minutes before the commencement of the event.",
  "Google forms will be sent to ward leaders for the registration for the event kindly fill it at the earliest",
  "All participants are required to wear proper and decent sports attire.",
  "Participants should refrain from abusive language, obscene display during the competitions.",
  "Cheating and sabotaging of any kind will not be tolerated.",
  "The judges’ decision is final.",
  "A participant can participate only in one event during the simultaneous timings for events; a participant is not restricted to participate in any number of events as long as the event timings do not clash. However, it is recommended that teams, have max number of participants and different individuals for  each game, so as to avoid being over exhausted.",
  "Rules are subject to changes at the discretion of the Management/Organizers.",
  "Criteria for Overall championship include participation in maximum number of events as well as the total scores obtained in the competitions.",
  "All details of the itinerary will be provided.",
  "Lunch will not be provided, but we have arranged famous food-stalls to satisfy your craving",
];

const works = [
  "Each team will be allotted 1500 game points at the beginning of the event.",
  "Early bird (1st team to report) will get additional 500 points",
  "The goal of each is to utilize these game points by placing wagers/bets on their games and winning them!!!",
  "The team which has managed to collect the most Game points, by winning max number of bets, will hold the Grand trophy.",
  "All games are divided into 3 events (as shown below):",
  "Trophy Events will allow 1 match-1 bet, per team. Draw for trophy events will be held a week prior to the event.",
  "Medal Events will allow teams to have 3matches-3bets. Teams will be allowed to choose their own opponents for these events.",
  "Batton event do not have any wager and the decision will be made by the judges. However, the 1st and 2nd place winners will get 30 and 20 game points respectively.",
  "Open category refers to any age group unless mentioned otherwise.",
  "In case of a tie, team with maximum number of wins in all matches, irrespective of the game points lost will be declared the winner.",
  "At the registration desk, on arrival, each ward can place ‘The Joker’ on any 2, TROPHY EVENTS ONLY. If the team wins that particular event, their winning wager will be doubled.",
];

const games: game[] = [
  {
    name: "CONTROL CRICKET",
    openCategory: true,
    type: "A",
    descripton: [
      "The game will be of 4 overs with 7 players.",
      "Common bat and ball will be provided.",
      "Personal equipment will be allowed, but no responsibility will be taken if goods are damaged.",
      "Rules will be explained on the spot. ",
    ],
  },
  {
    name: "FOOTBALL",
    openCategory: true,
    type: "A",
    descripton: [
      "7-a-side with maximum 4 substitutes.",
      "Total game time is 20 minutes (10 mis each half)",
      "Rolling of substitutes will be allowed.",
    ],
  },
  {
    name: "CATCH N KILL",
    type: "A",
    descripton: [
      "Girls only.",
      "5 players in each team.",
      "Time duration:10 mins.",
      "First team to eliminate the opponents, wins.",
    ],
  },
  {
    name: "CATERPILLAR RACE",
    openCategory: true,
    type: "A",
    descripton: [
      "8 players each team",
      "Mix girls and boys",
      "Balloon’s will be provided.",
      "Rules will be explained on the spot.",
    ],
  },
  {
    name: "CYCLE RACE",
    openCategory: true,
    type: "A",
    descripton: [
      "Boys only.",
      "Participants should get their own cycles.",
      "Route will be shown properly before the race.",
      "Route: Rebello undertakers - BM service station - Modsai – Holy Spirit Church",
    ],
  },
  {
    name: "STRONG MAN CIRCUIT",
    openCategory: true,
    type: "A",
    descripton: [
      "1 participant and 1 substitute.",
      "Participants should complete the whole circuit.",
      "If and when tired, participant can tag the substitute to complete the circuit.",
      "Circuit includes: Bike Salmon-Weighted Run (approx. 25kg)- Hurdle Run (3.5 feet in height)-Elbow crawls-Car push (Maruti Suzuki alto)-Sac race.",
    ],
  },
  {
    name: "SUSEGAD RACE",
    type: "B",
    descripton: [
      "Married women only. (Y’all can get your husbands as proof )",
      "Slow bike race.",
      "1 participant.",
      "The team is allowed to have 2 substitutes as back up just in case you want to switch the racers for better chance of winning (but the choice is to be made at the team’s discretion).",
      "Participants should get their own two-wheeler.",
    ],
  },
  {
    name: "TIE BREAKER",
    type: "B",
    descripton: [
      "Girls only",
      "Maximum 3 participants.",
      "Participants should wear shoes.",
      "High heels and sandals will not be allowed.",
    ],
  },
  {
    name: "SPRINT",
    type: "B",
    descripton: [
      "Boys only",
      "100 meter running race.",
      "Participant should wear proper running shoes.",
      "The team is allowed to have 2 more participants as back up just in case you want to switch d racers for better chance of winning (but the choice is to be made at the team’s discretion).",
    ],
  },
  {
    name: "SUMO WRESTLING",
    openCategory: true,
    type: "B",
    descripton: [
      "First Participant to score 3 points, wins.",
      "Rules will be explained on the spot.",
      "Wrestling suits will be provided.",
    ],
  },
  {
    name: "TUG OF WAR",
    type: "B",
    descripton: [
      "Married men only. (Y’all can get your wives as proof)",
      "Exactly 10 members required.",
    ],
  },
  {
    name: "FANCY DRESS",
    type: "C",
    descripton: [
      "Anyone above 45 years.",
      "Theme: Goan professions",
      "Time duration: 1 min 30 sec.",
      "Participants will be judged on costume and monologue to support the act.",
    ],
  },
  {
    name: "QUIZ",
    type: "C",
    descripton: ["Confirmation children only.", "4 participants per team."],
  },
  {
    name: "GARAGE BAND",
    type: "C",
    descripton: [
      "Anyone below 25 years",
      "Max 4 participants including singer.",
      "Participants should carry their own instruments.",
      "All instruments are allowed.",
      "Prepare a performance of 3.30 mins.",
      "No restrictions on song selection or choice of instruments. you have full creative freedom.",
      "No vulgar/profane language, or you will risk being disqualified.",
    ],
  },
];

type game = {
  name: string;
  openCategory?: boolean;
  type: string;
  descripton: string[];
};

const Home: NextPage = () => {
  const scrollIntoView = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>ReWards - Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="flex flex-col w-full items-center">
        <div className="z-10 w-full sticky top-0 left-0 flex justify-center text-xs md:text-xl bg-[#5f27cd] font-bold text-[#FBEAFF] p-4">
          <button onClick={() => scrollIntoView("general-rules")}>
            General Rules
          </button>
          <p className="p-4"></p>
          <button onClick={() => scrollIntoView("how-it-works")}>
            How it Works
          </button>
          <p className="p-4"></p>
          <button onClick={() => scrollIntoView("games")}>Games</button>
        </div>

        <p className="p-4"></p>

        <img
          className="rounded"
          height={300}
          width={500}
          src="poster.jpg"
          alt=""
        />
        <p className="p-4"></p>
        <div className="flex flex-col justify-center items-center">
          <div className="text-3xl text-center font-bold">
            Re-Wards registration
          </div>
          <div className="text-xl text-center">
            Please do register by the 8th of October!
          </div>
          <a
            className="flex text-xl"
            href="https://forms.gle/BiKana9iDvcbVarw9">
            Click here! <img src="register.png" height={30} width={30} alt="" />
          </a>
        </div>

        <p className="p-4"></p>

        <div id="general-rules" className="flex flex-col md:w-3/4">
          <div className="text-3xl text-center font-bold">General Rules</div>
          {rules.map((rule, index) => (
            <div
              className="flex text-sm md:text-lg mb-1 leading-relaxed"
              key={index}>
              <div>🌸</div>
              <p className="p-1"></p>
              <div>{rule}</div>
            </div>
          ))}
        </div>

        <p className="p-4"></p>

        <div id="how-it-works" className="flex flex-col md:w-3/4">
          <div className="text-3xl text-center font-bold">How it Works</div>
          {works.map((rule, index) => (
            <div
              className="flex text-sm md:text-lg mb-1 leading-relaxed"
              key={index}>
              <div>🔷</div>
              <p className="p-1"></p>
              <div>{rule}</div>
            </div>
          ))}
        </div>

        <p className="md:p-2"></p>

        <div className="overflow-x-auto scale-[0.6] md:scale-100  shadow-md sm:rounded-lg">
          <table className="text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-[#FFE1F9]">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Trophy Event
                </th>
                <th scope="col" className="py-3 px-6">
                  Wager
                </th>
                <th scope="col" className="py-3 px-6">
                  Medal Event
                </th>
                <th scope="col" className="py-3 px-6">
                  Wager
                </th>
                <th scope="col" className="py-3 px-6">
                  Batton Event
                </th>
                <th scope="col" className="py-3 px-6">
                  Game Points
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#FFE8FF] border-b hover:bg-[#FFE1F9]">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                  Control Cricket
                </th>
                <td className="py-4 px-6">50</td>
                <td className="py-4 px-6">Susegad Race</td>
                <td className="py-4 px-6">20</td>
                <td className="py-4 px-6">Fancy dress</td>
                <td className="py-4 px-6">30/20</td>
              </tr>
              <tr className="bg-[#FFE8FF] border-b hover:bg-[#FFE1F9]">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                  Football
                </th>
                <td className="py-4 px-6">60</td>
                <td className="py-4 px-6">Tie Breaker</td>
                <td className="py-4 px-6">30</td>
                <td className="py-4 px-6">Quiz</td>
                <td className="py-4 px-6">30/20</td>
              </tr>
              <tr className="bg-[#FFE8FF] border-b hover:bg-[#FFE1F9]">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                  Catch N Kill
                </th>
                <td className="py-4 px-6">30</td>
                <td className="py-4 px-6">Sprint</td>
                <td className="py-4 px-6">40</td>
                <td className="py-4 px-6">Garage Band</td>
                <td className="py-4 px-6">30/20</td>
              </tr>
              <tr className="bg-[#FFE8FF] border-b hover:bg-[#FFE1F9]">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                  Caterpillar race
                </th>
                <td className="py-4 px-6">20</td>
                <td className="py-4 px-6">Sumo Wrestling</td>
                <td className="py-4 px-6">50</td>
                <td className="py-4 px-6"></td>
                <td className="py-4 px-6"></td>
              </tr>
              <tr className="bg-[#FFE8FF] border-b hover:bg-[#FFE1F9]">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                  Cycle race
                </th>
                <td className="py-4 px-6">40</td>
                <td className="py-4 px-6">Tug of War </td>
                <td className="py-4 px-6">60</td>
                <td className="py-4 px-6"></td>
                <td className="py-4 px-6"></td>
              </tr>
              <tr className="bg-[#FFE8FF] border-b hover:bg-[#FFE1F9]">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                  Strong man circuit
                </th>
                <td className="py-4 px-6">70</td>
                <td className="py-4 px-6"></td>
                <td className="py-4 px-6"></td>
                <td className="py-4 px-6"></td>
                <td className="py-4 px-6"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="md:p-4"></p>

        <div id="games" className="flex flex-col w-3/4">
          <div className="text-3xl text-center font-bold">Games</div>
          <p className="p-2"></p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {games.map((game, index) => (
              <div
                key={index}
                className="flex flex-col bg-[#FFE1F9] max-w-lg max-h-fit p-4 rounded-lg text-lg">
                <div className="flex flex-col text-xl">
                  <div className="font-bold">
                    {game?.name} {game?.openCategory ? "(OPEN CATEGORY)" : ""}
                  </div>
                  <div>Type: {game?.type}</div>
                </div>
                <p className="p-2"></p>
                <div className="flex flex-col">
                  {game?.descripton.map((desc, index) => (
                    <div
                      key={index}
                      className="flex text-sm md:text-lg mb-1 leading-relaxed">
                      <div>🌟</div>
                      <p className="p-1"></p>
                      <div>{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="p-4"></p>
      </div>
    </>
  );
};

export default Home;
