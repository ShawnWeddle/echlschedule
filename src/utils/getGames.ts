import type { ECHLTeamType, ECHLScheduleTeamType } from "../types/types";
import { ECHLfullSchedule } from "../data/games";

export const getGames = (team: ECHLTeamType, month?: number) => {
  const activeTeamGames: ECHLScheduleTeamType[] = ECHLfullSchedule.filter((day) => {
    if(month){
      const activeMonth = parseInt(day.date.split("/")[1]);
      return month === activeMonth;
    }
    return true;
  }).map((day) => {
    const activeGame = day.games.find((game) => {
      return (game.away === team || game.home === team)
    })
    return {
      date: day.date,
      game: activeGame
    }
  });
  return activeTeamGames;
}