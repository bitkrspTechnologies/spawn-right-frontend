// types.ts
export interface Team {
  _id: string;
  name: string;
  short_name: string;
  logo: string;
}

export interface Match {
  _id: string;
  tournament: {
    name: string;
    logo: string;
  };
  stage?: string;
  matchNumber: number;
  teams: {
    team: Team;
    totalPoints: number;
  }[];
  status: string;
}

export interface MatchCardProps {
  matchId: string;
  matchNumber: string;
  game: string;
  logo: string;
  teams: {
    name: string;
    score: number;
    logo: string;
  }[];
  result: string;
}