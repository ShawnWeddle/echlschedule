import type { ECHLTeamType } from "../types/types";
import haversine from "./haversine";
import { ECHLteamData } from "../data/teamInfo";
import { echlTeamsList } from "../data/teams";

export const findAllDistances = (lat: number, long: number) => {
  const distances: { team: ECHLTeamType, distance: number }[] = [];
  echlTeamsList.forEach((team) => {
    const { latitude, longitude } = ECHLteamData[team].coordinates;
    const distance = haversine(lat, long, latitude, longitude);
    distances.push({
      team,
      distance
    })
  });
  return distances.sort((a,b) => {
    return a.distance > b.distance ? 1 : -1;
  });
}