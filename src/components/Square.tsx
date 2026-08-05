import type { ECHLScheduleTeamType, ECHLTeamType } from "../types/types";
import { cn } from "../utils/cn";
import { ECHLstyleData } from "../data/shells";
import LogoSquare from "./LogoSquare";
interface DaySquareProps {
  team: ECHLTeamType;
  day: ECHLScheduleTeamType;
}

const DaySquare: React.FC<DaySquareProps> = (props: DaySquareProps) => {
  const { day, team } = props;
  const { date, game } = day;
  // const month = date.split("/")[1] ?? "";
  const dayOfMonth = parseInt(date.split("/")[2]) ?? -1;
  const style = ECHLstyleData[team];

  if (!game) {
    return (
      <div
        className={cn(
          "sm:text-md h-full rounded-lg border border-[#FCD104] text-sm shadow-lg",
          {
            [style.secondaryBorder]: true,
            [style.secondaryText]: true,
          },
        )}
      >
        <div className="mr-1 text-right font-semibold">{dayOfMonth}</div>
      </div>
    );
  }

  const opp = team === game.away ? game.home : game.away;

  return (
    <div
      className={cn(
        "sm:text-md flex flex-col items-center justify-between rounded-lg px-1 text-sm shadow-lg",
        {
          [style.awayBG]: game.away === team,
          [style.homeBG]: game.home === team,
          "text-white": game.home === team,
        },
      )}
    >
      <div className="mr-1 text-right font-semibold">{dayOfMonth}</div>

      <LogoSquare
        size="S"
        team={opp}
        className="h-12 w-12 object-contain sm:mx-2 sm:h-14 sm:w-14 lg:mx-4"
      />

      {game.home === team && (
        <div className="text-center font-bold">{game.away}</div>
      )}
      {game.away === team && (
        <div
          className={cn("text-center font-bold", {
            [ECHLstyleData[opp].primaryText]: true,
          })}
        >
          @{game.home}
        </div>
      )}
    </div>
  );
};

export default DaySquare;
