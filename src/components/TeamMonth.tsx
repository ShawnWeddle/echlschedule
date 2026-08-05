import type { ECHLTeamType } from "../types/types";
import { cn } from "../utils/cn";
import { getGames } from "../utils/getGames";
import { monthList } from "../data/teams";
import { ECHLstyleData } from "../data/shells";
import { ECHLteamData } from "../data/teamInfo";
import DaySquare from "./Square";
import LogoSquare from "./LogoSquare";

interface TeamMonthProps {
  team: ECHLTeamType;
  month: number;
}

const TeamMonth: React.FC<TeamMonthProps> = (props: TeamMonthProps) => {
  const { team, month } = props;
  const games = getGames(team, month);
  const gameList = games.map((gameB, index) => {
    return <DaySquare key={index} team={team} day={gameB} />;
  });
  const firstDayOfMonth = new Date(games[0].date).getDay();
  const style = ECHLstyleData[team];
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-around bg-radial from-[#808080]",
        {
          [style.fullBG]: true,
        },
      )}
    >
      <div className="z-1 text-4xl font-bold text-white uppercase">
        {ECHLteamData[team].location}
      </div>

      <div className="z-1 text-4xl font-bold text-white">
        {monthList[month - 1]}
      </div>

      <div className="relative z-1 mx-1 grid grid-cols-7 gap-0.5">
        <LogoSquare
          size="L"
          team={team}
          className="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 bg-contain opacity-50"
        />

        <div
          className={cn("text-center font-bold", {
            [style.secondaryText]: true,
          })}
        >
          SUN
        </div>
        <div
          className={cn("text-center font-bold", {
            [style.secondaryText]: true,
          })}
        >
          MON
        </div>
        <div
          className={cn("text-center font-bold", {
            [style.secondaryText]: true,
          })}
        >
          TUE
        </div>
        <div
          className={cn("text-center font-bold", {
            [style.secondaryText]: true,
          })}
        >
          WED
        </div>
        <div
          className={cn("text-center font-bold", {
            [style.secondaryText]: true,
          })}
        >
          THU
        </div>
        <div
          className={cn("text-center font-bold", {
            [style.secondaryText]: true,
          })}
        >
          FRI
        </div>
        <div
          className={cn("text-center font-bold", {
            [style.secondaryText]: true,
          })}
        >
          SAT
        </div>
        <div
          className={cn({
            hidden: firstDayOfMonth === 0,
            "col-span-1": firstDayOfMonth === 1,
            "col-span-2": firstDayOfMonth === 2,
            "col-span-3": firstDayOfMonth === 3,
            "col-span-4": firstDayOfMonth === 4,
            "col-span-5": firstDayOfMonth === 5,
            "col-span-6": firstDayOfMonth === 6,
          })}
        ></div>
        {gameList}
      </div>
      <div></div>
    </div>
  );
};

export default TeamMonth;

/**
 * 
 *       <div className="grid grid-cols-7">
        <div>SUN</div>
        <div>MON</div>
        <div>TUE</div>
        <div>WED</div>
        <div>THU</div>
        <div>FRI</div>
        <div>SAT</div>
      </div>
 */
