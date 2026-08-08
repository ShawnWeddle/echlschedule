import type { ECHLTeamType } from "../types/types";
import { useState } from "react";
import { cn } from "../utils/cn";
import { echlTeamsList, monthList } from "../data/teams";
import { ECHLstyleData } from "../data/styles";
import TeamMonth from "./TeamMonth";

const MonthWrapper: React.FC = () => {
  const [activeTeam, setActiveTeam] = useState<ECHLTeamType>("FWK");
  const [activeMonth, setActiveMonth] = useState<number>(12);
  const teamList = echlTeamsList.map((team, index) => {
    const style = ECHLstyleData[team];
    return (
      <button
        key={index}
        className={cn("rounded border-2 p-1", {
          [style.primaryBackground]: true,
          [style.secondaryBorder]: true,
          [style.simpleText]: true,
        })}
        onClick={() => {
          setActiveTeam(team);
        }}
      >
        {team}
      </button>
    );
  });
  const monthSetter = () => {
    return (
      <div className="z-1 flex justify-center">
        <button
          disabled={activeMonth === 10}
          onClick={() => {
            setActiveMonth(activeMonth === 1 ? 12 : activeMonth - 1);
          }}
        >
          {"<"}
        </button>
        <span>{monthList[activeMonth - 1]}</span>
        <button
          disabled={activeMonth === 4}
          onClick={() => {
            setActiveMonth(activeMonth === 12 ? 1 : activeMonth + 1);
          }}
        >
          {">"}
        </button>
      </div>
    );
  };
  return (
    <div>
      <div className="grid grid-cols-8 gap-1 border p-1">{teamList}</div>
      <div>{monthSetter()}</div>
      <TeamMonth team={activeTeam} month={activeMonth} />
    </div>
  );
};

export default MonthWrapper;
