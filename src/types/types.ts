import { echlTeamsList } from "../data/teams";

export type ECHLTeamType = typeof echlTeamsList[number];

export type StyleBookType = {
  primary: string;
  secondary: string;
  primaryBackground: string;
  primaryText: string;
  secondaryBorder: string;
  secondaryText: string;
  simpleText: string;
};

export type StyleType = {
  primaryText: string;
  homeBG : string;
  awayBG: string;
  fullBG: string;
  secondaryBorder: string;
  secondaryText: string;
}

export type ECHLScheduleType = {
  date: string;
  games: {
    away: ECHLTeamType,
    home: ECHLTeamType,
  }[]
}

export type ECHLScheduleTeamType = {
  date: string;
  game: {
    away: ECHLTeamType,
    home: ECHLTeamType,
  } | undefined;
}

export type TeamInfoType = {
  coordinates: {
    latitude: number,
    longitude: number,
  },
  location: string,
  name: string,
}